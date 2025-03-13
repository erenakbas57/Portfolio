// data/experiences.js
import { Experience, Project, Skill, Social, Tech } from "@/model/model";



export const experiences: Experience[] = [
  {
    type: "work",
    title: "Teknoloji Ve Yönetim Danışmanı",
    organization: "Badi Etkinlik",
    period: "2022 Mayıs - Devam Ediyor",
    description:
      "Yazılım departmanında gerekli geliştirmeler için yeni teknolojiler ile çözümler sunuyor ve yönetim süreçleri de dahil danışmanlık veriyorum. ",
    icon: "briefcase", // İkon adı
    skills: ["PHP", "Next.JS", "Veri Analizi"],
    border_color: "border-red-500 ",
    text_color: "text-red-500",
  },
  {
    type: "education",
    title: "Yazılım Geliştiriciliği",
    organization: "Ecole42 - 42 İstanbul",
    period: "2022 Ekim - 2024 Kasım",
    description:
      "C/C++ ve Python dilleri üzerine eğitim aldım. Farklı projeler geliştirdim.",
    icon: "graduationCap", // İkon adı
    skills: ["C", "C++", "PostgreSQL", "Redis", "Django"],
    border_color: "border-purple-500",
    text_color: "text-purple-500",
  },
  {
    type: "education",
    title: "Bilgisayar Programcılığı",
    organization: "Dumlupınar Üniversitesi",
    period: "2020 Ekim - 2023 Eylül",
    description:
      "Yazılım temelleri ve algoritmalar üzerine eğitim aldım. Ve C# ile yazılım geliştirdim.",
    icon: "graduationCap", // İkon adı
    skills: ["C#", ".Net Framework", "SQL", "Entity Framework"],
    border_color: "border-green-500",
    text_color: "text-green-500",
  },
];

export const skills: Skill[] = [
  {
    icon: "code",
    title: "Framework & Kütüphaneler",
    description: ["React", "Next.js", "Django", ".Net Framework"],
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: "database",
    title: "Veritabanları",
    description: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "Prisma", "SQLite", "FireBase"],
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: "design",
    title: "UI/UX & Tasarım",
    description: ["Tailwind", "Bootstrap", "ShadcnUI", "Material-UI"],
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    icon: "terminal",
    title: "Yazılım Dilleri",
    description: ["C", "C++", "C#", "Python", "JavaScript", "TypeScript", "Flutter"],
    color: "bg-gray-500/10 text-gray-500",
  },
];

export const techStack: Tech[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "C", icon: "c" },
  { name: "C++", icon: "cpp" },
  { name: "Python", icon: "python" },
  { name: "Django", icon: "django" },


  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Bootstrap", icon: "bootstrap" },

  { name: "PostgreSQL", icon: "postgresql" },
  { name: "SQLite", icon: "sqlite" },
  { name: "FireBase", icon: "firebase" },
  { name: "Prisma", icon: "prisma" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Docker", icon: "docker" },


];

