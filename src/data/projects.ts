export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  image: string;
  description: string;
  client?: string;
  year: string;
  role: string;
  deliverables: string[];
  tags: string[];
  gradient: string;
  featured?: boolean;
  slug: string;
  externalUrl?: string;
  content?: {
    overview: string;
    challenge: string;
    solution: string;
    keyTakeaway: string;
    gallery: string[];
    metrics?: { label: string; value: string }[];
  };
}

export interface ProjectCategory {
  id: string;
  title: string;
  gradient: string;
  description: string;
  projects: ProjectItem[];
}

export const PORTFOLIO_CATEGORIES: ProjectCategory[] = [
  {
    id: "tedx-ace-2026",
    title: "TEDx ACE Engineering College 2026",
    gradient: "linear-gradient(135deg, #e50914, #ff416c)",
    description: "Complete visual identity, stage graphics, speaker posters & promotional creative for TEDx ACE Engineering College 2026.",
    projects: [
      {
        id: "tedx-2026-1",
        slug: "tedx-ace-2026-visual-identity",
        externalUrl: "https://www.behance.net/gallery/255509065/TEDx-ACE-Engineering-College-2026-Event-Branding",
        title: "TEDx Brand Identity Suite",
        subtitle: "Official conference visual identity system & theme launch",
        category: "TEDx ACE Engineering College 2026",
        image: "/tedx-ace-2026/tedx-1.png",
        description: "Flagship visual identity designed for TEDx ACE Engineering College 2026 conference.",
        client: "TEDx ACE College 2026",
        year: "2026",
        role: "Lead Visual Creative & Content Lead",
        deliverables: ["Visual Identity System", "Theme Poster", "Brand Guidelines", "Social Key Visuals"],
        tags: ["TEDx 2026", "Brand Identity", "Event Design", "Key Visual"],
        gradient: "linear-gradient(135deg, #e50914, #ff416c)",
        featured: true,
        content: {
          overview: "Conceptualized and engineered the official visual identity system for TEDx ACE Engineering College 2026.",
          challenge: "Creating a high-impact, distinctive local event identity aligned strictly with global TEDx brand standards.",
          solution: "Architected vibrant red kinetic elements, high-contrast typography, and bold geometric compositions.",
          keyTakeaway: "Unifying physical and digital touchpoints delivers an authoritative event identity.",
          gallery: [
            "/tedx-ace-2026/tedx-1.png",
            "/tedx-ace-2026/tedx-2.png",
            "/tedx-ace-2026/tedx-3.png"
          ]
        }
      },
      {
        id: "tedx-2026-2",
        slug: "tedx-ace-2026-speaker-posters",
        externalUrl: "https://www.behance.net/gallery/255509065/TEDx-ACE-Engineering-College-2026-Event-Branding",
        title: "Speaker Showcase Posters",
        subtitle: "Editorial speaker portrait series & announcement graphics",
        category: "TEDx ACE Engineering College 2026",
        image: "/tedx-ace-2026/tedx-2.png",
        description: "Dynamic speaker reveal series designed for social campaigns and physical venue displays.",
        client: "TEDx ACE College 2026",
        year: "2026",
        role: "Lead Visual Creative",
        deliverables: ["Speaker Posters", "Social Carousels", "Digital Signage"],
        tags: ["Speaker Posters", "Editorial Layout", "Typography"],
        gradient: "linear-gradient(135deg, #e50914, #ff416c)",
        featured: true,
        content: {
          overview: "Curated series of speaker launch graphics celebrating thought leaders and innovators.",
          challenge: "Maintaining visual consistency across diverse portrait styles and background environments.",
          solution: "Implemented high-contrast obsidian backdrops with vibrant red accent lighting and bold typography.",
          keyTakeaway: "Consistent speaker branding elevates audience anticipation across social channels.",
          gallery: [
            "/tedx-ace-2026/tedx-2.png",
            "/tedx-ace-2026/tedx-4.png",
            "/tedx-ace-2026/tedx-5.png"
          ]
        }
      },
      {
        id: "tedx-2026-3",
        slug: "tedx-ace-2026-stage-backdrop",
        externalUrl: "https://www.behance.net/gallery/255509065/TEDx-ACE-Engineering-College-2026-Event-Branding",
        title: "Stage Graphics & Visuals",
        subtitle: "Immersive 4K LED stage screens & environment visual suite",
        category: "TEDx ACE Engineering College 2026",
        image: "/tedx-ace-2026/tedx-3.png",
        description: "Stage background graphics, LED screen loops, and spatial graphics for live venue experience.",
        client: "TEDx ACE College 2026",
        year: "2026",
        role: "Stage Visual Lead",
        deliverables: ["Stage Backdrops", "LED Visual Loops", "Podium Graphics"],
        tags: ["Stage Graphics", "Spatial Design", "Event Experience"],
        gradient: "linear-gradient(135deg, #e50914, #ff416c)",
        featured: true,
        content: {
          overview: "Designed spatial stage visuals and ambient LED screen graphics for the main conference hall.",
          challenge: "Delivering visual impact that looks stunning on stage without overshadowing live speakers.",
          solution: "Constructed ambient geometric light rays and deep black contrast stages.",
          keyTakeaway: "Thoughtfully calibrated stage graphics frame live presentations seamlessly.",
          gallery: [
            "/tedx-ace-2026/tedx-3.png",
            "/tedx-ace-2026/tedx-6.png",
            "/tedx-ace-2026/tedx-7.png"
          ]
        }
      },
      {
        id: "tedx-2026-4",
        slug: "tedx-ace-2026-badge-pass-suite",
        externalUrl: "https://www.behance.net/gallery/255509065/TEDx-ACE-Engineering-College-2026-Event-Branding",
        title: "Attendee Badges & VIP Passes",
        subtitle: "Tactile event credentials, lanyards & merchandise suite",
        category: "TEDx ACE Engineering College 2026",
        image: "/tedx-ace-2026/tedx-4.png",
        description: "Custom badge suite for attendees, speakers, VIPs, and media delegates.",
        client: "TEDx ACE College 2026",
        year: "2026",
        role: "Graphic Designer",
        deliverables: ["Attendee Badges", "Lanyard Tags", "VIP Passes"],
        tags: ["Print Design", "Badge Suite", "Event Collateral"],
        gradient: "linear-gradient(135deg, #e50914, #ff416c)",
        content: {
          overview: "Designed physical credentials and collectible event passes for conference attendees.",
          challenge: "Differentiating 5 delegate tiers clearly while maintaining single brand cohesion.",
          solution: "Used color-coded edge trims and metallic foil accents.",
          keyTakeaway: "Premium tactile passes enhance attendee keepsake value.",
          gallery: ["/tedx-ace-2026/tedx-4.png", "/tedx-ace-2026/tedx-1.png"]
        }
      },
      {
        id: "tedx-2026-5",
        slug: "tedx-ace-2026-social-campaign",
        externalUrl: "https://www.behance.net/gallery/255509065/TEDx-ACE-Engineering-College-2026-Event-Branding",
        title: "Social Media Promo Suite",
        subtitle: "High-converting Instagram carousels & countdown graphics",
        category: "TEDx ACE Engineering College 2026",
        image: "/tedx-ace-2026/tedx-5.png",
        description: "Full promotional media suite for digital marketing campaigns across Instagram and LinkedIn.",
        client: "TEDx ACE College 2026",
        year: "2026",
        role: "Content & Design Lead",
        deliverables: ["Instagram Stories", "Countdown Carousels", "Social Banners"],
        tags: ["Social Media", "Event Campaign", "Promotional Design"],
        gradient: "linear-gradient(135deg, #e50914, #ff416c)",
        content: {
          overview: "Comprehensive digital promotional campaign driving event registration and engagement.",
          challenge: "Maximizing reach and ticket sales across social platforms.",
          solution: "Deployed high-energy motion carousels and countdown teasers.",
          keyTakeaway: "Strategic social campaigns maximize ticket sales and digital impressions.",
          gallery: ["/tedx-ace-2026/tedx-5.png", "/tedx-ace-2026/tedx-2.png"]
        }
      },
      {
        id: "tedx-2026-6",
        slug: "tedx-ace-2026-merch-guidebook",
        externalUrl: "https://www.behance.net/gallery/255509065/TEDx-ACE-Engineering-College-2026-Event-Branding",
        title: "Delegate Handbook & Kit",
        subtitle: "Minimalist delegate handbook & merchandise collection",
        category: "TEDx ACE Engineering College 2026",
        image: "/tedx-ace-2026/tedx-6.png",
        description: "Event program booklet, tote bags, t-shirts, and sticker packs for TEDx ACE 2026.",
        client: "TEDx ACE College 2026",
        year: "2026",
        role: "Visual Creative",
        deliverables: ["Delegate Handbook", "Event Tote Bag", "Sticker Pack"],
        tags: ["Merchandise", "Handbook", "Print System"],
        gradient: "linear-gradient(135deg, #e50914, #ff416c)",
        content: {
          overview: "Custom merchandise and official conference handbook provided to every attendee.",
          challenge: "Creating desirable event swag that participants keep long after the event ends.",
          solution: "Utilized clean typographic layouts and premium matte print finishes.",
          keyTakeaway: "Tactile merchandise extends the brand experience beyond the conference day.",
          gallery: ["/tedx-ace-2026/tedx-6.png", "/tedx-ace-2026/tedx-3.png"]
        }
      },
      {
        id: "tedx-2026-7",
        slug: "tedx-ace-2026-digital-archive",
        externalUrl: "https://www.behance.net/gallery/255509065/TEDx-ACE-Engineering-College-2026-Event-Branding",
        title: "Highlights & Media Archive",
        subtitle: "Post-event recap graphics & speaker archive deck",
        category: "TEDx ACE Engineering College 2026",
        image: "/tedx-ace-2026/tedx-7.png",
        description: "Complete post-event recap visual package celebrating speaker talks and key takeaways.",
        client: "TEDx ACE College 2026",
        year: "2026",
        role: "Lead Visual Creative",
        deliverables: ["Event Recap Deck", "Speaker Quote Cards", "Highlight Reels"],
        tags: ["Event Recap", "Digital Archive", "Quote Cards"],
        gradient: "linear-gradient(135deg, #e50914, #ff416c)",
        content: {
          overview: "Post-conference visual package highlighting talk quotes and event statistics.",
          challenge: "Sustaining engagement after the live event concludes.",
          solution: "Published bite-sized quote cards and high-res event gallery reels.",
          keyTakeaway: "Post-event recap content extends talk reach globally.",
          gallery: ["/tedx-ace-2026/tedx-7.png", "/tedx-ace-2026/tedx-1.png"]
        }
      }
    ]
  },
  {
    id: "branding",
    title: "Branding & Identity",
    gradient: "linear-gradient(135deg, #e73827, #f85032)",
    description: "Visual identity systems, logo design, brand guidelines & typography architecture.",
    projects: [
      {
        id: "brand-1",
        slug: "kinetix-brand-system",
        title: "Kinetix Brand System",
        subtitle: "Complete visual identity & brand strategy for digital agency",
        category: "Branding & Identity",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop",
        description: "Comprehensive visual ecosystem for Kinetix combining minimalist typography with dynamic layout architecture.",
        client: "Kinetix",
        year: "2025",
        role: "Lead Visual Designer & Strategist",
        deliverables: ["Logo System", "Brand Book", "Typography Scale", "Social Templates"],
        tags: ["Visual Identity", "Typography", "Brand System"],
        gradient: "linear-gradient(135deg, #e73827, #f85032)",
        featured: true,
        content: {
          overview: "Kinetix required a bold, forward-looking visual identity that conveys digital craftsmanship and technological clarity.",
          challenge: "Creating an adaptable identity system that seamlessly scales across print collaterals, digital interfaces, and motion graphics.",
          solution: "Architected a modular logo lockup featuring customized kinetic typography, an obsidian and vivid orange color palette, and strict design token guidelines.",
          keyTakeaway: "A cohesive brand identity elevates user trust and establishes immediate market authority.",
          gallery: [
            "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542744094-3a31b272c490?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop"
          ],
          metrics: [
            { label: "Brand Retention", value: "+140%" },
            { label: "Design System Adoption", value: "100%" }
          ]
        }
      },
      {
        id: "brand-2",
        slug: "jdr-real-estate-branding",
        title: "JDR Real Estate Identity",
        subtitle: "Luxury architectural identity & collateral suite",
        category: "Branding & Identity",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        description: "Premium property branding system featuring embossed print stationery and digital brochure design.",
        client: "JDR Real Estate",
        year: "2024",
        role: "Brand Identity Designer",
        deliverables: ["Stationery Suite", "Brand Guidelines", "Sales Deck"],
        tags: ["Luxury Real Estate", "Print Design", "Identity"],
        gradient: "linear-gradient(135deg, #e73827, #f85032)",
        featured: true,
        content: {
          overview: "JDR Real Estate needed a high-end luxury identity to target ultra-high-net-worth investors.",
          challenge: "Balancing timeless elegance with modern architectural clarity.",
          solution: "Formulated a gold foil and deep charcoal design system paired with bespoke serif typography.",
          keyTakeaway: "Tactile print luxury amplifies luxury real estate positioning.",
          gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop"
          ]
        }
      },
      {
        id: "brand-3",
        slug: "apex-cyber-identity",
        title: "Apex Cyber Suite",
        subtitle: "Futuristic brand identity for AI security firm",
        category: "Branding & Identity",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
        description: "Futuristic vector identity and generative mark design for cyber security startup.",
        client: "Apex Cyber",
        year: "2024",
        role: "Identity Designer",
        deliverables: ["Dynamic Mark", "Vector Suite", "Icons"],
        tags: ["Cybersecurity", "Generative Mark", "Tech"],
        gradient: "linear-gradient(135deg, #e73827, #f85032)",
        content: {
          overview: "A dynamic tech identity that changes state based on context.",
          challenge: "Avoiding standard generic cybersecurity lock iconography.",
          solution: "Designed a geometric cipher emblem inspired by cryptography patterns.",
          keyTakeaway: "Abstract geometric marks convey technological depth.",
          gallery: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"]
        }
      },
      {
        id: "brand-4",
        slug: "lumina-coffee-roasters",
        title: "Lumina Specialty Coffee",
        subtitle: "Artisanal coffee packaging & packaging identity",
        category: "Branding & Identity",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
        description: "Eco-friendly matte packaging design with custom illustrated botanical labels.",
        client: "Lumina Roasters",
        year: "2024",
        role: "Packaging & Brand Designer",
        deliverables: ["Package Design", "Label Illustration", "Merch"],
        tags: ["Packaging", "Illustration", "Retail"],
        gradient: "linear-gradient(135deg, #e73827, #f85032)",
        content: {
          overview: "Packaging identity celebrating organic coffee origin stories.",
          challenge: "Standing out on crowded specialty retail shelves.",
          solution: "Hand-drawn botanical illustrations with textured foil finishes.",
          keyTakeaway: "Storytelling through packaging creates immediate shelf impact.",
          gallery: ["https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop"]
        }
      },
      {
        id: "brand-5",
        slug: "nexus-studio-branding",
        title: "Nexus Design Studio",
        subtitle: "Minimalist studio stationery & editorial identity",
        category: "Branding & Identity",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop",
        description: "Monochrome brutalist design system for creative architecture studio.",
        client: "Nexus Studio",
        year: "2023",
        role: "Visual Creative",
        deliverables: ["Monochrome System", "Portfolio Book", "Stationery"],
        tags: ["Brutalism", "Monochrome", "Editorial"],
        gradient: "linear-gradient(135deg, #e73827, #f85032)",
        content: {
          overview: "Uncompromising brutalist visual system for architecture curators.",
          challenge: "Stripping away visual noise while preserving typographic elegance.",
          solution: "High-contrast Swiss grid system with oversized typography.",
          keyTakeaway: "Restraint and grid discipline amplify visual strength.",
          gallery: ["https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop"]
        }
      }
    ]
  },
  {
    id: "social",
    title: "Social & Ad Creative",
    gradient: "linear-gradient(to right, #f7b733, #fc4a1a)",
    description: "High-converting social campaigns, advertising visual design & promotional creative.",
    projects: [
      {
        id: "social-1",
        slug: "jdr-real-estate-campaigns",
        title: "JDR Luxury Ad Creatives",
        subtitle: "High-converting social ads & property showcases",
        category: "Social & Ad Creative",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
        description: "Multi-platform digital ad campaign driving leads for luxury penthouse developments.",
        client: "JDR Real Estate",
        year: "2025",
        role: "Ad Campaign Designer",
        deliverables: ["Instagram Reels Covers", "Carousel Ads", "Billboard Designs"],
        tags: ["Social Media Ads", "Ad Creative", "Real Estate"],
        gradient: "linear-gradient(to right, #f7b733, #fc4a1a)",
        featured: true,
        content: {
          overview: "JDR Real Estate required high-impact social creative to convert affluent buyers across Instagram and LinkedIn.",
          challenge: "Capturing high-end property allure in 3-second visual scroll windows.",
          solution: "Designed kinetic carousel layouts with glowing callouts and cinematic typography.",
          keyTakeaway: "Visual hierarchy and thumb-stopping contrast dramatically increase click-through rates.",
          gallery: [
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
          ],
          metrics: [
            { label: "Click-Through Rate", value: "4.8%" },
            { label: "Lead Growth", value: "+210%" }
          ]
        }
      },
      {
        id: "social-2",
        slug: "kinetix-growth-carousels",
        title: "Kinetix Digital Growth Series",
        subtitle: "Educational Instagram carousels & design tips",
        category: "Social & Ad Creative",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
        description: "Editorial social carousels breaking down UI/UX principles and brand strategy.",
        client: "Kinetix",
        year: "2024",
        role: "Content Creator & Designer",
        deliverables: ["Carousel Series", "Graphic Templates", "Infographics"],
        tags: ["Instagram Carousels", "Content Strategy", "Editorial"],
        gradient: "linear-gradient(to right, #f7b733, #fc4a1a)",
        content: {
          overview: "Educational carousel series designed to establish Kinetix as a thought leader in visual design.",
          challenge: "Transforming dense design theory into bite-sized visual slides.",
          solution: "Formulated a strict 10-slide layout standard with bold headlines and diagrammatic overlays.",
          keyTakeaway: "Visual clarity makes complex concepts highly shareable.",
          gallery: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop"]
        }
      },
      {
        id: "social-3",
        slug: "cyber-week-campaign",
        title: "Cyber Flash Sale Campaign",
        subtitle: "High-energy e-commerce sales creative",
        category: "Social & Ad Creative",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
        description: "Neon lit high-octane social ad creative designed for maximum urgency.",
        client: "Vapor Tech",
        year: "2024",
        role: "Creative Designer",
        deliverables: ["Animated Stories", "Ad Banners", "Display Ads"],
        tags: ["E-commerce", "Neon Aesthetics", "Sale Creative"],
        gradient: "linear-gradient(to right, #f7b733, #fc4a1a)",
        content: {
          overview: "High-contrast sale banners created for Black Friday & Cyber Week.",
          challenge: "Cutting through holiday promo noise with bold visual energy.",
          solution: "Employed neon duotone palette with kinetic motion typography.",
          keyTakeaway: "Urgency-driven visual design directly influences flash conversions.",
          gallery: ["https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop"]
        }
      },
      {
        id: "social-4",
        slug: "fitness-launch-series",
        title: "Pulse Fitness App Launch",
        subtitle: "Dynamic sports social media campaign",
        category: "Social & Ad Creative",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
        description: "Gritty high-contrast athletic imagery mixed with energetic overlay typography.",
        client: "Pulse Fitness",
        year: "2024",
        role: "Visual Designer",
        deliverables: ["Promo Graphics", "Story Assets", "Ad Set"],
        tags: ["Sports Graphic", "Typography", "Campaign"],
        gradient: "linear-gradient(to right, #f7b733, #fc4a1a)",
        content: {
          overview: "App launch social assets engineered for fitness enthusiasts.",
          challenge: "Conveying motion and intensity in static social imagery.",
          solution: "Layered cut-out photography over diagonal kinetic text lines.",
          keyTakeaway: "Dynamic diagonal compositions convey speed and power.",
          gallery: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"]
        }
      },
      {
        id: "social-5",
        slug: "fintech-trust-ads",
        title: "Krypton Pay Campaign",
        subtitle: "Minimalist fintech user acquisition creatives",
        category: "Social & Ad Creative",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
        description: "Sleek 3D illustration ads highlighting instant global transfers.",
        client: "Krypton Pay",
        year: "2023",
        role: "UI/Ad Designer",
        deliverables: ["3D Ad Visuals", "Social Posts", "Web Banners"],
        tags: ["Fintech", "3D Visuals", "Social Ads"],
        gradient: "linear-gradient(to right, #f7b733, #fc4a1a)",
        content: {
          overview: "Clean financial advertisement campaign building user trust.",
          challenge: "Making financial concepts visually inviting and straightforward.",
          solution: "Glassmorphism UI card renders paired with warm ambient light backdrops.",
          keyTakeaway: "Glass-textured UI mockups instill modern digital confidence.",
          gallery: ["https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop"]
        }
      }
    ]
  },
  {
    id: "event",
    title: "Event & Content Design",
    gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
    description: "Stage graphics, event branding, attendee badges, speaker posters & conference identity.",
    projects: [
      {
        id: "event-1",
        slug: "tedx-ace-college-design",
        title: "TEDx ACE College Design Suite",
        subtitle: "Full event visual ecosystem, stage design & speaker posters",
        category: "Event & Content Design",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
        description: "Complete visual identity, stage graphics, badge suite, and promotional posters for TEDx ACE College.",
        client: "TEDx ACE College",
        year: "2025",
        role: "Content & Design Lead",
        deliverables: ["Stage Backdrop", "Speaker Posters", "Attendee Badges", "Social Campaign", "Motion Graphics"],
        tags: ["TEDx Event", "Stage Design", "Poster System", "Lead Design"],
        gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
        featured: true,
        content: {
          overview: "As Content & Design Lead for TEDx ACE College, Abhishek conceptualized and executed the entire visual language for the flagship conference.",
          challenge: "Adhering strictly to TEDx global brand guidelines while crafting a distinct, memorable local theme visual identity.",
          solution: "Engineered a dynamic 'Ideas Unbound' theme incorporating red kinetic beams, geometric typography, and immersive stage visuals.",
          keyTakeaway: "Unifying digital promotion with physical stage architecture creates an unforgettable conference experience.",
          gallery: [
            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
          ],
          metrics: [
            { label: "Attendees Reached", value: "1,200+" },
            { label: "Social Impressions", value: "85,000+" }
          ]
        }
      },
      {
        id: "event-2",
        slug: "hackathon-futurism-posters",
        title: "HackAI National Summit",
        subtitle: "Cyberpunk event identity & speaker gallery posters",
        category: "Event & Content Design",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
        description: "Futuristic theme design and digital signage for national AI hackathon event.",
        client: "ACE Tech Summit",
        year: "2024",
        role: "Lead Event Designer",
        deliverables: ["Digital Signage", "Leaderboard UI", "Winner Certificates"],
        tags: ["Hackathon", "Cyberpunk", "Event Posters"],
        gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
        content: {
          overview: "High-tech visual suite for a 48-hour national hackathon.",
          challenge: "Creating real-time leaderboard visuals and energetic event atmosphere.",
          solution: "Constructed glowing glitch graphics and high-contrast typography displays.",
          keyTakeaway: "Energetic theme visuals maintain hacker engagement during overnight sprints.",
          gallery: ["https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop"]
        }
      },
      {
        id: "event-3",
        slug: "design-conclave-2024",
        title: "Design Conclave 2024",
        subtitle: "Minimalist conference identity & merchandise kit",
        category: "Event & Content Design",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
        description: "Clean Swiss-inspired conference booklet, lanyard badges, and screen projections.",
        client: "Design Guild",
        year: "2024",
        role: "Graphic Designer",
        deliverables: ["Lanyards", "Event Guide", "Screen Graphics"],
        tags: ["Swiss Style", "Merchandise", "Conference"],
        gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
        content: {
          overview: "Identity kit for annual design leadership summit.",
          challenge: "Designing eco-conscious printed programs with minimalist elegance.",
          solution: "Printed monochrome guidebooks on recycled craft paper with accent foil stamps.",
          keyTakeaway: "Tactile materials enhance physical conference engagement.",
          gallery: ["https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop"]
        }
      },
      {
        id: "event-4",
        slug: "music-fest-posters",
        title: "Aura Sound Festival",
        subtitle: "Psychedelic concert posters & festival maps",
        category: "Event & Content Design",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
        description: "Vivid fluid gradient artwork for electronic music festival promotion.",
        client: "Aura Events",
        year: "2024",
        role: "Poster Artist",
        deliverables: ["Festival Poster", "Wayfinding Map", "Wristbands"],
        tags: ["Music Poster", "Fluid Gradients", "Artwork"],
        gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
        content: {
          overview: "Vibrant promotional poster series for outdoor sound festival.",
          challenge: "Expressing sound waves through organic visual forms.",
          solution: "Generative fluid artwork mapped with neon spectrum gradients.",
          keyTakeaway: "Organic visual motion resonates deeply with music audiences.",
          gallery: ["https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop"]
        }
      },
      {
        id: "event-5",
        slug: "exhibition-wall-graphics",
        title: "Retrospective Art Wall",
        subtitle: "Large format exhibition graphics & wayfinding",
        category: "Event & Content Design",
        image: "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1200&auto=format&fit=crop",
        description: "Wall mural typography and spatial wayfinding signs for art gallery exhibition.",
        client: "City Art Gallery",
        year: "2023",
        role: "Spatial Graphic Designer",
        deliverables: ["Wall Murals", "Wayfinding Signs", "Exhibition Catalog"],
        tags: ["Spatial Graphic", "Exhibition", "Wayfinding"],
        gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
        content: {
          overview: "Architectural wall graphics guiding gallery visitors.",
          challenge: "Adapting print typography to 4-meter wall murals.",
          solution: "High-contrast vinyl typography layouts calibrated for ambient lighting.",
          keyTakeaway: "Scale changes how typography interacts with physical space.",
          gallery: ["https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1200&auto=format&fit=crop"]
        }
      }
    ]
  },
  {
    id: "web",
    title: "Web & Product Design",
    gradient: "linear-gradient(135deg, #8e2de2, #4a00e0)",
    description: "Interactive web experiences, SaaS web apps, mobile UI/UX & client platforms.",
    projects: [
      {
        id: "web-1",
        slug: "kinetix-agency-platform",
        title: "Kinetix Digital Platform",
        subtitle: "Next.js web experience & client dashboard suite",
        category: "Web & Product Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        description: "Full-stack web platform built with Next.js, Tailwind CSS, Framer Motion, and serverless infrastructure.",
        client: "Kinetix",
        year: "2025",
        role: "Lead Full-Stack Developer & UI/UX Architect",
        deliverables: ["Web App", "UI Design System", "Interactive Components", "SEO Engine"],
        tags: ["Next.js", "Full-Stack", "UI/UX Architecture", "Tailwind CSS"],
        gradient: "linear-gradient(135deg, #8e2de2, #4a00e0)",
        featured: true,
        content: {
          overview: "Abhishek designed and developed the main digital platform for Kinetix, focusing on smooth performance and conversion flow.",
          challenge: "Creating a blazingly fast web application that presents heavy visual creative portfolios without degrading performance.",
          solution: "Implemented server-side rendering, progressive image loading, glassmorphic UI components, and micro-animations.",
          keyTakeaway: "Design and engineering synergy eliminates the gap between mockup and production site.",
          gallery: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop"
          ],
          metrics: [
            { label: "Lighthouse Performance", value: "99/100" },
            { label: "Page Load Time", value: "< 0.8s" }
          ]
        }
      },
      {
        id: "web-2",
        slug: "pulse-health-dashboard",
        title: "Pulse Health UI System",
        subtitle: "Medical analytics dashboard & mobile UI app",
        category: "Web & Product Design",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
        description: "Dark-themed medical analytics interface focused on patient metric visibility.",
        client: "Pulse Health",
        year: "2024",
        role: "UI/UX Designer",
        deliverables: ["Dashboard UI", "Component Specs", "Figma Design System"],
        tags: ["Dashboard UI", "HealthTech", "Dark UI"],
        gradient: "linear-gradient(135deg, #8e2de2, #4a00e0)",
        content: {
          overview: "Intuitive interface for telemetry and biometric monitoring.",
          challenge: "Displaying dense real-time data without cognitive overload.",
          solution: "Designed high-contrast data charts with contextual color indicators.",
          keyTakeaway: "Accessibility-first data visualization empowers clinical decision-making.",
          gallery: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"]
        }
      },
      {
        id: "web-3",
        slug: "verve-fashion-ecommerce",
        title: "Verve Editorial Store",
        subtitle: "Minimalist fashion e-commerce web design",
        category: "Web & Product Design",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
        description: "Editorial lookbook layout combined with seamless bag checkout interactions.",
        client: "Verve Apparel",
        year: "2024",
        role: "Web Designer & Frontend Dev",
        deliverables: ["Storefront UI", "Cart Flow", "Mobile Layout"],
        tags: ["E-Commerce", "Editorial Web", "Fashion"],
        gradient: "linear-gradient(135deg, #8e2de2, #4a00e0)",
        content: {
          overview: "High-end luxury fashion store designed like a digital art journal.",
          challenge: "Creating an immersive magazine feel inside an e-commerce checkout flow.",
          solution: "Formulated dynamic asymmetry grids with sticky buy triggers.",
          keyTakeaway: "Editorial aesthetics turn shopping into an inspiring visual journey.",
          gallery: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"]
        }
      },
      {
        id: "web-4",
        slug: "strata-ai-landing",
        title: "Strata Intelligence Landing",
        subtitle: "Interactive 3D landing page for AI startup",
        category: "Web & Product Design",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        description: "Interactive canvas background with glowing node connections and animated hero text.",
        client: "Strata AI",
        year: "2024",
        role: "Creative Developer",
        deliverables: ["Interactive Landing", "Three.js Scene", "Micro-Interactions"],
        tags: ["Creative Dev", "Three.js", "AI Landing Page"],
        gradient: "linear-gradient(135deg, #8e2de2, #4a00e0)",
        content: {
          overview: "Futuristic landing experience showcasing AI data pipeline capabilities.",
          challenge: "Rendering responsive 3D node networks at smooth 60 FPS.",
          solution: "Built custom WebGL shader scenes optimized for mobile devices.",
          keyTakeaway: "Interactive 3D visuals captivate tech decision-makers instantly.",
          gallery: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"]
        }
      },
      {
        id: "web-5",
        slug: "solaris-crypto-wallet",
        title: "Solaris Wallet App",
        subtitle: "Mobile crypto wallet UI & interactive prototype",
        category: "Web & Product Design",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1200&auto=format&fit=crop",
        description: "Clean mobile banking and asset management interface with micro-gestures.",
        client: "Solaris Labs",
        year: "2023",
        role: "Mobile UI Specialist",
        deliverables: ["Mobile iOS UI", "Gesture Prototype", "Design Specs"],
        tags: ["Mobile UI", "Crypto", "App Design"],
        gradient: "linear-gradient(135deg, #8e2de2, #4a00e0)",
        content: {
          overview: "Simplifying Web3 wallet transactions through clear visual feedback.",
          challenge: "Reducing security anxiety during token transfer interactions.",
          solution: "Added biometrics confirmation screens with haptic feel animations.",
          keyTakeaway: "Reassuring micro-interactions build essential user trust.",
          gallery: ["https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1200&auto=format&fit=crop"]
        }
      }
    ]
  },
  {
    id: "ai-creative",
    title: "AI-Assisted Creative",
    gradient: "linear-gradient(to right, #414345, #232526)",
    description: "Generative AI art direction, ComfyUI/Midjourney visual synthesis & futurist concepts.",
    projects: [
      {
        id: "ai-1",
        slug: "sir-lasa-tech-futurism",
        title: "Sir Lasa Tech Campaign",
        subtitle: "AI-driven editorial art direction & futurist key visuals",
        category: "AI-Assisted Creative",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
        description: "Hybrid AI art direction combining custom Midjourney v6 generation, Photoshop retouches, and typography composition.",
        client: "Sir Lasa Tech",
        year: "2025",
        role: "AI Creative Director & Digital Artist",
        deliverables: ["Editorial Visuals", "Futurist Posters", "Generative Assets"],
        tags: ["Generative AI", "Art Direction", "Photoshop", "Midjourney v6"],
        gradient: "linear-gradient(to right, #414345, #232526)",
        featured: true,
        content: {
          overview: "An exploratory futuristic campaign blending AI image synthesis with precision graphic design.",
          challenge: "Achieving hyper-consistent character and lighting aesthetics across multiple generated campaign scenes.",
          solution: "Formulated customized prompt pipelines, ControlNet depth masks, and manual Photoshop compositing.",
          keyTakeaway: "AI synthesis accelerates ideation, while human art direction ensures brand cohesion.",
          gallery: [
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
          ],
          metrics: [
            { label: "Production Speedup", value: "4x Faster" },
            { label: "Concept Iterations", value: "50+ Explored" }
          ]
        }
      },
      {
        id: "ai-2",
        slug: "cyber-botanica-concept",
        title: "Cyber Botanica Series",
        subtitle: "Bionic botanical 3D imagery & editorial design",
        category: "AI-Assisted Creative",
        image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
        description: "Surreal fusion of organic plants and chrome mechanical structures.",
        client: "Experimental Studio",
        year: "2024",
        role: "Generative Artist",
        deliverables: ["High-Res Prints", "Exhibition Book", "Digital Gallery"],
        tags: ["Cybernetics", "Surrealism", "Generative Art"],
        gradient: "linear-gradient(to right, #414345, #232526)",
        content: {
          overview: "Visual inquiry into the intersection of nature and synthetic evolution.",
          challenge: "Merging metallic textures seamlessly with translucent leaf structures.",
          solution: "Utilized stable diffusion inpainting and texture overlay passes.",
          keyTakeaway: "Hybrid digital techniques unlock unprecedented visual surrealism.",
          gallery: ["https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop"]
        }
      },
      {
        id: "ai-3",
        slug: "neo-tokyo-architecture",
        title: "Neo-Tokyo 2099",
        subtitle: "Architectural concept visualizer & lighting studies",
        category: "AI-Assisted Creative",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
        description: "Volumetric atmospheric lighting renders depicting hyper-dense futuristic urban hubs.",
        client: "Concept Lab",
        year: "2024",
        role: "Visual Concept Artist",
        deliverables: ["Concept Matte Paintings", "Lighting Renders", "Worldbook"],
        tags: ["Architecture", "Sci-Fi Concept", "Atmospheric"],
        gradient: "linear-gradient(to right, #414345, #232526)",
        content: {
          overview: "Architectural concept exploration for futuristic city scapes.",
          challenge: "Controlling multi-colored neon light bounce across wet asphalt surfaces.",
          solution: "Blended raytraced base render frames with AI texture enhancement passes.",
          keyTakeaway: "Hybrid rendering yields rich, tactile atmospheric depth.",
          gallery: ["https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop"]
        }
      },
      {
        id: "ai-4",
        slug: "ai-fashion-lookbook",
        title: "Synthetic Silk Lookbook",
        subtitle: "Virtual fashion collection art direction",
        category: "AI-Assisted Creative",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
        description: "Impossible digital textiles and liquid metallic garments modeled on virtual avatars.",
        client: "Verve Couture",
        year: "2024",
        role: "Digital Fashion Art Director",
        deliverables: ["Digital Lookbook", "Vogue Style Editorial", "Asset Library"],
        tags: ["Digital Fashion", "Generative Textiles", "Editorial"],
        gradient: "linear-gradient(to right, #414345, #232526)",
        content: {
          overview: "Conceptual fashion lookbook showcasing non-physical textiles.",
          challenge: "Simulating light reflection across flowing liquid-gold fabrics.",
          solution: "Generated high-resolution cloth physics renders combined with prompt variations.",
          keyTakeaway: "Digital fashion unlocks zero-waste high-haute couture exploration.",
          gallery: ["https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop"]
        }
      },
      {
        id: "ai-5",
        slug: "generative-brand-patterns",
        title: "Algorithmic Brand Patterns",
        subtitle: "Custom AI mathematical generative brand textures",
        category: "AI-Assisted Creative",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
        description: "Vector generative patterns rendered for dynamic digital brand backgrounds.",
        client: "Kinetix Lab",
        year: "2023",
        role: "Creative Coder",
        deliverables: ["Vector Pattern Engine", "Background Pack", "Shader Files"],
        tags: ["Generative Code", "Brand Pattern", "Algorithmic Art"],
        gradient: "linear-gradient(to right, #414345, #232526)",
        content: {
          overview: "Algorithmic visual engine generating infinite brand textures.",
          challenge: "Ensuring mathematical patterns remain crisp across 4K displays.",
          solution: "Generated vector SVG paths through custom code algorithms.",
          keyTakeaway: "Algorithmic systems provide endless unique brand touchpoints.",
          gallery: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"]
        }
      }
    ]
  },
  {
    id: "filimy-posters",
    title: "Filmy Posters & Fan Art",
    gradient: "linear-gradient(135deg, #e50914, #ffb800)",
    description: "Cult cinema posters, movie key visual redesigns, retro film graphics & fan art illustrations.",
    projects: [
      {
        id: "filmy-1",
        slug: "aavesham-fan-art-poster",
        title: "Aavesham Cinema Poster",
        subtitle: "Official fan art poster design for Aavesham movie",
        category: "Filmy Posters & Fan Art",
        image: "/filimy-designs/AAVESHAM C.jpg",
        description: "High-octane fan art poster celebrating Aavesham. Styled with energetic typography, custom character framing, and vibrant retro lighting.",
        client: "Cinema Fan Art",
        year: "2024",
        role: "Poster Artist & Key Visual Designer",
        deliverables: ["Movie Poster", "Key Visual Artwork", "Print Poster"],
        tags: ["Aavesham", "Movie Poster", "Fan Art", "Indian Cinema"],
        gradient: "linear-gradient(135deg, #e50914, #ffb800)",
        featured: true,
      },
      {
        id: "filmy-2",
        slug: "kalki-2898-ad-poster-edition-1",
        title: "Kalki 2898 AD — Futuristic Key Visual",
        subtitle: "Futuristic sci-fi cinema artwork for Kalki 2898 AD",
        category: "Filmy Posters & Fan Art",
        image: "/filimy-designs/kalki1.jpg",
        description: "Atmospheric sci-fi concept poster for Kalki 2898 AD, blending dystopian matte textures with glowing neon typography.",
        client: "Cinema Fan Art",
        year: "2024",
        role: "Key Visual Artist",
        deliverables: ["Sci-Fi Poster", "Character Artwork", "Digital Print"],
        tags: ["Kalki 2898 AD", "Sci-Fi Poster", "Fan Art", "Movie Key Visual"],
        gradient: "linear-gradient(135deg, #e50914, #ffb800)",
        featured: true,
      },
      {
        id: "filmy-3",
        slug: "kalki-2898-ad-character-poster",
        title: "Kalki 2898 AD — Character Edition",
        subtitle: "Character showcase poster series for Kalki 2898 AD",
        category: "Filmy Posters & Fan Art",
        image: "/filimy-designs/kalki2.jpg",
        description: "High-contrast character poster artwork for Kalki 2898 AD highlighting apocalyptic lighting and dramatic pose framing.",
        client: "Cinema Fan Art",
        year: "2024",
        role: "Poster Artist",
        deliverables: ["Character Poster", "Social Key Visual"],
        tags: ["Kalki 2898 AD", "Character Poster", "Fan Art"],
        gradient: "linear-gradient(135deg, #e50914, #ffb800)",
        featured: true,
      },
      {
        id: "filmy-4",
        slug: "ee-nagaraniki-emaindi-poster",
        title: "Ee Nagaraniki Emaindi Poster",
        subtitle: "Minimalist tribute poster for cult comedy Ee Nagaraniki Emaindi",
        category: "Filmy Posters & Fan Art",
        image: "/filimy-designs/Ee Nagaraniki Emaindi.jpg",
        description: "Cult cinema tribute poster for Ee Nagaraniki Emaindi featuring clean typography, iconic dialog quotes, and vintage color grading.",
        client: "Cinema Fan Art",
        year: "2024",
        role: "Graphic Designer",
        deliverables: ["Tribute Poster", "Minimalist Movie Art"],
        tags: ["Ee Nagaraniki Emaindi", "Cult Cinema", "Fan Art"],
        gradient: "linear-gradient(135deg, #e50914, #ffb800)",
      },
      {
        id: "filmy-5",
        slug: "retro-cinema-poster-artwork",
        title: "Retro Film Artwork",
        subtitle: "Vintage 70s-style cinema poster illustration",
        category: "Filmy Posters & Fan Art",
        image: "/filimy-designs/Retro poster.jpg",
        description: "Textured retro film poster combining distressed vintage paper textures, hand-lettered movie title typography, and golden hour lighting.",
        client: "Experimental Cinema Art",
        year: "2024",
        role: "Poster Artist",
        deliverables: ["Retro Poster", "Vintage Artwork"],
        tags: ["Retro Poster", "Vintage Cinema", "Illustration"],
        gradient: "linear-gradient(135deg, #e50914, #ffb800)",
      },
      {
        id: "filmy-6",
        slug: "18-pages-cinema-poster",
        title: "18 Pages Title Poster",
        subtitle: "Romantic drama movie poster & title card design",
        category: "Filmy Posters & Fan Art",
        image: "/filimy-designs/18.jpg",
        description: "High-resolution poster for 18 Pages with custom handwritten typography and soft romantic editorial layout.",
        client: "Cinema Fan Art",
        year: "2024",
        role: "Graphic Designer",
        deliverables: ["Movie Poster", "Title Card"],
        tags: ["18 Pages", "Movie Poster", "Typography"],
        gradient: "linear-gradient(135deg, #e50914, #ffb800)",
      },
      {
        id: "filmy-7",
        slug: "cinema-fan-art-visual-08",
        title: "Film Key Visual 08",
        subtitle: "Editorial movie art & character poster concept",
        category: "Filmy Posters & Fan Art",
        image: "/filimy-designs/8.png",
        description: "High-impact cinematic poster concept with dark mood lighting and custom movie tagline layout.",
        client: "Cinema Fan Art",
        year: "2024",
        role: "Visual Creative",
        deliverables: ["Movie Art", "Concept Poster"],
        tags: ["Movie Poster", "Cinema Art", "Fan Art"],
        gradient: "linear-gradient(135deg, #e50914, #ffb800)",
      },
      {
        id: "filmy-8",
        slug: "cinema-fan-art-visual-09",
        title: "Film Key Visual 09",
        subtitle: "Cinematic promotional poster & art direction",
        category: "Filmy Posters & Fan Art",
        image: "/filimy-designs/9.png",
        description: "Full-bleed cinematic poster featuring high contrast lighting, custom title typography, and film grain finish.",
        client: "Cinema Fan Art",
        year: "2024",
        role: "Visual Creative",
        deliverables: ["Cinematic Poster", "Promotional Graphic"],
        tags: ["Cinema Poster", "Fan Art", "Movie Key Visual"],
        gradient: "linear-gradient(135deg, #e50914, #ffb800)",
      },
      {
        id: "filmy-9",
        slug: "f1-movie-fan-poster",
        title: "F1 Cinema Speed Poster",
        subtitle: "High-octane racing key visual artwork for F1 Movie",
        category: "Filmy Posters & Fan Art",
        image: "/filimy-designs/f1-poster.png",
        description: "Kinetic motion key visual for F1 racing cinema, featuring high-speed motion blur, energetic typographic overlays, and glossy red metallic contrasts.",
        client: "Cinema Fan Art",
        year: "2025",
        role: "Poster Artist",
        deliverables: ["Movie Poster", "Key Visual", "Print Art"],
        tags: ["F1", "Movie Poster", "Racing Art", "Key Visual"],
        gradient: "linear-gradient(135deg, #e50914, #ffb800)",
        featured: true,
      },
      {
        id: "filmy-10",
        slug: "1-nenokkadine-tribute-poster",
        title: "1 Nenokkadine — Psychological Thriller Art",
        subtitle: "Cult psychological thriller tribute poster for 1 Nenokkadine",
        category: "Filmy Posters & Fan Art",
        image: "/filimy-designs/1-nenokkadine.jpg",
        description: "Monochrome & high-contrast red psychological thriller fan poster for 1 Nenokkadine, blending distressed textures and editorial typography.",
        client: "Cinema Fan Art",
        year: "2024",
        role: "Poster Artist",
        deliverables: ["Cult Poster", "Character Graphic", "Tribute Art"],
        tags: ["1 Nenokkadine", "Psychological Thriller", "Fan Art", "Cult Cinema"],
        gradient: "linear-gradient(135deg, #e50914, #ffb800)",
        featured: true,
      }
    ]
  }
];

