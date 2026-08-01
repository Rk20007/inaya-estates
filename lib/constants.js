import {
  TrendingUp,
  Factory,
  Navigation,
  LineChart,
  Users,
  ShieldCheck,
  Landmark,
  BadgeCheck,
  Scale,
  FileCheck2,
  Headphones,
  Handshake,
  MapPinned,
  CalendarSearch,
  Eye,
  Warehouse,
  Building2,
  Route,
  Home,
  Store,
  School,
  Hospital,
  Rocket,
  ClipboardCheck,
  Ruler as RulerIcon,
} from "lucide-react";

export const navLinks = [
  { label: { en: "Home", hi: "होम" }, href: "#home" },
  { label: { en: "About", hi: "हमारे बारे में" }, href: "#about" },
  { label: { en: "Why Invest", hi: "निवेश क्यों करें" }, href: "#why-invest" },
  { label: { en: "Locations", hi: "लोकेशन" }, href: "#locations" },
  { label: { en: "Services", hi: "सेवाएं" }, href: "#services" },
  { label: { en: "Testimonials", hi: "प्रशंसापत्र" }, href: "#testimonials" },
  { label: { en: "FAQ", hi: "सामान्य प्रश्न" }, href: "#faq" },
  { label: { en: "Contact", hi: "संपर्क करें" }, href: "#contact" },
];

export const whyInvestPoints = [
  {
    icon: Navigation,
    title: { en: "Delhi–Mumbai Expressway", hi: "दिल्ली–मुंबई एक्सप्रेसवे" },
    description: {
      en: "Direct access to India's longest expressway is compressing travel time to Delhi and JNPT Mumbai, unlocking land value along the corridor.",
      hi: "भारत के सबसे लंबे एक्सप्रेसवे तक सीधी पहुंच दिल्ली और JNPT मुंबई की यात्रा के समय को कम कर रही है, जिससे कॉरिडोर पर भूमि का मूल्य बढ़ रहा है।",
    },
  },
  {
    icon: Factory,
    title: { en: "RIICO Industrial Belt", hi: "RIICO औद्योगिक पट्टी" },
    description: {
      en: "Notified RIICO industrial areas across Bhiwadi, Tapukara, Khushkhera and Neemrana are drawing manufacturing majors and ancillary units.",
      hi: "भिवाड़ी, टपूकड़ा, खुशखेड़ा और नीमराना में अधिसूचित RIICO औद्योगिक क्षेत्र बड़ी मैन्युफैक्चरिंग कंपनियों और सहायक इकाइयों को आकर्षित कर रहे हैं।",
    },
  },
  {
    icon: Rocket,
    title: { en: "Rapid Infrastructure Development", hi: "तेज़ बुनियादी ढांचा विकास" },
    description: {
      en: "New highways, water and power infrastructure, and civic amenities are being rolled out at pace across the corridor.",
      hi: "नए हाईवे, पानी व बिजली की सुविधाएं और नागरिक सुविधाएं पूरे कॉरिडोर में तेज़ी से विकसित हो रही हैं।",
    },
  },
  {
    icon: TrendingUp,
    title: { en: "Industrial Expansion", hi: "औद्योगिक विस्तार" },
    description: {
      en: "Japanese, Korean and domestic industrial parks continue to expand, creating sustained demand for housing, warehousing and land.",
      hi: "जापानी, कोरियाई और घरेलू औद्योगिक पार्क लगातार बढ़ रहे हैं, जिससे आवास, वेयरहाउसिंग और भूमि की मांग बनी हुई है।",
    },
  },
  {
    icon: MapPinned,
    title: { en: "Excellent Connectivity", hi: "बेहतरीन कनेक्टिविटी" },
    description: {
      en: "NH-48, KMP Expressway and the upcoming Delhi–Alwar RRTS place this corridor within an hour of Gurugram and South Delhi.",
      hi: "NH-48, KMP एक्सप्रेसवे और आगामी दिल्ली–अलवर RRTS इस कॉरिडोर को गुरुग्राम और साउथ दिल्ली से एक घंटे की दूरी पर रखते हैं।",
    },
  },
  {
    icon: Home,
    title: { en: "Residential Growth", hi: "आवासीय विकास" },
    description: {
      en: "A rising workforce and ancillary industries are fuelling demand for gated townships and residential plots across the belt.",
      hi: "बढ़ता कार्यबल और सहायक उद्योग इस पूरी पट्टी में गेटेड टाउनशिप और रेसिडेंशियल प्लॉट्स की मांग को बढ़ा रहे हैं।",
    },
  },
  {
    icon: LineChart,
    title: { en: "High Appreciation Potential", hi: "उच्च मूल्यवृद्धि की संभावना" },
    description: {
      en: "Land parcels near notified industrial zones have historically outpaced NCR averages as infrastructure and industry mature together.",
      hi: "अधिसूचित औद्योगिक क्षेत्रों के पास की भूमि ने ऐतिहासिक रूप से NCR के औसत से बेहतर प्रदर्शन किया है, क्योंकि बुनियादी ढांचा और उद्योग साथ-साथ विकसित होते हैं।",
    },
  },
  {
    icon: Building2,
    title: { en: "Future Smart City Development", hi: "भविष्य का स्मार्ट सिटी विकास" },
    description: {
      en: "Planned smart city and township initiatives across the belt are set to bring integrated infrastructure and civic amenities.",
      hi: "इस पट्टी में नियोजित स्मार्ट सिटी और टाउनशिप पहलें एकीकृत बुनियादी ढांचा और नागरिक सुविधाएं लाने वाली हैं।",
    },
  },
  {
    icon: ShieldCheck,
    title: { en: "Safe Long-Term Investment", hi: "सुरक्षित दीर्घकालिक निवेश" },
    description: {
      en: "Title-verified land backed by legal due diligence and transparent consultation reduces risk for long-term investors.",
      hi: "कानूनी जांच और पारदर्शी परामर्श के साथ टाइटल-सत्यापित भूमि दीर्घकालिक निवेशकों के लिए जोखिम को कम करती है।",
    },
  },
];

