# المعلقات وأجمل ما ذكر بالشعر

موقع عربي (RTL) يجمع **المعلقات السبع** مع نصوصها وبيانات أساسية، بالإضافة إلى section **أجمل ما ذكر** بأبيات مختارة.

## رابط الموقع

https://muallaqat-static.alssamer.workers.dev/

## التشغيل السريع

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## الأوامر

| الأمر | الوظيفة |
| ----- | ------- |
| `pnpm dev` | خادم التطوير |
| `pnpm build` | بناء الإنتاج |
| `pnpm start` | تشغيل نسخة الإنتاج |
| `pnpm lint` | فحص ESLint |
| `pnpm typecheck` | فحص TypeScript |
| `pnpm format` | تنسيق الملفات عبر Prettier |
| `pnpm test` | اختبارات Playwright (سطح المكتب + جوال) |
| `pnpm build:static` | تصدير ثابت إلى `out/` لنشر GitHub Pages |
| `pnpm cf:build` | تجهيز حزمة Cloudflare |
| `pnpm cf:preview` | تجربة Cloudflare محلياً |
| `pnpm cf:deploy` | نشر على Cloudflare Workers |

## البنية

```text
src/
├─ app/                 # الصفحات وتخطيط العام وواجهة /api/health
├─ app/poems/           # قائمة المعلقات وصفحات التفاصيل
├─ app/best/            # أجمل ما ذكر
├─ components/          # Header, Footer, UI
├─ data/poems.ts        # بيانات المعلقات السبع
└─ lib/                 # site.ts و cn.ts
tests/e2e/              # اختبارات Playwright
```

## التخصيص

1. عدّل `src/lib/site.ts` (الاسم، الوصف، الروابط).
2. عدّل ألوان الثيم في `src/app/globals.css` داخل `@theme`.
3. أضف صفحاتك تحت `src/app/<route>/page.tsx`.

## النشر المجاني

### Cloudflare Workers (كامل: صفحات + APIs)

```bash
pnpm dlx wrangler login     # مرة واحدة
pnpm cf:build
pnpm cf:deploy
```

يعطيك رابطاً على `*.workers.dev` مجاناً. راجع `wrangler.jsonc` لإضافة D1/KV/R2.

### GitHub Pages (ثابت فقط)

```bash
pnpm build:static <repo-name>
```

ثم ارفع مجلد `out/` أو استخدم سير العمل الجاهز في `.github/workflows/deploy-pages.yml`
(فعّل Pages من إعدادات المستودع → Source: GitHub Actions).

## ملاحظات

- `cacheComponents` مفعّل افتراضياً في `next.config.ts`؛ إن واجهت تعارضًا مع نشر معين يمكن تعطيله.
- `typedRoutes` مفعّل: الروابط يجب أن تكون مسارات صحيحة معروفة وقت البناء.
- لا ترفع `.env.local` أبداً.
