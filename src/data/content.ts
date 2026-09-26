export type Locale = "ar" | "en";

export interface NavItem {
  id: string;
  label: {
    ar: string;
    en: string;
  };
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  iconName: "code" | "odoo" | "marketing" | "interactive";
  title: {
    ar: string;
    en: string;
  };
  subtitle: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  capabilities: {
    ar: string[];
    en: string[];
  };
  note?: {
    ar: string;
    en: string;
  };
}

export type ProjectCategory = "all" | "interactive" | "web" | "ai";

export interface ProjectItem {
  id: string;
  client: {
    ar: string;
    en: string;
  };
  title: {
    ar: string;
    en: string;
  };
  category: ProjectCategory;
  categoryLabel: {
    ar: string;
    en: string;
  };
  summary: {
    ar: string;
    en: string;
  };
  highlights: {
    ar: string[];
    en: string[];
  };
  tags: {
    ar: string[];
    en: string[];
  };
  visualType: "ports" | "fashion-ar" | "ai-vision" | "car-3d" | "dressing-room" | "ecommerce";
  accentColor: string;
}

export interface PhilosophyPillar {
  id: string;
  symbol: "A" | "curve" | "diamonds" | "ar";
  step: string;
  title: {
    ar: string;
    en: string;
  };
  subtitle: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  processPhase: {
    ar: string;
    en: string;
  };
}

export interface ClientLogoItem {
  name: string;
  nameEn: string;
  logo: string;
}

/**
 * 3) متغيرات شريط الإحصائيات (Trust Bar & Clients Counter)
 * لا تكتب أرقاماً ثابتة في الكود مباشرة — تُحدَّث من هنا فقط عند توفر الأرقام الفعلية.
 */
export const stats: {
  projectsCompleted: number | null;
  clientsCount: number | null;
  satisfactionRate: number | null;
  yearsExperience: number | null;
} = {
  projectsCompleted: null,   // TODO: يملأ لاحقاً برقم حقيقي
  clientsCount: null,        // TODO
  satisfactionRate: null,    // TODO
  yearsExperience: null,     // TODO
};

/**
 * 5) قائمة شعارات العملاء والشركاء
 */
export const clients: ClientLogoItem[] = [
  {
    name: "الهيئة العامة للموانئ (موانئ)",
    nameEn: "Saudi Ports Authority (MAWANI)",
    logo: "/assets/logos/mawani.png",
  },
  {
    name: "نادي ضباط قوى الأمن",
    nameEn: "Security Forces Officers Club",
    logo: "/assets/logos/officers-club.png",
  },
  {
    name: "جمعية سند لدعم الأطفال المرضى بالسرطان",
    nameEn: "Sanad Children's Cancer Support Association",
    logo: "/assets/logos/sanad.png",
  },
  {
    name: "لوسيد (Lucid)",
    nameEn: "Lucid",
    logo: "/assets/logos/lucid.png",
  },
  {
    name: "سيكا (Sika)",
    nameEn: "Sika",
    logo: "/assets/logos/sica.png",
  },
  // TODO: أضف باقي عملاء الشركة هنا بنفس الشكل
];

export const NAV_ITEMS: NavItem[] = [
  {
    id: "services",
    label: { ar: "خدماتنا", en: "Services" },
    href: "#services",
  },
  {
    id: "clients",
    label: { ar: "عملاؤنا", en: "Clients" },
    href: "#clients",
  },
  {
    id: "work",
    label: { ar: "أعمال مختارة", en: "Selected Work" },
    href: "#work",
  },
  {
    id: "philosophy",
    label: { ar: "رحلة العمل", en: "Work Journey" },
    href: "#philosophy",
  },
  {
    id: "contact",
    label: { ar: "تواصل معنا", en: "Contact" },
    href: "#contact",
  },
];