export const DESIGN_TOOLS = [
  {
    name: "Figma",
    category: "UI/UX & Design Systems",
    icon: "Figma",
    description: "Component libraries, layout grids, auto-layout architecture & interactive prototypes.",
    level: "Mastery"
  },
  {
    name: "Canva",
    category: "Brand & Social Assets",
    icon: "LayoutGrid",
    description: "Rapid marketing collaterals, social media brand kits, templates & presentation design.",
    level: "Mastery"
  },
  {
    name: "Adobe Photoshop",
    category: "Raster & Matte Compositing",
    icon: "Image",
    description: "High-end image retouching, digital key visual compositing, and photo manipulation.",
    level: "Advanced"
  },
  {
    name: "Adobe Illustrator",
    category: "Vector & Identity Design",
    icon: "PenTool",
    description: "Precision vector logotypes, brand iconography, geometric mark systems & print prep.",
    level: "Advanced"
  },
  {
    name: "Adobe After Effects",
    category: "Motion & Kinetic Typography",
    icon: "Video",
    description: "Kinetic motion sequences, logo reveals, speed ramping & Lottie UI animation export.",
    level: "Advanced"
  },
  {
    name: "VS Code & Next.js",
    category: "Frontend Development",
    icon: "Code2",
    description: "Building production React/Next.js applications, Tailwind CSS design systems & dynamic web apps.",
    level: "Mastery"
  },
  {
    name: "Midjourney & AI Tools",
    category: "AI Visual Synthesis",
    icon: "Sparkles",
    description: "Prompt engineering, generative visual synthesis, custom workflows & creative art direction.",
    level: "Advanced"
  }
];