export const growthCorridorHighlights = [
  { icon: Factory, label: { en: "Industrial Parks", hi: "औद्योगिक पार्क" } },
  { icon: Warehouse, label: { en: "Warehouses", hi: "वेयरहाउस" } },
  { icon: Building2, label: { en: "Factories", hi: "फैक्ट्रियां" } },
  { icon: Route, label: { en: "Expressways", hi: "एक्सप्रेसवे" } },
  { icon: Home, label: { en: "Residential Projects", hi: "रेसिडेंशियल प्रोजेक्ट्स" } },
  { icon: Store, label: { en: "Commercial Development", hi: "कमर्शियल डेवलपमेंट" } },
  { icon: School, label: { en: "Schools", hi: "स्कूल" } },
  { icon: Hospital, label: { en: "Hospitals", hi: "अस्पताल" } },
  { icon: Rocket, label: { en: "Future Infrastructure", hi: "भविष्य का बुनियादी ढांचा" } },
];

export const locations = [
  {
    slug: "bhiwadi",
    name: { en: "Bhiwadi", hi: "भिवाड़ी" },
    state: { en: "Rajasthan", hi: "राजस्थान" },
    image:
      "https://images.unsplash.com/photo-1513257805917-a0da1146eb15?auto=format&fit=crop&w=1200&q=80",
    description: {
      en: "Rajasthan's largest industrial township, home to thousands of manufacturing units and a fast-expanding residential belt along NH-48.",
      hi: "राजस्थान का सबसे बड़ा औद्योगिक टाउनशिप, जहां हजारों मैन्युफैक्चरिंग इकाइयां हैं और NH-48 के साथ तेज़ी से बढ़ता रेसिडेंशियल क्षेत्र है।",
    },
    highlights: [
      { en: "RIICO Industrial Area", hi: "RIICO औद्योगिक क्षेत्र" },
      { en: "NH-48 Frontage", hi: "NH-48 फ्रंटेज" },
      { en: "Established Township", hi: "स्थापित टाउनशिप" },
    ],
  },
  {
    slug: "tijara",
    name: { en: "Tijara", hi: "तिजारा" },
    state: { en: "Rajasthan", hi: "राजस्थान" },
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    description: {
      en: "A heritage town emerging as an affordable investment hub with new industrial notifications and highway-linked agricultural land.",
      hi: "एक ऐतिहासिक शहर जो नई औद्योगिक अधिसूचनाओं और हाईवे से जुड़ी कृषि भूमि के साथ एक किफायती निवेश केंद्र के रूप में उभर रहा है।",
    },
    highlights: [
      { en: "Emerging Industrial Zone", hi: "उभरता औद्योगिक क्षेत्र" },
      { en: "Affordable Entry Price", hi: "किफायती प्रवेश मूल्य" },
      { en: "Alwar District", hi: "अलवर जिला" },
    ],
  },
  {
    slug: "tapukara",
    name: { en: "Tapukara", hi: "टपूकड़ा" },
    state: { en: "Rajasthan", hi: "राजस्थान" },
    image:
      "https://images.unsplash.com/photo-1726776230760-ae81dc9d4e55?auto=format&fit=crop&w=1200&q=80",
    description: {
      en: "Anchored by Japanese and Korean industrial parks, Tapukara offers strong long-term appreciation potential for land investors.",
      hi: "जापानी और कोरियाई औद्योगिक पार्कों के सहारे, टपूकड़ा भूमि निवेशकों के लिए मजबूत दीर्घकालिक मूल्यवृद्धि की संभावना प्रदान करता है।",
    },
    highlights: [
      { en: "Japanese Zone (NICDIT)", hi: "जापानी ज़ोन (NICDIT)" },
      { en: "Warehousing Demand", hi: "वेयरहाउसिंग मांग" },
      { en: "Delhi-Mumbai Expressway Access", hi: "दिल्ली-मुंबई एक्सप्रेसवे पहुंच" },
    ],
  },
  {
    slug: "khushkhera",
    name: { en: "Khushkhera", hi: "खुशखेड़ा" },
    state: { en: "Rajasthan", hi: "राजस्थान" },
    image:
      "https://images.unsplash.com/photo-1665891315290-8cab401d184d?auto=format&fit=crop&w=1200&q=80",
    description: {
      en: "Home to global auto and electronics manufacturers, Khushkhera is one of the corridor's fastest-appreciating industrial micro-markets.",
      hi: "वैश्विक ऑटो और इलेक्ट्रॉनिक्स निर्माताओं का घर, खुशखेड़ा कॉरिडोर के सबसे तेज़ी से बढ़ने वाले औद्योगिक बाजारों में से एक है।",
    },
    highlights: [
      { en: "Auto & Electronics Hub", hi: "ऑटो व इलेक्ट्रॉनिक्स हब" },
      { en: "Skilled Workforce Inflow", hi: "कुशल कार्यबल का आगमन" },
      { en: "Rising Land Values", hi: "बढ़ते भूमि मूल्य" },
    ],
  },
  {
    slug: "neemrana",
    name: { en: "Neemrana", hi: "नीमराना" },
    state: { en: "Rajasthan", hi: "राजस्थान" },
    image:
      "https://images.unsplash.com/photo-1591468309273-776263e4aeb0?auto=format&fit=crop&w=1200&q=80",
    description: {
      en: "The corridor's flagship investment destination with the Japanese Investment Zone, a growing tourism belt, and premium residential townships.",
      hi: "जापानी निवेश क्षेत्र, बढ़ते पर्यटन क्षेत्र और प्रीमियम रेसिडेंशियल टाउनशिप के साथ कॉरिडोर का प्रमुख निवेश स्थल।",
    },
    highlights: [
      { en: "Japanese Investment Zone", hi: "जापानी निवेश क्षेत्र" },
      { en: "Tourism & Hospitality", hi: "पर्यटन व आतिथ्य" },
      { en: "Premium Townships", hi: "प्रीमियम टाउनशिप" },
    ],
  },
  {
    slug: "kishangarh-bas",
    name: { en: "Kishangarh Bas", hi: "किशनगढ़ बास" },
    state: { en: "Rajasthan", hi: "राजस्थान" },
    image:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=80",
    description: {
      en: "A quieter agricultural and farmland belt gaining traction as the corridor's industrial core expands outward along the highway.",
      hi: "एक शांत कृषि और फार्मलैंड क्षेत्र जो कॉरिडोर के औद्योगिक केंद्र के हाईवे के साथ बाहर की ओर बढ़ने से गति पकड़ रहा है।",
    },
    highlights: [
      { en: "Agricultural Land", hi: "कृषि भूमि" },
      { en: "Farm House Plots", hi: "फार्म हाउस प्लॉट्स" },
      { en: "Low Entry Cost", hi: "कम प्रवेश लागत" },
    ],
  },
];