export const projects: Project[] = [
    {
    title: "Filozof Ağacı",
    description:
      "Projeyi kendi felsefe araştırmalarımı daha anlaşılır görünümde görüp ilerlemek amacıyla geliştirdim.",
    longDescription: `Bu proje, araştırdığım ve notlarını tuttuğum filozoflar hakkında bilgiler girdiğim bir arşiv olması amacıyla yapıldı.`,
    image: ["https://raw.githubusercontent.com/erenakbas57/Portfolio/refs/heads/master/public/assets/images/projects/filozof-home.png",
      "https://raw.githubusercontent.com/erenakbas57/Portfolio/refs/heads/master/public/assets/images/projects/filozof-detail.png"
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
    ],
    github: "https://github.com/filozof-agaci",
    demo: "https://filozof-agaci.vercel.app",
    lastUpdated: "2025-03",
    features: [
      "Filozofları ve felsefi düşünürleri keşfetme",
      "Modern ve duyarlı tasarım",
    ],
    learnings: [
      "Next.js ile dinamik web uygulamaları geliştirme",
      "TypeScript ile daha güvenli ve hatasız kod yazma",
      "TailwindCSS ile modern ve duyarlı tasarım uygulama",
    ],
  },
  {
    title: "Yapay Zeka Araçları",
    description:
      "Farklı yapay zeka sitelerinin keşfedilebileceği bir platform.",
    longDescription: `Bu proje, kullanıcıların en güncel ve faydalı yapay zeka araçlarına erişimini kolaylaştıran modern bir web platformudur.`,
    image: ["https://raw.githubusercontent.com/erenakbas57/Portfolio/refs/heads/master/public/assets/images/projects/ai-1.png",
      "https://raw.githubusercontent.com/erenakbas57/Portfolio/refs/heads/master/public/assets/images/projects/ai-2.png"
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "MongoDB",
      "Prisma",
      "Zustand",
    ],
    github: "https://github.com/Ai-Archive",
    demo: "https://ai-archive.vercel.app",
    lastUpdated: "2025-02",
    features: [
      "Farklı yapay zeka sitelerini keşfetme",
      "Modern ve duyarlı tasarım",
      "MongoDB ve Prisma ile veritabanı yönetimi",
      "Zustand ile durum yönetimi",
      "Etkileşimli kullanıcı arayüzü",
    ],
    learnings: [
      "Next.js ile dinamik web uygulamaları geliştirme",
      "TypeScript ile daha güvenli ve hatasız kod yazma",
      "TailwindCSS ile modern ve duyarlı tasarım uygulama",
      "MongoDB ve Prisma ile veritabanı yönetimi",
      "Zustand ile global durum yönetimi kullanımı",
    ],
  },
  {
    title: "Developer Portfolio",
    description:
      "JS veriler ile kolayca düzenlenebilen kişisel portföy web sitesi.",
    longDescription: `Bu proje, geliştiricilerin kendi portföy web sitelerini oluşturmasını kolaylaştırmak için tasarlanmıştır. Verileri JSON dosyası üzerinden alır ve dinamik olarak oluşturur.`,
    image: ["https://raw.githubusercontent.com/erenakbas57/Portfolio/refs/heads/master/public/assets/images/projects/portfolio.png"],
    tags: ["React", "GitHub Pages"],
    github: "https://github.com/Dev-Portfolio",
    demo: "https://erenakbas57.github.io/Dev-Portfolio/",
    lastUpdated: "2025-02",
    features: [
      "JSON veri yönetimi",
      "Dinamik sayfa oluşturma",
      "GitHub Pages desteği",
      "Duyarlı ve modern tasarım",
    ],
    learnings: [
      "React ile bileşen tabanlı mimari geliştirme",
      "GitHub Pages ile statik site yayına alma",
      "JSON verisiyle dinamik içerik oluşturma",
    ],
  },
  {
    title: "Ping Pong Game",
    description:
      "Python ve Django kullanarak geliştirilen web tabanlı bir ping-pong oyunu.",
    longDescription: `Bu proje, kullanıcıların ister kayıt olup ister 42API ile giriş yaparak birbirleriyle ping-pong ve taş-kağıt-makas oynayabileceği bir platform sunar. Yapay zekaya karşı oynanan oyunlarda istatistik tutulur ve grafiksel olarak gösterilir.`,
    image: ["https://raw.githubusercontent.com/erenakbas57/Portfolio/refs/heads/master/public/assets/images/projects/pingpong.webp"],
    tags: [
      "Python",
      "Django",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/erenakbas57/ft_transcendence",
    demo: "",
    lastUpdated: "2024-12",
    features: [
      "Giriş & Kayıt yönetimi",
      "Profil yönetimi",
      "Ping-Pong ve taş-kâğıt-makas oyunu",
      "Arkadaşlık sistemi",
      "Oyuncu arama",
      "SPA mimarisi",
    ],
    learnings: [
      "Django ile REST API geliştirme",
      "Docker ve PostgreSQL kullanarak veritabanı yönetimi",
      "Bootstrap ile kullanıcı dostu UI oluşturma",
      "Vanilla JavaScript ile dinamik SPA geliştirme",
    ],
  },
  {
    title: "MiniShell",
    description:
      "Temel bash komutlarını C dilinde yeniden oluşturan bir komut satırı arayüzü.",
    longDescription: `MiniShell, Unix tabanlı işletim sistemlerinde kullanılan shell programlarının çalışma prensiplerini anlamak için geliştirilmiştir.`,
    image: ["https://raw.githubusercontent.com/erenakbas57/Portfolio/refs/heads/master/public/assets/images/projects/minishell.png"],
    tags: ["C", "Shell"],
    github: "https://github.com/erenakbas57/Minishell",
    demo: "",
    lastUpdated: "2023-11",
    features: [
      "Dosya ve dizin işlemleri",
      "Çocuk süreç yönetimi",
      "Girdi ve çıktı yönlendirme",
      "Komut zincirleme ve arka planda çalıştırma",
    ],
    learnings: [
      "C ile sistem programlama",
      "Unix süreç yönetimi",
      "Shell komutlarının çalışma mantığı",
    ],
  },
  {
    title: "Library Management System",
    description: "C# ile geliştirilen kütüphane ve market yönetim sistemi.",
    longDescription: `Bu proje, kütüphane işlemleri, üyelik yönetimi ve market satışlarını entegre bir şekilde yönetmeyi sağlar.`,
    image: ["https://raw.githubusercontent.com/erenakbas57/Portfolio/refs/heads/master/public/assets/images/projects/kihmed.png"],
    tags: ["C#", ".Net Framework", "MySQL"],
    github: "https://github.com/erenakbas57/LibraryManagementApp",
    demo: "",
    lastUpdated: "2023-11",
    features: [
      "Üyelik Sistemi",
      "Kütüphane Yönetimi",
      "Ödünç Alma Sistemi",
      "Market Yönetimi",
      "Satış İstatistikleri",
      "Veri Filtreleme",
    ],
    learnings: [
      "C# ve .Net Framework ile masaüstü uygulama geliştirme",
      "MySQL ile veritabanı yönetimi",
      "Kütüphane ve satış yönetim sistemlerinin entegrasyonu",
    ],
  },
  {
    title: "Cub3d",
    description:
      "Raycasting yöntemiyle 3D görüntü işleme yapan bir oyun projesi.",
    longDescription: `Cub3d, klasik Wolfenstein 3D oyununa benzer bir yapı sunar. Oyuncuların 3D bir ortamda gezinmesini sağlar.`,
    image: ["https://raw.githubusercontent.com/erenakbas57/Portfolio/refs/heads/master/public/assets/images/projects/cub3d.png"],
    tags: ["C", "Game"],
    github: "https://github.com/erenakbas57/cub3d",
    demo: "",
    lastUpdated: "2023-11",
    features: [
      "Raycasting ile görüntü işleme",
      "MiniLibX kütüphanesi kullanımı",
      "Oyun mekaniği geliştirme",
      "Doku (Texture) yönetimi",
      "Performans optimizasyonu",
    ],
    learnings: [
      "C ile grafik programlama",
      "Raycasting algoritmasını uygulama",
      "MiniLibX kullanarak oyun geliştirme",
    ],
  },
  {
    title: "SoLong",
    description: "MiniLibX kütüphanesi ile geliştirilen 2D bir oyun.",
    longDescription: `Pacman benzeri bu oyunda verilen harita dosyasını okuyarak çeşitli algoritmalar geliştirerek harita kontrolleri sağlandı.`,
    image: ["https://raw.githubusercontent.com/erenakbas57/Portfolio/refs/heads/master/public/assets/images/projects/solong.png"],
    tags: ["C", "Game"],
    github: "https://github.com/erenakbas57/so_long",
    demo: "",
    lastUpdated: "2023-11",
    features: [
      "Harita Okuma",
      "Oyuncu Kontrolleri",
      "Harita Kontrolleri",
      "Grafik İşleme",
    ],
    learnings: [
      "C ile 2D oyun geliştirme",
      "Harita okuma ve oyun mantığı tasarlama",
      "MiniLibX ile grafik işlemleri",
    ],
  },
];


export const socialLinks: Social[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/erenakbas",
    iconName: "LinkedIn",
    icon: "linkedin",
    bg_color: "bg-blue-700/10",
    text_color: "blue-500",
    hover_color: "bg-blue-700/20",
  },
  {
    name: "GitHub",
    url: "https://github.com/erenakbas57",
    icon: "github",
    iconName: "Github",
    bg_color: "bg-gray-800/20",
    text_color: "gray-500",
    hover_color: "bg-gray-800/30",
  },
  {
    name: "Email",
    url: "mailto:erenakbas057@gmail.com",
    icon: "mail",
    iconName: "Email",
    bg_color: "bg-red-500/10",
    text_color: "red-500",
    hover_color: "bg-red-500/20",
  },
];
