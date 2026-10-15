import Article from "../../public/icons/article";
import Draft from "../../public/icons/draft";
import Irrigation from "../../public/icons/irrigation";
import Keeping from "../../public/icons/keeping";
import Light from "../../public/icons/light";
import Plant from "../../public/icons/plant";
import Tick from "../../public/icons/tick";

export const plantsData = [
  {
    icon: "🌵",
    id: 1,
    title: "افوربیا تریگونا",
    desc: "Euphorbia trigona",
    category: "افوربیا",
    keeping: "آسان",
    light: "زیاد",
    job: [
      {
        icon: <Irrigation />,
        label: "آبیاری",
        value: "کم",
        bg: "bg-[rgb(227,234,241)]",
        color: "text-[rgb(91,127,166)]",
      },
      {
        icon: <Light />,
        label: "نور",
        value: "زیاد",
        bg: "bg-[rgb(246,231,214)]",
        color: "text-[rgb(201,138,58)]",
      },
      {
        icon: <Keeping />,
        label: "نگهداری",
        value: "آسان",
        bg: "bg-greencolorlight",
        color: "text-primary",
      },
    ],
    irrigation: "کم",
    color: "bg-[rgb(230,220,196)]",
    badge: "افوربیا",
    tags: ["🏠 هردو", "🍃 تهویه زیاد", "💎 معمولی"],
    description:
      "گیاهی مقاوم با ساقه‌های ستونی زیبا که به مراقبت بسیار کمی نیاز دارد.",
  },
  {
    icon: "🪴",
    id: 2,
    title: "هاورتیا فاسیاتا",
    desc: "Haworthia fasciata",
    category: "ساکولنت",
    keeping: "آسان",
    light: "متوسط",
    job: [
      {
        icon: <Irrigation />,
        label: "آبیاری",
        value: "کم",
        bg: "bg-[rgb(227,234,241)]",
        color: "text-[rgb(91,127,166)]",
      },
      {
        icon: <Light />,
        label: "نور",
        value: "متوسط",
        bg: "bg-[rgb(246,231,214)]",
        color: "text-[rgb(201,138,58)]",
      },
      {
        icon: <Keeping />,
        label: "نگهداری",
        value: "آسان",
        bg: "bg-greencolorlight",
        color: "text-primary",
      },
    ],
    irrigation: "کم",
    color: "bg-[rgb(230,220,196)]",
    badge: "ساکولنت",
    tags: ["☀️ نور متوسط", "🪴 مناسب برای خانه"],
    description: "گیاهی کوچک و شیک که برای نگهداری آسان مناسب است.",
  },
  {
    icon: "🌸",
    id: 3,
    title: "اکه‌وریا الگانس",
    desc: "Echeveria elegans",
    category: "ساکولنت",
    keeping: "متوسط",
    light: "زیاد",
    job: [
      {
        icon: <Irrigation />,
        label: "آبیاری",
        value: "کم",
        bg: "bg-[rgb(227,234,241)]",
        color: "text-[rgb(91,127,166)]",
      },
      {
        icon: <Light />,
        label: "نور",
        value: "زیاد",
        bg: "bg-[rgb(246,231,214)]",
        color: "text-[rgb(201,138,58)]",
      },
      {
        icon: <Keeping />,
        label: "نگهداری",
        value: "متوسط",
        bg: "bg-greencolorlight",
        color: "text-primary",
      },
    ],
    irrigation: "کم",
    color: "bg-[rgb(230,220,196)]",
    badge: "ساکولنت",
    tags: ["🌸 خوشه‌ای", "☀️ نور زیاد"],
    description: "گیاه رزتی شکل با برگ‌های گرد و جذاب برای فضاهای روشن.",
  },
  {
    icon: "🌿",
    id: 4,
    title: "سانسوریا",
    desc: "Sansevieria trifasciata",
    category: "سانسوریا",
    keeping: "آسان",
    light: "نیم سایه",
    job: [
      {
        icon: <Irrigation />,
        label: "آبیاری",
        value: "خیلی کم",
        bg: "bg-[rgb(227,234,241)]",
        color: "text-[rgb(91,127,166)]",
      },
      {
        icon: <Light />,
        label: "نور",
        value: "نیم سایه",
        bg: "bg-[rgb(246,231,214)]",
        color: "text-[rgb(201,138,58)]",
      },
      {
        icon: <Keeping />,
        label: "نگهداری",
        value: "آسان",
        bg: "bg-greencolorlight",
        color: "text-primary",
      },
    ],
    irrigation: "خیلی کم",
    color: "bg-[rgb(230,220,196)]",
    badge: "سانسوریا",
    tags: ["🪴 مقاومت بالا", "🌿 مناسب برای اتاق"],
    description: "یکی از مقاوم‌ترین گیاهان خانگی که به آبیاری کم نیاز دارد.",
  },
  {
    icon: "🪴",
    id: 5,
    title: "آلوئه‌ورا",
    desc: "Aloe vera",
    category: "آلوئه",
    keeping: "آسان",
    light: "زیاد",

    job: [
      {
        icon: <Irrigation />,
        label: "آبیاری",
        value: "کم",
        bg: "bg-[rgb(227,234,241)]",
        color: "text-[rgb(91,127,166)]",
      },
      {
        icon: <Light />,
        label: "نور",
        value: "زیاد",
        bg: "bg-[rgb(246,231,214)]",
        color: "text-[rgb(201,138,58)]",
      },
      {
        icon: <Keeping />,
        label: "نگهداری",
        value: "آسان",
        bg: "bg-greencolorlight",
        color: "text-primary",
      },
    ],
    irrigation: "کم",

    color: "bg-[rgb(230,220,196)]",
    badge: "آلوئه",
    tags: ["🌞 نور زیاد", "💧 آبیاری کم"],
    description: "گیاهی دارویی معروف با برگ‌های گوشتی و مراقبت ساده.",
  },
  {
    icon: "💎",
    id: 6,
    title: "لیتوپس",
    desc: "Lithops",
    category: "ساکولنت",
    keeping: "پیشرفته",
    light: "کامل",
    job: [
      {
        icon: <Irrigation />,
        label: "آبیاری",
        value: "خیلی کم",
        bg: "bg-[rgb(227,234,241)]",
        color: "text-[rgb(91,127,166)]",
      },
      {
        icon: <Light />,
        label: "نور",
        value: "کامل",
        bg: "bg-[rgb(246,231,214)]",
        color: "text-[rgb(201,138,58)]",
      },
      {
        icon: <Keeping />,
        label: "نگهداری",
        value: "پیشرفته",
        bg: "bg-greencolorlight",
        color: "text-primary",
      },
    ],
    irrigation: "خیلی کم",

    color: "bg-[rgb(230,220,196)]",
    badge: "ساکولنت",
    tags: ["💎 خاص", "🌵 بسیار کم‌آب"],
    description:
      "گیاهی بسیار خاص و کمیاب که نیاز به دقت بیشتری در نگهداری دارد.",
  },
];