export const services = [
  {
    icon: Building2,
    title: { en: "Buy Land", hi: "ज़मीन खरीदें" },
    description: {
      en: "Guided assistance in identifying and acquiring verified land that matches your goals.",
      hi: "आपके लक्ष्यों से मेल खाने वाली सत्यापित भूमि खोजने और प्राप्त करने में मार्गदर्शित सहायता।",
    },
  },
  {
    icon: Handshake,
    title: { en: "Sell Land", hi: "ज़मीन बेचें" },
    description: {
      en: "End-to-end support to market and sell your land at the right price to serious buyers.",
      hi: "आपकी भूमि को गंभीर खरीदारों को सही कीमत पर मार्केट और बेचने के लिए संपूर्ण सहायता।",
    },
  },
  {
    icon: Headphones,
    title: { en: "Investment Consultation", hi: "निवेश परामर्श" },
    description: {
      en: "Data-backed advisory on where and when to invest across the growth corridor.",
      hi: "ग्रोथ कॉरिडोर में कहां और कब निवेश करें, इस पर डेटा-आधारित सलाह।",
    },
  },
  {
    icon: CalendarSearch,
    title: { en: "Site Visit", hi: "साइट विज़िट" },
    description: {
      en: "Guided, no-obligation site visits organised at your convenience.",
      hi: "आपकी सुविधा अनुसार आयोजित मार्गदर्शित, बिना किसी बाध्यता वाली साइट विज़िट।",
    },
  },
  {
    icon: Scale,
    title: { en: "Legal Verification", hi: "कानूनी सत्यापन" },
    description: {
      en: "Independent legal review of title, conversion status and encumbrance.",
      hi: "टाइटल, कन्वर्ज़न स्टेटस और एनकम्ब्रेंस की स्वतंत्र कानूनी समीक्षा।",
    },
  },
  {
    icon: FileCheck2,
    title: { en: "Documentation Support", hi: "दस्तावेज़ीकरण सहायता" },
    description: {
      en: "Complete assistance with sale deeds, mutation and registry paperwork.",
      hi: "सेल डीड, म्यूटेशन और रजिस्ट्री कागज़ी कार्रवाई में पूर्ण सहायता।",
    },
  },
  {
    icon: RulerIcon,
    title: { en: "Agricultural Land", hi: "कृषि भूमि" },
    description: {
      en: "Fertile, well-located agricultural land parcels across the corridor.",
      hi: "कॉरिडोर में उपजाऊ, अच्छी लोकेशन वाली कृषि भूमि।",
    },
  },
  {
    icon: Home,
    title: { en: "Residential Plots", hi: "रेसिडेंशियल प्लॉट्स" },
    description: {
      en: "Gated township and standalone residential plots for end-use or investment.",
      hi: "उपयोग या निवेश के लिए गेटेड टाउनशिप और स्वतंत्र रेसिडेंशियल प्लॉट्स।",
    },
  },
  {
    icon: Store,
    title: { en: "Commercial Land", hi: "कमर्शियल भूमि" },
    description: {
      en: "Highway-facing and high-footfall commercial land for business development.",
      hi: "व्यवसाय विकास के लिए हाईवे किनारे और अधिक फुटफॉल वाली कमर्शियल भूमि।",
    },
  },
  {
    icon: Factory,
    title: { en: "Industrial Land", hi: "औद्योगिक भूमि" },
    description: {
      en: "RIICO-approved and notified industrial land for manufacturing and warehousing.",
      hi: "मैन्युफैक्चरिंग और वेयरहाउसिंग के लिए RIICO-अनुमोदित और अधिसूचित औद्योगिक भूमि।",
    },
  },
  {
    icon: ClipboardCheck,
    title: { en: "Property Valuation", hi: "प्रॉपर्टी वैल्यूएशन" },
    description: {
      en: "Fair, market-linked valuation to help you make an informed decision.",
      hi: "सही निर्णय लेने में मदद के लिए उचित, बाज़ार से जुड़ा मूल्यांकन।",
    },
  },
];

