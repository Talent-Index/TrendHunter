// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract TrendRegistry {
    struct Trend {
        string trendId;
        bytes32 trendHash;
        string title;
        string category;
        uint256 firstSeen;
        uint256 score;
        string briefHash;
        bool verified;
        address contributor;
    }

    address public owner;
    uint256 public trendCount;

    mapping(string => Trend) private trends;
    mapping(string => bool) private trendExists;
    mapping(address => uint256) public contributorReputation;
    string[] private trendIds;

    event TrendRegistered(
        string indexed trendId,
        bytes32 indexed trendHash,
        string title,
        string category,
        uint256 score,
        string briefHash,
        address indexed contributor
    );
    event TrendScoreUpdated(string indexed trendId, uint256 oldScore, uint256 newScore);
    event ContentBriefAttached(string indexed trendId, string briefHash);
    event TrendVerified(string indexed trendId, address indexed verifier);

    error EmptyTrendId();
    error EmptyTitle();
    error TrendAlreadyRegistered(string trendId);
    error TrendNotFound(string trendId);
    error NotOwner();

    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerTrend(
        string calldata trendId,
        bytes32 trendHash,
        string calldata title,
        string calldata category,
        uint256 score,
        string calldata briefHash
    ) external {
        if (bytes(trendId).length == 0) revert EmptyTrendId();
        if (bytes(title).length == 0) revert EmptyTitle();
        if (trendExists[trendId]) revert TrendAlreadyRegistered(trendId);

        trends[trendId] = Trend({
            trendId: trendId,
            trendHash: trendHash,
            title: title,
            category: category,
            firstSeen: block.timestamp,
            score: score,
            briefHash: briefHash,
            verified: false,
            contributor: msg.sender
        });

        trendExists[trendId] = true;
        trendIds.push(trendId);
        trendCount += 1;
        contributorReputation[msg.sender] += 1;

        emit TrendRegistered(trendId, trendHash, title, category, score, briefHash, msg.sender);
    }

    function updateTrendScore(string calldata trendId, uint256 newScore) external {
        if (!trendExists[trendId]) revert TrendNotFound(trendId);

        uint256 oldScore = trends[trendId].score;
        trends[trendId].score = newScore;

        emit TrendScoreUpdated(trendId, oldScore, newScore);
    }

    function attachContentBrief(string calldata trendId, string calldata briefHash) external {
        if (!trendExists[trendId]) revert TrendNotFound(trendId);

        trends[trendId].briefHash = briefHash;
        contributorReputation[msg.sender] += 1;

        emit ContentBriefAttached(trendId, briefHash);
    }

    function verifyTrend(string calldata trendId) external onlyOwner {
        if (!trendExists[trendId]) revert TrendNotFound(trendId);

        trends[trendId].verified = true;
        contributorReputation[trends[trendId].contributor] += 3;

        emit TrendVerified(trendId, msg.sender);
    }

    function getTrend(string calldata trendId) external view returns (Trend memory) {
        if (!trendExists[trendId]) revert TrendNotFound(trendId);
        return trends[trendId];
    }

    function getTrendIds() external view returns (string[] memory) {
        return trendIds;
    }
}
