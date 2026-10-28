export const site = {
  name: "المعلقات وأجمل ما ذكر بالشعر",
  nameEn: "Al-Mu'allaqat",
  tagline: "السبع المعلقات مع أجمل ما ذكر بالشعر العربي",
  description:
    "موقع يجمع المعلقات السبع (أوائل الشعر الجاهلي) مع شروح مختصرة وأجمل ما ذكر بالشعر، في واجهة عربية (RTL) سريعة وواضحة.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  author: "مشروع المعلقات",
  nav: [
    { label: "الرئيسية", href: "/" },
    { label: "المعلقات", href: "/poems" },
    { label: "أجمل ما ذكر", href: "/best" },
  ],
  links: {
    github: "https://github.com",
    docs: "https://ar.wikipedia.org/wiki/المعلقات",
  },
} as const;

export type Site = typeof site;