export const whyChooseUs = [
  {
    icon: BadgeCheck,
    title: { en: "Verified Properties", hi: "सत्यापित प्रॉपर्टीज़" },
    description: {
      en: "Every parcel we recommend is physically inspected and title-checked before it reaches you.",
      hi: "हम जो भी भूमि सुझाते हैं, वह आप तक पहुंचने से पहले भौतिक रूप से निरीक्षित और टाइटल-जांची जाती है।",
    },
  },
  {
    icon: Landmark,
    title: { en: "Local Market Experts", hi: "स्थानीय बाज़ार विशेषज्ञ" },
    description: {
      en: "A team with deep, on-ground knowledge of the Bhiwadi to Alwar corridor.",
      hi: "भिवाड़ी से किशनगढ़ बास कॉरिडोर की गहरी, ज़मीनी जानकारी रखने वाली टीम।",
    },
  },
  {
    icon: Eye,
    title: { en: "Transparent Process", hi: "पारदर्शी प्रक्रिया" },
    description: {
      en: "Every cost, term and timeline is disclosed upfront — no hidden surprises.",
      hi: "हर लागत, शर्त और समयसीमा पहले से बताई जाती है — कोई छिपी हुई बात नहीं।",
    },
  },
  {
    icon: Headphones,
    title: { en: "Professional Consultation", hi: "पेशेवर परामर्श" },
    description: {
      en: "One-on-one guidance to match your budget, purpose and timeline to the right land.",
      hi: "आपके बजट, उद्देश्य और समयसीमा के अनुसार सही भूमि खोजने के लिए व्यक्तिगत मार्गदर्शन।",
    },
  },
  {
    icon: FileCheck2,
    title: { en: "Complete Documentation", hi: "पूर्ण दस्तावेज़ीकरण" },
    description: {
      en: "End-to-end support with sale deeds, mutation, conversion and registry paperwork.",
      hi: "सेल डीड, म्यूटेशन, कन्वर्ज़न और रजिस्ट्री कागज़ी कार्रवाई में संपूर्ण सहायता।",
    },
  },
  {
    icon: Scale,
    title: { en: "Legal Assistance", hi: "कानूनी सहायता" },
    description: {
      en: "Independent legal review of title, conversion status and encumbrance before every deal.",
      hi: "हर डील से पहले टाइटल, कन्वर्ज़न स्टेटस और एनकम्ब्रेंस की स्वतंत्र कानूनी समीक्षा।",
    },
  },
  {
    icon: TrendingUp,
    title: { en: "Fast Response", hi: "त्वरित प्रतिक्रिया" },
    description: {
      en: "Prompt callbacks and site visit scheduling so you never lose out on the right opportunity.",
      hi: "त्वरित कॉलबैक और साइट विज़िट शेड्यूलिंग ताकि आप सही अवसर न गंवाएं।",
    },
  },
  {
    icon: Users,
    title: { en: "Trusted Network", hi: "विश्वसनीय नेटवर्क" },
    description: {
      en: "A wide network of verified sellers, developers and legal partners across the corridor.",
      hi: "कॉरिडोर में सत्यापित विक्रेताओं, डेवलपर्स और कानूनी भागीदारों का व्यापक नेटवर्क।",
    },
  },
  {
    icon: Handshake,
    title: { en: "Personalized Guidance", hi: "व्यक्तिगत मार्गदर्शन" },
    description: {
      en: "Advice tailored to your investment horizon, whether short-term or long-term.",
      hi: "चाहे अल्पकालिक हो या दीर्घकालिक, आपकी निवेश अवधि के अनुसार सलाह।",
    },
  },
];

