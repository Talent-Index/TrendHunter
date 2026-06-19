// --- Initialize Page ---
    document.addEventListener("DOMContentLoaded", async () => {
      // Load registered trends from local storage
      const demoToggle = document.getElementById("mockWeb3Toggle");
      if (demoToggle) demoToggle.checked = isMockMode;
      const registryInput = document.getElementById("registryContractAddress");
      if (registryInput) {
        registryInput.value = localStorage.getItem("trend_hunter_registry_contract") || registryInput.value;
        registryInput.addEventListener("input", () => {
          localStorage.setItem("trend_hunter_registry_contract", registryInput.value.trim());
          validateRegisterButtonState();
        });
      }

      const stored = localStorage.getItem(REGISTRY_STORAGE_KEY) || localStorage.getItem(LEGACY_REGISTRY_STORAGE_KEY);
      if (stored) {
        registeredTrends = JSON.parse(stored);
      } else {
        // Pre-populate with one past entry for high-fidelity look
        registeredTrends = [
          {
            trendId: "mpesa-ledger-000",
            title: "M-Pesa API transaction cost updates",
            category: "Entrepreneurship",
            score: 91,
            hash: "0x8fa838df294fa4d173004b901a1d13f9c6d3de888879555cf498670df0a4cfc7",
            timestamp: "2026-06-19 14:32:00",
            status: "Success",
            explorerUrl: "https://testnet.snowtrace.io/tx/0x8fa838df294fa4d173004b901a1d13f9c6d3de888879555cf498670df0a4cfc7"
          }
        ];
        localStorage.setItem(REGISTRY_STORAGE_KEY, JSON.stringify(registeredTrends));
      }

      // Update total claims count in UI
      updateRegistryUI();

      // Setup Greeting
      setupGreeting();

      // Render feeds
      renderDashboardFeed();
      renderTrendingStrip();
      renderLiveTrendsGrid();

      // Set active trend to first element initially
      setActiveTrendItem(getTrendDataset()[0]);

      // Upgrade from local fallback to FastAPI data when available.
      await loadBackendTrends();

      // Handle query params or initial view settings
      navigate('dashboard');
    });

    function setupGreeting() {
      const greetingEl = document.getElementById("dashboardGreeting");
      const hour = new Date().getHours();
      let greetingText = "Good evening — here are your priority trends";
      if (hour < 12) {
        greetingText = "Good morning — here are your priority trends";
      } else if (hour < 18) {
        greetingText = "Good afternoon — here are your priority trends";
      }
      greetingEl.textContent = greetingText;
    }

    // --- Navigation System ---
    function navigate(pageId) {
      // Hide all pages
      document.querySelectorAll(".tab-page").forEach(page => {
        page.classList.remove("active");
      });
      // Deactivate all sidebar items
      document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
      });

      // Show requested page
      const pageNode = document.getElementById(`page-${pageId}`);
      if (pageNode) {
        pageNode.classList.add("active");
      }
      // Highlight sidebar
      const navNode = document.getElementById(`nav-${pageId}`);
      if (navNode) {
        navNode.classList.add("active");
      }

      window.scrollTo(0, 0);
    }