export const HERO_CONTENT = {
  badge: {
    ar: "من الفكرة إلى الأثر",
    en: "FROM IDEA TO IMPACT",
  },
  headlineMain: {
    ar: "أكثر من مجرد كود..",
    en: "More Than Code..",
  },
  headlineAccent: {
    ar: "نترك أثراً حقيقياً",
    en: "We Leave a Lasting Impact",
  },
  description: {
    ar: "أثر شركة متخصصة في تقديم حلول برمجية متقدمة وتجارب رقمية وخدمات تسويق متكاملة، نجمع بين المنطق التقني والفكر الإبداعي لنصنع حلولاً تساهم في نمو علامتك التجارية وتطورها.",
    en: "Athar is a specialized company delivering advanced software solutions, digital experiences, and integrated marketing services. We combine technical logic with creative thinking to craft solutions that help your brand grow and evolve.",
  },
  primaryCta: {
    ar: "ابدأ مشروعك الآن",
    en: "Start Your Project Now",
  },
  secondaryCta: {
    ar: "استكشف خدماتنا",
    en: "Explore Our Services",
  },
  pillarsTitle: {
    ar: "ركائز أثر",
    en: "Athar Pillars",
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: "custom-software",
    number: "1",
    iconName: "code",
    title: {
      ar: "تطوير البرمجيات وتطبيقات الويب",
      en: "Custom Software & Web Applications",
    },
    subtitle: {
      ar: "هندسة برمجية مخصصة عالية الأداء",
      en: "Scalable, Tailored Software Engineering",
    },
    description: {
      ar: "نصمم ونطور مواقع وتطبيقات ويب وأنظمة إدارة مخصصة بالكامل حسب طبيعة نشاطك، بأداء عالٍ وواجهات سهلة الاستخدام تلبي احتياجاتك الفعلية دون حلول جاهزة تقيّدك.",
      en: "We design and develop fully customized websites, web applications, and management systems tailored to your business, with high performance and intuitive interfaces that meet your real needs without restrictive off-the-shelf limitations.",
    },
    capabilities: {
      ar: [
        "تطوير تطبيقات الويب والمنصات الرقمية المخصصة",
        "بناء أنظمة الإدارة الداخلية (ERP/CRM مخصصة لطبيعة نشاطك)",
        "تصميم وتطوير المتاجر الإلكترونية باحترافية",
        "تطوير وتخصيص متاجر ومنصات إلكترونية (E-commerce)",
        "ربط الأنظمة والتكامل مع الجهات الخارجية (APIs)",
      ],
      en: [
        "Custom web applications & digital platforms development",
        "Internal management systems (tailored ERP/CRM for your business)",
        "Professional e-commerce design and development",
        "Custom e-commerce stores and digital marketplaces",
        "System integration & external API connectivity",
      ],
    },
  },
  {
    id: "odoo-solutions",
    number: "2",
    iconName: "odoo",
    title: {
      ar: "تطوير وتخصيص أنظمة أودو (Odoo)",
      en: "Odoo Development & Customization",
    },
    subtitle: {
      ar: "منصة موحدة للعمليات التشغيلية والمالية والإدارية",
      en: "Unified Platform for Operations, Finance & Administration",
    },
    description: {
      ar: "نمنح عملياتك التشغيلية والمالية والإدارية منصة واحدة موحدة، عبر تخصيص أنظمة أودو الرقمية بما يتماشى مع طبيعة عملك، لتوفير الوقت والجهد وتقليل الأخطاء اليومية.",
      en: "We give your operational, financial, and administrative processes a single unified platform by customizing Odoo ERP systems to match your workflow—saving time, effort, and minimizing daily errors.",
    },
    capabilities: {
      ar: [
        "تركيب وتهيئة أنظمة أودو من الصفر حسب احتياجات المنشأة",
        "تخصيص الوحدات الجاهزة (المبيعات، المخازن، المحاسبة، الموارد البشرية...) لتناسب سير عملك",
        "تطوير موديولات وإضافات مخصصة غير متوفرة في النظام الأساسي",
        "ربط أودو بالأنظمة الأخرى وبوابات الدفع المحلية",
        "الدعم الفني والتدريب لفريقك بعد التطبيق",
      ],
      en: [
        "Full Odoo setup and configuration from scratch based on enterprise needs",
        "Customizing core modules (Sales, Inventory, Accounting, HR...) to fit your workflow",
        "Developing bespoke modules and add-ons not available in standard Odoo",
        "Integrating Odoo with external systems and local payment gateways",
        "Post-implementation technical support and team training",
      ],
    },
  },
  {
    id: "interactive-experiences",
    number: "3",
    iconName: "interactive",
    title: {
      ar: "التجارب البرمجية التفاعلية (AR/VR وواقع الفعاليات)",
      en: "Interactive Software Experiences (AR/VR & Events)",
    },
    subtitle: {
      ar: "تجارب غامرة للمعارض والفعاليات تُحفظ في الذاكرة",
      en: "Memorable Immersive Experiences for Exhibitions & Events",
    },
    description: {
      ar: "نحوّل فعالياتك ومعارضك إلى تجارب تفاعلية تُحفَظ في الذاكرة، عبر تقنيات الواقع المعزز والافتراضي والشاشات التفاعلية التي تجذب الزوار وتترك انطباعاً حقيقياً عن علامتك التجارية.",
      en: "We transform your events and exhibitions into unforgettable interactive experiences using Augmented Reality, Virtual Reality, and interactive screens that engage visitors and leave a lasting impression of your brand.",
    },
    capabilities: {
      ar: [
        "تصميم وتطوير تجارب الواقع المعزز (AR) والافتراضي (VR) للمعارض والفعاليات",
        "شاشات تفاعلية Interactive Screens للجناح والمنتجات (لمس، حركة، حساسات)",
        "ألعاب تفاعلية Gamification مخصصة للفعاليات والحملات",
        "تصميم نماذج ثلاثية الأبعاد (3D) للمنتجات والعروض التقديمية",
        "حلول Kiosk وأجهزة العرض الذكية للفعاليات والمعارض",
      ],
      en: [
        "Design and development of AR & VR experiences for exhibitions and events",
        "Interactive Screens for booths and products (touch, motion, sensors)",
        "Custom Gamification experiences for events and campaigns",
        "3D modeling and visualization for products and presentations",
        "Smart Kiosk and interactive display solutions for exhibitions",
      ],
    },
  },
  {
    id: "digital-marketing",
    number: "4",
    iconName: "marketing",
    title: {
      ar: "التسويق الرقمي وخدمات النمو",
      en: "Digital Marketing & Growth Services",
    },
    subtitle: {
      ar: "من بناء الاستراتيجية إلى التنفيذ والقياس الواضح",
      en: "From Strategy to Execution & Measurable Results",
    },
    description: {
      ar: "لا تكفي الفكرة الجيدة دون وصولها للجمهور المناسب. نقدم في أثر خدمات تسويق رقمي متكاملة، من بناء الاستراتيجية إلى التنفيذ والقياس، بأسلوب واضح ونتائج قابلة للقياس في كل خطوة.",
      en: "A great idea isn't enough without reaching the right audience. At Athar, we provide end-to-end digital marketing services—from strategy to execution and measurement—with clear, measurable results at every step.",
    },
    capabilities: {
      ar: [
        "استراتيجية التسويق الرقمي: دراسة السوق والمنافسين وبناء خطة مبنية على أهدافك الفعلية",
        "إدارة منصات التواصل الاجتماعي: جدولة ونشر محتوى احترافي والتفاعل اليومي مع جمهورك",
        "الحملات الممولة (Ads): إدارة حملات على قوقل وسناب شات وميتا بتقارير أداء واضحة",
        "تحسين محركات البحث (SEO): رفع ظهور موقعك في نتائج البحث بشكل تدريجي ومستدام",
        "صناعة المحتوى: تصوير وتصميم ومونتاج محتوى يعكس هوية علامتك",
        "الهوية البصرية والعلامة التجارية: تصميم أو تطوير الشعار والهوية الكاملة",
      ],
      en: [
        "Digital Marketing Strategy: Market & competitor research with goal-driven planning",
        "Social Media Management: Professional content scheduling, publishing & daily engagement",
        "Paid Campaigns (Ads): Managing Google, Snapchat & Meta ads with transparent reporting",
        "Search Engine Optimization (SEO): Sustainable, organic search ranking growth",
        "Content Creation: Photography, design, and video editing reflecting your brand identity",
        "Visual Identity & Branding: Logo and full brand identity design or evolution",
      ],
    },
  },
];