export const testimonials = [
  {
    name: "Rajesh Kumar Sharma",
    role: { en: "Industrial Land Buyer, Bhiwadi", hi: "औद्योगिक भूमि खरीदार, भिवाड़ी" },
    initials: "RS",
    rating: 5,
    quote: {
      en: "Inaya Estates helped us close a RIICO-approved industrial plot in under three weeks. The legal verification support was thorough and gave us complete confidence.",
      hi: "Inaya Estates ने तीन हफ्तों से भी कम समय में हमें एक RIICO-अनुमोदित औद्योगिक प्लॉट दिलवाया। कानूनी सत्यापन सहायता बहुत गहन थी और हमें पूरा भरोसा दिलाया।",
    },
  },
  {
    name: "Anita Verma",
    role: { en: "Residential Plot Investor, Neemrana", hi: "रेसिडेंशियल प्लॉट निवेशक, नीमराना" },
    initials: "AV",
    rating: 5,
    quote: {
      en: "As a first-time land investor, I was nervous about title issues. The Inaya Estates team walked me through every document and the site visit was extremely well organised.",
      hi: "पहली बार भूमि में निवेश करते हुए मुझे टाइटल की समस्याओं की चिंता थी। Inaya Estates की टीम ने हर दस्तावेज़ समझाया और साइट विज़िट बहुत व्यवस्थित थी।",
    },
  },
  {
    name: "Mohit Agarwal",
    role: { en: "Agricultural Land Owner, Alwar", hi: "कृषि भूमि मालिक, किशनगढ़ बास" },
    initials: "MA",
    rating: 5,
    quote: {
      en: "We sold our ancestral agricultural land through Inaya Estates and got a fair market price with a completely transparent process from start to finish.",
      hi: "हमने अपनी पैतृक कृषि भूमि Inaya Estates के ज़रिए बेची और शुरू से अंत तक पूरी पारदर्शी प्रक्रिया के साथ उचित बाज़ार मूल्य मिला।",
    },
  },
  {
    name: "Priya Singh Rathore",
    role: { en: "Commercial Land Buyer, Tapukara", hi: "कमर्शियल भूमि खरीदार, टपूकड़ा" },
    initials: "PR",
    rating: 5,
    quote: {
      en: "Their knowledge of the Delhi-Mumbai Expressway corridor is unmatched. They identified a highway-facing commercial plot that has already appreciated significantly.",
      hi: "दिल्ली-मुंबई एक्सप्रेसवे कॉरिडोर की उनकी जानकारी बेजोड़ है। उन्होंने एक हाईवे-किनारे कमर्शियल प्लॉट दिलवाया जिसकी कीमत पहले ही काफी बढ़ चुकी है।",
    },
  },
  {
    name: "Deepak Chaudhary",
    role: { en: "Farm Land Buyer, Tijara", hi: "फार्म लैंड खरीदार, तिजारा" },
    initials: "DC",
    rating: 5,
    quote: {
      en: "Prompt communication, honest advice and a smooth registration process. I would recommend Inaya Estates to anyone investing in this corridor.",
      hi: "त्वरित संवाद, ईमानदार सलाह और आसान रजिस्ट्रेशन प्रक्रिया। मैं इस कॉरिडोर में निवेश करने वाले किसी भी व्यक्ति को Inaya Estates की सिफारिश करूंगा।",
    },
  },
  {
    name: "Sunita Yadav",
    role: { en: "Investment Plot Buyer, Khushkhera", hi: "निवेश प्लॉट खरीदार, खुशखेड़ा" },
    initials: "SY",
    rating: 5,
    quote: {
      en: "From shortlisting to site visit to registration, the entire journey was handled professionally. The team's local market knowledge made all the difference.",
      hi: "शॉर्टलिस्टिंग से लेकर साइट विज़िट और रजिस्ट्रेशन तक, पूरी प्रक्रिया पेशेवर तरीके से संभाली गई। टीम की स्थानीय बाज़ार की जानकारी ने बड़ा फर्क डाला।",
    },
  },
];

