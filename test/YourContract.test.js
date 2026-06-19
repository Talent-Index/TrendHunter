const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TrendRegistry", function () {
  let registry;
  let owner;
  let contributor;
  let analyst;

  const trend = {
    trendId: "x-ai-interns-ke-001",
    title: "Founder posts AI agent replacing interns",
    category: "Founder Culture",
    score: 86,
    briefHash: "ipfs://bafy-ready-to-shoot-brief",
  };

  trend.trendHash = ethers.id(`${trend.title}|${trend.category}|${trend.score}`);

  beforeEach(async function () {
    [owner, contributor, analyst] = await ethers.getSigners();

    const Registry = await ethers.getContractFactory("TrendRegistry");
    registry = await Registry.deploy();
    await registry.waitForDeployment();
  });

  async function registerSampleTrend() {
    return registry.connect(contributor).registerTrend(
      trend.trendId,
      trend.trendHash,
      trend.title,
      trend.category,
      trend.score,
      trend.briefHash
    );
  }

  it("registers a trend discovery with its first-seen timestamp and contributor", async function () {
    await expect(registerSampleTrend())
      .to.emit(registry, "TrendRegistered")
      .withArgs(
        trend.trendId,
        trend.trendHash,
        trend.title,
        trend.category,
        trend.score,
        trend.briefHash,
        contributor.address
      );

    const stored = await registry.getTrend(trend.trendId);
    expect(stored.trendId).to.equal(trend.trendId);
    expect(stored.trendHash).to.equal(trend.trendHash);
    expect(stored.title).to.equal(trend.title);
    expect(stored.category).to.equal(trend.category);
    expect(stored.score).to.equal(trend.score);
    expect(stored.briefHash).to.equal(trend.briefHash);
    expect(stored.verified).to.equal(false);
    expect(stored.contributor).to.equal(contributor.address);
    expect(stored.firstSeen).to.be.greaterThan(0);
    expect(await registry.trendCount()).to.equal(1);
    expect(await registry.contributorReputation(contributor.address)).to.equal(1);
    expect(await registry.getTrendIds()).to.deep.equal([trend.trendId]);
  });

  it("prevents duplicate trend reports", async function () {
    await registerSampleTrend();

    await expect(registerSampleTrend())
      .to.be.revertedWithCustomError(registry, "TrendAlreadyRegistered")
      .withArgs(trend.trendId);
  });

  it("updates score as engagement velocity changes", async function () {
    await registerSampleTrend();

    await expect(registry.connect(analyst).updateTrendScore(trend.trendId, 94))
      .to.emit(registry, "TrendScoreUpdated")
      .withArgs(trend.trendId, trend.score, 94);

    const stored = await registry.getTrend(trend.trendId);
    expect(stored.score).to.equal(94);
  });

  it("attaches a new content brief hash and rewards the contributor", async function () {
    await registerSampleTrend();

    await expect(
      registry.connect(analyst).attachContentBrief(trend.trendId, "ipfs://bafy-updated-brief")
    )
      .to.emit(registry, "ContentBriefAttached")
      .withArgs(trend.trendId, "ipfs://bafy-updated-brief");

    const stored = await registry.getTrend(trend.trendId);
    expect(stored.briefHash).to.equal("ipfs://bafy-updated-brief");
    expect(await registry.contributorReputation(analyst.address)).to.equal(1);
  });

  it("lets only the owner verify trends", async function () {
    await registerSampleTrend();

    await expect(registry.connect(analyst).verifyTrend(trend.trendId))
      .to.be.revertedWithCustomError(registry, "NotOwner");

    await expect(registry.verifyTrend(trend.trendId))
      .to.emit(registry, "TrendVerified")
      .withArgs(trend.trendId, owner.address);

    const stored = await registry.getTrend(trend.trendId);
    expect(stored.verified).to.equal(true);
    expect(await registry.contributorReputation(contributor.address)).to.equal(4);
  });
});
