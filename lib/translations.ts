// Translation dictionaries for English and Macedonian
export type Language = "en" | "mk"

type TranslationDictionary = {
  [key: string]: string
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    contactUs: "Contact Us",

     // Contact page
    contactFormIntro:
      "We'd love to hear from you. Please fill out the form below or use our contact information to get in touch.",
    firstName: "First Name",
    lastName: "Last Name",
    message: "Message",
    messageHelp: "How can we help you?",
    sendMessage: "Send Message",
    contactInformation: "Contact Information",
    address: "Address",
    addressLine1: "SC Beverly Hills",
    addressLine2: "1/11",
    addressLine3: "1000, Skopje",
    addressLine4: "North Macedonia",
    phoneNumber: "+389  2 3131 113",
    emailAddress: "info@impuls-international.com",
    businessHours: "Business Hours",
    mondayFriday: "Monday - Friday:",
    mondayFridayHours: "9:00 AM - 6:00 PM",
    saturday: "Saturday:",
    saturdayHours: "Closed",
    sunday: "Sunday:",
    closed: "Closed",
    copyright: "© {year} Impuls International. All rights reserved.",
    // Language toggle
    switchToMacedonian: "MK",
    switchToEnglish: "EN",

    // Hero section
    heroTitle: "INSPIRATIONS INNOVATIONS ",
    learnMore: "Learn More",

    // Mission section
    ourMission: "Our Mission",
    missionText:
      "At Impuls International, we are dedicated to ensuring customer satisfaction in all aspects of our work. This commitment is central to our corporate culture and drives our passion and determination to fulfill our promises to clients, value people and the environment, incorporate innovative technologies, and foster continuous improvement. We help our clients achieve their goals by offering a comprehensive service portfolio that is tailored to their needs and designed to support their growth and productivity.",

    // Services section
    ourServices: "Our Services & Solutions",
    servicesText:
      "We provide a comprehensive range of services designed to meet the diverse needs of our global clients.",

    // Projects section
    featuredProjects: "Featured Projects",
    projectsText: "Explore some of our recent projects across various service areas.",
    commercialLED: "Commercial LED Installation",
    commercialLEDDesc: "Energy-efficient lighting solution for a major retail chain",
    viewProject: "View Project",
    officeBuilding: "Office Building Complex",
    officeBuildingDesc: "Modern office space with sustainable design features",
    digitalBillboard: "Digital Billboard Network",
    digitalBillboardDesc: "High-impact advertising solution in prime urban locations",
    viewAllProjects: "View All Projects",

    // Partners section
    ourPartners: "Our Partners",
    partnersText: "We collaborate with leading brands and companies to deliver exceptional solutions.",

    // CTA section
    readyToWork: "Ready to Work With Us?",
    ctaText:
      "Contact our team today to discuss how we can support your business needs with our comprehensive service portfolio.",
    contactUsButton: "Contact Us",

    // Ego Water page
    egoWaterTitle: "Natural Mineral Water",
    egoWaterSubtitle: "Premium quality natural mineral water with perfect pH balance",
    exploreProducts: "Explore Products",
    visitOfficialWebsite: "Visit Official Website",
    pureNaturalGoodness: "Pure Natural Goodness",
    egoWaterIntro:
      "Ego Water is premium natural mineral water sourced from pristine underground springs. Our water undergoes a natural filtration process through layers of rock, enriching it with essential minerals while maintaining perfect purity.",
    egoWaterIntro2:
      "With a balanced pH of 7.1, Ego Water provides optimal hydration and refreshment for your body's needs. Every bottle of Ego Water delivers the pure taste of nature with the perfect mineral composition.",
    naturalMinerals: "Natural Minerals",
    perfectPHBalance: "Perfect pH Balance",
    pureTaste: "Pure Taste",
    visitOurWebsites: "Visit Our Official Websites",
    discoverMoreEgo: "Discover more about Ego Water on our official websites available in multiple languages.",
    ourProductRange: "Our Product Range",
    exploreSelection: "Explore our selection of premium natural mineral water products",
    premiumQuality: "Premium Quality",
    details: "Details",
    egoWaterContains: "One Liter of Ego Water Contains",
    perfectBalanceMinerals: "The perfect balance of essential minerals for optimal hydration",
    mineralComposition: "Mineral Composition",
    egoWaterBalanced:
      "Ego Water's balanced mineral content provides essential nutrients that contribute to your overall health and wellbeing. With a perfect pH of 7.1, our water helps maintain your body's natural balance.",
    benefitsOfEgoWater: "Benefits of Ego Water",
    whyEgoWater: "Discover why Ego Water is the perfect choice for your hydration needs",
    perfectPHBalanceTitle: "Perfect pH Balance",
    perfectPHBalanceDesc:
      "With a pH of 7.1, Ego Water is perfectly balanced to work in harmony with your body's natural pH levels, supporting optimal hydration and health.",
    essentialMineralsTitle: "Essential Minerals",
    essentialMineralsDesc:
      "Naturally enriched with calcium, magnesium, and other essential minerals that support your body's functions and contribute to overall wellbeing.",
    pureNaturalTitle: "Pure & Natural",
    pureNaturalDesc:
      "Sourced from protected natural springs and filtered through layers of rock, Ego Water is pure, clean, and free from contaminants.",
    ecoFriendlyPackaging: "Eco-Friendly Packaging",
    ecoFriendlyDesc:
      "At Ego Water, we're committed to environmental sustainability. Our bottles are designed to minimize environmental impact while ensuring the quality and freshness of our water.",
    recyclableMaterials: "Recyclable Materials",
    recyclableMaterialsDesc:
      "All our bottles are made from 100% recyclable materials, reducing waste and environmental impact.",
    multipleSizes: "Multiple Sizes",
    multipleSizesDesc: "Available in various sizes from 0.5L to 1.5L to suit different needs and occasions.",
    qualitySealed: "Quality Sealed",
    qualitySealedDesc: "Our secure caps ensure freshness and purity from source to consumption.",
    experienceNaturalHydration: "Experience Natural Hydration",
    discoverPureTaste:
      "Discover the pure taste and perfect mineral balance of Ego Water. Available at retailers nationwide.",
    findRetailers: "Find Retailers",

    // Ego Water products
    egoNaturalMineral033: "Ego Natural Mineral Water 0.33L",
    egoNaturalMineral033Desc: "Refreshing natural mineral water in a convenient 0.33L bottle",
    egoNaturalMineral05: "Ego Natural Mineral Water 0.5L",
    egoNaturalMineral05Desc: "Premium natural mineral water in a 0.5L bottle with pH 7.1",
    egoNaturalMineral1: "Ego Natural Mineral Water 1L",
    egoNaturalMineral1Desc: "Family-sized natural mineral water with perfect mineral balance",
    egoSparklingMineral: "Ego Sparkling Mineral Water",
    egoSparklingMineralDesc: "Lightly carbonated natural mineral water for a refreshing experience",

    // Kings Choice page
    kingsChoiceTitle: "King's Choice",
    kingsChoiceSubtitle: "Premium natural juices specially crafted for your canine companion",
    officialDealer: "Official Dealer for Macedonia",
    exploreProducts: "Explore Products",
    visitOfficialWebsite: "Visit Official Website",
    naturalGoodness: "Nourish Your Dog with Natural Goodness",
    kingsChoiceIntro:
      "King's Choice offers premium quality, 100% natural juices specially formulated for dogs. As the exclusive dealer for Macedonia, in partnership with kingschoice.rs, we provide these exceptional products directly to Macedonian pet owners.",
    kingsChoiceIntro2:
      "Each juice is developed by veterinary nutritionists to ensure optimal nutrition and delicious taste that dogs love. Free from artificial additives, preservatives, and fillers - just pure, natural goodness.",
    naturalIngredients: "100% Natural",
    noPreservatives: "No Preservatives",
    vetApproved: "Vet Approved",
    officialPartnership: "Official Dealer for Macedonia",
    officialPartnershipText:
      "Impuls International is proud to be the exclusive dealer of King's Choice products in Macedonia, in partnership with kingschoice.rs",
    productRange: "Our Product Range",
    productRangeSubtitle:
      "Discover our collection of premium dog juices, each carefully crafted to provide specific health benefits",
    premiumQuality: "Premium Quality",
    bestseller: "BESTSELLER",
    new: "NEW",
    viewDetails: "View Details",
    reviews: "reviews",
    viewAllProducts: "View All Products",
    healthBenefits: "Health Benefits",
    benefitsTitle: "Benefits for Your Canine Companion",
    benefitsSubtitle: "Discover how King's Choice juices can enhance your dog's health and wellbeing",
    improvedHeartHealth: "Improved Heart Health",
    improvedHeartHealthDesc:
      "Our juices contain natural ingredients that support cardiovascular function and promote heart health.",
    enhancedImmunity: "Enhanced Immunity",
    enhancedImmunityDesc:
      "Packed with vitamins and antioxidants to strengthen your dog's immune system and natural defenses.",
    optimalHydration: "Optimal Hydration",
    optimalHydrationDesc: "Encourages healthy hydration with delicious flavors that entice even the pickiest drinkers.",
    digestiveSupport: "Digestive Support",
    digestiveSupportDesc:
      "Formulated with natural prebiotics and digestive enzymes to support gut health and nutrient absorption.",
    testimonials: "Testimonials",
    testimonialsTitle: "What Pet Parents Are Saying",
    testimonialsSubtitle: "Hear from dog owners who have made King's Choice part of their pet's daily routine",
    testimonial11:
      "My Golden Retriever Max absolutely loves the Berry Boost juice! I've noticed a significant improvement in his energy levels and coat shine since adding it to his diet.",
    testimonial1Author: "Sarah L.",
    testimonial1Role: "Golden Retriever owner",
    testimonial22:
      "As a veterinarian, I'm very particular about what I recommend for pets. King's Choice stands out for its quality ingredients and nutritional benefits. I recommend it to all my clients.",
    testimonial2Author: "Dr. Robert M.",
    testimonial2Role: "Veterinarian",
    testimonial33:
      "My senior Labrador has been struggling with joint issues. After trying the Blueberry juice for a month, I've noticed she's moving more comfortably and seems happier. Thank you, King's Choice!",
    testimonial3Author: "James T.",
    testimonial3Role: "Labrador owner",
    howToUse: "How to Serve",
    howToUseIntro:
      "King's Choice juices are designed to be easy to incorporate into your dog's daily routine. Here are some simple ways to serve our premium juices:",
    directServing: "Direct Serving",
    directServingDesc: "Pour directly into your dog's bowl as a refreshing drink. Most dogs love the taste!",
    mixWithFood: "Mix with Food",
    mixWithFoodDesc: "Add to your dog's regular food to enhance flavor and increase nutritional value.",
    frozenTreats: "Frozen Treats",
    frozenTreatsDesc: "Freeze in ice cube trays for refreshing treats during hot weather.",
    howToUseNote:
      "Always introduce new products gradually and consult with your veterinarian if your dog has specific dietary needs or health concerns.",
    faq: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to common questions about King's Choice products",
    faq1Question: "Are King's Choice juices safe for all dog breeds?",
    faq1Answer:
      "Yes, our juices are formulated to be safe for all dog breeds. However, as with any dietary change, we recommend introducing gradually and consulting with your veterinarian if your dog has specific health concerns.",
    faq2Question: "How much juice should I give my dog?",
    faq2Answer:
      "Serving size depends on your dog's weight. Generally, we recommend 30ml per 10kg of body weight daily. Detailed serving guidelines are provided on each product label.",
    faq3Question: "Do I need to refrigerate the juices?",
    faq3Answer:
      "Yes, our juices should be refrigerated after opening and used within 7 days for optimal freshness and nutritional value.",
    faq4Question: "Are there any artificial ingredients?",
    faq4Answer:
      "No, King's Choice juices are 100% natural with no artificial colors, flavors, preservatives, or sweeteners. We use only high-quality ingredients suitable for canine consumption.",
    callToAction: "Give Your Dog the Royal Treatment",
    callToActionSubtitle:
      "As the official dealer for King's Choice in Macedonia, we're proud to bring these premium products to your canine companions.",
    shopNow: "Shop Now",
    followUs: "Follow Us",
    raspberryBoost: "Raspberry Boost",
    raspberryBoostDesc:
      "A delicious blend of raspberries packed with antioxidants to support immune health and vitality.",
    pineappleRefresh: "Pineapple Refresh",
    pineappleRefreshDesc:
      "A nutrient-rich juice from pineapple to support digestive health and provide natural enzymes.",
    blueberryAntioxidant: "Blueberry Antioxidant",
    blueberryAntioxidantDesc:
      "A specialized formula with blueberries rich in antioxidants for cognitive health and immune support.",

    // LED Lighting page
    ledLightingTitle: "Official Dealer of Premium LED Lighting Brands",
    ledLightingSubtitle: "Bringing world-class lighting solutions to transform your spaces",
    exploreBrands: "Explore Our Brands",
    viewReferences: "View References",
    whyChooseImpuls: "Why Choose Impuls for Your Lighting Needs",
    whyChooseImpulsSubtitle:
      "As an official dealer of world-renowned lighting brands, we offer unparalleled expertise and product selection",
    authorizedDealer: "Authorized Dealer",
    authorizedDealerDesc:
      "We are officially authorized dealers for premium lighting brands, ensuring you get genuine products with full warranty.",
    originalProducts: "Original products with manufacturer warranty",
    directAccess: "Direct access to latest product releases",
    expertConsultation: "Expert Consultation",
    expertConsultationDesc:
      "Our lighting specialists provide personalized advice to help you find the perfect lighting solution for your project.",
    professionalLightingDesign: "Professional lighting design assistance",
    technicalSpecifications: "Technical specifications and compatibility guidance",
    completeSolutions: "Complete Solutions",
    completeSolutionsDesc:
      "From product selection to installation and maintenance, we provide end-to-end lighting solutions.",
    professionalInstallation: "Professional installation services",
    ongoingMaintenance: "Ongoing maintenance and support",
    brandPartners: "Our Premium Brand Partners",
    brandPartnersSubtitle: "We partner with the world's leading lighting manufacturers to bring you the best products",
    officialWebsite: "Official Website",
    viewShowcase: "View Showcase",
    lightingForEverySpace: "Lighting Solutions for Every Space",
    lightingForEverySpaceSubtitle:
      "Discover our specialized lighting solutions for different environments and applications",
    officeCommercial: "Office & Commercial",
    officeCommercialDesc: "Create productive and comfortable environments with our office lighting solutions.",
    industrialWarehouse: "Industrial & Warehouse",
    industrialWarehouseDesc: "High-performance lighting for industrial facilities and warehouses.",
    retailHospitality: "Retail & Hospitality",
    retailHospitalityDesc: "Enhance customer experience with perfect lighting for retail and hospitality spaces.",
    outdoorUrban: "Outdoor & Urban",
    outdoorUrbanDesc: "Illuminate outdoor spaces with durable and efficient lighting solutions.",
    exploreSolutions: "Explore Solutions",
    benefitsOfLED: "Benefits of LED Lighting",
    benefitsOfLEDSubtitle: "Discover why LED lighting is the smart choice for modern businesses and facilities",
    energyEfficiency: "Energy Efficiency",
    energyEfficiencyDesc:
      "LED lights consume up to 80% less energy than traditional lighting, resulting in significant cost savings.",
    longLifespan: "Long Lifespan",
    longLifespanDesc: "With a lifespan of up to 50,000 hours, LED lights last 25 times longer than incandescent bulbs.",
    superiorQuality: "Superior Quality",
    superiorQualityDesc: "LED lighting provides better color rendering, brightness control, and visual comfort.",
    ecoFriendly: "Eco-Friendly",
    ecoFriendlyDesc:
      "LED lights contain no toxic materials and are 100% recyclable, helping reduce your carbon footprint.",
    oliptekShowcase: "Oliptek LED Lighting Video Showcase",
    oliptekShowcaseSubtitle: "Watch demonstration videos of Oliptek LED lighting solutions in various applications",
    featuredPartner: "Featured Partner",
    viewOliptekProducts: "View Oliptek Product Details",
    references: "Our References",
    referencesSubtitle: "Explore our extensive list of successful LED lighting installations across various industries",
    completeReferenceList: "Complete Reference List",
    referenceListDesc:
      "Download our comprehensive reference list featuring over 170 successful LED lighting installations across various sectors including commercial, industrial, retail, and public spaces.",
    detailedProductTypes: "Detailed product types used in each installation",
    clientNamesLocations: "Client names and project locations",
    categorizedByIndustry: "Categorized by industry and application",
    downloadReferenceList: "Download Reference List",
    commercialOffice: "Commercial & Office",
    commercialOfficeDesc:
      "Our LED solutions have transformed office spaces for clients like Alkaloid AD, Sava Insurance, and Sparkasse Bank.",
    ledPanelsDownlights: "LED panels and downlights",
    energyEfficientTubes: "Energy-efficient tube replacements",
    customLightingDesigns: "Custom lighting designs",
    industrialManufacturing: "Industrial & Manufacturing",
    industrialManufacturingDesc:
      "Industrial clients like FENI, Draexlmaier, and Brako Veles rely on our high-performance lighting solutions.",
    highBayFixtures: "High bay LED fixtures",
    waterproofLighting: "Waterproof industrial lighting",
    explosionProofSolutions: "Explosion-proof solutions",
    retailHospitalityCategory: "Retail & Hospitality",
    retailHospitalityDesc:
      "We've enhanced customer experiences at TINEX, Royal House, AMC City Mall, and Hotel Alex Palace.",
    accentDisplayLighting: "Accent and display lighting",
    decorativeLEDFixtures: "Decorative LED fixtures",
    energyEfficientAmbient: "Energy-efficient ambient lighting",
    ourProjects: "Our Projects",
    ourProjectsSubtitle: "See how our lighting solutions have transformed spaces for our clients",
    corporateOffice: "Corporate Office",
    corporateOfficeDesc: "Complete lighting solution for a modern office space using SHEENLY LED panels.",
    industrialWarehouseProject: "Industrial Warehouse",
    industrialWarehouseDesc: "Energy-efficient lighting upgrade for a large distribution center.",
    retailShoppingCenter: "Retail Shopping Center",
    retailShoppingCenterDesc: "Custom lighting design for a premium retail environment enhancing product displays.",
    viewAllProjects: "View All Projects",
    readyToTransform: "Ready to Transform Your Space?",
    readyToTransformSubtitle:
      "Contact our team today to discuss your LED lighting needs and discover how we can help you save energy and create the perfect ambiance.",
    scheduleConsultation: "Schedule a Consultation",
    browseAllProducts: "Browse All Products",

    // Mediterraneo page
    mediterraneoTitle: "Mediterraneo Home Collection",
    mediterraneoSubtitle: "",
    viewCatalog: "View Catalog",
    visitOfficialWebsite: "Visit Official Website",
    bringMediterranean: "Bring the Mediterranean to Your Table",
    mediterraneoIntro:
      "Mediterraneo offers a stunning collection of authentic Mediterranean home goods that bring the warmth, color, and elegance of Mediterranean culture to your home.",
    mediterraneoIntro2:
      "Our collection includes beautifully crafted trays, bowls, table cloths, and other tableware items that showcase traditional Mediterranean craftsmanship and design.",
    handcraftedQuality: "Handcrafted Quality",
    authenticDesigns: "Authentic Designs",
    traditionalPatterns: "Traditional Patterns",
    ourCatalog: "Our Catalog",
    catalogSubtitle: "Explore our collection of Mediterranean home goods in our interactive catalog",
    catalogTitle: "Mediterraneo Collection 2025",
    catalogDesc:
      "Discover our complete range of Mediterranean trays, bowls, and table cloths in our interactive catalog.",
    openOnlineCatalog: "Open Online Catalog",
    downloadPDF: "Download PDF",
    visitOurWebsite: "Visit Our Official Website",
    visitWebsiteDesc: "Discover our complete collection of Mediterranean home goods at our official website.",
    featuredCollection: "Featured Collection",
    featuredCollectionSubtitle:
      "Explore our selection of authentic Mediterranean home goods, available at VERO Markets",
    mediterraneanCeramicBowls: "Mediterranean Ceramic Bowls",
    mediterraneanCeramicBowlsDesc: "Hand-painted ceramic bowls with traditional Mediterranean patterns",
    decorativeServingTrays: "Decorative Serving Trays",
    decorativeServingTraysDesc: "Elegant serving trays with Mediterranean-inspired designs",
    patternedTableCloths: "Patterned Table Cloths",
    patternedTableClothsDesc: "Vibrant table cloths featuring classic Mediterranean motifs",
    availableAtVERO: "Available at VERO",
    details: "Details",
    veroMarkets: "Available at VERO Markets",
    veroMarketsSubtitle:
      "Find our complete range of Mediterraneo home goods at VERO Markets locations throughout the country",
    veroMarketsTitle: "VERO Markets - Our Exclusive Retailer",
    veroMarketsDesc:
      "VERO Markets is the exclusive retailer for Mediterraneo home goods, offering our complete collection in their stores across the country. Visit any VERO location to discover our premium Mediterranean trays, bowls, and table cloths.",
    veroMarketsDesc2:
      "VERO Markets is known for their commitment to quality and customer satisfaction, making them the perfect partner for our authentic Mediterranean home collection.",
    findMediterraneoAt: "Find Mediterraneo at these VERO locations:",
    findNearestVERO: "Find Nearest VERO Market",
    transformYourHome: "Transform Your Home with Mediterranean Style",
    transformYourHomeDesc:
      "Visit VERO Markets today to discover our premium range of Mediterraneo trays, bowls, and table cloths.",
    findVEROLocation: "Find VERO Location",
    catalogPage: "Page",
    catalogOf: "of",
    catalogCompleteText: "For the complete catalog, visit",
    downloadCatalogPDF: "Download PDF",
    mediterraneoTinTrays: "MEDITERRANEO TIN TRAYS",
    mediterraneoTinBowl: "MEDITERRANEO TIN BOWL",
    mediterraneoTableCloth: "MEDITERRANEO 100% POLYESTER TABLE CLOTH",
    designs: "designs",
    assortments: "ASSORTMENTS",
    variousSizes: "Various sizes and designs",
    veroLocations: "VERO Market Locations",

    // Terapot page
    terapotTitle: "Official Terapot Dealership",
    terapotSubtitle: "Handcrafted Fiberglass Pots for Timeless Durability",
    viewCatalog: "View Catalog",
    visitOfficialWebsite: "Visit Official Website",
    terapotIntroTitle: "Authorized Dealer",
    terapotIntroText1:
      "Impuls International is proud to be an official dealership for Terapot, a premier manufacturer of high-quality fiberglass planters. As an authorized dealer, we offer the complete range of Terapot products with full manufacturer warranty and support.",
    terapotIntroText2:
      "Fiberglass is a material made of very fine fibers of glass, used in the construction of boats, automobiles, marine and aerospace. It has superb weight to strength ratio and resistance to all weather conditions, making Terapot planters perfect for both indoor and outdoor applications.",
    authorizedDealer: "Authorized Dealer",
    officialDealership: "Official Terapot Dealership",
    officialDealershipText:
      "As an authorized dealer, we provide genuine Terapot fiberglass planters directly from the manufacturer.",
    terapotEUWebsite: "terapot.eu",
    downloadCatalog: "Download Catalog",
    productCatalog: "Terapot Product Catalog",
    productCatalogSubtitle:
      "Browse our complete range of premium fiberglass planters with detailed specifications and pricing",
    materialFinish: "Material & Finish",
    keyFeatures: "Key Features",
    weatherResistant: "Weather Resistant",
    uvProtected: "UV Protected",
    lightweight: "Lightweight",
    customizable: "Customizable",
    model: "Model",
    dimensions: "Dimensions",
    volume: "Volume",
    weight: "Weight",
    price: "Price",
    inquire: "Inquire",
    allTerapotProducts:
      "All Terapot products are made of premium fiberglass (GRP - nautical) with 2k PU finish and UV protection. For custom sizes, colors, or special requirements, please contact us.",
    customSizesColors: "For custom sizes, colors, or special requirements, please contact us.",
    requestQuote: "Request Quote",
    whyChooseTerapot: "Why Choose Terapot",
    whyChooseTerapotSubtitle: "Discover what makes Terapot fiberglass planters exceptional",
    superiorDurability: "Superior Durability",
    superiorDurabilityDesc:
      "Terapot fiberglass planters are exceptionally durable, with superb weight-to-strength ratio and resistance to all weather conditions, making them perfect for both indoor and outdoor use.",
    weatherResistantTitle: "Weather Resistant",
    weatherResistantDesc:
      "Fiberglass is resistant to UV rays, extreme temperatures, and moisture, ensuring your planters maintain their appearance and structural integrity for years to come.",
    modernDesign: "Modern Design",
    modernDesignDesc:
      "Terapot planters feature contemporary, minimalist designs that enhance any space, from urban rooftops to corporate lobbies and residential gardens.",
    dealershipAdvantages: "Benefits of Buying from an Authorized Dealer",
    dealershipAdvantagesTitle: "Benefits of Buying from an Authorized Dealer",
    authenticProducts: "Authentic Products",
    authenticProductsDesc: "Guaranteed genuine Terapot products sourced directly from the manufacturer.",
    fullManufacturerWarranty: "Full Manufacturer Warranty",
    fullManufacturerWarrantyDesc: "Complete warranty coverage backed by both Terapot and Impuls International.",
    expertProductKnowledge: "Expert Product Knowledge",
    expertProductKnowledgeDesc:
      "Our staff is specially trained on all Terapot products to provide expert advice and support.",
    afterSalesService: "After-Sales Service",
    afterSalesServiceDesc: "Dedicated customer support and maintenance services for all Terapot products.",
    experienceTerapotDifference: "Experience the Terapot Difference",
    experienceTerapotDifferenceText:
      "Visit our showroom to explore the complete range of Terapot fiberglass planters or contact us for more information.",
    visitOurShowroom: "Visit Our Showroom",

    // Billboards page
    billboardsTitle: "Outdoor Advertising ",
    billboardsSubtitle: "High-impact outdoor advertising solutions across the country",
    viewOurBillboards: "View Our Billboards",
    maximumVisibility: "Maximum Visibility for Your Brand",
    billboardsIntroText:
      "Our strategically placed billboards offer unparalleled exposure for your brand across major cities and high-traffic areas throughout the country.",
    billboardsIntroText2:
      "With a diverse range of sizes, locations, and formats, we provide tailored outdoor advertising solutions to meet your specific marketing objectives and budget requirements.",
    primeLocations: "Prime Locations",
    highTrafficAreas: "High Traffic Areas",
    nationwideCoverage: "Nationwide Coverage",
    billboardNetwork: "Our Billboard Network",
    billboardNetworkSubtitle: "Explore our extensive network of premium billboard locations across the country",
    premiumHighwayBillboard: "Premium Highway Billboard",
    highwayBillboardDesc: "Strategic placement on the country's busiest highway with maximum exposure",
    highwayMegaBillboard: "Highway Mega Billboard",
    highwayMegaBillboardDesc: "Prominent hilltop location visible from a great distance on the main highway",
    twoSidedBillboard: "Two-Sided Billboard",
    twoSidedBillboardDesc: "Strategic hillside placement visible from both directions on the highway",
    dayView: "Day View",
    nightView: "Night View",
    illuminated: "Illuminated for 24/7 visibility with dramatic impact against the night sky",
    gevgelijaBillboardDesc:
      "Our Gevgelija billboard offers exceptional visibility from both directions of the highway, with illumination for 24/7 impact. This premium location provides advertisers with maximum exposure to both local and international traffic crossing the border.",
    reserveBillboard: "Reserve This Billboard",
    urbanBillboard: "Urban Billboard",
    urbanPassageBillboard: "Urban Passage Billboard",
    highwayBillboard: "Highway Billboard",
    requestBillboardAvailability: "Request Billboard Availability",
    nationwideCoverageTitle: "Nationwide Coverage",
    nationwideCoverageSubtitle:
      "Our extensive billboard network spans across major cities and key locations throughout the country",
    billboardLocations: "Billboard Locations",
    inquireAboutLocations: "Inquire About Locations",
    billboardSpecifications: "Billboard Specifications",
    billboardSpecificationsSubtitle: "We offer a variety of billboard formats to suit your advertising needs",
    standardBillboard: "Standard Billboard",
    standardBillboardDesc1: "Dimensions: 10m x 1.2m",
    standardBillboardDesc2: "Ideal for urban areas",
    standardBillboardDesc3: "Print or digital options",
    standardBillboardDesc4: "High visibility placement",
    ledDigitalBillboard: "LED Digital Billboard",
    ledDigitalBillboardDesc1: "Dimensions: 15m x 4m",
    ledDigitalBillboardDesc2: "Dynamic content display",
    ledDigitalBillboardDesc3: "Multiple ad rotations",
    ledDigitalBillboardDesc4: "24/7 illumination",
    megaBillboard: "Mega Billboard",
    megaBillboardDesc1: "Dimensions: 20m x 4m",
    megaBillboardDesc2: "Premium highway locations",
    megaBillboardDesc3: "Maximum impact & visibility",
    megaBillboardDesc4: "Optional special effects",
    getPricing: "Get Pricing",
    designServices: "Full-Service Design Solutions",
    designServicesText:
      "Our in-house design team can help create impactful billboard advertisements that capture attention and deliver your message effectively.",
    creativeConceptDevelopment: "Creative Concept Development",
    creativeConceptDevelopmentDesc:
      "Our creative team will develop compelling concepts that align with your brand and objectives.",
    professionalGraphicDesign: "Professional Graphic Design",
    professionalGraphicDesignDesc:
      "High-quality design services to ensure your billboard stands out and captures attention.",
    productionInstallation: "Production & Installation",
    productionInstallationDesc: "End-to-end service including printing, production, and professional installation.",
    learnMoreAboutDesignServices: "Learn More About Design Services",
    clientSuccessStories: "Client Success Stories",
    clientSuccessStoriesSubtitle: "See what our clients have to say about their billboard advertising campaigns",
    marketingDirector: "Anhoch",
    majorRetailChain: "Major Tehnology Chain",
    campaignManager: "Mozzart",
    telecommunicationsCompany: " Company",
    ceo: "Tikvesh",
    localRestaurantChain: "Local Vinary",
    testimonial1:
      "The strategic placement of our billboards resulted in a 40% increase in brand awareness and a significant boost in foot traffic to our stores. The team's expertise and guidance were invaluable.",
    testimonial2:
      "The digital LED billboards provided exceptional flexibility for our campaign. We could update our messaging in real-time and target different audiences throughout the day. The results exceeded our expectations.",
    testimonial3:
      "From concept to execution, the entire process was seamless. The design team created a stunning visual that perfectly captured our brand essence, and the billboard locations provided maximum exposure to our target audience.",
    readyToMakeImpact: "Ready to Make an Impact?",
    readyToMakeImpactText:
      "Contact our team today to discuss your billboard advertising needs and discover how we can help you reach your target audience effectively.",
    phone: "Phone",
    email: "Email",
    billboardsEmail: "info@impuls-international.com",
    hoverToSee: "Hover to see",

    // Construction page
    buildingConstructionTitle: "Building Construction",
    buildingConstructionSubtitle: "High-quality construction services for residential and commercial buildings",
    viewProjects: "View Projects",
    discussYourProject: "Discuss Your Project",
    buildingExcellence: "Building Excellence",
    constructionIntroText:
      "At Impuls International, we specialize in delivering exceptional building construction services for both residential and commercial projects. With our experienced team of architects, engineers, and construction professionals, we ensure that every project is completed to the highest standards of quality and craftsmanship.",
    constructionIntroText2:
      "From concept to completion, we work closely with our clients to understand their vision and requirements, providing innovative solutions and attention to detail at every stage of the construction process.",
    featuredProjects: "Featured Projects",
    exclusiveResidential: "Exclusive residential buildings in prime locations",
    modernResidentialBuilding: "Modern residential building in a prime location",
    onlyExclusiveUnits: "Only 4 exclusive residential units",
    apartmentSizes: "Apartment Sizes:",
    features: "Features:",
    modernArchitecture: "Modern architecture",
    premiumFinishes: "Premium finishes",
    balconiesWithViews: "Balconies with city views",
    secureParking: "Secure parking",
    requestInformation: "Request Information",
    mixedUseBuilding: "Mixed-use building with commercial and residential spaces",
    primeLocation: "Prime city location with excellent accessibility",
    buildingFeatures: "Building Features:",
    commercialSpaces: "Commercial spaces on ground floor",
    residentialApartments: "Residential apartments on upper floors",
    rooftopTerrace: "Rooftop terrace with panoramic views",
    modernDesignMaterials: "Modern design with premium materials",
    floorPlans: "Floor Plans",
    exploreLayouts: "Explore the thoughtfully designed layouts of our residential units",
    bedrooms: "Bedrooms",
    livingRoom: "Living Room",
    kitchenDining: "Kitchen & Dining Area",
    balcony: "Balcony",
    spaciousLivingRoom: "Spacious Living Room",
    balconies: "Balconies",
    largeLivingRoom: "Large Living Room",
    bathrooms: "Bathrooms",
    largeBalcony: "Large Balcony",
    interestedInConstruction: "Interested in Our Construction Services?",
    constructionServicesText:
      "Whether you're looking to purchase a property or need construction services for your project, our team is ready to assist you. Contact us today to discuss your requirements.",
    phone: "Phone",
    email: "Email",

    // Multisit page
    multisitHeroAlt: "Multisit Urban Furniture",
    multisitHeroSubtitle: "Innovative urban furniture that combines seating with advertising opportunities",
    multisitTagline: "Sit. Fence. Advertise.",
    multisitIntro:
      "Multisit offers an ingeniously simple solution for urban spaces - combining comfortable seating with effective advertising opportunities. As an official partner of Multisit, Impuls International brings these innovative products to our clients.",
    keyBenefits: "Key Benefits",
    multisitBenefit1: "Dual functionality: practical seating and high-visibility advertising",
    multisitBenefit2: "Weather-resistant, durable construction for long-term outdoor use",
    multisitBenefit3: "Customizable advertising panels for targeted messaging",
    multisitBenefit4: "Perfect for transit areas, parks, shopping centers, and public spaces",
    multisitBenefit5: "Enhances urban environments while providing valuable advertising space",
    applications: "Applications",
    publicTransitAreas: "Public Transit Areas",
    publicTransitAreasDesc: "Bus stops, train stations, airports, and other transit hubs",
    commercialSpaces: "Commercial Spaces",
    commercialSpacesDesc: "Shopping centers, retail parks, and business districts",
    publicParks: "Public Parks",
    publicParksDesc: "Urban parks, recreational areas, and walking paths",
    educationalInstitutions: "Educational Institutions",
    educationalInstitutionsDesc: "University campuses, schools, and educational facilities",
    officialPartner: "Official Partner",
    multisitPartnerDesc:
      "Impuls International is proud to be an official partner of Multisit. We provide full consultation, installation, and maintenance services for all Multisit products.",
    visitMultisitWebsite: "Visit Multisit Website",
    multisitContactDesc:
      "Interested in Multisit products? Contact our team for more information, pricing, and installation details.",
    impulsHeadquarters: "Impuls International Headquarters",
    whyChooseMultisit: "Why Choose Multisit?",
    multisitReason1: "Innovative design that serves multiple purposes",
    multisitReason2: "High-quality materials ensure longevity",
    multisitReason3: "Effective advertising space with high visibility",
    multisitReason4: "Enhances public spaces while providing value",
    multisitReason5: "Professional installation and maintenance",

      // About page
    aboutTitle: "About Impuls International",
    aboutSubtitle: "Delivering excellence in integrated services worldwide",
    ourStory: "Our Story",
    storyParagraph1:
      "Impuls International LLC is a company that was established in 1991 in full private ownership. We are a family company that responsibly and dedicatedly strives to meet the demands of its clients in the areas we work in from a wide range. The company is active and successful in multiple categories of businesses and activities, which is presented in detail in this our web presentation.",
    storyParagraph2:
      "The goal is to always develop new modern innovative and inspiring solutions and services available to all categories of people and companies. The success and satisfaction of our clients are our imperative and stimulus to move forward in new endeavors.",
    storyParagraph3:
      "Our intention is a healthy living environment in modern living and full social responsibility in work and action.. Always a win-win situation is the one that leads us in the challenges and actions in the country and the world. We are partner-minded and oriented to realize every good idea and useful work into reality. We are open to cooperation in any aspect. For a better tomorrow for all. Our many years of experience show our loyalty and dedication in order to build on it into more successful and beautiful common goods.",
    missionVisionValues: "Our Mission, Vision & Values",
    missionVisionValuesSubtitle: "The principles that guide our operations and define our corporate identity.",
    ourMissionTitle: "Our Mission",
    ourMissionText:
      "To provide innovative, high-quality integrated services that help our clients achieve their goals and overcome challenges in an ever-evolving global marketplace, enabling them to focus on their core business while we take care of their support needs.",
    ourVisionTitle: "Our Vision",
    ourVisionText:
      "To be the preferred global partner for integrated services and rapid response solutions, recognized for our expertise, reliability and commitment to excellence, creating sustainable value for our clients, employees and communities.",
    ourValuesTitle: "Our Values",
    excellence: "Excellence",
    excellenceDesc: "We strive for the highest standards in everything we do.",
    integrity: "Integrity",
    integrityDesc: "We act with honesty, transparency and ethical responsibility.",
    innovation: "Innovation",
    innovationDesc: "We constantly seek new and better ways to solve problems and create value.",
    responsibility: "Responsibility",
    responsibilityDesc: "We take ownership of our actions and their impact on people and the environment.",
    collaboration: "Collaboration",
    collaborationDesc: "We work together with our clients and partners to achieve shared success.",
    leadershipTeam: "Our Leadership Team",
    leadershipTeamSubtitle:
      "Meet the experienced professionals who guide our company's strategic direction and operations.",
    goranName: "Goran Bogatinovski",
    goranTitle: "CEO",
    goranDesc: "Goran drives our technological innovation, developing solutions that enhance our service capabilities.",
    viewFullTeam: "View Full Team",
    joinOurTeam: "Join Our Team",
    joinOurTeamText:
      "We're always looking for talented individuals to join our global team. Explore career opportunities with Impuls International.",
    viewCareers: "View Careers",

       // Underbold page
    underboldSubtitle: "Innovative solutions for ground stabilization & modified asphalt",
    underboldTitle: "Road Construction",
    discoverBenefits: "Discover Benefits",
    officialWebsite: "Official Website",
    theIntelligentWay: "The",
    forGroundStabilization: "Intelligent Way for Ground Stabilization",
    underboldIntro1:
      "UNDERBOLD® is an innovative solution for ground stabilization and modified asphalt, developed by German GreenTec Ecologic. As the official distributor, Impuls International brings this revolutionary technology to the market.",
    underboldIntro2:
      "Our technology provides a cost-effective, environmentally friendly approach to soil stabilization and asphalt modification, offering superior performance and durability compared to traditional methods.",
    ecoFriendly100: "100% Eco-Friendly",
    costEffective: "Cost-Effective",
    timeSaving: "Time-Saving",
    underboldGroundStabilization: "UNDERBOLD Ground Stabilization",
    visitOfficialWebsiteText: "Visit our official website to learn more about UNDERBOLD® technology and applications.",
    whatSpeaksFor: "What Speaks for",
    discoverKeyAdvantages: "Discover the key advantages that make UNDERBOLD® the intelligent choice for your projects",
    environmentalCompatibility: "Environmental Compatibility",
    environmentalCompatibilityDesc:
      "UNDERBOLD® is a purely organic mixture consisting of waxes and oleine with nanotechnology, making it 100% biologically eco-friendly. Environmental sustainability is proven and meets all relevant requirements.",
    superiorPerformance: "Superior Performance",
    superiorPerformanceDesc:
      "The treated soil becomes hydrophobic and agglomerated, with enormous compressive strength when combined with appropriate bonding agents (3-5% cement). UNDERBOLD® increases resilience against aggressive influences and provides near-complete water tightness.",
    costSavings: "Cost Savings",
    costSavingsDesc:
      "Eliminate the need for additional construction materials, reduce transportation costs, and complete projects in less time. When considering all components (material, time, and personnel), cost reductions of up to 30% or more are possible on site.",
    timeEfficiency: "Time Efficiency",
    timeEfficiencyDesc:
      "UNDERBOLD® technology significantly reduces construction time compared to traditional methods. The streamlined process allows for faster project completion without compromising on quality or durability.",
    the: "The",
    process: "Process",
    simpleEfficientProcess: "A simple, efficient process for ground stabilization",
    preparation: "Preparation",
    preparationDesc: "Create a preliminary profile with a grader to prepare the surface for treatment.",
    surfacePreparation: "Surface Preparation",
    millingMixing: "Milling & Mixing",
    millingMixingDesc: "Mill to a depth of 40cm with UNDERBOLD®-POD30 water mixture using a recycler (0.4L per 1m²).",
    millingProcess: "Milling Process",
    initialCompaction: "Initial Compaction",
    initialCompactionDesc: "Perform roller compaction with vibration (1 pass) to adjust to the previous level.",
    cementDistribution: "Cement Distribution",
    cementDistributionDesc: "Distribute cement with a cement spreader, preferably with a suction device.",
    binderMilling: "Binder Milling",
    binderMillingDesc: "Mill the binder with a recycler to integrate it with the UNDERBOLD® mixture.",
    finalCompaction: "Final Compaction",
    finalCompactionDesc:
      "Perform maximum compaction with a roller (min. 16 tons) with multiple passes to achieve optimal density.",
    processNote:
      "Note: The entire process from binder milling to final compaction should be completed within 2 hours for optimal results.",
    downloadProcessGuide: "Download Process Guide",
    downloadTechnologyDescription: "Download Technology Description",
    additional: "Additional",
    benefits: "Benefits",
    additionalBenefitsDesc: "UNDERBOLD® offers numerous advantages over traditional methods",
    waterResistance: "Water Resistance",
    waterResistanceDesc:
      "The treated soil becomes hydrophobic, preventing water ingress and reducing damage from moisture. This significantly extends the lifespan of the base course and reduces maintenance requirements.",
    asphaltRecycling: "Asphalt Recycling",
    asphaltRecyclingDesc:
      "UNDERBOLD® can recycle roads without removing the existing asphalt (up to 10cm), significantly reducing waste and resource consumption while speeding up the construction process.",
    pavementStructureComparison: "Pavement Structure Comparison",
    conventionalStructure: "Conventional Structure",
    surfaceLayer: "Surface layer",
    binderLayer: "Binder layer",
    bituminousBaseCourse: "Bituminous base course",
    bedOfGravel: "Bed of gravel",
    frostLayer: "Frost layer",
    with: "With",
    layer: "layer",
    significantSavings: "Significant savings in time and material due to UNDERBOLD® technology",
    solutionForBetter: "Solution for better asphalt and underground stabilization",
    prPlastSAdditive: "PR PLAST S Additive",
    asphaltModificationTechnology: "Asphalt Modification Technology",
    prPlastSDesc:
      "PR PLAST S® is a polymer compound pre-blended with special bitumen and treated with anti-shrinkage agent, designed to enhance asphalt performance.",
    mainEffectsAdvantages: "Main Effects & Advantages:",
    improvesResistanceRutting: "Significantly improves resistance to rutting (by factor 3-4)",
    increasesStiffnessModulus: "Increases stiffness modulus by approximately 25%",
    improvesResistanceCracking: "Improves resistance to cracking and reflective cracking",
    betterAdhesion: "Better adhesion between aggregates and binder",
    easyToUse: "Easy to use - no need for binder modification plant",
    downloadPRPlastSTechnicalData: "Download PR PLAST S Technical Data",
    technical: "Technical",
    documentation: "Documentation",
    downloadDetailedInformation: "Download detailed information about UNDERBOLD® technology and applications",
    technologyDescription: "Description of the technology",
    technologyDescriptionText:
      "Comprehensive overview of UNDERBOLD® technology, its composition and environmental benefits.",
    applicationProcessGuide: "Application Process Guide",
    applicationProcessGuideText:
      "Step-by-step guide to the UNDERBOLD® application process, including equipment requirements and best practices.",
    technicalData: "Technical Data",
    technicalDataText: "Technical specifications and performance data for PR PLAST S® asphalt modification technology.",
    downloadPDF: "Download PDF",
    readyToTransformProjects: "Ready to Transform Your Construction Projects?",
    contactUsToday:
      "Contact us today to learn how UNDERBOLD® technology can benefit your next project with cost savings, environmental benefits and superior performance.",
    contactOurExperts: "Contact Our Experts",
    visitOfficialWebsite: "Visit Official Website",
  },
  mk: {
    // Navigation
    home: "Почетна",
    about: "За нас",
    services: "Услуги",
    contact: "Контакт",
    contactUs: "Контактирајте нè",

    
    // Contact page
    contactFormIntro:
      "Би сакале да слушнеме од вас. Ве молиме пополнете го формуларот подолу или користете ги нашите контакт информации за да стапите во контакт.",
    firstName: "Име",
    lastName: "Презиме",
    message: "Порака",
    messageHelp: "Како можеме да ви помогнеме?",
    sendMessage: "Испрати порака",
    contactInformation: "Контакт информации",
    address: "Адреса",
    addressLine1: "TЦ Беверли Хилс",
    addressLine2: "1/11",
    addressLine3: "1000, Скопје",
    addressLine4: "Северна Македонија",
    phoneNumber: "+ 389  2 3131 113",
    emailAddress: "info@impuls-international.com",
    businessHours: "Работно време",
    mondayFriday: "Понеделник - Петок:",
    mondayFridayHours: "9:00 - 18:00",
    saturday: "Сабота:",
    saturdayHours: "Затворено",
    sunday: "Недела:",
    closed: "Затворено",
    copyright: "© {year} Импулс Интернационал. Сите права се задржани.",

    // Language toggle
    switchToMacedonian: "МК",
    switchToEnglish: "EN",

    // Hero section
    heroTitle: "ИНСПИРАЦИИ ИНОВАЦИИ",
    learnMore: "Дознајте повеќе",

    // Mission section
    ourMission: "Нашата мисија",
    missionText:
      "Во Импулс Интернационал, ние сме посветени на обезбедување задоволство на клиентите во сите аспекти на нашата работа. Оваа посветеност е централна за нашата корпоративна култура и ја движи нашата страст и решителност да ги исполниме нашите ветувања кон клиентите, да ги цениме луѓето и животната средина, да вклучиме иновативни технологии и да негуваме континуирано подобрување. Им помагаме на нашите клиенти да ги постигнат своите цели преку нудење на сеопфатно портфолио на услуги кое е прилагодено на нивните потреби и дизајнирано да го поддржи нивниот раст и продуктивност.",

    // Services section
    ourServices: "Нашите услуги и решенија",
    servicesText:
      "Обезбедуваме сеопфатен спектар на услуги дизајнирани да ги задоволат различните потреби на нашите глобални клиенти.",

    // Projects section
    featuredProjects: "Истакнати проекти",
    projectsText: "Истражете некои од нашите неодамнешни проекти во различни области на услуги.",
    commercialLED: "Комерцијална LED инсталација",
    commercialLEDDesc: "Енергетски ефикасно решение за осветлување за голем малопродажен синџир",
    viewProject: "Погледнете го проектот",
    officeBuilding: "Комплекс на канцелариски згради",
    officeBuildingDesc: "Модерен канцелариски простор со одржливи карактеристики на дизајн",
    digitalBillboard: "Мрежа на дигитални билборди",
    digitalBillboardDesc: "Решение за рекламирање со висок импакт на примарни урбани локации",
    viewAllProjects: "Погледнете ги сите проекти",

    // Partners section
    ourPartners: "Нашите партнери",
    partnersText: "Соработуваме со водечки брендови и компании за да испорачаме исклучителни решенија.",

    // CTA section
    readyToWork: "Подготвени да работите со нас?",
    ctaText:
      "Контактирајте го нашиот тим денес за да дискутирате како можеме да ги поддржиме вашите бизнис потреби со нашето сеопфатно портфолио на услуги.",
    contactUsButton: "Контактирајте нè",

    // Ego Water page
    egoWaterTitle: "Природна Минерална Вода",
    egoWaterSubtitle: "Премиум квалитет на природна минерална вода со совршен pH баланс",
    exploreProducts: "Истражете ги производите",
    visitOfficialWebsite: "Посетете ја официјалната веб-страница",
    pureNaturalGoodness: "Чиста Природна Добрина",
    egoWaterIntro:
      "Его Вода е премиум природна минерална вода која потекнува од чисти подземни извори. Нашата вода поминува низ природен процес на филтрација низ слоеви на карпи, збогатувајќи ја со есенцијални минерали додека одржува совршена чистота.",
    egoWaterIntro2:
      "Со балансиран pH од 7.1, Его Вода обезбедува оптимална хидратација и освежување за потребите на вашето тело. Секоја шише Его Вода го испорачува чистиот вкус на природата со совршен минерален состав.",
    naturalMinerals: "Природни Минерали",
    perfectPHBalance: "Совршен pH Баланс",
    pureTaste: "Чист Вкус",
    visitOurWebsites: "Посетете ги нашите официјални веб-страници",
    discoverMoreEgo: "Откријте повеќе за Его Вода на нашите официјални веб-страници достапни на повеќе јазици.",
    ourProductRange: "Нашиот асортиман на производи",
    exploreSelection: "Истражете ја нашата селекција на премиум природни минерални води",
    premiumQuality: "Премиум Квалитет",
    details: "Детали",
    egoWaterContains: "Еден литар Его Вода содржи",
    perfectBalanceMinerals: "Совршен баланс на есенцијални минерали за оптимална хидратација",
    mineralComposition: "Минерален состав",
    egoWaterBalanced:
      "Балансираната минерална содржина на Его Вода обезбедува есенцијални хранливи материи кои придонесуваат за вашето целокупно здравје и благосостојба. Со совршен pH од 7.1, нашата вода помага во одржувањето на природниот баланс на вашето тело.",
    benefitsOfEgoWater: "Придобивки од Его Вода",
    whyEgoWater: "Откријте зошто Его Вода е совршен избор за вашите потреби за хидратација",
    perfectPHBalanceTitle: "Совршен pH Баланс",
    perfectPHBalanceDesc:
      "Со pH од 7.1, Его Вода е совршено балансирана за да работи во хармонија со природните pH нивоа на вашето тело, поддржувајќи оптимална хидратација и здравје.",
    essentialMineralsTitle: "Есенцијални Минерали",
    essentialMineralsDesc:
      "Природно збогатена со калциум, магнезиум и други есенцијални минерали кои ги поддржуваат функциите на вашето тело и придонесуваат за целокупната благосостојба.",
    pureNaturalTitle: "Чиста и Природна",
    pureNaturalDesc:
      "Потекнува од заштитени природни извори и филтрирана низ слоеви на карпи, Его Вода е чиста, бистра и без загадувачи.",
    ecoFriendlyPackaging: "Еколошко пакување",
    ecoFriendlyDesc:
      "Во Его Вода, ние сме посветени на еколошката одржливост. Нашите шишиња се дизајнирани да го минимизираат влијанието врз животната средина, истовремено обезбедувајќи квалитет и свежина на нашата вода.",
    recyclableMaterials: "Материјали за рециклирање",
    recyclableMaterialsDesc:
      "Сите наши шишиња се направени од 100% материјали за рециклирање, намалувајќи го отпадот и влијанието врз животната средина.",
    multipleSizes: "Повеќе големини",
    multipleSizesDesc: "Достапни во различни големини од 0.5Л до 1.5Л за да одговараат на различни потреби и прилики.",
    qualitySealed: "Запечатен квалитет",
    qualitySealedDesc: "Нашите безбедни капачиња обезбедуваат свежина и чистота од изворот до консумацијата.",
    experienceNaturalHydration: "Доживејте природна хидратација",
    discoverPureTaste:
      "Откријте го чистиот вкус и совршениот минерален баланс на Его Вода. Достапна кај малопродажбите низ целата земја.",
    findRetailers: "Најдете продавачи",

    // Ego Water products
    egoNaturalMineral033: "Его Природна Минерална Вода 0.33Л",
    egoNaturalMineral033Desc: "Освежувачка природна минерална вода во практично шише од 0.33Л",
    egoNaturalMineral05: "Его Природна Минерална Вода 0.5Л",
    egoNaturalMineral05Desc: "Премиум природна минерална вода во шише од 0.5Л со pH 7.1",
    egoNaturalMineral1: "Его Природна Минерална Вода 1Л",
    egoNaturalMineral1Desc: "Природна минерална вода со совршен минерален баланс во фамилијарно пакување",
    egoSparklingMineral: "Его Газирана Минерална Вода",
    egoSparklingMineralDesc: "Лесно газирана природна минерална вода за освежувачко искуство",

    // Kings Choice page
    kingsChoiceTitle: "King's Choice",
    kingsChoiceSubtitle: "Премиум природни сокови специјално создадени за вашиот кучешки придружник",
    officialDealer: "Официјален дистрибутер за Македонија",
    exploreProducts: "Истражете ги производите",
    visitOfficialWebsite: "Посетете ја официјалната веб-страница",
    naturalGoodness: "Нахранете го вашето куче со природна добрина",
    kingsChoiceIntro:
      "King's Choice нуди премиум квалитет, 100% природни сокови специјално формулирани за кучиња. Како ексклузивен дистрибутер за Македонија, во партнерство со kingschoice.rs, ние ги обезбедуваме овие исклучителни производи директно на македонските сопственици на миленици.",
    kingsChoiceIntro2:
      "Секој сок е развиен од ветеринарни нутриционисти за да обезбеди оптимална исхрана и вкусен вкус што кучињата го сакаат. Без вештачки адитиви, конзерванси и полнители - само чиста, природна добрина.",
    naturalIngredients: "100% Природно",
    noPreservatives: "Без конзерванси",
    vetApproved: "Одобрено од ветеринари",
    officialPartnership: "Официјален дистрибутер за Македонија",
    officialPartnershipText:
      "Импулс Интернационал е горд да биде ексклузивен дистрибутер на производите King's Choice во Македонија, во партнерство со kingschoice.rs",
    productRange: "Нашиот асортиман на производи",
    productRangeSubtitle:
      "Откријте ја нашата колекција на премиум сокови за кучиња, секој внимателно создаден за да обезбеди специфични здравствени придобивки",
    premiumQuality: "Премиум квалитет",
    bestseller: "НАЈПРОДАВАН",
    new: "НОВО",
    viewDetails: "Види детали",
    reviews: "рецензии",
    viewAllProducts: "Погледнете ги сите производи",
    healthBenefits: "Здравствени придобивки",
    benefitsTitle: "Придобивки за вашиот кучешки придружник",
    benefitsSubtitle:
      "Откријте како соковите King's Choice можат да го подобрат здравјето и благосостојбата на вашето куче",
    improvedHeartHealth: "Подобрено здравје на срцето",
    improvedHeartHealthDesc:
      "Нашите сокови содржат природни состојки кои ја поддржуваат кардиоваскуларната функција и го промовираат здравјето на срцето.",
    enhancedImmunity: "Зајакнат имунитет",
    enhancedImmunityDesc:
      "Полни со витамини и антиоксиданси за зајакнување на имунолошкиот систем на вашето куче и природните одбрани.",
    optimalHydration: "Оптимална хидратација",
    optimalHydrationDesc:
      "Поттикнува здрава хидратација со вкусни вкусови кои ги привлекуваат дури и најпребирливите пијачи.",
    digestiveSupport: "Поддршка на дигестивниот систем",
    digestiveSupportDesc:
      "Формулирано со природни пребиотици и дигестивни ензими за поддршка на здравјето на цревата и апсорпцијата на хранливи материи.",
    testimonials: "Сведоштва",
    testimonialsTitle: "Што велат родителите на миленичиња",
    testimonialsSubtitle:
      "Слушнете од сопствениците на кучиња кои го направиле King's Choice дел од секојдневната рутина на нивниот миленик",
    testimonial11:
      "Мојот Златен Ретривер Макс апсолутно го обожава сокот од малини! Забележав значително подобрување на неговото ниво на енергија и сјајот на крзното откако го додадов во неговата исхрана.",
    testimonial1Author: "Сара Л.",
    testimonial1Role: "Сопственик на Златен Ретривер",
    testimonial22:
      "Како ветеринар, многу сум внимателен за тоа што препорачувам за миленичиња. King's Choice се истакнува по своите квалитетни состојки и нутритивни придобивки. Го препорачувам на сите мои клиенти.",
    testimonial2Author: "Д-р Роберт М.",
    testimonial2Role: "Ветеринар",
    testimonial33:
      "Мојот постар Лабрадор се бореше со проблеми со зглобовите. По пробувањето на сокот од боровинки еден месец, забележав дека се движи поудобно и изгледа посреќно. Ви благодарам, King's Choice!",
    testimonial3Author: "Џејмс Т.",
    testimonial3Role: "Сопственик на Лабрадор",
    howToUse: "Како да се сервира",
    howToUseIntro:
      "Соковите King's Choice се дизајнирани да бидат лесни за вклучување во секојдневната рутина на вашето куче. Еве неколку едноставни начини за сервирање на нашите премиум сокови:",
    directServing: "Директно сервирање",
    directServingDesc:
      "Истурете директно во чинијата на вашето куче како освежителен пијалок. Повеќето кучиња го сакаат вкусот!",
    mixWithFood: "Измешајте со храна",
    mixWithFoodDesc:
      "Додадете во редовната храна на вашето куче за да го подобрите вкусот и да ја зголемите нутритивната вредност.",
    frozenTreats: "Замрзнати посластици",
    frozenTreatsDesc: "Замрзнете во калапи за мраз за освежувачки посластици за време на топло време.",
    howToUseNote:
      "Секогаш воведувајте нови производи постепено и консултирајте се со вашиот ветеринар ако вашето куче има специфични потреби за исхрана или здравствени проблеми.",
    faq: "Често поставувани прашања",
    faqTitle: "Често поставувани прашања",
    faqSubtitle: "Најдете одговори на чести прашања за производите King's Choice",
    faq1Question: "Дали соковите King's Choice се безбедни за сите раси на кучиња?",
    faq1Answer:
      "Да, нашите сокови се формулирани да бидат безбедни за сите раси на кучиња. Сепак, како и со секоја промена во исхраната, препорачуваме постепено воведување и консултација со вашиот ветеринар ако вашето куче има специфични здравствени проблеми.",
    faq2Question: "Колку сок треба да му дадам на моето куче?",
    faq2Answer:
      "Големината на порцијата зависи од тежината на вашето куче. Генерално, препорачуваме 30мл на 10кг телесна тежина дневно. Детални упатства за сервирање се обезбедени на етикетата на секој производ.",
    faq3Question: "Дали треба да ги чувам соковите во фрижидер?",
    faq3Answer:
      "Да, нашите сокови треба да се чуваат во фрижидер по отворањето и да се искористат во рок од 7 дена за оптимална свежина и нутритивна вредност.",
    faq4Question: "Дали има вештачки состојки?",
    faq4Answer:
      "Не, соковите King's Choice се 100% природни без вештачки бои, вкусови, конзерванси или засладувачи. Користиме само висококвалитетни состојки погодни за консумација од кучиња.",
    callToAction: "Дајте му на вашето куче кралски третман",
    callToActionSubtitle:
      "Како официјален дистрибутер за King's Choice во Македонија, горди сме што ги донесуваме овие премиум производи на вашите кучешки придружници.",
    shopNow: "Купете сега",
    followUs: "Следете нè",
    raspberryBoost: "Сок од малини",
    raspberryBoostDesc: "Вкусна мешавина од малини полна со антиоксиданси за поддршка на имунитетот и виталноста.",
    pineappleRefresh: "Сок од ананас",
    pineappleRefreshDesc:
      "Сок богат со хранливи материи од ананас за поддршка на дигестивното здравје и обезбедување природни ензими.",
    blueberryAntioxidant: "Антиоксидантен сок од боровинки",
    blueberryAntioxidantDesc:
      "Специјализирана формула со боровинки богати со антиоксиданси за когнитивно здравје и поддршка на имунитетот.",

    // LED Lighting page
    ledLightingTitle: "Официјален дистрибутер на премиум LED брендови за осветлување",
    ledLightingSubtitle: "Донесуваме светски решенија за осветлување за трансформација на вашите простори",
    exploreBrands: "Истражете ги нашите брендови",
    viewReferences: "Погледнете референци",
    whyChooseImpuls: "Зошто да го изберете Импулс за вашите потреби за осветлување",
    whyChooseImpulsSubtitle:
      "Како официјален дистрибутер на светски познати брендови за осветлување, нудиме ненадминато стручно знаење и избор на производи",
    authorizedDealer: "Овластен дистрибутер",
    authorizedDealerDesc:
      "Ние сме официјално овластени дистрибутери за премиум брендови за осветлување, обезбедувајќи ви оригинални производи со целосна гаранција.",
    originalProducts: "Оригинални производи со гаранција од производителот",
    directAccess: "Директен пристап до најновите производи",
    expertConsultation: "Експертска консултација",
    expertConsultationDesc:
      "Нашите специјалисти за осветлување обезбедуваат персонализирани совети за да ви помогнат да го најдете совршеното решение за осветлување за вашиот проект.",
    professionalLightingDesign: "Професионална помош при дизајн на осветлување",
    technicalSpecifications: "Технички спецификации и насоки за компатибилност",
    completeSolutions: "Комплетни решенија",
    completeSolutionsDesc:
      "Од избор на производи до инсталација и одржување, ние обезбедуваме целосни решенија за осветлување.",
    professionalInstallation: "Професионални услуги за инсталација",
    ongoingMaintenance: "Континуирано одржување и поддршка",
    brandPartners: "Нашите премиум партнерски брендови",
    brandPartnersSubtitle:
      "Соработуваме со водечките светски производители на осветлување за да ви ги донесеме најдобрите производи",
    officialWebsite: "Официјална веб-страница",
    viewShowcase: "Погледнете презентација",
    lightingForEverySpace: "Решенија за осветлување за секој простор",
    lightingForEverySpaceSubtitle:
      "Откријте ги нашите специјализирани решенија за осветлување за различни средини и апликации",
    officeCommercial: "Канцелариски и комерцијални",
    officeCommercialDesc: "Создадете продуктивни и удобни средини со нашите канцелариски решенија за осветлување.",
    industrialWarehouse: "Индустриски и магацински",
    industrialWarehouseDesc: "Високоперформансно осветлување за индустриски објекти и магацини.",
    retailHospitality: "Малопродажба и угостителство",
    retailHospitalityDesc:
      "Го подобривме искуството на клиентите во ТИНЕКС, Ројал Хаус, АМЦ Сити Мол и Хотел Алекс Палас.",
    outdoorUrban: "Надворешни и урбани",
    outdoorUrbanDesc: "Осветлете ги надворешните простори со издржливи и ефикасни решенија за осветлување.",
    exploreSolutions: "Истражете решенија",
    benefitsOfLED: "Придобивки од LED осветлување",
    benefitsOfLEDSubtitle: "Откријте зошто LED осветлувањето е паметен избор за модерните бизниси и објекти",
    energyEfficiency: "Енергетска ефикасност",
    energyEfficiencyDesc:
      "LED светлата трошат до 80% помалку енергија од традиционалното осветлување, што резултира со значителни заштеди на трошоци.",
    longLifespan: "Долг животен век",
    longLifespanDesc: "Со животен век до 50.000 часа, LED светлата траат 25 пати подолго од обичните сијалици.",
    superiorQuality: "Супериорен квалитет",
    superiorQualityDesc:
      "LED осветлувањето обезбедува подобро прикажување на бои, контрола на осветленост и визуелна удобност.",
    ecoFriendly: "Еколошки",
    ecoFriendlyDesc:
      "LED светлата не содржат токсични материјали и се 100% рециклирачки, помагајќи да го намалите вашиот јаглероден отпечаток.",
    oliptekShowcase: "Видео презентација на Oliptek LED осветлување",
    oliptekShowcaseSubtitle:
      "Погледнете демонстрациски видеа на Oliptek LED решенија за осветлување во различни апликации",
    featuredPartner: "Истакнат партнер",
    viewOliptekProducts: "Погледнете детали за Oliptek производите",
    references: "Нашите референци",
    referencesSubtitle:
      "Истражете ја нашата обемна листа на успешни LED инсталации за осветлување во различни индустрии",
    completeReferenceList: "Комплетна листа на референци",
    referenceListDesc:
      "Преземете ја нашата сеопфатна листа на референци со преку 170 успешни LED инсталации за осветлување во различни сектори, вклучувајќи комерцијални, индустриски, малопродажни и јавни простори.",
    detailedProductTypes: "Детални типови на производи користени во секоја инсталација",
    clientNamesLocations: "Имиња на клиенти и локации на проекти",
    categorizedByIndustry: "Категоризирани по индустрија и апликација",
    downloadReferenceList: "Преземете листа на референци",
    commercialOffice: "Комерцијални и канцелариски",
    commercialOfficeDesc:
      "Нашите LED решенија ги трансформираа канцелариските простори за клиенти како Алкалоид АД, Сава Осигурување и Шпаркасе Банка.",
    ledPanelsDownlights: "LED панели и вградни светла",
    energyEfficientTubes: "Енергетски ефикасни замени за цевки",
    customLightingDesigns: "Прилагодени дизајни за осветлување",
    industrialManufacturing: "Индустриски и производствени",
    industrialManufacturingDesc:
      "Индустриските клиенти како ФЕНИ, Драекслмаиер и Брако Велес се потпираат на нашите високоперформансни решенија за осветлување.",
    highBayFixtures: "Високи LED светилки",
    waterproofLighting: "Водоотпорно индустриско осветлување",
    explosionProofSolutions: "Решенија отпорни на експлозија",
    retailHospitalityCategory: "Малопродажба и угостителство",
    retailHospitalityDesc:
      "Го подобривме искуството на клиентите во ТИНЕКС, Ројал Хаус, АМЦ Сити Мол и Хотел Алекс Палас.",
    accentDisplayLighting: "Акцентно и изложбено осветлување",
    decorativeLEDFixtures: "Декоративни LED светилки",
    energyEfficientAmbient: "Енергетски ефикасно амбиентално осветлување",
    ourProjects: "Нашите проекти",
    ourProjectsSubtitle: "Погледнете како нашите решенија за осветлување ги трансформираа просторите за нашите клиенти",
    corporateOffice: "Корпоративна канцеларија",
    corporateOfficeDesc:
      "Комплетно решение за осветлување за модерен канцелариски простор со користење на SHEENLY LED панели.",
    industrialWarehouseProject: "Индустриски магацин",
    industrialWarehouseDesc: "Енергетски ефикасна надградба на осветлување за голем дистрибутивен центар.",
    retailShoppingCenter: "Трговски центар",
    retailShoppingCenterDesc:
      "Прилагоден дизајн на осветлување за премиум малопродажна средина што ги подобрува изложбите на производи.",
    viewAllProjects: "Погледнете ги сите проекти",
    readyToTransform: "Подготвени да го трансформирате вашиот простор?",
    readyToTransformSubtitle:
      "Контактирајте го нашиот тим денес за да ги дискутирате вашите потреби за LED осветлување и откријте како можеме да ви помогнеме ефективно да ја достигнете вашата целна публика.",
    scheduleConsultation: "Закажете консултација",
    browseAllProducts: "Прегледајте ги сите производи",

    // Mediterraneo page
    mediterraneoTitle: "Mediterraneo Колекција за Дом",
    mediterraneoSubtitle: "",
    viewCatalog: "Погледнете каталог",
    visitOfficialWebsite: "Посетете ја официјалната веб-страница",
    bringMediterranean: "Донесете го Медитеранот на вашата маса",
    mediterraneoIntro:
      "Mediterraneo нуди прекрасна колекција на автентични медитерански производи за дома кои ја носат топлината, бојата и елеганцијата на медитеранската култура во вашиот дом.",
    mediterraneoIntro2:
      "Нашата колекција вклучува прекрасно изработени послужавници, чинии, чаршафи за маса и други предмети за маса кои го прикажуваат традиционалното медитеранско занаетчиство и дизајн.",
    handcraftedQuality: "Рачно изработен квалитет",
    authenticDesigns: "Автентични дизајни",
    traditionalPatterns: "Традиционални мотиви",
    ourCatalog: "Нашиот каталог",
    catalogSubtitle: "Истражете ја нашата колекција на медитерански производи за дома во нашиот интерактивен каталог",
    catalogTitle: "Mediterraneo Колекција 2025",
    catalogDesc:
      "Откријте го нашиот целосен асортиман на медитерански послужавници, чинии и чаршафи за маса во нашиот интерактивен каталог.",
    openOnlineCatalog: "Отворете онлајн каталог",
    downloadPDF: "Преземете PDF",
    visitOurWebsite: "Посетете ја нашата официјална веб-страница",
    visitWebsiteDesc:
      "Откријте ја нашата целосна колекција на медитерански производи за дома на нашата официјална веб-страница.",
    featuredCollection: "Истакната колекција",
    featuredCollectionSubtitle:
      "Истражете ја нашата селекција на автентични медитерански производи за дома, достапни во ВЕРО маркетите",
    mediterraneanCeramicBowls: "Медитерански керамички чинии",
    mediterraneanCeramicBowlsDesc: "Рачно сликани керамички чинии со традиционални медитерански мотиви",
    decorativeServingTrays: "Декоративни послужавници",
    decorativeServingTraysDesc: "Елегантни послужавници со медитерански инспирирани дизајни",
    patternedTableCloths: "Чаршафи за маса со мотиви",
    patternedTableClothsDesc: "Живописни чаршафи за маса со класични медитерански мотиви",
    availableAtVERO: "Достапно во ВЕРО",
    details: "Детали",
    veroMarkets: "Достапно во ВЕРО маркетите",
    veroMarketsSubtitle:
      "Најдете го нашиот целосен асортиман на Mediterraneo производи за дома во ВЕРО маркетите низ целата земја",
    veroMarketsTitle: "ВЕРО маркети - Нашиот ексклузивен продавач",
    veroMarketsDesc:
      "ВЕРО маркетите се ексклузивен продавач на Mediterraneo производи за дома, нудејќи ја нашата целосна колекција во нивните продавници низ целата земја. Посетете која било ВЕРО локација за да ги откриете нашите премиум медитерански послужавници, чинии и чаршафи за маса.",
    veroMarketsDesc2:
      "ВЕРО маркетите се познати по нивната посветеност на квалитетот и задоволството на клиентите, што ги прави совршен партнер за нашата автентична медитеранска колекција за дома.",
    findMediterraneoAt: "Најдете Mediterraneo на овие ВЕРО локации:",
    findNearestVERO: "Најдете најблиску ВЕРО маркет",
    transformYourHome: "Трансформирајте го вашиот дом со медитерански стил",
    transformYourHomeDesc:
      "Посетете ги ВЕРО маркетите денес за да го откриете нашиот премиум асортиман на Mediterraneo послужавници, чинии и чаршафи за маса.",
    findVEROLocation: "Најдете ВЕРО локација",
    catalogPage: "Страница",
    catalogOf: "од",
    catalogCompleteText: "За целосниот каталог, посетете",
    downloadCatalogPDF: "Преземете PDF",
    mediterraneoTinTrays: "MEDITERRANEO МЕТАЛНИ ПОСЛУЖАВНИЦИ",
    mediterraneoTinBowl: "MEDITERRANEO МЕТАЛНА ЧИНИЈА",
    mediterraneoTableCloth: "MEDITERRANEO 100% ПОЛИЕСТЕРСКИ ЧАРШАФ ЗА МАСА",
    designs: "дизајни",
    assortments: "АСОРТИМАНИ",
    variousSizes: "Различни големини и дизајни",
    veroLocations: "ВЕРО Маркет Локации",

    // Terapot page
    terapotTitle: "Официјален застапник на Terapot",
    terapotSubtitle: "Рачно изработени саксии од фиберглас за безвременска издржливост",
    viewCatalog: "Погледнете каталог",
    visitOfficialWebsite: "Посетете ја официјалната веб-страница",
    terapotIntroTitle: "Овластен застапник",
    terapotIntroText1:
      "Импулс Интернационал е горд да биде официјален застапник на Terapot, премиер производител на висококвалитетни саксии од фиберглас. Како овластен застапник, ние го нудиме целосниот асортиман на Terapot производи со целосна гаранција и поддршка од производителот.",
    terapotIntroText2:
      "Фибергласот е материјал направен од многу фини влакна од стакло, кој се користи во изградбата на бродови, автомобили, морски и воздухопловни објекти. Има одличен сооднос на тежина и јачина и отпорност на сите временски услови, што ги прави саксиите Terapot совршени за внатрешна и надворешна употреба.",
    authorizedDealer: "Овластен застапник",
    officialDealership: "Официјален застапник на Terapot",
    officialDealershipText:
      "Како овластен застапник, ние обезбедуваме оригинални саксии од фиберглас Terapot директно од производителот.",
    terapotEUWebsite: "terapot.eu",
    downloadCatalog: "Преземете каталог",
    productCatalog: "Каталог на производи Terapot",
    productCatalogSubtitle:
      "Прегледајте го нашиот целосен асортиман на премиум саксии од фиберглас со детални спецификации и цени",
    materialFinish: "Материјал и завршница",
    keyFeatures: "Клучни карактеристики",
    weatherResistant: "Отпорни на временски услови",
    uvProtected: "UV заштитени",
    lightweight: "Лесни",
    customizable: "Прилагодливи",
    model: "Модел",
    dimensions: "Димензии",
    volume: "Волумен",
    weight: "Тежина",
    price: "Цена",
    inquire: "Прашајте",
    allTerapotProducts:
      "Сите производи Terapot се изработени од премиум фиберглас (GRP - наутички) со 2k PU завршница и UV заштита. За прилагодени големини, бои или специјални барања, ве молиме контактирајте нè.",
    customSizesColors: "За прилагодени големини, бои или специјални барања, ве молиме контактирајте нè.",
    requestQuote: "Побарајте понуда",
    whyChooseTerapot: "Зошто да изберете Terapot",
    whyChooseTerapotSubtitle: "Откријте што ги прави саксиите од фиберглас Terapot исклучителни",
    superiorDurability: "Супериорна издржливост",
    superiorDurabilityDesc:
      "Саксиите од фиберглас Terapot се исклучително издржливи, со одличен сооднос на тежина и јачина и отпорност на сите временски услови, што ги прави совршени за внатрешна и надворешна употреба.",
    weatherResistantTitle: "Отпорни на временски услови",
    weatherResistantDesc:
      "Фибергласот е отпорен на UV зраци, екстремни температури и влага, обезбедувајќи вашите саксии да го задржат својот изглед и структурен интегритет со години.",
    modernDesign: "Модерен дизајн",
    modernDesignDesc:
      "Саксиите Terapot имаат современи, минималистички дизајни кои го подобруваат секој простор, од урбани покриви до корпоративни лобија и станбени градини.",
    dealershipAdvantages: "Придобивки од купување од овластен застапник",
    dealershipAdvantagesTitle: "Придобивки од купување од овластен застапник",
    authenticProducts: "Автентични производи",
    authenticProductsDesc: "Гарантирани оригинални производи Terapot набавени директно од производителот.",
    fullManufacturerWarranty: "Целосна гаранција од производителот",
    fullManufacturerWarrantyDesc: "Целосна гаранциска покриеност поддржана од Terapot и Импулс Интернационал.",
    expertProductKnowledge: "Експертско познавање на производите",
    expertProductKnowledgeDesc:
      "Нашиот персонал е специјално обучен за сите производи Terapot за да обезбеди експертски совети и поддршка.",
    afterSalesService: "Пост-продажна услуга",
    afterSalesServiceDesc: "Посветена корисничка поддршка и услуги за одржување за сите производи Terapot.",
    experienceTerapotDifference: "Доживејте ја разликата на Terapot",
    experienceTerapotDifferenceText:
      "Посетете го нашиот изложбен салон за да го истражите целосниот асортиман на саксии од фиберглас Terapot или контактирајте нè за повеќе информации.",
    visitOurShowroom: "Посетете го нашиот изложбен салон",

    // Billboards page
    billboardsTitle: "Надворешни Рекламни ",
    billboardsSubtitle: "Решенија за надворешно рекламирање со висок импакт низ целата земја",
    viewOurBillboards: "Погледнете ги нашите билборди",
    maximumVisibility: "Максимална видливост за вашиот бренд",
    billboardsIntroText:
      "Нашите стратешки поставени билборди нудат ненадминато изложување за вашиот бренд низ главните градови и области со голем сообраќај низ целата земја.",
    billboardsIntroText2:
      "Со разновиден спектар на големини, локации и формати, ние обезбедуваме прилагодени решенија за надворешно рекламирање за да ги задоволиме вашите специфични маркетиншки цели и буџетски барања.",
    primeLocations: "Примарни локации",
    highTrafficAreas: "Области со голем сообраќај",
    nationwideCoverage: "Покриеност низ целата земја",
    billboardNetwork: "Нашата мрежа на билборди",
    billboardNetworkSubtitle: "Истражете ја нашата обемна мрежа на премиум локации за билборди низ целата земја",
    premiumHighwayBillboard: "Премиум автопатски билборд",
    highwayBillboardDesc: "Стратешко поставување на најпрометниот автопат во земјата со максимална изложеност",
    highwayMegaBillboard: "Автопатски мега билборд",
    highwayMegaBillboardDesc: "Истакната локација на рид видлива од голема далечина на главниот автопат",
    twoSidedBillboard: "Двостран билборд",
    twoSidedBillboardDesc: "Стратешко поставување на падина видливо од двете насоки на автопатот",
    dayView: "Дневен поглед",
    nightView: "Ноќен поглед",
    illuminated: "Осветлен за 24/7 видливост со драматичен импакт на ноќното небо",
    gevgelijaBillboardDesc:
      "Нашиот билборд во Гевгелија нуди исклучителна видливост од двете насоки на автопатот, со осветлување за 24/7 импакт. Оваа премиум локација им обезбедува на огласувачите максимална изложеност на локалниот и меѓународниот сообраќај кој ја преминува границата.",
    reserveBillboard: "Резервирајте го овој билборд",
    urbanBillboard: "Урбан билборд",
    urbanPassageBillboard: "Урбан пасажен билборд",
    highwayBillboard: "Автопатски билборд",
    requestBillboardAvailability: "Побарајте достапност на билборд",
    nationwideCoverageTitle: "Покриеност низ целата земја",
    nationwideCoverageSubtitle:
      "Нашата обемна мрежа на билборди се протега низ главните градови и клучни локации низ целата земја",
    billboardLocations: "Локации на билборди",
    inquireAboutLocations: "Прашајте за локации",
    billboardSpecifications: "Спецификации на билборди",
    billboardSpecificationsSubtitle:
      "Нудиме различни формати на билборди за да одговараат на вашите потреби за рекламирање",
    standardBillboard: "Стандарден билборд",
    standardBillboardDesc1: "Димензии: 10м x 1.2м",
    standardBillboardDesc2: "Идеален за урбани области",
    standardBillboardDesc3: "Печатени или дигитални опции",
    standardBillboardDesc4: "Поставување со висока видливост",
    ledDigitalBillboard: "LED дигитален билборд",
    ledDigitalBillboardDesc1: "Димензии: 15м x 4м",
    ledDigitalBillboardDesc2: "Приказ на динамична содржина",
    ledDigitalBillboardDesc3: "Повеќекратни ротации на реклами",
    ledDigitalBillboardDesc4: "24/7 осветлување",
    megaBillboard: "Мега билборд",
    megaBillboardDesc1: "Димензии: 20м x 4м",
    megaBillboardDesc2: "Премиум автопатски локации",
    megaBillboardDesc3: "Максимален импакт и видливост",
    megaBillboardDesc4: "Опционални специјални ефекти",
    getPricing: "Дознајте ги цените",
    designServices: "Целосни дизајнерски решенија",
    designServicesText:
      "Нашиот внатрешен дизајнерски тим може да помогне во создавањето на импактни рекламни билборди кои привлекуваат внимание и ефективно ја пренесуваат вашата порака.",
    creativeConceptDevelopment: "Развој на креативен концепт",
    creativeConceptDevelopmentDesc:
      "Нашиот креативен тим ќе развие убедливи концепти кои се усогласени со вашиот бренд и цели.",
    professionalGraphicDesign: "Професионален графички дизајн",
    professionalGraphicDesignDesc:
      "Висококвалитетни дизајнерски услуги за да се осигура дека вашиот билборд се истакнува и привлекува внимание.",
    productionInstallation: "Продукција и инсталација",
    productionInstallationDesc: "Целосна услуга вклучувајќи печатење, продукција и професионална инсталација.",
    learnMoreAboutDesignServices: "Дознајте повеќе за дизајнерските услуги",
    clientSuccessStories: "Успешни приказни на клиенти",
    clientSuccessStoriesSubtitle: "Погледнете што велат нашите клиенти за нивните кампањи за рекламирање на билборди",
    marketingDirector: "Анхоч",
    majorRetailChain: "Ланец за Технологија",
    campaignManager: "Моцарт",
    telecommunicationsCompany: " компанија",
    ceo: "Тиквеш",
    localRestaurantChain: "Локалена винарија",
    testimonial1:
      "Стратешкото поставување на нашите билборди резултираше со 40% зголемување на свесноста за брендот и значително зголемување на посетеноста во нашите продавници. Експертизата и насоките на тимот беа непроценливи.",
    testimonial2:
      "Дигиталните LED билборди обезбедија исклучителна флексибилност за нашата кампања. Можевме да ги ажурираме нашите пораки во реално време и да таргетираме различни публики во текот на денот. Резултатите ги надминаа нашите очекувања.",
    testimonial3:
      "Од концепт до извршување, целиот процес беше беспрекорен. Дизајнерскиот тим создаде извонреден визуелен приказ кој совршено ја доловуваше суштината на нашиот бренд, а локациите на билбордите обезбедија максимална изложеност на нашата целна публика.",
    readyToMakeImpact: "Подготвени да направите импакт?",
    readyToMakeImpactText:
      "Контактирајте го нашиот тим денес за да ги дискутирате вашите потреби за рекламирање на билборди и откријте како можеме да ви помогнеме ефективно да ја достигнете вашата целна публика.",
    phone: "Телефон",
    email: "Е-пошта",
    billboardsEmail: "info@impuls-international.com",
    hoverToSee: "Поминете со глушецот за да видите",

    // Construction page
    buildingConstructionTitle: "Градба и Инвестициски",
    buildingConstructionSubtitle: "Висококвалитетни градежни услуги за станбени и комерцијални згради",
    viewProjects: "Погледнете ги проектите",
    discussYourProject: "Дискутирајте за вашиот проект",
    buildingExcellence: "Градежна Извонредност",
    constructionIntroText:
      "Во Импулс Интернационал, ние се специјализираме за испорака на исклучителни градежни услуги за станбени и комерцијални проекти. Со нашиот искусен тим на архитекти, инженери и градежни професионалци, ние обезбедуваме секој проект да биде завршен според највисоките стандарди за квалитет и мајсторство.",
    constructionIntroText2:
      "Од концепт до завршување, ние работиме блиску со нашите клиенти за да ја разбереме нивната визија и барања, обезбедувајќи иновативни решенија и внимание на детали во секоја фаза од градежниот процес.",
    featuredProjects: "Истакнати Проекти",
    exclusiveResidential: "Ексклузивни станбени згради на примарни локации",
    modernResidentialBuilding: "Модерна станбена зграда на примарна локација",
    onlyExclusiveUnits: "Само 4 ексклузивни станбени единици",
    apartmentSizes: "Големини на станови:",
    features: "Карактеристики:",
    modernArchitecture: "Модерна архитектура",
    premiumFinishes: "Премиум завршници",
    balconiesWithViews: "Балкони со поглед кон градот",
    secureParking: "Безбедно паркирање",
    requestInformation: "Побарајте информации",
    mixedUseBuilding: "Зграда со мешана намена со комерцијални и станбени простори",
    primeLocation: "Примарна градска локација со одлична пристапност",
    buildingFeatures: "Карактеристики на зградата:",
    commercialSpaces: "Комерцијални простори на приземје",
    residentialApartments: "Станбени апартмани на горните катови",
    rooftopTerrace: "Кровна тераса со панорамски поглед",
    modernDesignMaterials: "Модерен дизајн со премиум материјали",
    floorPlans: "Планови на катови",
    exploreLayouts: "Истражете ги внимателно дизајнираните распореди на нашите станбени единици",
    bedrooms: "Спални соби",
    livingRoom: "Дневна соба",
    kitchenDining: "Кујна и трпезарија",
    balcony: "Балкон",
    spaciousLivingRoom: "Пространа дневна соба",
    balconies: "Балкони",
    largeLivingRoom: "Голема дневна соба",
    bathrooms: "Бањи",
    largeBalcony: "Голем балкон",
    interestedInConstruction: "Заинтересирани за нашите градежни услуги?",
    constructionServicesText:
      "Без разлика дали сакате да купите имот или ви требаат градежни услуги за вашиот проект, нашиот тим е подготвен да ви помогне. Контактирајте нè денес за да ги дискутирате вашите барања.",
    phone: "Телефон",
    email: "Е-пошта",

    // Multisit page
    multisitHeroAlt: "Мултисит урбан мебел",
    multisitHeroSubtitle: "Иновативен урбан мебел кој комбинира седење со можности за рекламирање",
    multisitTagline: "Седи. Огради. Рекламирај.",
    multisitIntro:
      "Мултисит нуди генијално едноставно решение за урбани простори - комбинирајќи удобно седење со ефективни можности за рекламирање. Како официјален партнер на Мултисит, Импулс Интернационал ги донесува овие иновативни производи на нашите клиенти.",
    keyBenefits: "Клучни придобивки",
    multisitBenefit1: "Двојна функционалност: практично седење и рекламирање со висока видливост",
    multisitBenefit2: "Отпорна на временски услови, издржлива конструкција за долгорочна надворешна употреба",
    multisitBenefit3: "Прилагодливи рекламни панели за таргетирани пораки",
    multisitBenefit4: "Совршен за транзитни области, паркови, трговски центри и јавни простори",
    multisitBenefit5: "Ги подобрува урбаните средини додека обезбедува вреден рекламен простор",
    applications: "Апликации",
    publicTransitAreas: "Области за јавен транспорт",
    publicTransitAreasDesc: "Автобуски постојки, железнички станици, аеродроми и други транзитни центри",
    commercialSpaces: "Комерцијални простори",
    commercialSpacesDesc: "Трговски центри, малопродажни паркови и бизнис дистрикти",
    publicParks: "Јавни паркови",
    publicParksDesc: "Урбани паркови, рекреативни области и пешачки патеки",
    educationalInstitutions: "Образовни институции",
    educationalInstitutionsDesc: "Универзитетски кампуси, училишта и образовни објекти",
    officialPartner: "Официјален партнер",
    multisitPartnerDesc:
      "Импулс Интернационал е горд да биде официјален партнер на Мултисит. Ние обезбедуваме целосна консултација, инсталација и услуги за одржување за сите производи на Мултисит.",
    visitMultisitWebsite: "Посетете ја веб-страницата на Мултисит",
    multisitContactDesc:
      "Заинтересирани за производите на Мултисит? Контактирајте го нашиот тим за повеќе информации, цени и детали за инсталација.",
    impulsHeadquarters: "Седиште на Импулс Интернационал",
    whyChooseMultisit: "Зошто да изберете Мултисит?",
    multisitReason1: "Иновативен дизајн кој служи за повеќе намени",
    multisitReason2: "Висококвалитетни материјали обезбедуваат долговечност",
    multisitReason3: "Ефективен рекламен простор со висока видливост",
    multisitReason4: "Ги подобрува јавните простори додека обезбедува вредност",
    multisitReason5: "Професионална инсталација и одржување",

    // About page
    aboutTitle: "За Импулс Интернационал",
    aboutSubtitle: "Испорачуваме извонредност во интегрирани услуги ширум светот",
    ourStory: "Нашата Приказна",
    storyParagraph1:
      "Импулс Интернатионал ДОО е компанија која е формирана 1991 година во целосна приватна сопственост. Ние сме фамилијарна компанија која одгворно и посветено се труди да ги здоволи барањата на своите клиенти во областите кои ги работиме од широк опсег. Фирмата е активна и успешна во повеќе категории на бизниси и делувања за што детално е презентирано во оваа наша веб презентација.",
    storyParagraph2:
      "Целта е да развиваме секогаш нови модерни иновативни и инспиративни решенија и услуги достапни за сите категории на луѓе и компании Успехот и задоволството на нашите клиенти се наш императив и стимул да одиме напред во нови подвизи.",
    storyParagraph3:
    "Нашата интенција е здрава животна средина во модерното живеење и целосна општествена одговорност во работењето и делувањето.. Секогаш вин-вин ситуацијата е таа која не води во предизвиците и делувањата во земјата и светот. Партнерски сме настроени и ориентирани за секоја добра идеја и корисна работа да ја реализираме во стварност.Отворени сме за соработка за било кој аспект.за подобро утре на сите.Долгогодишното искуство ја покажува нашата лојалност и посветеност со цел да се надгради во поуспешни и поубави општи добра.",
    missionVisionValues: "Нашата Мисија, Визија и Вредности",
    missionVisionValuesSubtitle:
      "Принципите кои ги водат нашите операции и го дефинираат нашиот корпоративен идентитет.",
    ourMissionTitle: "Нашата Мисија",
    ourMissionText:
      "Да обезбедиме иновативни, висококвалитетни интегрирани услуги кои им помагаат на нашите клиенти да ги постигнат своите цели и да ги надминат предизвиците во постојано еволуирачкиот глобален пазар, овозможувајќи им да се фокусираат на нивниот основен бизнис додека ние се грижиме за нивните потреби за поддршка.",
    ourVisionTitle: "Нашата Визија",
    ourVisionText:
      "Да бидеме преферираниот глобален партнер за интегрирани услуги и решенија за брз одговор, препознаени по нашата експертиза, сигурност и посветеност на извонредност, создавајќи одржлива вредност за нашите клиенти, вработени и заедници.",
    ourValuesTitle: "Нашите Вредности",
    excellence: "Извонредност",
    excellenceDesc: "Се стремиме кон највисоките стандарди во сè што правиме.",
    integrity: "Интегритет",
    integrityDesc: "Дејствуваме со чесност, транспарентност и етичка одговорност.",
    innovation: "Иновација",
    innovationDesc: "Постојано бараме нови и подобри начини за решавање на проблеми и создавање на вредност.",
    responsibility: "Одговорност",
    responsibilityDesc: "Преземаме сопственост на нашите постапки и нивното влијание врз луѓето и животната средина.",
    collaboration: "Соработка",
    collaborationDesc: "Работиме заедно со нашите клиенти и партнери за да постигнеме заеднички успех.",
    leadershipTeam: "Нашиот Лидерски Тим",
    leadershipTeamSubtitle:
      "Запознајте ги искусните професионалци кои ја водат стратешката насока и операциите на нашата компанија.",
    goranName: "Горан Богатиновски",
    goranTitle: "Извршен Директор",
    goranDesc:
      "Горан ја води нашата технолошка иновација, развивајќи решенија кои ги подобруваат нашите способности за услуги.",
    viewFullTeam: "Погледнете го целиот тим",
    joinOurTeam: "Придружете се на нашиот тим",
    joinOurTeamText:
      "Секогаш бараме талентирани поединци да се придружат на нашиот глобален тим. Истражете ги можностите за кариера со Импулс Интернационал.",
    viewCareers: "Погледнете кариери",

     // Underbold page
    underboldSubtitle: "Иновативни решенија за стабилизација на почва и модифициран асфалт",
    underboldTitle: "Изведба на патишта",
    discoverBenefits: "Откријте ги придобивките",
    officialWebsite: "Официјална веб-страница",
    theIntelligentWay: "Интелигентниот",
    forGroundStabilization: "начин за стабилизација на почвата",
    underboldIntro1:
      "UNDERBOLD® е иновативно решение за стабилизација на почва и модифициран асфалт, развиено од German GreenTec Ecologic. Како официјален дистрибутер, Импулс Интернационал ја донесува оваа револуционерна технологија на пазарот.",
    underboldIntro2:
      "Нашата технологија обезбедува економичен, еколошки пристап кон стабилизација на почвата и модификација на асфалтот, нудејќи супериорни перформанси и издржливост во споредба со традиционалните методи.",
    ecoFriendly100: "100% Еколошки",
    costEffective: "Економично",
    timeSaving: "Заштеда на време",
    underboldGroundStabilization: "UNDERBOLD стабилизација на почва",
    visitOfficialWebsiteText:
      "Посетете ја нашата официјална веб-страница за да дознаете повеќе за технологијата и апликациите на UNDERBOLD®.",
    whatSpeaksFor: "Што зборува за",
    discoverKeyAdvantages:
      "Откријте ги клучните предности што го прават UNDERBOLD® интелигентен избор за вашите проекти",
    environmentalCompatibility: "Еколошка компатибилност",
    environmentalCompatibilityDesc:
      "UNDERBOLD® е чисто органска мешавина составена од восоци и олеин со нанотехнологија, што го прави 100% биолошки еколошки. Еколошката одржливост е докажана и ги исполнува сите релевантни барања.",
    superiorPerformance: "Супериорни перформанси",
    superiorPerformanceDesc:
      "Третираната почва станува хидрофобна и агломерирана, со огромна компресивна сила кога се комбинира со соодветни врзувачки агенси (3-5% цемент). UNDERBOLD® ја зголемува отпорноста против агресивни влијанија и обезбедува речиси целосна водонепропустливост.",
    costSavings: "Заштеда на трошоци",
    costSavingsDesc:
      "Елиминирајте ја потребата за дополнителни градежни материјали, намалете ги трошоците за транспорт и завршете ги проектите за помалку време. Кога ќе се земат предвид сите компоненти (материјал, време и персонал), можни се намалувања на трошоците до 30% или повеќе на самото место.",
    timeEfficiency: "Временска ефикасност",
    timeEfficiencyDesc:
      "Технологијата UNDERBOLD® значително го намалува времето за изградба во споредба со традиционалните методи. Рационализираниот процес овозможува побрзо завршување на проектот без да се загрози квалитетот или издржливоста.",
    the: "UNDERBOLD®",
    process: "Процес",
    simpleEfficientProcess: "Едноставен, ефикасен процес за стабилизација на почвата",
    preparation: "Подготовка",
    preparationDesc: "Создадете прелиминарен профил со грејдер за да ја подготвите површината за третман.",
    surfacePreparation: "Подготовка на површината",
    millingMixing: "Мелење и мешање",
    millingMixingDesc:
      "Мелете до длабочина од 40 см со мешавина на вода UNDERBOLD®-POD30 користејќи рециклатор (0,4 л на 1м²).",
    millingProcess: "Процес на мелење",
    initialCompaction: "Иницијална компакција",
    initialCompactionDesc:
      "Изведете компакција со валјак со вибрации (1 премин) за да се прилагодите на претходното ниво.",
    cementDistribution: "Дистрибуција на цемент",
    cementDistributionDesc: "Дистрибуирајте цемент со распрскувач на цемент, по можност со уред за вшмукување.",
    binderMilling: "Мелење на врзивото",
    binderMillingDesc: "Мелете го врзивото со рециклатор за да го интегрирате со мешавината UNDERBOLD®.",
    finalCompaction: "Финална компакција",
    finalCompactionDesc:
      "Изведете максимална компакција со валјак (мин. 16 тони) со повеќе премини за да постигнете оптимална густина.",
    processNote:
      "Забелешка: Целиот процес од мелење на врзивото до финалната компакција треба да се заврши во рок од 2 часа за оптимални резултати.",
    downloadProcessGuide: "Преземете водич за процесот",
    downloadTechnologyDescription: "Преземете опис на технологијата",
    additional: "Дополнителни",
    benefits: "Придобивки",
    additionalBenefitsDesc: "UNDERBOLD® нуди бројни предности во споредба со традиционалните методи",
    waterResistance: "Отпорност на вода",
    waterResistanceDesc:
      "Третираната почва станува хидрофобна, спречувајќи навлегување на вода и намалувајќи ги оштетувањата од влага. Ова значително го продолжува животниот век на основниот курс и ги намалува барањата за одржување.",
    asphaltRecycling: "Рециклирање на асфалт",
    asphaltRecyclingDesc:
      "UNDERBOLD® може да рециклира патишта без да го отстрани постоечкиот асфалт (до 10 см), значително намалувајќи го отпадот и потрошувачката на ресурси, истовремено забрзувајќи го процесот на изградба.",
    pavementStructureComparison: "Споредба на структурата на коловозот",
    conventionalStructure: "Конвенционална структура",
    surfaceLayer: "Површински слој",
    binderLayer: "Врзувачки слој",
    bituminousBaseCourse: "Битуменски основен курс",
    bedOfGravel: "Слој од чакал",
    frostLayer: "Мразен слој",
    with: "Со",
    layer: "слој",
    significantSavings: "Значителни заштеди на време и материјал благодарение на технологијата UNDERBOLD®",
    solutionForBetter: "Решение за подобар асфалт и подземна стабилизација",
    prPlastSAdditive: "PR PLAST S адитив",
    asphaltModificationTechnology: "Технологија за модификација на асфалт",
    prPlastSDesc:
      "PR PLAST S® е полимерно соединение претходно измешано со специјален битумен и третирано со агенс против собирање, дизајнирано да ги подобри перформансите на асфалтот.",
    mainEffectsAdvantages: "Главни ефекти и предности:",
    improvesResistanceRutting: "Значително ја подобрува отпорноста на колотраги (за фактор 3-4)",
    increasesStiffnessModulus: "Го зголемува модулот на крутост за приближно 25%",
    improvesResistanceCracking: "Ја подобрува отпорноста на пукање и рефлективно пукање",
    betterAdhesion: "Подобра адхезија помеѓу агрегатите и врзивото",
    easyToUse: "Лесен за употреба - нема потреба од постројка за модификација на врзивото",
    downloadPRPlastSTechnicalData: "Преземете технички податоци за PR PLAST S",
    technical: "Техничка",
    documentation: "Документација",
    downloadDetailedInformation: "Преземете детални информации за технологијата и апликациите на UNDERBOLD®",
    technologyDescription: "Опис на технологијата",
    technologyDescriptionText:
      "Сеопфатен преглед на технологијата UNDERBOLD®, нејзиниот состав и еколошките придобивки.",
    applicationProcessGuide: "Водич за процесот на апликација",
    applicationProcessGuideText:
      "Чекор по чекор водич за процесот на апликација на UNDERBOLD®, вклучувајќи барања за опрема и најдобри практики.",
    technicalData: "Технички податоци",
    technicalDataText:
      "Технички спецификации и податоци за перформансите за технологијата за модификација на асфалт PR PLAST S®.",
    downloadPDF: "Преземете PDF",
    readyToTransformProjects: "Подготвени да ги трансформирате вашите градежни проекти?",
    contactUsToday:
      "Контактирајте нè денес за да дознаете како технологијата UNDERBOLD® може да му користи на вашиот следен проект со заштеда на трошоци, еколошки придобивки и супериорни перформанси.",
    contactOurExperts: "Контактирајте ги нашите експерти",
    visitOfficialWebsite: "Посетете ја официјалната веб-страница",

  },
}

// Helper function to get a translation
export function getTranslation(language: Language, key: string): string {
  return translations[language][key] || key
}
