import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, Container, SectionHeading } from "@/components/ui/layout";
import { site } from "@/lib/site";
import { poems } from "@/data/poems";

export const metadata = {
  title: `المعلقات | ${site.name}`,
  description: "قائمة المعلقات السبع مع روابط قراءة نصوصها.",
};

export default function PoemsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 py-16">
        <Container>
          <SectionHeading
            eyebrow="المعلقات"
            title="المعلقات السبع"
            description="اختر معلقة لقراءة نصها."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {poems.map((poem) => (
              <Card key={poem.slug}>
                <h2 className="text-foreground text-xl font-bold">{poem.title}</h2>
                <p className="text-muted mt-1 text-sm">{poem.poet}</p>
                <p className="text-muted mt-3 text-sm leading-7">{poem.summary}</p>
                <p className="text-foreground mt-4 text-sm">
                  <span className="font-semibold">البحر:</span> {poem.meter} ·{" "}
                  <span className="font-semibold">الروي:</span> {poem.rhyme}
                </p>
                <div className="mt-5">
                  <Link
                    href={`/poems/${poem.slug}`}
                    className="text-brand-600 dark:text-brand-300 text-sm font-semibold hover:underline"
                  >
                    قراءة ←
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
