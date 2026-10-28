import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge, Card, Container, SectionHeading } from "@/components/ui/layout";
import { buttonClass } from "@/components/ui/button";
import { site } from "@/lib/site";
import { poems } from "@/data/poems";
import { bestVerses } from "@/data/best-verses";

export const metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="main" className="flex-1">
        <section className="relative overflow-hidden">
          <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
          <div
            className="from-brand-200/40 to-accent-400/30 pointer-events-none absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br blur-3xl"
            aria-hidden="true"
          />

          <Container className="relative py-20 sm:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <Badge>
                <span className="bg-accent-500 size-2 rounded-full" aria-hidden="true" />
                شعر جاهلي · المعلقات السبع
              </Badge>

              <h1 className="text-foreground mt-6 text-4xl leading-tight font-extrabold text-balance sm:text-5xl lg:text-6xl">
                {site.name}
                <span className="from-brand-600 to-accent-500 block bg-gradient-to-l bg-clip-text text-transparent">
                  {site.tagline}
                </span>
              </h1>

              <p className="text-muted mx-auto mt-6 max-w-2xl text-lg leading-8">
                {site.description}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/poems" className={buttonClass("primary", "lg")}>
                  تصفح المعلقات
                </Link>
                <Link href="/best" className={buttonClass("secondary", "lg")}>
                  أجمل ما ذكر
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section id="poems" className="scroll-mt-24 py-20">
          <Container>
            <SectionHeading
              eyebrow="المعلقات السبع"
              title="أوائل الشعر الجاهلي"
              description="سبع قصائد اشتهرت بجودتها، جُمعت هنا مع نصوصها وبيانات أساسية."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {poems.map((poem) => (
                <Card key={poem.slug} className="group transition-colors hover:border-brand-300">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-foreground text-lg font-bold">{poem.title}</h3>
                    <span className="bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300 rounded-full px-2.5 py-1 text-xs font-semibold">
                      {poem.verses.length} بيت
                    </span>
                  </div>
                  <p className="text-muted mt-1 text-sm font-medium">{poem.poet}</p>
                  <p className="text-muted mt-3 text-sm leading-7">{poem.summary}</p>
                  <p className="text-foreground mt-4 text-sm italic leading-7">«{poem.opening}»</p>
                  <div className="mt-5">
                    <Link
                      href={`/poems/${poem.slug}`}
                      className="text-brand-600 dark:text-brand-300 text-sm font-semibold hover:underline"
                    >
                      قراءة المعلقة ←
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section id="best" className="border-border-subtle scroll-mt-24 border-y py-20">
          <Container>
            <SectionHeading
              eyebrow="أجمل ما ذكر"
              title="افتتاحيات مختارة"
              description="أبيات افتتاحية من المعلقات السبع."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {bestVerses.map((v) => (
                <Card key={v.text}>
                  <p className="text-foreground text-lg leading-8">{v.text}</p>
                  <p className="text-muted mt-3 text-sm font-semibold">— {v.author}</p>
                  <p className="text-muted mt-1 text-xs">{v.note}</p>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/best" className={buttonClass("secondary", "md")}>
                عرض كل الأبيات المختارة
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