export const faqCategories = [
  {
    category: { en: "Buying Land", hi: "ज़मीन खरीदना" },
    items: [
      {
        question: {
          en: "What types of land can I buy through Inaya Estates?",
          hi: "मैं Inaya Estates के ज़रिए किस प्रकार की भूमि खरीद सकता हूं?",
        },
        answer: {
          en: "Inaya Estates helps you buy residential plots, commercial land, agricultural land, farm land and industrial land across Bhiwadi, Tijara, Tapukara, Khushkhera, Neemrana, Alwar and the wider Alwar region.",
          hi: "Inaya Estates आपको भिवाड़ी, तिजारा, टपूकड़ा, खुशखेड़ा, नीमराना, किशनगढ़ बास और पूरे अलवर क्षेत्र में रेसिडेंशियल, कमर्शियल, कृषि, फार्म और औद्योगिक भूमि खरीदने में मदद करता है।",
        },
      },
      {
        question: {
          en: "What is the minimum budget to invest in land in this corridor?",
          hi: "इस कॉरिडोर में भूमि में निवेश के लिए न्यूनतम बजट क्या है?",
        },
        answer: {
          en: "Entry-level agricultural and residential plots in this corridor typically start from around ₹25-30 Lakh, while premium industrial and commercial parcels can range into several crores depending on size and location.",
          hi: "इस कॉरिडोर में एंट्री-लेवल कृषि और रेसिडेंशियल प्लॉट्स आमतौर पर लगभग ₹25-30 लाख से शुरू होते हैं, जबकि प्रीमियम औद्योगिक और कमर्शियल भूमि आकार और लोकेशन के अनुसार कई करोड़ तक जा सकती है।",
        },
      },
    ],
  },
  {
    category: { en: "Selling Land", hi: "ज़मीन बेचना" },
    items: [
      {
        question: {
          en: "How does Inaya Estates help me sell my land?",
          hi: "Inaya Estates मेरी ज़मीन बेचने में कैसे मदद करता है?",
        },
        answer: {
          en: "We evaluate and list your land after physical verification, market it to our buyer network, arrange site visits, and support you through negotiation, documentation and registration until deal closure.",
          hi: "हम भौतिक सत्यापन के बाद आपकी भूमि का मूल्यांकन और लिस्टिंग करते हैं, इसे अपने खरीदार नेटवर्क में मार्केट करते हैं, साइट विज़िट की व्यवस्था करते हैं, और डील पूरी होने तक बातचीत, दस्तावेज़ीकरण व रजिस्ट्रेशन में सहायता करते हैं।",
        },
      },
      {
        question: {
          en: "Is there any consultation fee when selling?",
          hi: "बेचते समय क्या कोई परामर्श शुल्क है?",
        },
        answer: {
          en: "All applicable charges are disclosed upfront in writing before you engage us to sell your property — there are no hidden fees at any stage of the transaction.",
          hi: "सभी लागू शुल्क आपकी प्रॉपर्टी बेचने से पहले लिखित रूप में स्पष्ट बताए जाते हैं — लेन-देन के किसी भी चरण में कोई छिपा हुआ शुल्क नहीं है।",
        },
      },
    ],
  },
  {
    category: { en: "Legal Documents", hi: "कानूनी दस्तावेज़" },
    items: [
      {
        question: {
          en: "What documents are required to buy or sell land?",
          hi: "ज़मीन खरीदने या बेचने के लिए कौन से दस्तावेज़ चाहिए?",
        },
        answer: {
          en: "Typically the sale deed, encumbrance certificate, identity and address proof, PAN card, and revenue records (Jamabandi/Nakal) are required. Our team assists with assembling and verifying the complete paperwork.",
          hi: "आमतौर पर सेल डीड, एनकम्ब्रेंस सर्टिफिकेट, पहचान व पते का प्रमाण, पैन कार्ड, और राजस्व रिकॉर्ड (जमाबंदी/नकल) की आवश्यकता होती है। हमारी टीम पूरी कागज़ी कार्रवाई तैयार करने और सत्यापित करने में मदद करती है।",
        },
      },
      {
        question: {
          en: "Is agricultural land legally convertible for residential or commercial use?",
          hi: "क्या कृषि भूमि को कानूनी रूप से रेसिडेंशियल या कमर्शियल उपयोग के लिए बदला जा सकता है?",
        },
        answer: {
          en: "Conversion depends on the specific parcel's zoning under the local development authority. We advise on conversion feasibility and timelines as part of our pre-purchase consultation.",
          hi: "कन्वर्ज़न स्थानीय विकास प्राधिकरण के तहत उस भूमि की ज़ोनिंग पर निर्भर करता है। हम खरीद-पूर्व परामर्श में कन्वर्ज़न की संभावना और समयसीमा पर सलाह देते हैं।",
        },
      },
    ],
  },
  {
    category: { en: "Investment", hi: "निवेश" },
    items: [
      {
        question: {
          en: "Why is the Bhiwadi-Alwar corridor a good investment destination?",
          hi: "भिवाड़ी-किशनगढ़ बास कॉरिडोर एक अच्छा निवेश स्थल क्यों है?",
        },
        answer: {
          en: "The corridor benefits from the Delhi-Mumbai Expressway, notified RIICO industrial areas, proximity to Gurugram and Delhi, and sustained industrial and residential demand — a combination that has historically supported land appreciation.",
          hi: "इस कॉरिडोर को दिल्ली-मुंबई एक्सप्रेसवे, अधिसूचित RIICO औद्योगिक क्षेत्रों, गुरुग्राम व दिल्ली की निकटता, और लगातार औद्योगिक व आवासीय मांग का लाभ मिलता है — यह संयोजन ऐतिहासिक रूप से भूमि मूल्यवृद्धि में सहायक रहा है।",
        },
      },
      {
        question: {
          en: "What is the expected appreciation timeline for land in this belt?",
          hi: "इस क्षेत्र में भूमि की अपेक्षित मूल्यवृद्धि समयसीमा क्या है?",
        },
        answer: {
          en: "While no investment is guaranteed, land near notified industrial zones and expressway access points has historically shown stronger appreciation over 3-7 year horizons as infrastructure matures.",
          hi: "हालांकि कोई निवेश गारंटीड नहीं होता, अधिसूचित औद्योगिक क्षेत्रों और एक्सप्रेसवे पहुंच बिंदुओं के पास की भूमि ने ऐतिहासिक रूप से 3-7 वर्षों में बुनियादी ढांचे के विकास के साथ मजबूत मूल्यवृद्धि दिखाई है।",
        },
      },
    ],
  },
  {
    category: { en: "Registration", hi: "रजिस्ट्रेशन" },
    items: [
      {
        question: {
          en: "What is the process for land registration?",
          hi: "भूमि रजिस्ट्रेशन की प्रक्रिया क्या है?",
        },
        answer: {
          en: "Registration involves executing the sale deed before a Sub-Registrar, paying applicable stamp duty and registration fees, and completing biometric verification. Our team coordinates the entire process on your behalf.",
          hi: "रजिस्ट्रेशन में सब-रजिस्ट्रार के सामने सेल डीड निष्पादित करना, लागू स्टाम्प ड्यूटी व रजिस्ट्रेशन शुल्क का भुगतान करना, और बायोमेट्रिक सत्यापन पूरा करना शामिल है। हमारी टीम आपकी ओर से पूरी प्रक्रिया का समन्वय करती है।",
        },
      },
      {
        question: {
          en: "Do you assist with mutation after registration?",
          hi: "क्या आप रजिस्ट्रेशन के बाद म्यूटेशन में सहायता करते हैं?",
        },
        answer: {
          en: "Yes, our documentation support extends beyond registration to include mutation (Nakal/Jamabandi update) in local revenue records.",
          hi: "हां, हमारी दस्तावेज़ीकरण सहायता रजिस्ट्रेशन के आगे भी जाती है और स्थानीय राजस्व रिकॉर्ड में म्यूटेशन (नकल/जमाबंदी अपडेट) को शामिल करती है।",
        },
      },
    ],
  },
  {
    category: { en: "Site Visits", hi: "साइट विज़िट" },
    items: [
      {
        question: {
          en: "Can I schedule a free site visit before buying?",
          hi: "क्या मैं खरीदने से पहले मुफ़्त साइट विज़िट शेड्यूल कर सकता हूं?",
        },
        answer: {
          en: "Yes, we organise guided, no-obligation site visits across all locations we serve. You can book a visit through our contact form, phone or WhatsApp.",
          hi: "हां, हम अपनी सभी सेवा वाली लोकेशन में मार्गदर्शित, बिना बाध्यता वाली साइट विज़िट आयोजित करते हैं। आप हमारे संपर्क फॉर्म, फ़ोन या व्हाट्सएप के ज़रिए विज़िट बुक कर सकते हैं।",
        },
      },
      {
        question: {
          en: "Do you provide pickup and drop for site visits from Delhi/Gurugram?",
          hi: "क्या आप दिल्ली/गुरुग्राम से साइट विज़िट के लिए पिकअप और ड्रॉप की सुविधा देते हैं?",
        },
        answer: {
          en: "For serious buyers, we can arrange transport assistance for site visits from Delhi and Gurugram — please mention this when booking your visit.",
          hi: "गंभीर खरीदारों के लिए, हम दिल्ली और गुरुग्राम से साइट विज़िट के लिए परिवहन सहायता की व्यवस्था कर सकते हैं — कृपया विज़िट बुक करते समय यह बताएं।",
        },
      },
    ],
  },
  {
    category: { en: "Property Verification", hi: "प्रॉपर्टी सत्यापन" },
    items: [
      {
        question: {
          en: "How do you verify a land parcel before recommending it?",
          hi: "किसी भूमि को सुझाने से पहले आप उसे कैसे सत्यापित करते हैं?",
        },
        answer: {
          en: "Our team physically inspects the site and cross-checks the title chain, encumbrance certificate, revenue records and conversion status before any parcel is added to our recommendations.",
          hi: "हमारी टीम साइट का भौतिक निरीक्षण करती है और किसी भी भूमि को सुझाने से पहले टाइटल चेन, एनकम्ब्रेंस सर्टिफिकेट, राजस्व रिकॉर्ड और कन्वर्ज़न स्टेटस की जांच करती है।",
        },
      },
      {
        question: {
          en: "What happens if a title issue is found during verification?",
          hi: "अगर सत्यापन के दौरान टाइटल की समस्या मिलती है तो क्या होता है?",
        },
        answer: {
          en: "We disclose any findings transparently and do not proceed with parcels that carry unresolved title, encumbrance or ownership disputes.",
          hi: "हम किसी भी निष्कर्ष को पारदर्शी रूप से बताते हैं और ऐसी भूमि के साथ आगे नहीं बढ़ते जिसमें अनसुलझे टाइटल, एनकम्ब्रेंस या स्वामित्व विवाद हों।",
        },
      },
    ],
  },
];
