// --- Global State ---
    const FUJI_CHAIN_ID = 43113;
    const contractAbi = [
      "function registerTrend(string trendId, bytes32 trendHash, string title, string category, uint256 score, string briefHash) external",
      "function contributorReputation(address) public view returns (uint256)",
      "function getTrend(string trendId) external view returns (tuple(string trendId, bytes32 trendHash, string title, string category, uint256 firstSeen, uint256 score, string briefHash, bool verified, address contributor))"
    ];

    let rawProvider = null;
    let signer = null;
    let walletConnected = false;
    let isMockMode = false;
    let activeTrend = null;
    let activeCarouselIndex = 0;
    let savedTrends = new Set();
    let currentScriptVariation = 1; // 1 or 2
    let liveTrends = [];
    const API_BASE = localStorage.getItem("trend_hunter_api_base") || "http://localhost:8000";
    const REGISTRY_STORAGE_KEY = "trend_hunter_registry";
    const LEGACY_REGISTRY_STORAGE_KEY = "trendjack_registry";

// --- On-Chain Registry Log State ---
let registeredTrends = [];
