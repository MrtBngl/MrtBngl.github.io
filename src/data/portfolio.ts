export const profile = {
  name: "Murat Bingöl",
  title: "Full-Stack & Otomasyon Geliştiricisi",
  education: "Dumlupınar Üniversitesi · Bilgisayar Programcılığı Mezunu",
  location: "Kütahya / Türkiye · Uzaktan",
  email: "mrtbngl2534@gmail.com",
  whatsapp: "https://wa.me/905300000000",
  github: "https://github.com/MrtBngl",
  linkedin: "https://www.linkedin.com/in/murat-bing%C3%B6l-291b9b3b3",
  availability: "Tam Zamanlı Rollere Açık",
  intro:
    "Dumlupınar Üniversitesi Bilgisayar Programcılığı mezunuyum. Arka plan mimarilerine, API entegrasyonlarına ve event-driven sistemlere odaklanıyorum — Node.js servisleri, Gemini destekli otomasyon motorları ve geliştiricilerin severek kullandığı DevTools'lar inşa ediyorum.",
};

export const navLinks = [
  { label: "Hakkımda", href: "#hakkimda" },
  { label: "Projeler", href: "#projeler" },
  { label: "Beceriler", href: "#beceriler" },
  { label: "İletişim", href: "#iletisim" },
];

export type ProjectDetail = {
  id: string;
  index: string;
  name: string;
  fullName: string;
  category: string;
  badge: string;
  badgeColor: "violet" | "emerald" | "indigo" | "amber";
  // Kartın üstündeki ana görsel. Görseli public/images/ klasörüne koyup
  // buradaki yolu güncelleyin. Örn: "/images/conflux.png"
  image: string;
  summary: string;
  problem: string;
  role: string;
  rolePoints: string[];
  architecture: { title: string; desc: string }[];
  techFocus: string[];
  tech: string[];
  repo: string;
};

