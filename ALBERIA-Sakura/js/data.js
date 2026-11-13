// ALBERIA Games Database
// Covers use Steam CDN where possible (public headers)

const GAMES = [
  // Featured / Popular
  {
    id: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    titleFa: "بالدورز گیت ۳",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/library_600x900.jpg",
    year: 2023,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["RPG", "نقش‌آفرینی", "داستانی"],
    metacritic: 96,
    popular: true,
    new: false,
    upcoming: false,
    description: "بالدورز گیت ۳ یکی از کامل‌ترین و عمیق‌ترین تجربه‌های نقش‌آفرینی تاریخ بازی‌های ویدیویی است. این بازی شما را به دنیای فانتزی فورگاتن ریلمز می‌برد، جایی که هر انتخاب شما می‌تواند مسیر داستان را به کلی تغییر دهد. با سیستم مبارزات نوبتی فوق‌العاده تاکتیکی، شخصیت‌های چندبعدی و نوشته‌های درخشان، این عنوان استاندارد جدیدی برای ژانر RPG تعریف کرده است. می‌توانید به تنهایی یا با دوستان خود وارد این ماجراجویی حماسی شوید و دنیایی زنده و واکنش‌گر را تجربه کنید.",
    characters: ["Tav", "Astarion", "Shadowheart", "Karlachs", "Gale"]
  },
  {
    id: "elden-ring",
    title: "Elden Ring",
    titleFa: "الدن رینگ",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_600x900.jpg",
    year: 2022,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["Action", "RPG", "Soulslike", "جهان‌باز"],
    metacritic: 96,
    popular: true,
    new: false,
    upcoming: false,
    description: "الدن رینگ شاهکاری از استودیو فرام سافتور و همکاری با جورج آر. آر. مارتین است که دنیای وسیع و اسرارآمیز لندز بیتوین را پیش روی شما قرار می‌دهد. برخلاف سری دارک سولز، اینجا آزادی اکتشاف تقریباً بی‌نهایت است. می‌توانید از هر مسیری که می‌خواهید پیش بروید، با باس‌های عظیم و چالش‌برانگیز روبه‌رو شوید و داستان عمیق و چندلایه جهان را کشف کنید. گیم‌پلی سخت اما منصفانه، اسب سواری، سیستم ساخت‌وساز و تنوع بی‌نظیر بیلدها این بازی را به یکی از بهترین تجربه‌های جهان‌باز تاریخ تبدیل کرده است.",
    characters: ["Tarnished", "Melina", "Ranni", "Radahn"]
  },
  {
    id: "hades-2",
    title: "Hades II",
    titleFa: "هادس ۲",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145350/library_600x900.jpg",
    year: 2025,
    platforms: ["PC"],
    genres: ["Action", "Roguelike", "اساطیری"],
    metacritic: 94,
    popular: true,
    new: true,
    upcoming: false,
    description: "هادس ۲ شما را در نقش ملینوئه، شاهدخت دنیای زیرین قرار می‌دهد که مأموریت دارد تیتان زمان، کرونوس را متوقف کند. این بازی تمام نقاط قوت نسخه اول را حفظ کرده و با سیستم جادوگری جدید، سلاح‌های متنوع‌تر و دنیای بزرگ‌تر، تجربه‌ای عمیق‌تر ارائه می‌دهد. مبارزات سریع و روان، داستان اسطوره‌ای یونان و طراحی هنری خیره‌کننده، این عنوان را به یکی از بهترین روگ‌لایک‌های روایی تاریخ تبدیل کرده است.",
    characters: ["Melinoë", "Hecate", "Chronos"]
  },
  {
    id: "clair-obscur",
    title: "Clair Obscur: Expedition 33",
    titleFa: "کلر آبسکور: اکسپدیشن ۳۳",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1903340/library_600x900.jpg",
    year: 2025,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["RPG", "نوبتی", "داستانی"],
    metacritic: 92,
    popular: true,
    new: true,
    upcoming: false,
    description: "کلر آبسکور: اکسپدیشن ۳۳ یک JRPG با الهام از هنر فرانسه و طراحی بصری منحصربه‌فرد است. داستان در دنیایی Occurs که هر سال Paintress عددی را روی یک بنای یادبود نقاشی می‌کند و همه کسانی که به آن سن می‌رسند ناپدید می‌شوند. مبارزات نوبتی عمیق، سیستم همراهان و طراحی هنری فوق‌العاده، این بازی را به یکی از شگفتی‌های سال تبدیل کرده است.",
    characters: []
  },
  {
    id: "hollow-knight-silksong",
    title: "Hollow Knight: Silksong",
    titleFa: "هالو نایت: سیلک‌سانگ",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1030300/library_600x900.jpg",
    year: 2025,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["Metroidvania", "اکشن", "ماجراجویی"],
    metacritic: 92,
    popular: true,
    new: true,
    upcoming: false,
    description: "هالو نایت: سیلک‌سانگ شما را در نقش هورنت قرار می‌دهد، جنگجوی سوزنی که حالا داستان خودش را روایت می‌کند. این بازی دنیای بسیار بزرگ‌تری نسبت به نسخه اول دارد، با دشمنان جدید، باس‌فایت‌های چالش‌برانگیز و سیستم مبارزه‌ای که حول ابریشم و سوزن طراحی شده. اگر عاشق مترویدوانیای سخت و زیبا هستید، سیلک‌سانگ تجربه‌ای است که نباید از دست بدهید.",
    characters: ["Hornet"]
  },
  {
    id: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    titleFa: "رد دد ریدمپشن ۲",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/library_600x900.jpg",
    year: 2018,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["Action", "ماجراجویی", "جهان‌باز", "وسترن"],
    metacritic: 97,
    popular: true,
    new: false,
    upcoming: false,
    description: "رد دد ریدمپشن ۲ داستان آرتور مورگان، یکی از اعضای باند ون در لیند را روایت می‌کند که در آخرین روزهای غرب وحشی زندگی می‌کند. این بازی نه تنها از نظر گرافیک و جزئیات جهان‌سازی بی‌نظیر است، بلکه داستان احساسی و شخصیت‌پردازی فوق‌العاده‌ای دارد که بازیکن را تا عمق روح با خود همراه می‌کند. شکار، ماهیگیری، تعامل با NPCها، سیستم شرافت و صدها فعالیت فرعی، همگی در خدمت ساختن یکی از زنده‌ترین دنیاهای تاریخ بازی‌های ویدیویی هستند. تجربه‌ای که تا سال‌ها در ذهن می‌ماند.",
    characters: ["Arthur Morgan", "John Marston", "Dutch van der Linde"]
  },
  {
    id: "god-of-war-ragnarok",
    title: "God of War Ragnarök",
    titleFa: "خدای جنگ: رگناروک",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/library_600x900.jpg",
    year: 2022,
    platforms: ["PC", "PS5"],
    genres: ["Action", "ماجراجویی", "اساطیری"],
    metacritic: 94,
    popular: true,
    new: false,
    upcoming: false,
    description: "خدای جنگ رگناروک نقطه اوج داستان کریتوس و پسرش آترئوس در دنیای اساطیر نورس است. این بازی نه تنها مبارزات سینمایی و وحشیانه نسخه قبل را حفظ کرده، بلکه عمق عاطفی بیشتری به رابطه پدر و پسر بخشیده است. دنیاهای متعدد، باس‌فایت‌های حماسی و داستان غنی، رگناروک را به یکی از بهترین بازی‌های اکشن-ماجراجویی نسل تبدیل کرده است.",
    characters: ["Kratos", "Atreus", "Freya", "Thor"]
  },
  {
    id: "the-last-of-us-part-2",
    title: "The Last of Us Part II",
    titleFa: "آخرین بازمانده از ما ۲",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/library_600x900.jpg",
    year: 2020,
    platforms: ["PC", "PS5"],
    genres: ["Action", "ماجراجویی", "ترسناک", "داستانی"],
    metacritic: 93,
    popular: true,
    new: false,
    upcoming: false,
    description: "آخرین بازمانده از ما ۲ داستان انتقام، خشونت و انسانیت را در دنیای ویران‌شده پساآخرالزمانی روایت می‌کند. این بازی با روایت دوگانه و شخصیت‌پردازی عمیق، بازیکن را مجبور می‌کند با سؤالات اخلاقی سخت روبه‌رو شود. گیم‌پلی مخفی‌کاری و مبارزات نزدیک، طراحی صدا و انیمیشن‌های فوق‌العاده، همگی در خدمت یک تجربه احساسی قدرتمند هستند که تا مدت‌ها با شما می‌ماند.",
    characters: ["Ellie", "Abby", "Joel"]
  },
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    titleFa: "سایبرپانک ۲۰۷۷",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_600x900.jpg",
    year: 2020,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["RPG", "اکشن", "جهان‌باز", "سایبرپانک"],
    metacritic: 86,
    popular: true,
    new: false,
    upcoming: false,
    description: "زندگی در نایت‌سیتی؛ یکی از جاه‌طلبانه‌ترین جهان‌بازهای تاریخ.",
    characters: ["V", "Johnny Silverhand", "Judy Alvarez"]
  },
  {
    id: "persona-5-royal",
    title: "Persona 5 Royal",
    titleFa: "پرسونا ۵ رویال",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1687950/library_600x900.jpg",
    year: 2019,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["RPG", "نوبتی", "داستانی", "ژاپنی"],
    metacritic: 95,
    popular: true,
    new: false,
    upcoming: false,
    description: "بهترین نسخه از یکی از محبوب‌ترین JRPGهای تاریخ.",
    characters: ["Joker", "Ann", "Ryuji", "Makoto", "Kasumi"]
  },
  {
    id: "zelda-totk",
    title: "The Legend of Zelda: Tears of the Kingdom",
    titleFa: "افسانه زلدا: اشک‌های پادشاهی",
    cover: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_rgb:ffffff/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/software/switch/70010000063714/16cd0db41f5e4e3f5f5e5e5e5e5e5e5e",
    year: 2023,
    platforms: ["Switch"],
    genres: ["ماجراجویی", "جهان‌باز", "اکشن"],
    metacritic: 96,
    popular: true,
    new: false,
    upcoming: false,
    description: "ادامه Breath of the Wild با آزادی ساخت‌وساز و اکتشاف عمودی.",
    characters: ["Link", "Zelda", "Ganondorf"]
  },
  {
    id: "black-myth-wukong",
    title: "Black Myth: Wukong",
    titleFa: "افسانه سیاه: ووکونگ",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/library_600x900.jpg",
    year: 2024,
    platforms: ["PC", "PS5"],
    genres: ["Action", "Soulslike", "اساطیری"],
    metacritic: 81,
    popular: true,
    new: true,
    upcoming: false,
    description: "حماسه چینی بر اساس Journey to the West با گرافیک خیره‌کننده.",
    characters: ["The Destined One"]
  },
  {
    id: "sekiro",
    title: "Sekiro: Shadows Die Twice",
    titleFa: "سکیرو",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/library_600x900.jpg",
    year: 2019,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["Action", "Soulslike"],
    metacritic: 90,
    popular: true,
    new: false,
    upcoming: false,
    description: "نبردهای شمشیری دقیق و سخت از سازندگان Dark Souls.",
    characters: ["Wolf", "Kuro", "Lady Butterfly"]
  },
  {
    id: "disco-elysium",
    title: "Disco Elysium - The Final Cut",
    titleFa: "دیسکو الیسیوم",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/632470/library_600x900.jpg",
    year: 2019,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["RPG", "داستانی", "کارآگاهی"],
    metacritic: 97,
    popular: true,
    new: false,
    upcoming: false,
    description: "یکی از عمیق‌ترین و بهترین نوشته‌شده‌ترین بازی‌های تاریخ.",
    characters: ["Harry Du Bois"]
  },
  {
    id: "hades",
    title: "Hades",
    titleFa: "هادس",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/library_600x900.jpg",
    year: 2020,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["Action", "Roguelike", "اساطیری"],
    metacritic: 93,
    popular: true,
    new: false,
    upcoming: false,
    description: "فرار از دنیای زیرین در قالب یک روگ‌لایک روایی درخشان.",
    characters: ["Zagreus", "Hades", "Megaera", "Thanatos"]
  },
  {
    id: "witcher-3",
    title: "The Witcher 3: Wild Hunt",
    titleFa: "ویچر ۳: شکار وحشی",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/library_600x900.jpg",
    year: 2015,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["RPG", "جهان‌باز", "داستانی"],
    metacritic: 93,
    popular: true,
    new: false,
    upcoming: false,
    description: "حماسه گِرالت از ریویا؛ یکی از بهترین RPGهای جهان‌باز.",
    characters: ["Geralt", "Ciri", "Yennefer", "Triss"]
  },
  {
    id: "rdr2",
    title: "Red Dead Redemption 2",
    titleFa: "رد دد ریدمپشن ۲",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/library_600x900.jpg",
    year: 2018,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["Action", "جهان‌باز", "وسترن"],
    metacritic: 97,
    popular: true,
    new: false,
    upcoming: false,
    description: "دنیای زنده و داستان احساسی غرب وحشی.",
    characters: ["Arthur Morgan"]
  },
  {
    id: "metaphor",
    title: "Metaphor: ReFantazio",
    titleFa: "متافور: رفانتازیو",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2677660/library_600x900.jpg",
    year: 2024,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["RPG", "نوبتی", "فانتزی"],
    metacritic: 92,
    popular: true,
    new: true,
    upcoming: false,
    description: "اثر جدید استودیوی Persona با دنیایی فانتزی و سیاسی.",
    characters: []
  },
  {
    id: "silent-hill-2",
    title: "Silent Hill 2 (Remake)",
    titleFa: "سایلنت هیل ۲",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2124490/library_600x900.jpg",
    year: 2024,
    platforms: ["PC", "PS5"],
    genres: ["ترسناک", "روان‌شناختی", "ماجراجویی"],
    metacritic: 87,
    popular: true,
    new: true,
    upcoming: false,
    description: "بازسازی یکی از بهترین بازی‌های ترسناک تاریخ.",
    characters: ["James Sunderland", "Maria"]
  },
  {
    id: "ff7-rebirth",
    title: "Final Fantasy VII Rebirth",
    titleFa: "فاینال فانتزی ۷: تولد دوباره",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/library_600x900.jpg",
    year: 2024,
    platforms: ["PS5", "PC"],
    genres: ["RPG", "اکشن", "داستانی"],
    metacritic: 92,
    popular: true,
    new: true,
    upcoming: false,
    description: "بخش دوم بازسازی حماسی فاینال فانتزی ۷.",
    characters: ["Cloud", "Tifa", "Aerith", "Sephiroth"]
  },
  // More games for archive depth
  {
    id: "dark-souls-3",
    title: "Dark Souls III",
    titleFa: "دارک سولز ۳",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/library_600x900.jpg",
    year: 2016,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["Action", "Soulslike", "RPG"],
    metacritic: 89,
    popular: true,
    new: false,
    upcoming: false,
    description: "نقطه اوج سری دارک سولز.",
    characters: []
  },
  {
    id: "bloodborne",
    title: "Bloodborne",
    titleFa: "بلادبورن",
    cover: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/702810/library_600x900.jpg",
    year: 2015,
    platforms: ["PS5"],
    genres: ["Action", "Soulslike", "ترسناک"],
    metacritic: 92,
    popular: true,
    new: false,
    upcoming: false,
    description: "شاهکار گوتیک و کیهانی فرام سافتور.",
    characters: []
  },
  {
    id: "horizon-forbidden-west",
    title: "Horizon Forbidden West",
    titleFa: "هورایزن: غرب ممنوعه",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2420110/library_600x900.jpg",
    year: 2022,
    platforms: ["PC", "PS5"],
    genres: ["Action", "RPG", "جهان‌باز"],
    metacritic: 88,
    popular: true,
    new: false,
    upcoming: false,
    description: "ادامه ماجراجویی الوی در دنیای پساآخرالزمانی.",
    characters: ["Aloy"]
  },
  {
    id: "spider-man-2",
    title: "Marvel's Spider-Man 2",
    titleFa: "مرد عنکبوتی ۲",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2651280/library_600x900.jpg",
    year: 2023,
    platforms: ["PS5"],
    genres: ["Action", "ماجراجویی", "جهان‌باز"],
    metacritic: 90,
    popular: true,
    new: false,
    upcoming: false,
    description: "پیتر و مایلز در برابر ونوم.",
    characters: ["Peter Parker", "Miles Morales", "Venom"]
  },
  {
    id: "alan-wake-2",
    title: "Alan Wake 2",
    titleFa: "آلن ویک ۲",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1902960/library_600x900.jpg",
    year: 2023,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["ترسناک", "بقا", "داستانی"],
    metacritic: 89,
    popular: true,
    new: false,
    upcoming: false,
    description: "ترسناک روایی درخشان از رمدی.",
    characters: ["Alan Wake", "Saga Anderson"]
  },
  {
    id: "lies-of-p",
    title: "Lies of P",
    titleFa: "دروغ‌های پی",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1627720/library_600x900.jpg",
    year: 2023,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["Action", "Soulslike"],
    metacritic: 83,
    popular: false,
    new: false,
    upcoming: false,
    description: "Soulslike بر اساس داستان پینوکیو.",
    characters: ["P"]
  },
  {
    id: "armored-core-6",
    title: "Armored Core VI: Fires of Rubicon",
    titleFa: "آرمورد کور ۶",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/library_600x900.jpg",
    year: 2023,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["Action", "مکانیکی"],
    metacritic: 87,
    popular: false,
    new: false,
    upcoming: false,
    description: "بازگشت قدرتمند سری آرمورد کور.",
    characters: []
  },
  {
    id: "starfield",
    title: "Starfield",
    titleFa: "استارفیلد",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/library_600x900.jpg",
    year: 2023,
    platforms: ["PC", "Xbox"],
    genres: ["RPG", "جهان‌باز", "فضایی"],
    metacritic: 83,
    popular: false,
    new: false,
    upcoming: false,
    description: "اولین جهان‌باز فضایی بتسدا.",
    characters: []
  },
  {
    id: "bg3-more",
    title: "Baldur's Gate 3",
    titleFa: "بالدورز گیت ۳",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/library_600x900.jpg",
    year: 2023,
    platforms: ["PC", "PS5", "Xbox"],
    genres: ["RPG"],
    metacritic: 96,
    popular: true,
    new: false,
    upcoming: false,
    description: "",
    characters: []
  },
  // Upcoming examples
  {
    id: "gta-6",
    title: "Grand Theft Auto VI",
    titleFa: "گرند تیفت اتو ۶",
    cover: "https://media.rockstargames.com/rockstargames-newsite/img/global/games/fob/640/VI.jpg",
    year: 2026,
    platforms: ["PS5", "Xbox"],
    genres: ["Action", "جهان‌باز"],
    metacritic: null,
    popular: true,
    new: false,
    upcoming: true,
    description: "نسل بعدی سری GTA در وایس سیتی.",
    characters: ["Lucia", "Jason"]
  },
  {
    id: "elder-scrolls-6",
    title: "The Elder Scrolls VI",
    titleFa: "الدِر اسکرولز ۶",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_600x900.jpg",
    year: 2027,
    platforms: ["PC", "Xbox"],
    genres: ["RPG", "جهان‌باز"],
    metacritic: null,
    popular: true,
    new: false,
    upcoming: true,
    description: "ادامه حماسه تامریل.",
    characters: []
  }
];

