# Trend Hunter

Trend Hunter is an AI-powered real-time trend-to-content engine that converts emerging social trends into ready-to-shoot entrepreneurial video scripts for Kenyan founders.

## Problem

Kenyan creator teams often miss viral windows because they find trends too late, lack local context, and still have to decide the angle, hook, and script manually. The gap is not just discovery. It is turning a signal into a publishable short-form video idea inside the 24-72 hour window.

## Target Users

- Kenyan short-form creators on TikTok, Reels, and YouTube Shorts covering entrepreneurship, money, side hustles, and founder culture.
- Early-stage startup marketing teams in East Africa.
- Media pages covering the African startup ecosystem.

## V1 Features

1. **Real-Time Trend Feed**
   Aggregates social and Kenyan news signals into an emerging trend queue with velocity, category, and lifespan estimates.

2. **AI Content Brief Generator**
   Turns a selected trend into why it is happening, why it matters for Kenyan founders, a hook, a 30-60 second script, and a remix template.

3. **Avalanche Trend Registry**
   Registers verified trend events on Avalanche Fuji with a trend hash, timestamp, category, score snapshot, brief hash, and contributor.

## Avalanche Integration

Avalanche C-Chain is the verifiable Trend Registry layer. The smart contract records:

- `trendHash`
- `firstSeen`
- `category`
- `score`
- `briefHash`
- `contributor`

This creates transparent proof of who detected a trend first, prevents duplicate trend claims, and sets up a future contributor reputation or USDC rewards layer.

The static MVP uses an injected Core Wallet compatible provider for the Stage 1 demo. The product direction is an embedded wallet flow so non-crypto-native creators do not need to manage seed phrases or wallet setup.

## Stage 1 Demo Flow

1. Open the dashboard and view the **Emerging Trends** feed.
2. Select the trend: `AI agent replacing interns`.
3. Click **Generate Content Brief**.
4. Review the founder-specific hook, script, local relevance metrics, and remix template.
5. Connect Core Wallet on Avalanche Fuji.
6. Paste the deployed `TrendRegistry` contract address.
7. Click **Register on Avalanche**.
8. The transaction log shows the Fuji Explorer transaction link.

Success means a user can move from trend discovery to publishable script to on-chain verified trend record.

## Project Files

- `contracts/YourContract.sol` contains the `TrendRegistry` Solidity contract.
- `test/YourContract.test.js` covers registration, duplicate prevention, score updates, brief attachment, verification, trend hashes, and contributor reputation.
- `frontend/index.html` is the mobile-first static demo dashboard.
- `scripts/deploy.js` deploys `TrendRegistry`.

## Run Locally

Install dependencies:

```bash
npm install
```

Compile:

```bash
npm run compile
```

Test:

```bash
npm test
```

Open the frontend:

```bash
xdg-open frontend/index.html
```

## Deploy To Fuji

Create `.env` from `.env.example` and add a funded Fuji private key:

```bash
cp .env.example .env
```

Deploy:

```bash
npm run deploy:fuji
```

Paste the deployed contract address into the frontend, connect Core Wallet on Fuji, generate the brief, then register the trend on Avalanche.
