import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, Container, SectionHeading } from "@/components/ui/layout";
import { site } from "@/lib/site";
import { poems } from "@/data/poems";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return poems.map((poem) => ({ slug: poem.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const poem = poems.find((p) => p.slug === slug);
  if (!poem) return { title: site.name };
  return {
    title: `${poem.title} | ${site.name}`,
    description: poem.summary,
  };
}

export default async function PoemDetailPage({ params }: Props) {
  const { slug } = await params;
  const poem = poems.find((p) => p.slug === slug);
  if (!poem) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 py-16">
        <Container>
          <div className="mb-6">
            <Link href="/poems" className="text-brand-600 dark:text-brand-300 text-sm font-semibold hover:underline">
              ← العودة إلى المعلقات
            </Link>
          </div>

          <SectionHeading
            eyebrow={poem.poet}
            title={poem.title}
            description={poem.summary}
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="border-border-subtle bg-surface-raised rounded-full border px-3 py-1">
              البحر: {poem.meter}
            </span>
            <span className="border-border-subtle bg-surface-raised rounded-full border px-3 py-1">
              الروي: {poem.rhyme}
            </span>
            <span className="border-border-subtle bg-surface-raised rounded-full border px-3 py-1">
              عدد الأبيات: {poem.verses.length}
            </span>
          </div>

          <Card className="mt-10">
            <p className="text-muted mb-4 text-sm">الموضوع: {poem.theme}</p>
            <div className="space-y-4">
              {poem.verses.map((verse, index) => (
                <p
                  key={index}
                  className="text-foreground border-border-subtle flex flex-col gap-1 border-b pb-3 text-center text-base leading-8 last:border-0 sm:flex-row sm:justify-between sm:gap-6"
                >
                  <span className="sm:w-1/2 sm:text-end">{verse[0]}</span>
                  <span className="text-muted hidden sm:inline">*</span>
                  <span className="sm:w-1/2 sm:text-start">{verse[1]}</span>
                </p>
              ))}
            </div>
          </Card>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