export const contentData = [
  {
    icon: "💧",
    id: 1,
    title: "چطور ساکولنت‌ها را درست آبیاری کنیم؟",
    category: "آبیاری",
    writer: "سارا محمدی",
    time: "۵ دقیقه",
    tip: "رایج‌ترین اشتباه در نگهداری ساکولنت، آبیاری بیش از حد است. با روش صحیح آبیاری آشنا شوید.",
    explanation: [
      "ساکولنت‌ها گیاهانی هستند که آب را در برگ‌ها و ساقه‌ی خود ذخیره می‌کنند. به همین دلیل به آبیاری مکرر نیازی ندارند.",
      "بهترین روش، روش «غرقابی و خشک شدن کامل» است: خاک را کاملاً خیس کنید و سپس صبر کنید تا خاک به طور کامل خشک شود و بعد دوباره آبیاری کنید.",
      "در فصل زمستان که گیاه در حالت خواب است، آبیاری را به شدت کاهش دهید.",
    ],
    status: "منتشر شده",
    tagcategory1: "#ساکولنت",
    tagcategory2: "#آبیاری",
    textstatus: "text-primary",
    bgdot: "bg-primary",
  },
  {
    icon: "☀️",
    id: 2,
    title: "نور مناسب برای کاکتوس‌های خانگی",
    category: "نور",
    writer: "رضا کریمی",
    time: "۴ دقیقه",
    tip: "کاکتوس‌ها به نور زیاد نیاز دارند اما نور مستقیم می‌تواند آسیب‌زا باشد.",
    explanation: [
      "کاکتوس‌ها عاشق نور هستند اما قرار گرفتن ناگهانی در برابر آفتاب مستقیم می‌تواند باعث آفتاب‌سوختگی شود.",
      "بهترین مکان، پشت پنجره‌ی رو به جنوب با نور غیرمستقیم و روشن است.",
    ],
    status: "منتشر شده",
    tagcategory1: "#کاکتوس",
    tagcategory2: "#نور",
    textstatus: "text-primary",
    bgdot: "bg-primary",
  },
  {
    icon: "🪨",
    id: 3,
    title: "خاک ایده‌آل برای ساکولنت‌ها",
    category: "خاک",
    writer: "سارا محمدی",
    time: "۶ دقیقه",
    tip: "ترکیب خاک مناسب کلید سلامت ریشه‌ها و زهکشی مناسب است.",
    explanation: [
      "خاک مناسب ساکولنت باید زهکشی بسیار خوبی داشته باشد تا از پوسیدگی ریشه جلوگیری شود.",
      "ترکیب پیشنهادی: یک بخش خاک باغچه، یک بخش ماسه‌ی درشت و یک بخش پرلیت.",
    ],
    status: "پیش‌نویس",
    tagcategory1: "#خاک",
    tagcategory2: "#زهکشی",
    textstatus: "text-[rgb(160,138,90)]",
    bgdot: "bg-[rgb(160,138,90)]",
  },
  {
    icon: "🌱",
    id: 4,
    title: "راهنمای بازکاشت گیاهان گلدانی",
    category: "نگهداری",
    writer: "مینا احمدی",
    time: "۷ دقیقه",
    tip: "زمان مناسب بازکاشت و نکاتی برای انتقال بدون آسیب به گیاه.",
    explanation: [
      "بهترین زمان بازکاشت، اوایل بهار و شروع فصل رشد است.",
      "گلدان جدید را تنها کمی بزرگ‌تر از گلدان قبلی انتخاب کنید و پس از بازکاشت چند روز آبیاری را متوقف کنید.",
    ],
    status: "پیش‌نویس",
    tagcategory1: "#بازکاشت",
    tagcategory2: "#گلدان",
    textstatus: "text-[rgb(160,138,90)]",
    bgdot: "bg-[rgb(160,138,90)]",
  },
];
const DashboardStats = {
  plantregisterd: {
    bgClassname: "bg-greencolor",
    textColor: "text-primary",
    icon: <Plant />,
    number: 6,
    desc: "گیاه ثبت شده",
  },
  article: {
    bgClassname: "bg-greencolor",
    textColor: "text-primary",
    icon: <Article />,
    number: 4,
    desc: "مطلب",
  },
  published: {
    bgClassname: "bg-greencolor",
    textColor: "text-primary",
    icon: <Tick />,
    number: 2,
    desc: "منتشر شده",
  },
  draft: {
    bgClassname: "bg-[rgb(243,230,212)]",
    textColor: "text-[rgb(193,134,58)]",
    icon: <Draft />,
    number: 2,
    desc: "پیش نویس",
  },
};

export const careLevelOptions = [
  { id: "easy", name: "آسان" },
  { id: "medium", name: "متوسط" },
  { id: "hard", name: "پیشرفته" },
];

export const lightOptions = [
  { id: "partial_shade", name: "نیم سایه" },
  { id: "medium", name: "متوسط" },
  { id: "high", name: "زیاد" },
  { id: "full", name: "کامل" },
];

export const wateringOptions = [
  { id: "very_low", name: "خیلی کم" },
  { id: "low", name: "کم" },
  { id: "medium", name: "متوسط" },
  { id: "high", name: "زیاد" },
];

export default DashboardStats;