export const PROJECT_CATEGORIES: { id: ProjectCategory; label: { ar: string; en: string } }[] = [
  { id: "all", label: { ar: "جميع الأعمال", en: "All Projects" } },
  { id: "interactive", label: { ar: "تجارب تفاعلية و 3D", en: "Interactive & 3D" } },
  { id: "web", label: { ar: "منصات وتجارة إلكترونية", en: "Web & E-Commerce" } },
  { id: "ai", label: { ar: "ذكاء اصطناعي واختبارات", en: "AI & System Testing" } },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "mawani",
    client: {
      ar: "الهيئة العامة للموانئ (موانئ)",
      en: "Saudi Ports Authority (Mawani)",
    },
    title: {
      ar: "رحلة عبر الموانئ السعودية والتجارب الغامرة",
      en: "Journey Through Saudi Ports & Immersive Suite",
    },
    category: "interactive",
    categoryLabel: {
      ar: "تجارب تفاعلية ومحاكي 3D",
      en: "Interactive & Simulation Suite",
    },
    summary: {
      ar: "منظومة متكاملة من التجارب التفاعلية البرمجية لاستعراض منظومة الموانئ السعودية، تضمنت جولات افتراضية، محاكي عربة الحاويات، تجربة هولوجرام أبطال موانئ، وتجارب القباب الغامرة.",
      en: "A comprehensive suite of interactive software experiences showcasing Saudi ports—featuring virtual port tours, a container cart simulator, the MAWANI Heroes hologram experience, and immersive dome software.",
    },
    highlights: {
      ar: [
        "رحلة تفاعلية عبر الموانئ السعودية (Journey through Saudi Ports)",
        "جولات افتراضية تفاعلية داخل مرافق الموانئ",
        "برمجيات محاكي عربة الحاويات (Container Cart Simulator)",
        "تجربة الهولوجرام التفاعلية (MAWANI Heroes Hologram)",
        "عروض وتجارب القباب الغامرة (Immersive Dome Experiences)",
      ],
      en: [
        "Interactive 'Journey through Saudi Ports' software experience",
        "Virtual port tours exploring maritime infrastructure",
        "Interactive Container Cart Simulator software",
        "MAWANI Heroes hologram software experience",
        "Immersive dome projection software experiences",
      ],
    },
    tags: {
      ar: ["محاكاة تفاعلية", "جولات افتراضية", "هولوجرام", "قباب غامرة"],
      en: ["Interactive Simulator", "Virtual Tours", "Hologram", "Immersive Dome"],
    },
    visualType: "ports",
    accentColor: "#414833",
  },
  {
    id: "meta-box",
    client: {
      ar: "ميتا بوكس (Meta Box)",
      en: "Meta Box",
    },
    title: {
      ar: "تجربة الأزياء الثقافية السعودية التفاعلية",
      en: "Saudi Cultural Fashion AR/3D Experience",
    },
    category: "interactive",
    categoryLabel: {
      ar: "واقع معزز وتفاعل ثلاثي الأبعاد",
      en: "AR & 3D Interactive Experience",
    },
    summary: {
      ar: "تجربة برمجية تفاعلية تجمع بين الواقع المعزز (AR) والتقنيات ثلاثية الأبعاد (3D) لاستعراض الأزياء الثقافية السعودية بأسلوب رقمي مبتكر يبرز أصالة التراث.",
      en: "An interactive AR and 3D software experience celebrating Saudi cultural fashion through real-time digital visualization and immersive interaction.",
    },
    highlights: {
      ar: [
        "استعراض تفاعلي للأزياء الثقافية والتراثية السعودية",
        "دمج تقنيات الواقع المعزز (AR) مع النماذج ثلاثية الأبعاد (3D)",
        "واجهة مستخدم سلسة مصممة للفعاليات والتجارب الحية",
      ],
      en: [
        "Interactive showcase of traditional Saudi cultural attire",
        "Real-time Augmented Reality (AR) & 3D garment rendering",
        "Intuitive touch and gesture interface for live cultural showcases",
      ],
    },
    tags: {
      ar: ["واقع معزز AR", "تفاعل 3D", "تراث وثقافة"],
      en: ["AR Software", "3D Interactive", "Cultural Experience"],
    },
    visualType: "fashion-ar",
    accentColor: "#737A5D",
  },
  {
    id: "lucid",
    client: {
      ar: "لوسيد (Lucid)",
      en: "Lucid",
    },
    title: {
      ar: "شاشة تجميع السيارة التفاعلية ثلاثية الأبعاد",
      en: "Interactive 3D Car Assembly Screen",
    },
    category: "interactive",
    categoryLabel: {
      ar: "تطبيق شاشة تفاعلية 3D",
      en: "3D Interactive Screen Software",
    },
    summary: {
      ar: "تطبيق شاشة تفاعلية ثلاثي الأبعاد يتيح استكشاف وتجميع أجزاء ومكونات السيارة بشكل لحظي وتفاعلي مع عرض بصري دقيق للتفاصيل الهندسية.",
      en: "An interactive 3D touchscreen software application enabling users to explore and assemble vehicle components in real time with smooth visual transitions.",
    },
    highlights: {
      ar: [
        "تفاعل ثلاثي الأبعاد (3D) لتجميع واستعراض مكونات المركبة",
        "واجهة لمس عالية الاستجابة مصممة لشاشات العرض التفاعلية",
        "عرض سلس للتفاصيل الهندسية وحركة الأجزاء",
      ],
      en: [
        "Real-time 3D interactive car component assembly",
        "High-responsiveness touch interface built for interactive screens",
        "Smooth camera transitions and component inspection views",
      ],
    },
    tags: {
      ar: ["شاشات تفاعلية", "تطبيق 3D", "تجميع تفاعلي"],
      en: ["Interactive Screen", "Real-time 3D", "Component Assembly"],
    },
    visualType: "car-3d",
    accentColor: "#414833",
  },
  {
    id: "moi-ai",
    client: {
      ar: "وزارة الداخلية",
      en: "Ministry of Interior",
    },
    title: {
      ar: "مشروع اختبار نظام تبديل الوجوه بالذكاء الاصطناعي",
      en: "AI Face-Swap System Testing Project",
    },
    category: "ai",
    categoryLabel: {
      ar: "ذكاء اصطناعي واختبار أنظمة",
      en: "AI System Testing & Verification",
    },
    summary: {
      ar: "مشروع تقني متخصص لاختبار وتقييم نظام تبديل الوجوه المعتمد على الذكاء الاصطناعي، للتحقق من كفاءة المعالجة ودقة المخرجات في سيناريوهات التشغيل المختلفة.",
      en: "A specialized technical testing project evaluating an AI-driven face-swap system for processing accuracy, reliability, and operational performance across test scenarios.",
    },
    highlights: {
      ar: [
        "اختبار وتقييم دقة نماذج معالجة الصور وتبديل الوجوه بالذكاء الاصطناعي",
        "التحقق من الأداء البرمجي واستقرار النظام تحت سيناريوهات متعددة",
        "منهجية فحص تقنية دقيقة لمخرجات الرؤية الحاسوبية",
      ],
      en: [
        "Systematic testing and evaluation of AI face-swap processing models",
        "Verification of software stability and latency across diverse scenarios",
        "Rigorous quality assurance for computer vision outputs",
      ],
    },
    tags: {
      ar: ["ذكاء اصطناعي", "اختبار أنظمة", "رؤية حاسوبية"],
      en: ["AI Testing", "Computer Vision", "System QA"],
    },
    visualType: "ai-vision",
    accentColor: "#535b42",
  },
  {
    id: "nadi-aldhoub",
    client: {
      ar: "نادي الثوب",
      en: "Nadi Al-Dhoub",
    },
    title: {
      ar: "تجربة غرفة القياس الافتراضية للأزياء السعودية",
      en: "Saudi Clothing Virtual Dressing-Room Experience",
    },
    category: "interactive",
    categoryLabel: {
      ar: "تجربة قياس افتراضية تفاعلية",
      en: "Virtual Fitting Experience",
    },
    summary: {
      ar: "حل برمجي تفاعلي لغرفة قياس افتراضية مخصصة للأزياء والملابس السعودية، يمنح المستخدم تجربة معاينة وتخصيص رقمية سلسة.",
      en: "An interactive virtual dressing-room software experience tailored for Saudi menswear and clothing, enabling digital try-on and style visualization.",
    },
    highlights: {
      ar: [
        "تجربة غرفة قياس افتراضية تفاعلية للأزياء السعودية",
        "استعراض خيارات التصميم والتفاصيل بطريقة رقمية واضحة",
        "تصميم تجربة مستخدم تلائم قطاع الأزياء والتجزئة الحديثة",
      ],
      en: [
        "Interactive virtual dressing-room software for Saudi attire",
        "Digital visualization of garment styles, cuts, and details",
        "User journey tailored for modern retail and fashion engagement",
      ],
    },
    tags: {
      ar: ["غرفة قياس افتراضية", "تجربة تفاعلية", "قطاع الأزياء"],
      en: ["Virtual Dressing Room", "Interactive Retail", "Fashion Tech"],
    },
    visualType: "dressing-room",
    accentColor: "#737A5D",
  },
  {
    id: "watan-souq",
    client: {
      ar: "سوق وطن (Watan Souq)",
      en: "Watan Souq",
    },
    title: {
      ar: "منصة سوق وطن للتجارة الإلكترونية",
      en: "Watan Souq E-Commerce Platform",
    },
    category: "web",
    categoryLabel: {
      ar: "تطوير منصات وتجارة إلكترونية",
      en: "E-Commerce Web Platform",
    },
    summary: {
      ar: "تطوير منصة تجارة إلكترونية متكاملة توفر تجربة تسوق رقمية منظمة، مع إدارة مرنة للمنتجات والطلبات وواجهات استخدام متجاوبة مع كافة الأجهزة.",
      en: "Development of a comprehensive e-commerce web platform delivering a structured digital shopping journey, catalog management, and responsive user interfaces.",
    },
    highlights: {
      ar: [
        "تطوير واجهة متجر إلكتروني عصرية وسريعة الاستجابة",
        "بناء منظومة تصفح المنتجات وسلة التسوق وإدارة الطلبات",
        "تهيئة بنية برمجية قابلة للتوسع والنمو التجاري",
      ],
      en: [
        "Responsive, modern e-commerce storefront and product catalog",
        "Streamlined cart, checkout flow, and order management architecture",
        "Scalable web foundation built for commercial growth",
      ],
    },
    tags: {
      ar: ["تجارة إلكترونية", "تطبيق ويب", "تصميم متجاوب"],
      en: ["E-Commerce", "Web Platform", "Responsive UI"],
    },
    visualType: "ecommerce",
    accentColor: "#414833",
  },
];

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    id: "start",
    symbol: "A",
    step: "1",
    title: {
      ar: "البداية",
      en: "The Start",
    },
    subtitle: {
      ar: "الانطلاق والفكرة الأولى",
      en: "Initial Spark & Discovery",
    },
    description: {
      ar: "كل مشروع يبدأ برحلة عميقة لفهم احتياجاتك الفعلية، نستمع لفكرتك بالكامل، نحللها، ونضع لبنة الأساس الصحيح قبل أي خطوة تنفيذية.",
      en: "Every project begins with a deep journey to understand your actual needs. We listen to your full vision, analyze it, and lay the right foundation before any execution step.",
    },
    processPhase: {
      ar: "المدة التقديرية: 1 - 3 أيام عمل",
      en: "Estimated Duration: 1 - 3 Business Days",
    },
  },
  {
    id: "launch",
    symbol: "curve",
    step: "2",
    title: {
      ar: "الانطلاق",
      en: "Launch & Planning",
    },
    subtitle: {
      ar: "التخطيط وهندسة الحلول",
      en: "Planning & Solution Architecture",
    },
    description: {
      ar: "نترجم الفكرة إلى خطة تقنية واضحة: تصميم تجربة المستخدم، بناء الهيكلة التقنية المناسبة، وتحديد الجدول الزمني بدقة.",
      en: "We translate the idea into a clear technical plan: user experience design, building the right technical architecture, and defining an accurate timeline.",
    },
    processPhase: {
      ar: "تصميم تجربة المستخدم، الهيكلة التقنية، والجدول الزمني",
      en: "UX Design, Technical Architecture & Timeline",
    },
  },
  {
    id: "integration",
    symbol: "ar",
    step: "3",
    title: {
      ar: "التكامل",
      en: "Integration",
    },
    subtitle: {
      ar: "التطوير والتنفيذ",
      en: "Development & Execution",
    },
    description: {
      ar: "هنا يبدأ العمل الفعلي: تطوير، اختبار، ومراجعة مستمرة لضمان توافق كل تفصيلة مع الهدف الأساسي للمشروع.",
      en: "Here the actual work begins: development, testing, and continuous review to ensure every detail aligns with the core objective of the project.",
    },
    processPhase: {
      ar: "تطوير، اختبار، ومراجعة مستمرة",
      en: "Development, Testing & Continuous Review",
    },
  },
  {
    id: "continuity",
    symbol: "diamonds",
    step: "4",
    title: {
      ar: "الاستمرارية",
      en: "Continuity",
    },
    subtitle: {
      ar: "الدعم والتطوير المستدام",
      en: "Support & Sustainable Evolution",
    },
    description: {
      ar: "علاقتنا لا تنتهي بالتسليم. نقدّم دعماً فنياً مستمراً وتحسينات دورية لضمان بقاء الحل فعّالاً مع نمو أعمالك.",
      en: "Our relationship doesn't end at delivery. We provide ongoing technical support and periodic enhancements to ensure the solution remains effective as your business grows.",
    },
    processPhase: {
      ar: "دعم فني مستمر وتحسينات دورية",
      en: "Ongoing Technical Support & Periodic Improvements",
    },
  },
];

export const companyCity: string | null = null; // TODO: يحدَّد لاحقاً لدعم SEO المحلي

export const CONTACT_INFO = {
  email: "info@atharcode.com",
  website: "www.atharcode.com",
  socialHandle: "@atharcode",
  companyCity,
  locationPlaceholder: {
    ar: companyCity ?? "{{companyCity}} — TODO: يحدَّد لاحقاً لدعم SEO المحلي",
    en: companyCity ?? "{{companyCity}} — TODO: To be defined for local SEO",
  },
};