export const CASE_STUDIES = [
  {
    id: "tedx-case-study",
    slug: "tedx-ace-college",
    externalUrl: "https://www.behance.net/gallery/255509065/TEDx-ACE-Engineering-College-2026-Event-Branding",
    title: "TEDx ACE College — Event Brand Ecosystem",
    role: "Content & Design Lead",
    period: "2024 – 2025",
    tagline: "Unifying digital identity with physical stage architecture for 1,200+ conference attendees.",
    coverImage: "/tedx-ace-2026/tedx-1.png",
    summary: "As Content & Design Lead for TEDx ACE College, Abhishek engineered the complete visual language for the flagship conference. From stage backdrops to attendee lanyards and social campaigns, every visual touchpoint was aligned under the 'Ideas Unbound' theme.",
    metrics: [
      { label: "Live Attendees", value: "1,200+" },
      { label: "Social Reach", value: "85,000+" },
      { label: "Assets Delivered", value: "45+" }
    ],
    deliverables: ["Stage Backdrop & Lighting Specs", "Speaker Announcement Posters", "Attendee Lanyards & Badges", "Social Media Campaign Kit", "Motion Title Sequences"],
    linkText: "View Full Brand Assets"
  },
  {
    id: "jdr-case-study",
    slug: "jdr-real-estate",
    title: "JDR Real Estate — High-Converting Luxury Campaigns",
    role: "Brand & Ad Creative Designer",
    period: "2024",
    tagline: "Elevating real estate marketing into an ultra-luxury editorial visual experience.",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    summary: "Transformed JDR Real Estate's social ad strategy by introducing gold-accented editorial carousels and sleek property video overlays. The redesigned campaigns increased prospective buyer lead generation by over 210%.",
    metrics: [
      { label: "Lead Conversion Increase", value: "+210%" },
      { label: "Click-Through Rate", value: "4.8%" },
      { label: "Ad Impressions", value: "340K+" }
    ],
    deliverables: ["Luxury Property Brochures", "Instagram & LinkedIn Ad Suite", "Stationery & Foil Print Collateral", "Video Overlay Graphics"],
    linkText: "Explore Ad Strategy"
  },
  {
    id: "kinetix-case-study",
    slug: "kinetix-platform",
    title: "Kinetix Studio — Creative Studio & Digital Architecture",
    role: "Lead Visual Creative & Technologist",
    period: "2023 – Present",
    tagline: "Bridging elite visual graphic design with high-performance Next.js web applications.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    summary: "Engineered the Kinetix brand identity as a full-service creative technology studio. Blending graphic design mastery with modern web engineering to build digital experiences that rank top-tier in design and performance.",
    metrics: [
      { label: "Client Satisfaction", value: "100%" },
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Projects Completed", value: "30+" }
    ],
    deliverables: ["Full Brand Identity System", "Next.js Web Application", "Design System & UI Library", "Client Management Portal"],
    linkText: "Visit Kinetix Project"
  }
];
