// --- Global AI Assistant Logic ---
    function toggleChatWindow() {
      const win = document.getElementById("aiChatWindow");
      win.style.display = win.style.display === "flex" ? "none" : "flex";
      
      // Auto scroll to bottom
      const msgs = document.getElementById("chatMessages");
      msgs.scrollTop = msgs.scrollHeight;
    }

    function sendChatMessage() {
      const input = document.getElementById("chatInput");
      const query = input.value.trim();
      if (!query) return;

      appendChatMessage(query, "user");
      input.value = "";

      // Process query responses
      logAssistantTypingResponse(query);
    }

    function triggerPreset(presetText) {
      appendChatMessage(presetText, "user");
      logAssistantTypingResponse(presetText);
    }

    function appendChatMessage(text, sender) {
      const msgs = document.getElementById("chatMessages");
      const div = document.createElement("div");
      div.className = `chat-msg ${sender}`;
      div.textContent = text;
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
    }

    function logAssistantTypingResponse(query) {
      const msgs = document.getElementById("chatMessages");
      
      // Add loading slide
      const loadingDiv = document.createElement("div");
      loadingDiv.className = "chat-msg assistant";
      loadingDiv.innerHTML = `<span class="spinner-loader" style="width:10px; height:10px"></span> AI is analyzing...`;
      msgs.appendChild(loadingDiv);
      msgs.scrollTop = msgs.scrollHeight;

      // Select matching simulated responses based on active trend
      let response = "I'm analyzing your request. Let me customize the content for your audience...";

      const trend = activeTrend || mockTrends[0];

      if (query.includes("Why is this trending?")) {
        response = `"${trend.title}" is trending because of ${trend.whyTrending} This is triggering high engagement triggers on ${trend.platforms.join(", ").toUpperCase()}.`;
      } else if (query.includes("Generate better hook")) {
        response = `Here is an alternative high-conversion hook for "${trend.title}":\n\n"Nairobi startup founders are losing thousands in profits because they ignore this basic shift. Let me explain..."`;
      } else if (query.includes("Shorten script")) {
        response = `Here is a shortened 20-second version of the script:\n\n"Stop wasting money on heavy Shopify systems. Nairobi shop owners are using WhatsApp + Till numbers to automate 100% of their sales. Drop a comment for our setup guide!"`;
      } else if (query.includes("Make it more Kenyan relevant")) {
        if (trend.trendId === "x-ai-interns-ke-001") {
          response = `Kuzana Slang Remix 🇰🇪:\n\n"Wasee, early-stage founders wanamada manual work na AI agents za 20 bob! Kama wewe ni intern na unashinda tu ukicopy-paste ma-spreadsheets Kilimani, AI inakuja kukura! Amka na uanze kujua prompting ndio startup ikuandike kufanya real sales calls. Usikubali kuachwa nyuma."`;
        } else if (trend.trendId === "sme-whatsapp-ke-002") {
          response = `Kuzana Slang Remix 🇰🇪:\n\n"Kwanini ulipe designer 50k ya website na wasee wanatafuta bidhaa zako WhatsApp pekee? Kamukunji CBD sellers wameeka catalogs zao WhatsApp, waka-link na Till. Unalipa bob mbili kwa data na biashara inafanyika ukiwa umelala. Acha kucheza!"`;
        } else if (trend.trendId === "founder-salaries-ke-003") {
          response = `Kuzana Slang Remix 🇰🇪:\n\n"Unadhani ma-tech founders wanateseka na ma-Prado Nairobi? Boss, wengi wanalipa rent Kilimani na salary ya 70k bob! Hii biashara sio ya shoo. Extenda runway yako, lipa intern vizuri na utajenga biashara ya ukweli. Wacha kufake lifestyle."`;
        } else {
          response = `Kuzana Slang Remix 🇰🇪:\n\n"Safaricom wameongeza pricing ya M-Pesa API yetu. Kama ulikua unachaji 20 bob micropayments, margins zako zimeisha! Pivot haraka uunde wallet model ambapo wasee wanadeposit mara moja. Usipigane na Safaricom, jipange karibu nao."`;
        }
      } else if (query.includes("Turn script into Twitter thread")) {
        response = `Here is your X/Twitter Thread format 🧵:\n\n1/ Nairobi startup founders are shifting priorities away from e-commerce websites. Here's why WhatsApp Catalog is winning in 2026. 👇\n\n2/ Data packages are expensive. The average customer won't wait 6 seconds for a heavy website to load. Moving your storefront straight to WhatsApp chat increases retention by 70%.\n\n3/ Automate payment triggers by linking WhatsApp catalogs directly to M-Pesa Till numbers. Click, Chat, Pay, Confirm.`;
      } else {
        // Generic response
        response = `Interesting query about "${trend.title}". In Nairobi's tech scene, we recommend optimizing your funnel by using clean, mobile-first pages, leveraging M-Pesa's speed, and speaking directly to founder pain points. Let me know if you'd like a custom script segment for that!`;
      }

      setTimeout(() => {
        // Remove loading
        msgs.removeChild(loadingDiv);

        // Append real response with a simulated typing/streaming effect
        const resDiv = document.createElement("div");
        resDiv.className = "chat-msg assistant";
        msgs.appendChild(resDiv);

        let i = 0;
        function typeWriter() {
          if (i < response.length) {
            resDiv.innerHTML += response.charAt(i);
            i++;
            msgs.scrollTop = msgs.scrollHeight;
            setTimeout(typeWriter, 10);
          }
        }
        typeWriter();
      }, 1000);
    }