export const projects: ProjectDetail[] = [
  {
    id: "conflux",
    index: "01",
    name: "ConFlux",
    fullName: "ConFlux — AI Code Review & UI Sandbox",
    category: "DevTool · MVP",
    badge: "DevTool MVP",
    badgeColor: "violet",
    image: "/images/conflux.png",
    summary:
      "3 panelli monolitik IDE: kod yaz, statik analizi çalıştır, çıktıyı izole sandbox'ta gör. İnceleme ile render aynı yüzeyde.",
    problem:
      "Kod incelemeleri dağınık araçlara bölünmüştü: linter bir yerde, yorumlar başka yerde, UI çıktısını görmek için bağlam değiştirmek gerekiyordu. Özellikle import/çakışma hataları gözden kaçıyor, inceleme süresi uzuyordu.",
    role: "3 panelli monolitik IDE arayüzünün tasarlanması, dosya parsing yapısı ve Gemini API entegrasyonu ile statik kod analizi motorunun kurulması.",
    rolePoints: [
      "Editor + Analiz + Önizleme panellerini tek state modelinde birleştiren monolitik IDE iskeleti",
      "Dosya parsing katmanı: import grafı çıkarma, kullanılmayan/sorunlu bağımlılık tespiti",
      "Kural tabanlı ön analiz + Gemini destekli derin inceleme hattı (prompt şablonları ile)",
    ],
    architecture: [
      {
        title: "1. Monaco Editor Katmanı",
        desc: "Çok dosyalı düzenleme, diff görünümü ve satır bazlı bulgu eşleme. Editör durumu tek store'da tutulur.",
      },
      {
        title: "2. Parsing & AST Analizi",
        desc: "Dosyalar parse edilip AST üzerinden taranır; import grafı çıkarılır, çakışma ve ölü kod adayları işaretlenir.",
      },
      {
        title: "3. LLM İnceleme Motoru",
        desc: "Ön filtrelenmiş bulgular Gemini'ye yapılandırılmış prompt ile gönderilir; ciddiyet skoru ve düzeltme önerisi döner.",
      },
      {
        title: "4. Iframe Sandbox",
        desc: "HTML/CSS/JS çıktısı izole iframe'de render edilir. Ana uygulamadan tam yalıtım, güvenli ön izleme.",
      },
    ],
    techFocus: ["AST", "Monaco Editor", "Iframe Sandbox", "LLM Entegrasyonu"],
    tech: ["React", "Tailwind CSS", "Monaco Editor", "Gemini API", "Node.js", "AST Parser"],
    repo: "https://github.com/MrtBngl/ConFlux",
  },
  {
    id: "pisas",
    index: "02",
    name: "Pisas",
    fullName: "Pisas — WhatsApp & Gemini AI Otomasyon Motoru",
    category: "Otomasyon Motoru · B2B",
    badge: "Event-Driven SaaS",
    badgeColor: "emerald",
    image: "/images/pisas.png",
    summary:
      "Formları ortadan kaldıran otomasyon motoru: doğal dildeki mesajdan varlık çıkarır, randevu kaydını açar, hatırlatmayı kuyruğa atar.",
    problem:
      "Klasik randevu formları yarıda bırakılıyordu; işletmeler DM kutusunda kayboluyor, tarih-saat-personel bilgisi manuel işleniyordu. Çok işletmeli yapıda veri karışması riski vardı.",
    role: "Standart formları ortadan kaldırarak doğal dille gelen mesajlardan veri çıkaran (Entity Extraction) ve veritabanı akışını yöneten event-driven mimarinin geliştirilmesi.",
    rolePoints: [
      "WhatsApp webhook altyapısı: imza doğrulama, idempotency anahtarı, kuyruk + tekrar deneme",
      "Doğal dil → yapılandırılmış veri hattı: niyet, tarih, hizmet ve personel çıkarımı",
      "MongoDB Atlas üzerinde businessId izolasyonlu multi-tenant veri modeli ve JWT yetkilendirme",
    ],
    architecture: [
      {
        title: "1. WhatsApp Cloud API",
        desc: "Gelen mesaj webhook ile alınır; messageId ile dedupe edilir, kuyruğa yazılır.",
      },
      {
        title: "2. Express Webhook Katmanı",
        desc: "İmza doğrulama ve şema validasyonu. Başarısız işler exponential backoff ile tekrar denenir.",
      },
      {
        title: "3. Entity Extraction (Gemini)",
        desc: "Mesaj, işletme bağlamıyla (hizmetler, personel, çalışma saatleri) promptlanır; JSON şemaya zorlanır.",
      },
      {
        title: "4. MongoDB Atlas + n8n",
        desc: "Randevu kaydı tenant izole yazılır; hatırlatma ve no-show takipleri n8n akışlarına devredilir.",
      },
    ],
    techFocus: ["WhatsApp Cloud API", "Node.js / Express", "MongoDB Atlas Multi-Tenant", "Webhook Yönetimi"],
    tech: ["Node.js", "Express", "MongoDB Atlas", "Gemini API", "WhatsApp Cloud API", "JWT", "n8n"],
    repo: "https://github.com/MrtBngl/Pisas",
  },
  {
    id: "geopulse",
    index: "03",
    name: "geopulse-tr",
    fullName: "geopulse-tr — Coğrafi & Bölgesel Veri Analiz Platformu",
    category: "Veri Platformu · Backend",
    badge: "Spatial Backend",
    badgeColor: "indigo",
    image: "/images/geopulse.png",
    summary:
      "Karmaşık coğrafi veri setleri ve GeoJSON katmanlarını işleyip hızlı konum bazlı sorgular döndüren backend servisleri.",
    problem:
      "Ham GeoJSON dosyaları büyüktü (MB'larca poligon), sınır-içi ve yakınlık sorguları yavaş çalışıyor, katman birleştirme (il/ilçe/mahalle) tutarsız sonuç veriyordu. Ön yüz her seferinde tüm geometriyi çekmek zorunda kalıyordu.",
    role: "Karmaşık coğrafi veri setlerinin ve GeoJSON katmanlarının işlenerek hızlı konum bazlı sorgular atılmasını sağlayan backend servislerinin yazılması.",
    rolePoints: [
      "GeoJSON ingest hattı: validasyon, basitleştirme (simplify) ve katman normalizasyonu",
      "Spatial index tasarımı: 2dsphere index + bbox ön filtre ile sorgu maliyetinin düşürülmesi",
      "Özet + detay ayrımı: harita için hafif tile/özet, analiz için tam geometri dönen iki kademeli API",
    ],
    architecture: [
      {
        title: "1. Ingest & Normalizasyon",
        desc: "Kaynak GeoJSON'lar doğrulanır, koordinat sırası ve CRS tutarlılığı düzeltilir, geometriler sadeleştirilir.",
      },
      {
        title: "2. Spatial Indexleme",
        desc: "2dsphere index + bbox ön filtre; önce kutu kesişimi, sonra hassas geometri testi yapılır.",
      },
      {
        title: "3. Sorgu Servisleri",
        desc: "Nokta-içinde-poligon, yarıçap arama ve katman kesişimi uçları; sayfalı ve önbellekli yanıtlar.",
      },
      {
        title: "4. Önbellek Katmanı",
        desc: "Sık sorulan bbox sonuçları önbelleğe alınır; veri sürümü değişince geçersiz kılınır.",
      },
    ],
    techFocus: ["Spatial Data Indexing", "GeoJSON İşleme", "2dsphere Index", "BBox Ön Filtreleme"],
    tech: ["Node.js", "Express", "MongoDB 2dsphere", "GeoJSON", "Turf.js", "Redis Cache"],
    repo: "https://github.com/MrtBngl/geopulse-tr",
  },
  {
    id: "privcloud",
    index: "04",
    name: "PrivCloud",
    fullName: "PrivCloud — Güvenli Bulut & Dosya Yönetim Mimarisi",
    category: "Güvenlik · Cloud",
    badge: "Secure Cloud",
    badgeColor: "amber",
    image: "/images/privcloud.png",
    summary:
      "Güvenli veri depolama, erişim kontrolü ve şifreli dosya paylaşımı sağlayan bulut depolama çözümü.",
    problem:
      "Hassas verilerin güvensiz ortamlarda depolanması ve yetkisiz erişim riski. Herkese açık linkler, rol ayrımı olmayan klasörler ve şifresiz transfer, veri sızıntısına açık kapı bırakıyordu.",
    role: "Rol tabanlı erişim kontrolü (RBAC), şifreli dosya transferi ve güvenli veritabanı mimarisinin tasarlanıp uygulanması.",
    rolePoints: [
      "Kimlik doğrulama: JWT access + refresh rotasyonu, parola hashing ve oturum iptal listesi",
      "RBAC modeli: sahip / editör / görüntüleyici rolleriyle dosya ve klasör bazında yetki matrisi",
      "Paylaşım akışı: süreli, tek kullanımlık ve parola korumalı linkler; şifreli transfer + bütünlük doğrulaması",
    ],
    architecture: [
      {
        title: "1. Auth & Oturum",
        desc: "Kayıt/giriş, bcrypt hashing, kısa ömürlü access + döner refresh token. Çalıntı token senaryosuna karşı iptal listesi.",
      },
      {
        title: "2. RBAC Yetki Katmanı",
        desc: "Her dosya/klasör isteği rol matrisinden geçer; yetkisiz erişim veri katmanına inmeden reddedilir.",
      },
      {
        title: "3. Şifreli Dosya Transferi",
        desc: "Aktarımda TLS, depolamada şifreli obje; indirme linkleri imzalı ve süre sınırlı üretilir.",
      },
      {
        title: "4. Güvenli Veri Modeli",
        desc: "Meta veri ile dosya içeriği ayrıştırılır; kota, sürümleme ve denetim logları (kim, ne zaman, ne yaptı) tutulur.",
      },
    ],
    techFocus: ["RBAC", "Şifreli Transfer", "JWT Auth", "Denetim Logları"],
    tech: ["Node.js", "Express", "MongoDB / SQL", "Authentication", "Cloud Storage", "RBAC"],
    repo: "https://github.com/MrtBngl/PrivCloud",
  },
];