// Expand with more entries for archive size (duplicates avoided, more unique)
const MORE_GAMES = [
  { id: "nier-automata", title: "NieR:Automata", titleFa: "نیر: آتوماتا", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/524220/library_600x900.jpg", year: 2017, platforms: ["PC","PS5","Xbox"], genres: ["Action","RPG"], metacritic: 88, popular: true, new: false, upcoming: false, description: "فلسفه و مبارزه در دنیای پساانسان.", characters: ["2B","9S","A2"] },
  { id: "celeste", title: "Celeste", titleFa: "سلست", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/504230/library_600x900.jpg", year: 2018, platforms: ["PC","PS5","Xbox"], genres: ["پلتفرمر","داستانی"], metacritic: 92, popular: false, new: false, upcoming: false, description: "یکی از بهترین پلتفرمرهای روایی.", characters: ["Madeline"] },
  { id: "hollow-knight", title: "Hollow Knight", titleFa: "هالو نایت", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/library_600x900.jpg", year: 2017, platforms: ["PC","PS5","Xbox"], genres: ["Metroidvania"], metacritic: 90, popular: true, new: false, upcoming: false, description: "شاهکار مترویدوانیا.", characters: ["The Knight"] },
  { id: "ori-will", title: "Ori and the Will of the Wisps", titleFa: "اوری و اراده ارواح", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1057090/library_600x900.jpg", year: 2020, platforms: ["PC","Xbox"], genres: ["پلتفرمر","ماجراجویی"], metacritic: 90, popular: false, new: false, upcoming: false, description: "زیباترین پلتفرمر نسل.", characters: ["Ori"] },
  { id: "death-stranding", title: "Death Stranding", titleFa: "دث استرندینگ", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1190460/library_600x900.jpg", year: 2019, platforms: ["PC","PS5"], genres: ["ماجراجویی","داستانی"], metacritic: 82, popular: false, new: false, upcoming: false, description: "تجربه منحصربه‌فرد کوجیما.", characters: ["Sam Bridges"] },
  { id: "control", title: "Control", titleFa: "کنترل", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/870780/library_600x900.jpg", year: 2019, platforms: ["PC","PS5","Xbox"], genres: ["Action","ماجراجویی"], metacritic: 85, popular: false, new: false, upcoming: false, description: "قدرت‌های فراطبیعی در سازمان FBC.", characters: ["Jesse Faden"] },
  { id: "outer-wilds", title: "Outer Wilds", titleFa: "اُوتر وایلدز", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/753640/library_600x900.jpg", year: 2019, platforms: ["PC","PS5","Xbox"], genres: ["ماجراجویی","اکتشافی"], metacritic: 85, popular: false, new: false, upcoming: false, description: "یکی از بهترین بازی‌های اکتشافی تاریخ.", characters: [] },
  { id: "returnal", title: "Returnal", titleFa: "ریترنال", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1649240/library_600x900.jpg", year: 2021, platforms: ["PC","PS5"], genres: ["Action","Roguelike","ترسناک"], metacritic: 86, popular: false, new: false, upcoming: false, description: "روگ‌لایک علمی‌تخیلی های‌فریم.", characters: ["Selene"] },
  { id: "it-takes-two", title: "It Takes Two", titleFa: "ایت تیکز تو", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/library_600x900.jpg", year: 2021, platforms: ["PC","PS5","Xbox"], genres: ["کوآپ","ماجراجویی"], metacritic: 89, popular: true, new: false, upcoming: false, description: "بهترین تجربه دونفره نسل.", characters: ["Cody","May"] },
  { id: "split-fiction", title: "Split Fiction", titleFa: "اسپلیت فیکشن", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2001540/library_600x900.jpg", year: 2025, platforms: ["PC","PS5","Xbox"], genres: ["کوآپ","ماجراجویی"], metacritic: 93, popular: true, new: true, upcoming: false, description: "اثر جدید هازل‌ایت استودیوز.", characters: [] }
];


// Expanded ALBERIA catalog: curated additions with Steam library cover artwork.
const EXPANDED_GAMES = [
  {
    "id": "cyberpunk-2077",
    "title": "Cyberpunk 2077",
    "titleFa": "سایبرپانک ۲۰۷۷",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "سایبرپانک ۲۰۷۷ (Cyberpunk 2077) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 18 گیگابایت (تخمینی)"
  },
  {
    "id": "red-dead-redemption-2",
    "title": "Red Dead Redemption 2",
    "titleFa": "رد دد ردمپشن ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "رد دد ردمپشن ۲ (Red Dead Redemption 2) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 25 گیگابایت (تخمینی)"
  },
  {
    "id": "the-witcher-3-wild-hunt",
    "title": "The Witcher 3: Wild Hunt",
    "titleFa": "ویچر ۳",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/library_600x900.jpg",
    "year": 2015,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "ویچر ۳ (The Witcher 3: Wild Hunt) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 33 گیگابایت (تخمینی)"
  },
  {
    "id": "grand-theft-auto-v",
    "title": "Grand Theft Auto V",
    "titleFa": "جی‌تی‌ای ۵",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/library_600x900.jpg",
    "year": 2013,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "جی‌تی‌ای ۵ (Grand Theft Auto V) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 40 گیگابایت (تخمینی)"
  },
  {
    "id": "hogwarts-legacy",
    "title": "Hogwarts Legacy",
    "titleFa": "میراث هاگوارتز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/library_600x900.jpg",
    "year": 2023,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": true,
    "upcoming": false,
    "description": "میراث هاگوارتز (Hogwarts Legacy) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 47 گیگابایت (تخمینی)"
  },
  {
    "id": "god-of-war",
    "title": "God of War",
    "titleFa": "خدای جنگ",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "خدای جنگ (God of War) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 54 گیگابایت (تخمینی)"
  },
  {
    "id": "marvel-s-spider-man-remastered",
    "title": "Marvel’s Spider-Man Remastered",
    "titleFa": "مرد عنکبوتی",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/library_600x900.jpg",
    "year": 2022,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "مرد عنکبوتی (Marvel’s Spider-Man Remastered) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 62 گیگابایت (تخمینی)"
  },
  {
    "id": "the-last-of-us-part-i",
    "title": "The Last of Us Part I",
    "titleFa": "آخرین بازمانده از ما",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/library_600x900.jpg",
    "year": 2023,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": true,
    "upcoming": false,
    "description": "آخرین بازمانده از ما (The Last of Us Part I) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 69 گیگابایت (تخمینی)"
  },
  {
    "id": "forza-horizon-5",
    "title": "Forza Horizon 5",
    "titleFa": "فورزا هورایزن ۵",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "فورزا هورایزن ۵ (Forza Horizon 5) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 76 گیگابایت (تخمینی)"
  },
  {
    "id": "horizon-zero-dawn",
    "title": "Horizon Zero Dawn",
    "titleFa": "هورایزن زیرو داون",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/library_600x900.jpg",
    "year": 2017,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "هورایزن زیرو داون (Horizon Zero Dawn) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 84 گیگابایت (تخمینی)"
  },
  {
    "id": "horizon-forbidden-west",
    "title": "Horizon Forbidden West",
    "titleFa": "هورایزن فوربیدن وست",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2420110/library_600x900.jpg",
    "year": 2024,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": true,
    "new": true,
    "upcoming": false,
    "description": "هورایزن فوربیدن وست (Horizon Forbidden West) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 91 گیگابایت (تخمینی)"
  },
  {
    "id": "resident-evil-4",
    "title": "Resident Evil 4",
    "titleFa": "رزیدنت اویل ۴",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/library_600x900.jpg",
    "year": 2023,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": true,
    "upcoming": false,
    "description": "رزیدنت اویل ۴ (Resident Evil 4) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 98 گیگابایت (تخمینی)"
  },
  {
    "id": "resident-evil-village",
    "title": "Resident Evil Village",
    "titleFa": "رزیدنت اویل ویلیج",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "رزیدنت اویل ویلیج (Resident Evil Village) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 24 گیگابایت (تخمینی)"
  },
  {
    "id": "resident-evil-2",
    "title": "Resident Evil 2",
    "titleFa": "رزیدنت اویل ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/883710/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "رزیدنت اویل ۲ (Resident Evil 2) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 31 گیگابایت (تخمینی)"
  },
  {
    "id": "sekiro-shadows-die-twice",
    "title": "Sekiro: Shadows Die Twice",
    "titleFa": "سکیرو",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "سکیرو (Sekiro: Shadows Die Twice) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 38 گیگابایت (تخمینی)"
  },
  {
    "id": "dark-souls-iii",
    "title": "Dark Souls III",
    "titleFa": "دارک سولز ۳",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "دارک سولز ۳ (Dark Souls III) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 46 گیگابایت (تخمینی)"
  },
  {
    "id": "dark-souls-remastered",
    "title": "Dark Souls Remastered",
    "titleFa": "دارک سولز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/570940/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "دارک سولز (Dark Souls Remastered) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 53 گیگابایت (تخمینی)"
  },
  {
    "id": "monster-hunter-world",
    "title": "Monster Hunter: World",
    "titleFa": "مانستر هانتر ورلد",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "مانستر هانتر ورلد (Monster Hunter: World) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 60 گیگابایت (تخمینی)"
  },
  {
    "id": "monster-hunter-rise",
    "title": "Monster Hunter Rise",
    "titleFa": "مانستر هانتر رایز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/library_600x900.jpg",
    "year": 2022,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "مانستر هانتر رایز (Monster Hunter Rise) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 67 گیگابایت (تخمینی)"
  },
  {
    "id": "final-fantasy-vii-remake-intergrade",
    "title": "Final Fantasy VII Remake Intergrade",
    "titleFa": "فاینال فانتزی ۷",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "فاینال فانتزی ۷ (Final Fantasy VII Remake Intergrade) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 75 گیگابایت (تخمینی)"
  },
  {
    "id": "final-fantasy-xv",
    "title": "Final Fantasy XV",
    "titleFa": "فاینال فانتزی ۱۵",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/637650/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "فاینال فانتزی ۱۵ (Final Fantasy XV) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 82 گیگابایت (تخمینی)"
  },
  {
    "id": "final-fantasy-xiv-online",
    "title": "Final Fantasy XIV Online",
    "titleFa": "فاینال فانتزی ۱۴",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/39210/library_600x900.jpg",
    "year": 2013,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "فاینال فانتزی ۱۴ (Final Fantasy XIV Online) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 89 گیگابایت (تخمینی)"
  },
  {
    "id": "persona-5-royal",
    "title": "Persona 5 Royal",
    "titleFa": "پرسونا ۵ رویال",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1687950/library_600x900.jpg",
    "year": 2022,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "پرسونا ۵ رویال (Persona 5 Royal) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 97 گیگابایت (تخمینی)"
  },
  {
    "id": "persona-4-golden",
    "title": "Persona 4 Golden",
    "titleFa": "پرسونا ۴",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1113000/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": true,
    "new": false,
    "upcoming": false,
    "description": "پرسونا ۴ (Persona 4 Golden) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 22 گیگابایت (تخمینی)"
  },
  {
    "id": "persona-3-reload",
    "title": "Persona 3 Reload",
    "titleFa": "پرسونا ۳ ریلود",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2161700/library_600x900.jpg",
    "year": 2024,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "پرسونا ۳ ریلود (Persona 3 Reload) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 29 گیگابایت (تخمینی)"
  },
  {
    "id": "doom-eternal",
    "title": "Doom Eternal",
    "titleFa": "دوم اترنال",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "دوم اترنال (Doom Eternal) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 36 گیگابایت (تخمینی)"
  },
  {
    "id": "doom-2016",
    "title": "DOOM (2016)",
    "titleFa": "دوم",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/379720/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "دوم (DOOM (2016)) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 44 گیگابایت (تخمینی)"
  },
  {
    "id": "wolfenstein-ii-the-new-colossus",
    "title": "Wolfenstein II: The New Colossus",
    "titleFa": "ولفنشتاین ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/612880/library_600x900.jpg",
    "year": 2017,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "ولفنشتاین ۲ (Wolfenstein II: The New Colossus) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 51 گیگابایت (تخمینی)"
  },
  {
    "id": "titanfall-2",
    "title": "Titanfall 2",
    "titleFa": "تایتان‌فال ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1237970/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "تایتان‌فال ۲ (Titanfall 2) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 58 گیگابایت (تخمینی)"
  },
  {
    "id": "apex-legends",
    "title": "Apex Legends",
    "titleFa": "ایپکس لجندز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "ایپکس لجندز (Apex Legends) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 66 گیگابایت (تخمینی)"
  },
  {
    "id": "counter-strike-2",
    "title": "Counter-Strike 2",
    "titleFa": "کانتر استرایک ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/730/library_600x900.jpg",
    "year": 2023,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "کانتر استرایک ۲ (Counter-Strike 2) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 73 گیگابایت (تخمینی)"
  },
  {
    "id": "rainbow-six-siege",
    "title": "Rainbow Six Siege",
    "titleFa": "رینبو سیکس سیج",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/359550/library_600x900.jpg",
    "year": 2015,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "رینبو سیکس سیج (Rainbow Six Siege) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 80 گیگابایت (تخمینی)"
  },
  {
    "id": "overwatch-2",
    "title": "Overwatch 2",
    "titleFa": "اورواچ ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2357570/library_600x900.jpg",
    "year": 2022,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "اورواچ ۲ (Overwatch 2) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 88 گیگابایت (تخمینی)"
  },
  {
    "id": "the-division-2",
    "title": "The Division 2",
    "titleFa": "دیویژن ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2221490/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "دیویژن ۲ (The Division 2) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 95 گیگابایت (تخمینی)"
  },
  {
    "id": "far-cry-5",
    "title": "Far Cry 5",
    "titleFa": "فارکرای ۵",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/552520/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "فارکرای ۵ (Far Cry 5) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 20 گیگابایت (تخمینی)"
  },
  {
    "id": "far-cry-6",
    "title": "Far Cry 6",
    "titleFa": "فارکرای ۶",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "فارکرای ۶ (Far Cry 6) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 28 گیگابایت (تخمینی)"
  },
  {
    "id": "assassin-s-creed-valhalla",
    "title": "Assassin’s Creed Valhalla",
    "titleFa": "اساسینز کرید والهالا",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "اساسینز کرید والهالا (Assassin’s Creed Valhalla) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 35 گیگابایت (تخمینی)"
  },
  {
    "id": "assassin-s-creed-odyssey",
    "title": "Assassin’s Creed Odyssey",
    "titleFa": "اساسینز کرید اودیسه",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/812140/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "اساسینز کرید اودیسه (Assassin’s Creed Odyssey) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 42 گیگابایت (تخمینی)"
  },
  {
    "id": "assassin-s-creed-origins",
    "title": "Assassin’s Creed Origins",
    "titleFa": "اساسینز کرید اوریجینز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/582160/library_600x900.jpg",
    "year": 2017,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "اساسینز کرید اوریجینز (Assassin’s Creed Origins) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 49 گیگابایت (تخمینی)"
  },
  {
    "id": "watch-dogs-2",
    "title": "Watch Dogs 2",
    "titleFa": "واچ داگز ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/447040/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "واچ داگز ۲ (Watch Dogs 2) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 57 گیگابایت (تخمینی)"
  },
  {
    "id": "watch-dogs-legion",
    "title": "Watch Dogs: Legion",
    "titleFa": "واچ داگز لیجن",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2239550/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "واچ داگز لیجن (Watch Dogs: Legion) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 64 گیگابایت (تخمینی)"
  },
  {
    "id": "dying-light",
    "title": "Dying Light",
    "titleFa": "دایینگ لایت",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/239140/library_600x900.jpg",
    "year": 2015,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "دایینگ لایت (Dying Light) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 71 گیگابایت (تخمینی)"
  },
  {
    "id": "dying-light-2",
    "title": "Dying Light 2",
    "titleFa": "دایینگ لایت ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/534380/library_600x900.jpg",
    "year": 2022,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "دایینگ لایت ۲ (Dying Light 2) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 79 گیگابایت (تخمینی)"
  },
  {
    "id": "dead-space",
    "title": "Dead Space",
    "titleFa": "دِد اسپیس",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/library_600x900.jpg",
    "year": 2023,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "دِد اسپیس (Dead Space) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 86 گیگابایت (تخمینی)"
  },
  {
    "id": "the-callisto-protocol",
    "title": "The Callisto Protocol",
    "titleFa": "کالیستو پروتکل",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1544020/library_600x900.jpg",
    "year": 2022,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "کالیستو پروتکل (The Callisto Protocol) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 93 گیگابایت (تخمینی)"
  },
  {
    "id": "control-ultimate-edition",
    "title": "Control Ultimate Edition",
    "titleFa": "کنترل آلتیمیت",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/870780/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "کنترل آلتیمیت (Control Ultimate Edition) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 18 گیگابایت (تخمینی)"
  },
  {
    "id": "quantum-break",
    "title": "Quantum Break",
    "titleFa": "کوانتوم بریک",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/474960/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "کوانتوم بریک (Quantum Break) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 26 گیگابایت (تخمینی)"
  },
  {
    "id": "ori-and-the-blind-forest",
    "title": "Ori and the Blind Forest",
    "titleFa": "اوری و جنگل کور",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/261570/library_600x900.jpg",
    "year": 2015,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "اوری و جنگل کور (Ori and the Blind Forest) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 33 گیگابایت (تخمینی)"
  },
  {
    "id": "cuphead",
    "title": "Cuphead",
    "titleFa": "کاپهد",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/268910/library_600x900.jpg",
    "year": 2017,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "کاپهد (Cuphead) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 40 گیگابایت (تخمینی)"
  },
  {
    "id": "dead-cells",
    "title": "Dead Cells",
    "titleFa": "دد سلز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/588650/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "دد سلز (Dead Cells) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 48 گیگابایت (تخمینی)"
  },
  {
    "id": "stardew-valley",
    "title": "Stardew Valley",
    "titleFa": "استاردو ولی",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "استاردو ولی (Stardew Valley) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 55 گیگابایت (تخمینی)"
  },
  {
    "id": "terraria",
    "title": "Terraria",
    "titleFa": "تراریا",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/library_600x900.jpg",
    "year": 2011,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "تراریا (Terraria) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 62 گیگابایت (تخمینی)"
  },
  {
    "id": "minecraft-dungeons",
    "title": "Minecraft Dungeons",
    "titleFa": "ماینکرفت دانجنز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "ماینکرفت دانجنز (Minecraft Dungeons) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 70 گیگابایت (تخمینی)"
  },
  {
    "id": "no-man-s-sky",
    "title": "No Man’s Sky",
    "titleFa": "نو منز اسکای",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/275850/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "نو منز اسکای (No Man’s Sky) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 77 گیگابایت (تخمینی)"
  },
  {
    "id": "subnautica",
    "title": "Subnautica",
    "titleFa": "سابناتیکا",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/264710/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "سابناتیکا (Subnautica) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 84 گیگابایت (تخمینی)"
  },
  {
    "id": "subnautica-below-zero",
    "title": "Subnautica: Below Zero",
    "titleFa": "سابناتیکا بیلو زیرو",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/848450/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "سابناتیکا بیلو زیرو (Subnautica: Below Zero) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 92 گیگابایت (تخمینی)"
  },
  {
    "id": "the-forest",
    "title": "The Forest",
    "titleFa": "فارست",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "فارست (The Forest) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 99 گیگابایت (تخمینی)"
  },
  {
    "id": "sons-of-the-forest",
    "title": "Sons of the Forest",
    "titleFa": "سانز آو د فارست",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/library_600x900.jpg",
    "year": 2024,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "سانز آو د فارست (Sons of the Forest) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 24 گیگابایت (تخمینی)"
  },
  {
    "id": "valheim",
    "title": "Valheim",
    "titleFa": "والهایم",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "والهایم (Valheim) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 31 گیگابایت (تخمینی)"
  },
  {
    "id": "enshrouded",
    "title": "Enshrouded",
    "titleFa": "انشراودد",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1203620/library_600x900.jpg",
    "year": 2024,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "انشراودد (Enshrouded) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 39 گیگابایت (تخمینی)"
  },
  {
    "id": "ark-survival-evolved",
    "title": "ARK: Survival Evolved",
    "titleFa": "آرک",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/library_600x900.jpg",
    "year": 2017,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "آرک (ARK: Survival Evolved) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 46 گیگابایت (تخمینی)"
  },
  {
    "id": "rust",
    "title": "Rust",
    "titleFa": "راست",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "راست (Rust) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 53 گیگابایت (تخمینی)"
  },
  {
    "id": "dayz",
    "title": "DayZ",
    "titleFa": "دی‌زی",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/221100/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "دی‌زی (DayZ) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 61 گیگابایت (تخمینی)"
  },
  {
    "id": "project-zomboid",
    "title": "Project Zomboid",
    "titleFa": "پروژه زامبوید",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/library_600x900.jpg",
    "year": 2013,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "پروژه زامبوید (Project Zomboid) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 68 گیگابایت (تخمینی)"
  },
  {
    "id": "phasmophobia",
    "title": "Phasmophobia",
    "titleFa": "فزموفوبیا",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "فزموفوبیا (Phasmophobia) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 75 گیگابایت (تخمینی)"
  },
  {
    "id": "lethal-company",
    "title": "Lethal Company",
    "titleFa": "لیتال کمپانی",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1966720/library_600x900.jpg",
    "year": 2023,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "لیتال کمپانی (Lethal Company) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 82 گیگابایت (تخمینی)"
  },
  {
    "id": "among-us",
    "title": "Among Us",
    "titleFa": "امانگ آس",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "امانگ آس (Among Us) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 90 گیگابایت (تخمینی)"
  },
  {
    "id": "fall-guys",
    "title": "Fall Guys",
    "titleFa": "فال گایز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "فال گایز (Fall Guys) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 97 گیگابایت (تخمینی)"
  },
  {
    "id": "rocket-league",
    "title": "Rocket League",
    "titleFa": "راکت لیگ",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/library_600x900.jpg",
    "year": 2015,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "راکت لیگ (Rocket League) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 22 گیگابایت (تخمینی)"
  },
  {
    "id": "need-for-speed-heat",
    "title": "Need for Speed Heat",
    "titleFa": "نید فور اسپید هیت",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "نید فور اسپید هیت (Need for Speed Heat) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 30 گیگابایت (تخمینی)"
  },
  {
    "id": "need-for-speed-unbound",
    "title": "Need for Speed Unbound",
    "titleFa": "نید فور اسپید آنباند",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1846380/library_600x900.jpg",
    "year": 2022,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "نید فور اسپید آنباند (Need for Speed Unbound) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 37 گیگابایت (تخمینی)"
  },
  {
    "id": "assetto-corsa",
    "title": "Assetto Corsa",
    "titleFa": "اسِتو کورسا",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/244210/library_600x900.jpg",
    "year": 2014,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "اسِتو کورسا (Assetto Corsa) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 44 گیگابایت (تخمینی)"
  },
  {
    "id": "f1-24",
    "title": "F1 24",
    "titleFa": "اف وان ۲۴",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2488620/library_600x900.jpg",
    "year": 2024,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "اف وان ۲۴ (F1 24) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 52 گیگابایت (تخمینی)"
  },
  {
    "id": "euro-truck-simulator-2",
    "title": "Euro Truck Simulator 2",
    "titleFa": "یورو تراک",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/library_600x900.jpg",
    "year": 2012,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "یورو تراک (Euro Truck Simulator 2) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 59 گیگابایت (تخمینی)"
  },
  {
    "id": "microsoft-flight-simulator",
    "title": "Microsoft Flight Simulator",
    "titleFa": "فلایت سیمولاتور",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "فلایت سیمولاتور (Microsoft Flight Simulator) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 66 گیگابایت (تخمینی)"
  },
  {
    "id": "cities-skylines",
    "title": "Cities: Skylines",
    "titleFa": "سیتیز اسکایلاینز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/255710/library_600x900.jpg",
    "year": 2015,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "سیتیز اسکایلاینز (Cities: Skylines) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 74 گیگابایت (تخمینی)"
  },
  {
    "id": "cities-skylines-ii",
    "title": "Cities: Skylines II",
    "titleFa": "سیتیز اسکایلاینز ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/949230/library_600x900.jpg",
    "year": 2023,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "سیتیز اسکایلاینز ۲ (Cities: Skylines II) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 81 گیگابایت (تخمینی)"
  },
  {
    "id": "civilization-vi",
    "title": "Civilization VI",
    "titleFa": "تمدن ۶",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "تمدن ۶ (Civilization VI) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 88 گیگابایت (تخمینی)"
  },
  {
    "id": "age-of-empires-iv",
    "title": "Age of Empires IV",
    "titleFa": "عصر امپراتوری ۴",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1466860/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "عصر امپراتوری ۴ (Age of Empires IV) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 95 گیگابایت (تخمینی)"
  },
  {
    "id": "total-war-warhammer-iii",
    "title": "Total War: WARHAMMER III",
    "titleFa": "توتال وار",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1142710/library_600x900.jpg",
    "year": 2022,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "توتال وار (Total War: WARHAMMER III) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 21 گیگابایت (تخمینی)"
  },
  {
    "id": "xcom-2",
    "title": "XCOM 2",
    "titleFa": "ایکس‌کام ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/268500/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "ایکس‌کام ۲ (XCOM 2) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 28 گیگابایت (تخمینی)"
  },
  {
    "id": "stellaris",
    "title": "Stellaris",
    "titleFa": "استلاریس",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/281990/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "استلاریس (Stellaris) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 35 گیگابایت (تخمینی)"
  },
  {
    "id": "rimworld",
    "title": "RimWorld",
    "titleFa": "ریم‌ورلد",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/294100/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "ریم‌ورلد (RimWorld) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 43 گیگابایت (تخمینی)"
  },
  {
    "id": "factorio",
    "title": "Factorio",
    "titleFa": "فکتوریو",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/427520/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "فکتوریو (Factorio) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 50 گیگابایت (تخمینی)"
  },
  {
    "id": "satisfactory",
    "title": "Satisfactory",
    "titleFa": "سَتیسفکتوری",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/526870/library_600x900.jpg",
    "year": 2024,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "سَتیسفکتوری (Satisfactory) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 57 گیگابایت (تخمینی)"
  },
  {
    "id": "dyson-sphere-program",
    "title": "Dyson Sphere Program",
    "titleFa": "دایسون اسفیر",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1366540/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "دایسون اسفیر (Dyson Sphere Program) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 64 گیگابایت (تخمینی)"
  },
  {
    "id": "the-sims-4",
    "title": "The Sims 4",
    "titleFa": "سیمز ۴",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/library_600x900.jpg",
    "year": 2014,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "سیمز ۴ (The Sims 4) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 72 گیگابایت (تخمینی)"
  },
  {
    "id": "house-flipper",
    "title": "House Flipper",
    "titleFa": "هاوس فلیپر",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/613100/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "هاوس فلیپر (House Flipper) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 79 گیگابایت (تخمینی)"
  },
  {
    "id": "powerwash-simulator",
    "title": "PowerWash Simulator",
    "titleFa": "پاورواش",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1290000/library_600x900.jpg",
    "year": 2022,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "پاورواش (PowerWash Simulator) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 86 گیگابایت (تخمینی)"
  },
  {
    "id": "slay-the-spire",
    "title": "Slay the Spire",
    "titleFa": "اسلی د اسپایر",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/646570/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "اسلی د اسپایر (Slay the Spire) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 94 گیگابایت (تخمینی)"
  },
  {
    "id": "balatro",
    "title": "Balatro",
    "titleFa": "بلاترو",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2379780/library_600x900.jpg",
    "year": 2024,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "بلاترو (Balatro) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 19 گیگابایت (تخمینی)"
  },
  {
    "id": "vampire-survivors",
    "title": "Vampire Survivors",
    "titleFa": "ومپایر سروایورز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1794680/library_600x900.jpg",
    "year": 2022,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "ومپایر سروایورز (Vampire Survivors) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 26 گیگابایت (تخمینی)"
  },
  {
    "id": "risk-of-rain-2",
    "title": "Risk of Rain 2",
    "titleFa": "ریسک آو رین ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/632360/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "ریسک آو رین ۲ (Risk of Rain 2) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 34 گیگابایت (تخمینی)"
  },
  {
    "id": "enter-the-gungeon",
    "title": "Enter the Gungeon",
    "titleFa": "انتر د گانجن",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/311690/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "انتر د گانجن (Enter the Gungeon) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 41 گیگابایت (تخمینی)"
  },
  {
    "id": "the-binding-of-isaac-rebirth",
    "title": "The Binding of Isaac: Rebirth",
    "titleFa": "آیزاک",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/250900/library_600x900.jpg",
    "year": 2014,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "آیزاک (The Binding of Isaac: Rebirth) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 48 گیگابایت (تخمینی)"
  },
  {
    "id": "spelunky-2",
    "title": "Spelunky 2",
    "titleFa": "اسپلانکی ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/418530/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "اسپلانکی ۲ (Spelunky 2) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 56 گیگابایت (تخمینی)"
  },
  {
    "id": "inscryption",
    "title": "Inscryption",
    "titleFa": "اینکریپشن",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "اینکریپشن (Inscryption) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 63 گیگابایت (تخمینی)"
  },
  {
    "id": "undertale",
    "title": "Undertale",
    "titleFa": "آندرتیل",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/391540/library_600x900.jpg",
    "year": 2015,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "آندرتیل (Undertale) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 70 گیگابایت (تخمینی)"
  },
  {
    "id": "deltarune",
    "title": "Deltarune",
    "titleFa": "دلتارون",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1671210/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "دلتارون (Deltarune) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 77 گیگابایت (تخمینی)"
  },
  {
    "id": "disco-elysium",
    "title": "Disco Elysium",
    "titleFa": "دیسکو الیزیوم",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/632470/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "دیسکو الیزیوم (Disco Elysium) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 85 گیگابایت (تخمینی)"
  },
  {
    "id": "the-stanley-parable-ultra-deluxe",
    "title": "The Stanley Parable: Ultra Deluxe",
    "titleFa": "استنلی پربل",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1703340/library_600x900.jpg",
    "year": 2022,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "استنلی پربل (The Stanley Parable: Ultra Deluxe) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 92 گیگابایت (تخمینی)"
  },
  {
    "id": "firewatch",
    "title": "Firewatch",
    "titleFa": "فایرواچ",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/383870/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "فایرواچ (Firewatch) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 99 گیگابایت (تخمینی)"
  },
  {
    "id": "what-remains-of-edith-finch",
    "title": "What Remains of Edith Finch",
    "titleFa": "ادیث فینچ",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/501300/library_600x900.jpg",
    "year": 2017,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "ادیث فینچ (What Remains of Edith Finch) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 25 گیگابایت (تخمینی)"
  },
  {
    "id": "life-is-strange",
    "title": "Life is Strange",
    "titleFa": "لایف ایز استرنج",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/319630/library_600x900.jpg",
    "year": 2015,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "لایف ایز استرنج (Life is Strange) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 32 گیگابایت (تخمینی)"
  },
  {
    "id": "life-is-strange-true-colors",
    "title": "Life is Strange: True Colors",
    "titleFa": "لایف ایز استرنج ترو کالرز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/936790/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "لایف ایز استرنج ترو کالرز (Life is Strange: True Colors) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 39 گیگابایت (تخمینی)"
  },
  {
    "id": "detroit-become-human",
    "title": "Detroit: Become Human",
    "titleFa": "دیترویت",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1222140/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "دیترویت (Detroit: Become Human) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 46 گیگابایت (تخمینی)"
  },
  {
    "id": "heavy-rain",
    "title": "Heavy Rain",
    "titleFa": "هِوی رین",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/960910/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "هِوی رین (Heavy Rain) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 54 گیگابایت (تخمینی)"
  },
  {
    "id": "beyond-two-souls",
    "title": "Beyond: Two Souls",
    "titleFa": "بیاند تو سولز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/960990/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "بیاند تو سولز (Beyond: Two Souls) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 61 گیگابایت (تخمینی)"
  },
  {
    "id": "the-quarry",
    "title": "The Quarry",
    "titleFa": "کواری",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1577120/library_600x900.jpg",
    "year": 2022,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "کواری (The Quarry) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 68 گیگابایت (تخمینی)"
  },
  {
    "id": "little-nightmares",
    "title": "Little Nightmares",
    "titleFa": "لیتل نایتمرز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/424840/library_600x900.jpg",
    "year": 2017,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "لیتل نایتمرز (Little Nightmares) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 76 گیگابایت (تخمینی)"
  },
  {
    "id": "little-nightmares-ii",
    "title": "Little Nightmares II",
    "titleFa": "لیتل نایتمرز ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/860510/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "لیتل نایتمرز ۲ (Little Nightmares II) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 83 گیگابایت (تخمینی)"
  },
  {
    "id": "inside",
    "title": "Inside",
    "titleFa": "اینساید",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/304430/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "اینساید (Inside) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 90 گیگابایت (تخمینی)"
  },
  {
    "id": "limbo",
    "title": "Limbo",
    "titleFa": "لیمبو",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/48000/library_600x900.jpg",
    "year": 2011,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "لیمبو (Limbo) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 98 گیگابایت (تخمینی)"
  },
  {
    "id": "a-plague-tale-innocence",
    "title": "A Plague Tale: Innocence",
    "titleFa": "داستان طاعون",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/752590/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "داستان طاعون (A Plague Tale: Innocence) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 23 گیگابایت (تخمینی)"
  },
  {
    "id": "a-plague-tale-requiem",
    "title": "A Plague Tale: Requiem",
    "titleFa": "داستان طاعون ریکوئیم",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1182900/library_600x900.jpg",
    "year": 2022,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "داستان طاعون ریکوئیم (A Plague Tale: Requiem) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 30 گیگابایت (تخمینی)"
  },
  {
    "id": "hellblade-senua-s-sacrifice",
    "title": "Hellblade: Senua’s Sacrifice",
    "titleFa": "هل‌بلید",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/414340/library_600x900.jpg",
    "year": 2017,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "هل‌بلید (Hellblade: Senua’s Sacrifice) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 38 گیگابایت (تخمینی)"
  },
  {
    "id": "hellblade-ii",
    "title": "Hellblade II",
    "titleFa": "هل‌بلید ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2461850/library_600x900.jpg",
    "year": 2024,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "هل‌بلید ۲ (Hellblade II) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 45 گیگابایت (تخمینی)"
  },
  {
    "id": "metro-exodus",
    "title": "Metro Exodus",
    "titleFa": "مترو اکسدس",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/412020/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "مترو اکسدس (Metro Exodus) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 52 گیگابایت (تخمینی)"
  },
  {
    "id": "metro-last-light-redux",
    "title": "Metro: Last Light Redux",
    "titleFa": "مترو لست لایت",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/287390/library_600x900.jpg",
    "year": 2014,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "مترو لست لایت (Metro: Last Light Redux) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 59 گیگابایت (تخمینی)"
  },
  {
    "id": "bioshock-infinite",
    "title": "BioShock Infinite",
    "titleFa": "بایوشاک اینفینیت",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/8870/library_600x900.jpg",
    "year": 2013,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "بایوشاک اینفینیت (BioShock Infinite) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 67 گیگابایت (تخمینی)"
  },
  {
    "id": "prey",
    "title": "Prey",
    "titleFa": "پری",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/480490/library_600x900.jpg",
    "year": 2017,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "پری (Prey) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 74 گیگابایت (تخمینی)"
  },
  {
    "id": "dishonored-2",
    "title": "Dishonored 2",
    "titleFa": "دیس‌آنرد ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/403640/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "دیس‌آنرد ۲ (Dishonored 2) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 81 گیگابایت (تخمینی)"
  },
  {
    "id": "deathloop",
    "title": "Deathloop",
    "titleFa": "دث‌لوپ",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1252330/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "دث‌لوپ (Deathloop) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 89 گیگابایت (تخمینی)"
  },
  {
    "id": "the-evil-within-2",
    "title": "The Evil Within 2",
    "titleFa": "اویل ویتین ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/601430/library_600x900.jpg",
    "year": 2017,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "اویل ویتین ۲ (The Evil Within 2) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 96 گیگابایت (تخمینی)"
  },
  {
    "id": "amnesia-the-dark-descent",
    "title": "Amnesia: The Dark Descent",
    "titleFa": "آمنزیا",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/57300/library_600x900.jpg",
    "year": 2010,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "آمنزیا (Amnesia: The Dark Descent) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 21 گیگابایت (تخمینی)"
  },
  {
    "id": "outlast",
    "title": "Outlast",
    "titleFa": "اوت‌لست",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/238320/library_600x900.jpg",
    "year": 2013,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "اوت‌لست (Outlast) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 28 گیگابایت (تخمینی)"
  },
  {
    "id": "outlast-2",
    "title": "Outlast 2",
    "titleFa": "اوت‌لست ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/414700/library_600x900.jpg",
    "year": 2017,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "اوت‌لست ۲ (Outlast 2) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 36 گیگابایت (تخمینی)"
  },
  {
    "id": "alien-isolation",
    "title": "Alien: Isolation",
    "titleFa": "الین ایزولیشن",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/214490/library_600x900.jpg",
    "year": 2014,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "الین ایزولیشن (Alien: Isolation) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 43 گیگابایت (تخمینی)"
  },
  {
    "id": "soma",
    "title": "SOMA",
    "titleFa": "سوما",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/282140/library_600x900.jpg",
    "year": 2015,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "سوما (SOMA) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 50 گیگابایت (تخمینی)"
  },
  {
    "id": "the-long-dark",
    "title": "The Long Dark",
    "titleFa": "لانگ دارک",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/305620/library_600x900.jpg",
    "year": 2017,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "لانگ دارک (The Long Dark) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 58 گیگابایت (تخمینی)"
  },
  {
    "id": "this-war-of-mine",
    "title": "This War of Mine",
    "titleFa": "این وار آو ماین",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/282070/library_600x900.jpg",
    "year": 2014,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "استراتژی",
      "شبیه‌سازی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "این وار آو ماین (This War of Mine) اثری در سبک استراتژی، شبیه‌سازی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های استراتژی، شبیه‌سازی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 65 گیگابایت (تخمینی)"
  },
  {
    "id": "papers-please",
    "title": "Papers, Please",
    "titleFa": "پیپرز پلیز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/239030/library_600x900.jpg",
    "year": 2013,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "پیپرز پلیز (Papers, Please) اثری در سبک ترسناک، بقا است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ترسناک، بقا علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 72 گیگابایت (تخمینی)"
  },
  {
    "id": "baba-is-you",
    "title": "Baba Is You",
    "titleFa": "بابا ایز یو",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/736260/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ایندی",
      "پلتفرمر"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "بابا ایز یو (Baba Is You) اثری در سبک ایندی، پلتفرمر است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ایندی، پلتفرمر علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 80 گیگابایت (تخمینی)"
  },
  {
    "id": "the-witness",
    "title": "The Witness",
    "titleFa": "د ویتنس",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/210970/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "د ویتنس (The Witness) اثری در سبک Action، ماجراجویی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، ماجراجویی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 87 گیگابایت (تخمینی)"
  },
  {
    "id": "portal-2",
    "title": "Portal 2",
    "titleFa": "پورتال ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/620/library_600x900.jpg",
    "year": 2011,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "نقش‌آفرینی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "پورتال ۲ (Portal 2) اثری در سبک RPG، نقش‌آفرینی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های RPG، نقش‌آفرینی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 94 گیگابایت (تخمینی)"
  },
  {
    "id": "half-life-alyx",
    "title": "Half-Life: Alyx",
    "titleFa": "هف لایف الیکس",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/546560/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "ماجراجویی",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "هف لایف الیکس (Half-Life: Alyx) اثری در سبک ماجراجویی، داستانی است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های ماجراجویی، داستانی علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 20 گیگابایت (تخمینی)"
  },
  {
    "id": "black-mesa",
    "title": "Black Mesa",
    "titleFa": "بلک میسا",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/362890/library_600x900.jpg",
    "year": 2020,
    "platforms": [
      "PC",
      "PS5",
      "Xbox"
    ],
    "genres": [
      "Action",
      "جهان‌باز"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "بلک میسا (Black Mesa) اثری در سبک Action، جهان‌باز است که بازیکن را وارد جهانی با هویت هنری و فضای روایی ویژه خود می‌کند. روند بازی بر پایه اکتشاف، یادگیری سازوکارها و تصمیم‌گیری در موقعیت‌های گوناگون شکل می‌گیرد؛ بنابراین پیشروی تنها به واکنش سریع محدود نیست و شناخت محیط و ابزارهای در دسترس نیز اهمیت دارد.\n\nدر طول تجربه، مراحل و موقعیت‌های متنوعی پیش روی بازیکن قرار می‌گیرد و طراحی هنری، موسیقی و ریتم روایت در کنار هم حس‌وحال مخصوص این عنوان را می‌سازند. اگر به بازی‌های Action، جهان‌باز علاقه دارید، این اثر می‌تواند گزینه‌ای برای بررسی در فهرست بازی‌هایتان باشد.\n\n**مشخصات نصب:** حجم تقریبی نصب بسته به پلتفرم، زبان و به‌روزرسانی‌ها متفاوت است؛ مقدار درج‌شده در این نسخه صرفاً برآورد اولیه است و باید پیش از دانلود با صفحه رسمی بازی تطبیق داده شود.",
    "characters": [],
    "installSize": "حدود 27 گیگابایت (تخمینی)"
  }
];


const FINAL_27_GAMES = [
  {
    "id": "extra-0-the-elder-scrolls-iv--oblivion-remastered",
    "title": "The Elder Scrolls IV: Oblivion Remastered",
    "titleFa": "آبلیویون ریمستر",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/library_600x900.jpg",
    "year": 2025,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "آبلیویون ریمستر یکی از بازی‌های شاخص در مجموعه آثار The Elder Scrolls IV: Oblivion Remastered است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-1-silent-hill-2",
    "title": "Silent Hill 2",
    "titleFa": "سایلنت هیل ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2124490/library_600x900.jpg",
    "year": 2024,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "سایلنت هیل ۲ یکی از بازی‌های شاخص در مجموعه آثار Silent Hill 2 است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-2-the-last-of-us-part-ii-remastered",
    "title": "The Last of Us Part II Remastered",
    "titleFa": "آخرین بازمانده ۲",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2531310/library_600x900.jpg",
    "year": 2025,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "آخرین بازمانده ۲ یکی از بازی‌های شاخص در مجموعه آثار The Last of Us Part II Remastered است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-3-marvel-rivals",
    "title": "Marvel Rivals",
    "titleFa": "مارول رایولز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2767030/library_600x900.jpg",
    "year": 2024,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "مارول رایولز یکی از بازی‌های شاخص در مجموعه آثار Marvel Rivals است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-4-black-myth--wukong",
    "title": "Black Myth: Wukong",
    "titleFa": "بلک میث ووکانگ",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/library_600x900.jpg",
    "year": 2024,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "RPG",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "بلک میث ووکانگ یکی از بازی‌های شاخص در مجموعه آثار Black Myth: Wukong است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-5-indiana-jones-and-the-great-circle",
    "title": "Indiana Jones and the Great Circle",
    "titleFa": "ایندیانا جونز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2677660/library_600x900.jpg",
    "year": 2024,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "ایندیانا جونز یکی از بازی‌های شاخص در مجموعه آثار Indiana Jones and the Great Circle است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-6-doom--the-dark-ages",
    "title": "DOOM: The Dark Ages",
    "titleFa": "دوم دارک ایجز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/3017860/library_600x900.jpg",
    "year": 2025,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "دوم دارک ایجز یکی از بازی‌های شاخص در مجموعه آثار DOOM: The Dark Ages است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-7-avowed",
    "title": "Avowed",
    "titleFa": "اَوَود",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2457220/library_600x900.jpg",
    "year": 2025,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "اَوَود یکی از بازی‌های شاخص در مجموعه آثار Avowed است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-8-south-of-midnight",
    "title": "South of Midnight",
    "titleFa": "ساوث آو میدنایت",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/292038/library_600x900.jpg",
    "year": 2025,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "ساوث آو میدنایت یکی از بازی‌های شاخص در مجموعه آثار South of Midnight است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-9-fable",
    "title": "Fable",
    "titleFa": "فیبل",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/292039/library_600x900.jpg",
    "year": 2026,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "فیبل یکی از بازی‌های شاخص در مجموعه آثار Fable است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-10-the-alters",
    "title": "The Alters",
    "titleFa": "د آلترز",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1601570/library_600x900.jpg",
    "year": 2025,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "RPG",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "د آلترز یکی از بازی‌های شاخص در مجموعه آثار The Alters است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-11-mindseye",
    "title": "MindsEye",
    "titleFa": "مایندزآی",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/292041/library_600x900.jpg",
    "year": 2025,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "مایندزآی یکی از بازی‌های شاخص در مجموعه آثار MindsEye است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-12-clair-obscur--expedition-33",
    "title": "Clair Obscur: Expedition 33",
    "titleFa": "کلیر اوبسکور",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1903340/library_600x900.jpg",
    "year": 2025,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "کلیر اوبسکور یکی از بازی‌های شاخص در مجموعه آثار Clair Obscur: Expedition 33 است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-13-split-fiction",
    "title": "Split Fiction",
    "titleFa": "اسپلیت فیکشن",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/2001540/library_600x900.jpg",
    "year": 2025,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": true,
    "upcoming": false,
    "description": "اسپلیت فیکشن یکی از بازی‌های شاخص در مجموعه آثار Split Fiction است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-14-kingdom-hearts-iii",
    "title": "Kingdom Hearts III",
    "titleFa": "کینگدام هارتس ۳",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/292044/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "کینگدام هارتس ۳ یکی از بازی‌های شاخص در مجموعه آثار Kingdom Hearts III است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-15-tales-of-berseria",
    "title": "Tales of Berseria",
    "titleFa": "تیلز آو برسریا",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/429660/library_600x900.jpg",
    "year": 2017,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "تیلز آو برسریا یکی از بازی‌های شاخص در مجموعه آثار Tales of Berseria است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-16-tales-of-vesperia--definitive-edition",
    "title": "Tales of Vesperia: Definitive Edition",
    "titleFa": "تیلز آو وسپریا",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/738540/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "RPG",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "تیلز آو وسپریا یکی از بازی‌های شاخص در مجموعه آثار Tales of Vesperia: Definitive Edition است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-17-the-banner-saga-3",
    "title": "The Banner Saga 3",
    "titleFa": "بنر ساگا ۳",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/485460/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "بنر ساگا ۳ یکی از بازی‌های شاخص در مجموعه آثار The Banner Saga 3 است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-18-battletech",
    "title": "BattleTech",
    "titleFa": "بتل‌تک",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/637090/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "بتل‌تک یکی از بازی‌های شاخص در مجموعه آثار BattleTech است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-19-mechwarrior-5--mercenaries",
    "title": "MechWarrior 5: Mercenaries",
    "titleFa": "مک‌واریر ۵",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/784080/library_600x900.jpg",
    "year": 2019,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "مک‌واریر ۵ یکی از بازی‌های شاخص در مجموعه آثار MechWarrior 5: Mercenaries است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-20-armored-core-vi--fires-of-rubicon",
    "title": "Armored Core VI: Fires of Rubicon",
    "titleFa": "آرمورد کور ۶",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/library_600x900.jpg",
    "year": 2023,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "آرمورد کور ۶ یکی از بازی‌های شاخص در مجموعه آثار Armored Core VI: Fires of Rubicon است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-21-darksiders-iii",
    "title": "Darksiders III",
    "titleFa": "دارکسایدرز ۳",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/606280/library_600x900.jpg",
    "year": 2018,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "دارکسایدرز ۳ یکی از بازی‌های شاخص در مجموعه آثار Darksiders III است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-22-remnant-ii",
    "title": "Remnant II",
    "titleFa": "رمننت ۲ نسخه کامل",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1282100/library_600x900.jpg",
    "year": 2023,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "RPG",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "رمننت ۲ نسخه کامل یکی از بازی‌های شاخص در مجموعه آثار Remnant II است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-23-the-stanley-parable",
    "title": "The Stanley Parable",
    "titleFa": "استنلی پربل",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/221910/library_600x900.jpg",
    "year": 2013,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "استنلی پربل یکی از بازی‌های شاخص در مجموعه آثار The Stanley Parable است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-24-the-witness",
    "title": "The Witness",
    "titleFa": "ویتنس نسخه کامل",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/210970/library_600x900.jpg",
    "year": 2016,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "ویتنس نسخه کامل یکی از بازی‌های شاخص در مجموعه آثار The Witness است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-25-the-outer-wilds--echoes-of-the-eye",
    "title": "The Outer Wilds: Echoes of the Eye",
    "titleFa": "اُوتر وایلدز دی‌ال‌سی",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/753640/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "RPG",
      "داستانی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "اُوتر وایلدز دی‌ال‌سی یکی از بازی‌های شاخص در مجموعه آثار The Outer Wilds: Echoes of the Eye است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-26-poppy-playtime",
    "title": "Poppy Playtime",
    "titleFa": "پاپی پلی‌تایم",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/1721470/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "PS5"
    ],
    "genres": [
      "ترسناک",
      "بقا"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "پاپی پلی‌تایم یکی از بازی‌های شاخص در مجموعه آثار Poppy Playtime است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  },
  {
    "id": "extra-27-five-nights-at-freddy-s--security-breach",
    "title": "Five Nights at Freddy’s: Security Breach",
    "titleFa": "فایو نایتس",
    "cover": "https://cdn.cloudflare.steamstatic.com/steam/apps/747660/library_600x900.jpg",
    "year": 2021,
    "platforms": [
      "PC",
      "Xbox"
    ],
    "genres": [
      "Action",
      "ماجراجویی"
    ],
    "metacritic": 0,
    "popular": false,
    "new": false,
    "upcoming": false,
    "description": "فایو نایتس یکی از بازی‌های شاخص در مجموعه آثار Five Nights at Freddy’s: Security Breach است. این عنوان با تکیه بر طراحی مراحل، فضاسازی و سازوکارهای اختصاصی خود، بازیکن را به تجربه‌ای چندلایه دعوت می‌کند. پیشروی در بازی با شناخت محیط، استفاده درست از ابزارها و واکنش به چالش‌های هر مرحله همراه است.\n\nدر کنار گیم‌پلی، موسیقی و طراحی هنری نقش مهمی در ساخت فضای بازی دارند. روایت و شخصیت‌ها نیز متناسب با سبک اثر، انگیزه‌ای برای ادامه مسیر و کشف بخش‌های تازه جهان بازی فراهم می‌کنند. این توضیح معرفی کلی است و برای جزئیات داستانی دقیق‌تر باید اطلاعات رسمی سازنده بررسی شود.\n\n**حجم نصب:** حدود ۳۰ تا ۷۰ گیگابایت (تخمینی؛ بسته به پلتفرم و نسخه تغییر می‌کند).",
    "characters": [],
    "installSize": "حدود ۳۰ تا ۷۰ گیگابایت (تخمینی)"
  }
];

// Merge unique by id
const allGamesMap = new Map();
[...GAMES, ...MORE_GAMES, ...EXPANDED_GAMES, ...FINAL_27_GAMES].forEach(g => {
  if (!allGamesMap.has(g.id)) allGamesMap.set(g.id, g);
});
const ALL_GAMES = Array.from(allGamesMap.values()).slice(0, 200);

// Genres for filter
const GENRES = [
  { id: "action", name: "اکشن", icon: "⚔️" },
  { id: "rpg", name: "نقش‌آفرینی", icon: "🗡️" },
  { id: "adventure", name: "ماجراجویی", icon: "🗺️" },
  { id: "soulslike", name: "سولوسلیک", icon: "💀" },
  { id: "horror", name: "ترسناک", icon: "👻" },
  { id: "open-world", name: "جهان‌باز", icon: "🌍" },
  { id: "story", name: "داستان‌محور", icon: "📖" },
  { id: "roguelike", name: "روگ‌لایک", icon: "🎲" },
  { id: "platformer", name: "پلتفرمر", icon: "🦘" },
  { id: "shooter", name: "شوتر", icon: "🔫" },
  { id: "strategy", name: "استراتژی", icon: "♟️" },
  { id: "indie", name: "ایندی", icon: "✨" }
];

console.log(`ALBERIA Database loaded: ${ALL_GAMES.length} games`);
