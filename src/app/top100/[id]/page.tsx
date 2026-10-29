import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, Container, SectionHeading } from "@/components/ui/layout";
import { site } from "@/lib/site";
import { famousPoems } from "@/data/famous-poems";
import { poemContents } from "@/data/famous-poems-content";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return famousPoems.map((_, index) => ({ id: String(index) }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const index = Number(id);
  const poem = Number.isInteger(index) ? famousPoems[index] : undefined;
  if (!poem) return { title: site.name };
  return {
    title: `${poem.title} | ${site.name}`,
    description: poem.opening ?? poem.theme ?? poem.title,
  };
}

export default async function FamousPoemDetailPage({ params }: Props) {
  const { id } = await params;
  const index = Number(id);
  if (!Number.isInteger(index) || index < 0 || index >= famousPoems.length) {
    notFound();
  }
  const poem = famousPoems[index];
  const content = poem.content ?? poemContents[poem.title];
  const searchUrl =
    poem.sourceUrl ??
    `https://arabic-poetry.net/search?q=${encodeURIComponent(poem.title + " " + poem.poet)}`;

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 py-16">
        <Container>
          <div className="mb-6">
            <Link href="/top100" className="text-brand-600 dark:text-brand-300 text-sm font-semibold hover:underline">
              ← العودة إلى القائمة
            </Link>
          </div>

          <SectionHeading eyebrow={poem.era} title={poem.title} description={poem.poet} />

          {poem.theme ? (
            <div className="mt-6 text-center text-sm text-muted">الموضوع: {poem.theme}</div>
          ) : null}

          {poem.opening ? (
            <Card className="mt-8">
              <p className="text-foreground text-xl leading-9 font-serif text-center">
                «{poem.opening}»
              </p>
            </Card>
          ) : null}

          {content ? (
            <Card className="mt-8">
              <div className="space-y-3 text-center">
                {content.split("\n").map((line, i) => (
                  <p key={i} className="text-foreground text-base leading-8 font-serif">
                    {line}
                  </p>
                ))}
              </div>
            </Card>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {poem.poemSlug ? (
              <Link
                href={`/poems/${poem.poemSlug}`}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-600 px-5 font-semibold text-white transition-colors hover:bg-brand-700"
              >
                قراءة النص الكامل (المعلقة)
              </Link>
            ) : null}
            <a
              href={searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-border-subtle px-5 font-semibold transition-colors hover:bg-brand-50"
            >
              بحث عن النص الكامل
            </a>
          </div>

          {!content && !poem.poemSlug ? (
            <p className="text-muted mt-6 text-center text-sm">
              النص الكامل غير متوفر في هذا الإصدار. يمكن إضافته عبر حقل content في
              src/data/famous-poems.ts.
            </p>
          ) : null}
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