export const skillGroups = [
  {
    title: "Ön Yüz",
    desc: "Sade, hızlı ve sürdürülebilir arayüzler.",
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Monaco Editor", "Sandbox Preview"],
  },
  {
    title: "Arka Yüz & API",
    desc: "Olay odaklı, güvenilir servisler.",
    skills: ["Node.js", "Express.js", "C# (.NET)", "RESTful API", "Webhook"],
  },
  {
    title: "Yapay Zeka & Otomasyon",
    desc: "Tekrarlayan işleri devralan motorlar.",
    skills: ["Gemini API", "OpenAI API", "n8n", "LLM Prompt Mühendisliği"],
  },
  {
    title: "Veri & Altyapı",
    desc: "Güvenilir veri ve düzenli geliştirme.",
    skills: ["MongoDB Atlas", "PostgreSQL", "GeoJSON / Spatial", "Git / GitHub", "Postman"],
  },
];

export const principles = [
  {
    title: "Önce Mimari",
    desc: "Önce veri akışı ve sınır durumları çizilir; kod ondan sonra yazılır. Olaylar, kuyruklar ve idempotency baştan planlanır.",
  },
  {
    title: "API Odaklılık",
    desc: "Her entegrasyon sözleşmeyle başlar: şema, hata kodu, retry politikası. Belirsiz yanıt, belirsiz sistem demektir.",
  },
  {
    title: "Event-Driven Düşünce",
    desc: "Webhook bir giriştir, garanti değildir. Doğrulama, dedupe ve tekrar deneme olmadan üretim olmaz.",
  },
  {
    title: "Ölçülebilir Otomasyon",
    desc: "Otomasyon bir iddiadır, metrikle kanıtlanır: kazanılan süre, düşen hata, kısalan yanıt.",
  },
];
