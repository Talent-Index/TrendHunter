// --- Mock Database ---
    const mockTrends = [
      {
        trendId: "x-ai-interns-ke-001",
        title: "Founder posts AI agent replacing interns",
        category: "Founder Culture",
        score: 86,
        lifespan: "3-5 days",
        velocity: "+140% in last 12h",
        stage: "Growing",
        platforms: ["x", "reddit", "news"],
        shortSummary: "A startup founder shared a screen recording of an AI agent automating cold outreach, data entry, and PDF parsing, claiming it replaces two interns.",
        firstSeen: "10 hours ago",
        relevance: 94,
        happeningText: "A startup founder posted a workflow showing an AI agent replacing repetitive intern tasks. The clip gained 300k views in 8 hours and triggered debate around entry-level jobs.",
        whyTrending: "The rising accessibility of low-code AI agents matches local youth unemployment anxiety and startup cost constraints.",
        emotionalTrigger: "Fear of job loss for grads vs excitement of developer leverage for founders.",
        socialTrigger: "Anxiety around junior dev jobs in Nairobi and career pathways.",
        kuzanaAngle: "Don't hire interns to do boring copy-paste work that AI can do in seconds. Hire them to talk to your customers. If your startup is using interns as manual databases, you are failing them and your business. Automate the boring, humanize the rest.",
        previewHtml: `
          <div class="mock-tweet">
            <div class="tweet-header">
              <div class="tweet-avatar">MK</div>
              <div class="tweet-userinfo">
                <span class="tweet-name">Muga Kamau <svg class="tweet-verified-svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></span>
                <span class="tweet-handle">@mugakamau · 8h</span>
              </div>
            </div>
            <div class="tweet-body">
              I just deployed a custom cursor agent to handle all our CRM data-entry and LinkedIn scraping. Cost: $20/mo. Saved: 40 hours of intern work. This is the new baseline for startups in Nairobi. Adapt or get left behind.
            </div>
            <div class="tweet-footer">
              <span>💬 112</span>
              <span>🔄 480</span>
              <span>❤️ 2.1k</span>
            </div>
          </div>
        `,
        carouselSlides: [
          {
            type: "Tweet",
            title: "Muga Kamau's original post",
            content: `
              <div class="mock-tweet" style="background:rgba(255,255,255,0.01)">
                <div class="tweet-header">
                  <div class="tweet-avatar">MK</div>
                  <div class="tweet-userinfo">
                    <span class="tweet-name">Muga Kamau <svg class="tweet-verified-svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></span>
                    <span class="tweet-handle">@mugakamau</span>
                  </div>
                </div>
                <div class="tweet-body" style="font-size:0.9rem">
                  I just deployed a custom cursor agent to handle all our CRM data-entry and LinkedIn scraping. Cost: $20/mo. Saved: 40 hours of intern work. This is the new baseline for startups in Nairobi. Adapt or get left behind.
                </div>
                <div class="tweet-footer">
                  <span>💬 112 Replies</span>
                  <span>🔄 480 Retweets</span>
                  <span>❤️ 2.1k Likes</span>
                </div>
              </div>
            `
          },
          {
            type: "Reddit Thread",
            title: "r/Kenya debate on tech entry-level jobs",
            content: `
              <div class="mock-reddit">
                <div class="reddit-header">
                  <div class="reddit-logo">r</div>
                  <span>r/Kenya · Posted by u/kilimani_dev 5h ago</span>
                </div>
                <div class="reddit-body">Is it even worth applying for internships in Nairobi now?</div>
                <div class="reddit-post-preview">
                  "I was rejected from three tech startups this month. One of them told me they are freezing internship intakes because their core devs automated manual scraping and data pipelines using LLMs. How do we get experience if they automate the entry level?"
                </div>
                <div class="reddit-footer">
                  <span>🔺 189 Upvotes</span>
                  <span>💬 342 Comments</span>
                </div>
              </div>
            `
          },
          {
            type: "TikTok",
            title: "Short clip: POV intern replacement",
            content: `
              <div class="mock-tiktok">
                <div class="tiktok-cover">
                  <div class="tiktok-cover-pattern" style="background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80')"></div>
                  <div class="tiktok-play-btn">
                    <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                  <div class="tiktok-creator">@nairobibyte</div>
                  <div class="tiktok-caption">Interns watching their boss install an AI agent for $20... 💀 #NairobiTech #CareerAdvice</div>
                  <div class="tiktok-stats">
                    <div class="tiktok-stat-node"><svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>45.2k</div>
                  </div>
                </div>
              </div>
            `
          }
        ],
        hooks: [
          "Stop hiring interns to copy-paste spreadsheet data. Do this instead.",
          "Nairobi startups are replacing interns with $20 AI agents. Let's talk about the truth.",
          "If your internship doesn't teach you how to prompt AI, you are in deep trouble.",
          "How to build a 10-person startup with only 2 people in Kenya.",
          "The one skill that will save Kenyan graduates from AI replacement in 2026."
        ],
        script: {
          v1: `[Hook] Nairobi founders are replacing interns with twenty-dollar AI agents. And honestly? They should.
[Context] A viral tweet just showed a Nairobi startup automating all CRM entry and scraping. Interns are terrified, thinking their careers are over.
[Insight] But here is the secret. If an intern's daily work was just copying data, it was a bad internship anyway. AI is freeing up young talent.
[Takeaway] As a founder, don't use interns as manual scrapers. Automate that with AI. Let your interns run sales calls, talk to customers, and do real work.
[CTA] Comment 'LEVERAGE' below and I'll send you our team's internal AI automation playbook.`,
          v2: `[Hook] The era of the copy-paste internship is dead in Kenya. AI killed it this week.
[Context] There's a massive debate online because Nairobi founders are sharing workflows of AI agents doing 40 hours of data entries.
[Insight] Don't panic. If an LLM can replace your entire job, it means you were being underutilized.
[Takeaway] Startups that win in Nairobi won't be the ones that fire people. It will be the ones who train interns to prompt agents, scale output, and build actual products.
[CTA] Drop a comment with 'UPGRADE' and I'll send you a list of 5 AI tools every Nairobi grad needs to master.`
        },
        remix: {
          format: "AI replacing data entry",
          interpretation: "Shift interns to customer sales",
          lesson: "Focus on communication skills over manual labor"
        }
      },
      {
        trendId: "sme-whatsapp-ke-002",
        title: "Kenyan SMEs selling on WhatsApp Catalog APIs",
        category: "Business",
        score: 94,
        lifespan: "1-2 weeks",
        velocity: "+320% this week",
        stage: "Peak",
        platforms: ["tiktok", "news", "x"],
        shortSummary: "SMEs in Nairobi and Mombasa are bypassing standard e-commerce websites entirely, using WhatsApp Business automation and catalog APIs linked with M-Pesa Till numbers.",
        firstSeen: "2 days ago",
        relevance: 98,
        happeningText: "SMEs in Nairobi and Mombasa are bypassing standard e-commerce websites entirely, using WhatsApp Business automation and catalog APIs linked with M-Pesa Till numbers.",
        whyTrending: "Mobile internet users in Kenya prioritize WhatsApp data bundles. WhatsApp storefronts reduce friction to zero.",
        emotionalTrigger: "Ease, empowerment, and frustration with heavy website costs.",
        socialTrigger: "Shareable success stories of micro-businesses doubling sales.",
        kuzanaAngle: "Stop wasting 50,000 KES building an e-commerce website that no one will visit because of loading times and data bundles. Put your storefront where your customers live: WhatsApp. Build a catalog, link it to a Till, and automate the chat.",
        previewHtml: `
          <div class="mock-tiktok">
            <div class="tiktok-cover">
              <div class="tiktok-cover-pattern" style="background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=400&q=80')"></div>
              <div class="tiktok-play-btn">
                <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div class="tiktok-creator">@wanjiku_hustles</div>
              <div class="tiktok-caption">How I automated my shop to run 24/7 on WhatsApp! 🤫 #NairobiBusiness #Mpesa</div>
              <div class="tiktok-stats">
                <div class="tiktok-stat-node"><svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>12.8k</div>
              </div>
            </div>
          </div>
        `,
        carouselSlides: [
          {
            type: "TikTok",
            title: "Wanjiku's Business Automation Video",
            content: `
              <div class="mock-tiktok">
                <div class="tiktok-cover">
                  <div class="tiktok-cover-pattern" style="background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=400&q=80')"></div>
                  <div class="tiktok-play-btn">
                    <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                  <div class="tiktok-creator">@wanjiku_hustles</div>
                  <div class="tiktok-caption">How I automated my shop to run 24/7 on WhatsApp! 🤫 #NairobiBusiness #Mpesa</div>
                  <div class="tiktok-stats">
                    <div class="tiktok-stat-node"><svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>12.8k</div>
                  </div>
                </div>
              </div>
            `
          },
          {
            type: "News Headline",
            title: "Techweez Feature Article",
            content: `
              <div class="mock-news">
                <span class="news-tag">E-Commerce</span>
                <h4 class="news-title">Why Nairobi CBD Wholesalers are Bypassing Shopify for WhatsApp Catalogs</h4>
                <div class="news-source">
                  <span>Techweez News</span>
                  <span>2 days ago</span>
                </div>
              </div>
            `
          }
        ],
        hooks: [
          "Stop building Shopify websites for Kenyan customers. Do this instead.",
          "How a Kamukunji shop owner makes 100k a week without a website.",
          "Why WhatsApp Business is crushing standard e-commerce in Nairobi.",
          "The secret to 24/7 sales on WhatsApp using M-Pesa integration.",
          "How to save 50k on website maintenance and sell directly in chat."
        ],
        script: {
          v1: `[Hook] If you are spending fifty thousand shillings to build a website for your Kenyan business, you are throwing money away.
[Context] The smart business owners in Kamukunji and Nairobi CBD aren't using e-commerce websites. They are building directly on WhatsApp Business.
[Insight] Why? Because your customer doesn't want to load a heavy website. They have WhatsApp data bundles. WhatsApp catalog plus M-Pesa is zero-friction.
[Takeaway] Put your storefront where your customer is already chatting. Set up a WhatsApp catalog, automate responses, and add your M-Pesa Till.
[CTA] Want to see how to connect M-Pesa to WhatsApp? Drop a comment below and I'll send you a step-by-step guide.`,
          v2: `[Hook] You don't need a fancy developer to start selling online in Kenya. All you need is WhatsApp.
[Context] Kamukunji entrepreneurs are reporting 2x sales conversions by moving catalogs from websites to WhatsApp Business APIs.
[Insight] It reduces purchase steps from six down to two. Click link, send pre-filled message, pay Till. Done.
[Takeaway] Run ads that open a WhatsApp chat directly, instead of forcing a page redirect.
[CTA] Comment 'CATALOG' and I will send you the API connection documentation.`
        },
        remix: {
          format: "Standard e-commerce website",
          interpretation: "WhatsApp catalog + M-Pesa",
          lesson: "Zero friction customer experience beats fancy websites"
        }
      },
      {
        trendId: "founder-salaries-ke-003",
        title: "Founder salary transparency posts",
        category: "Money",
        score: 78,
        lifespan: "1-2 days",
        velocity: "+85% today",
        stage: "Peak",
        platforms: ["x", "reddit"],
        shortSummary: "A trending debate where early-stage founders in Nairobi are sharing their actual monthly salaries, revealing the lean realities of startup bootstrapping.",
        firstSeen: "18 hours ago",
        relevance: 89,
        happeningText: "A trending debate where early-stage founders in Nairobi are sharing their actual monthly salaries, revealing the lean realities of startup bootstrapping.",
        whyTrending: "Demystifies the glamorous tech startup myth, highlighting the real struggles of building in Nairobi.",
        emotionalTrigger: "Empathy, validation, and relief from impostor syndrome.",
        socialTrigger: "Community support and alignment on VC compensation expectations.",
        kuzanaAngle: "There's no shame in paying yourself 70,000 KES as a founder. In fact, if you pay yourself too much early on, you're killing your company's runway. Live lean, hire great talent, and win long-term.",
        previewHtml: `
          <div class="mock-reddit">
            <div class="reddit-header">
              <div class="reddit-logo">r</div>
              <span>r/Kenya · Posted by u/nairobi_bootstrapper 18h ago</span>
            </div>
            <div class="reddit-body">Surviving on 70k KES/mo as pre-seed tech founder in Kilimani</div>
            <div class="reddit-post-preview">
              "Real talk: I'm paying myself 70k. My rent is half of that. How are other founders surviving before PMF? We shouldn't raise VC just to buy high-end cars..."
            </div>
            <div class="reddit-footer">
              <span>🔺 425 Upvotes</span>
              <span>💬 112 Comments</span>
            </div>
          </div>
        `,
        carouselSlides: [
          {
            type: "Reddit",
            title: "Reddit Thread",
            content: `
              <div class="mock-reddit">
                <div class="reddit-header">
                  <div class="reddit-logo">r</div>
                  <span>r/Kenya · Posted by u/nairobi_bootstrapper 18h ago</span>
                </div>
                <div class="reddit-body">Surviving on 70k KES/mo as pre-seed tech founder in Kilimani</div>
                <div class="reddit-post-preview">
                  "Real talk: I'm paying myself 70k. My rent is half of that. How are other founders surviving before PMF? We shouldn't raise VC just to buy high-end cars..."
                </div>
                <div class="reddit-footer">
                  <span>🔺 425 Upvotes</span>
                  <span>💬 112 Comments</span>
                </div>
              </div>
            `
          }
        ],
        hooks: [
          "The real salary of a Nairobi startup founder will shock you.",
          "Why your lead developer should be earning more than you.",
          "How to survive on a bootstrapper's salary in Nairobi.",
          "The pre-seed salary trap: how much should you pay yourself?",
          "Nairobi founders are revealing their salaries, and it's a reality check."
        ],
        script: {
          v1: `[Hook] The glamorous tech startup founder you see on LinkedIn? They might be earning less than their junior designer.
[Context] There is a huge debate online right now with Nairobi startup founders revealing their real salaries. Many are surviving on seventy thousand KES.
[Insight] People think fundraising means you're rich. But pre-seed money is for product and runway, not for luxury living in Kilimani.
[Takeaway] Pay yourself just enough to survive. Every shilling you save extends your startup's life. The real payout comes when you scale.
[CTA] What is a reasonable salary for a pre-seed founder in Kenya? Tell me your number in the comments!`,
          v2: `[Hook] Stop bootstrap-shaming founders who live lean in Nairobi.
[Context] Recent discussions show pre-seed founders paying themselves less than market rate to extend their business runway.
[Insight] Capital efficiency is the ultimate survival tool. A founder who takes a massive salary before PMF is raising warning flags for investors.
[Takeaway] Align incentives. Focus on equity over short-term salary.
[CTA] Share this with a founder who needs to hear it.`
        },
        remix: {
          format: "VC funding illusion",
          interpretation: "Bootstrapping salary reality",
          lesson: "Capital efficiency beats lifestyle signaling"
        }
      },
      {
        trendId: "mpesa-api-costs-ke-004",
        title: "M-Pesa API transaction cost updates",
        category: "Entrepreneurship",
        score: 91,
        lifespan: "5-7 days",
        velocity: "+205% in 24h",
        stage: "Emerging",
        platforms: ["news", "x", "reddit"],
        shortSummary: "Developers and fintech creators are analyzing new M-Pesa API transaction fee tiers, debating the impact on low-ticket micropayment services.",
        firstSeen: "5 hours ago",
        relevance: 99,
        happeningText: "Developers and fintech creators are analyzing new M-Pesa API transaction fee tiers, debating the impact on low-ticket micropayment services.",
        whyTrending: "Safaricom's M-Pesa pricing changes directly dictate the viability of local micro-SaaS and fintech startups.",
        emotionalTrigger: "Frustration, fear of startup failure, and motivation to solve pricing bottlenecks.",
        socialTrigger: "Developers sharing workarounds and optimizations.",
        kuzanaAngle: "If your business model relies on charging 20 KES per transaction, Safaricom's new API tiers will eat your margins. Pivot to wallet systems or credit tokens. Don't fight Safaricom, build around them.",
        previewHtml: `
          <div class="mock-news">
            <span class="news-tag">Fintech</span>
            <h4 class="news-title">Safaricom Adjusts Daraja API Transaction Thresholds: Micropayments Pinched</h4>
            <div class="news-source">
              <span>Techweez Fintech</span>
              <span>5h ago</span>
            </div>
          </div>
        `,
        carouselSlides: [
          {
            type: "News Banner",
            title: "Techweez Fintech Coverage",
            content: `
              <div class="mock-news">
                <span class="news-tag">Fintech</span>
                <h4 class="news-title">Safaricom Adjusts Daraja API Transaction Thresholds: Micropayments Pinched</h4>
                <div class="news-source">
                  <span>Techweez Fintech</span>
                  <span>5h ago</span>
                </div>
              </div>
            `
          },
          {
            type: "Developer Tweet",
            title: "Fintech founder response thread",
            content: `
              <div class="mock-tweet">
                <div class="tweet-header">
                  <div class="tweet-avatar">AO</div>
                  <div class="tweet-userinfo">
                    <span class="tweet-name">Albert Ochieng</span>
                    <span class="tweet-handle">@albert_codes · 4h</span>
                  </div>
                </div>
                <div class="tweet-body">
                  Safaricom's new Daraja pricing means a 20 KES utility micro-subscription is dead. The fee eats 25% of the transaction. We need to implement digital ledger credits immediately.
                </div>
              </div>
            `
          }
        ],
        hooks: [
          "Safaricom just made a change that could kill your subscription startup overnight.",
          "Why your 20 bob subscription startup is now in big trouble.",
          "How to bypass high M-Pesa transaction costs using wallet credits.",
          "The hidden cost of Safaricom's new transaction tiers.",
          "How Kenyan fintechs are adapting to the new M-Pesa API pricing."
        ],
        script: {
          v1: `[Hook] Safaricom just made a change that could kill your subscription startup overnight.
[Context] They updated the M-Pesa API fee structures. Startups processing small micropayments under fifty shillings are seeing fees eat their entire margin.
[Insight] If you charge twenty shillings and pay five shillings in fees, your business cannot survive. You need a different transaction architecture.
[Takeaway] Switch to a wallet system. Let users deposit a thousand shillings once, and deduct credits. You save on M-Pesa fees and lock in users.
[CTA] Are you affected by the new M-Pesa tiers? Share your thoughts below and let's find a workaround.`,
          v2: `[Hook] The hidden Safaricom tax is getting expensive.
[Context] Small SaaS products in Kenya are pivoting from instant M-Pesa triggers to ledger-based wallet models.
[Insight] If you transaction-bundle, you turn 100 API triggers into 1. That is how you save your margin.
[Takeaway] Don't build fintechs without studying Safaricom tariff shifts.
[CTA] Tag a Kenyan developer who needs to read this.`
        },
        remix: {
          format: "High M-Pesa transactional fees",
          interpretation: "User deposit wallet system",
          lesson: "Bundle transaction volume to protect profit margins"
        }
      }
    ];
