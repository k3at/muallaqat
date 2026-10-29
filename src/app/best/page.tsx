import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, Container, SectionHeading } from "@/components/ui/layout";
import { site } from "@/lib/site";
import { bestVerses, eras } from "@/data/best-verses";

export const metadata = {
  title: `أجمل ما ذكر | ${site.name}`,
  description: "أبيات شعر خالدة عبر التاريخ، قابلة للتحديث والتجديد.",
};

export default function BestPage() {
  const grouped = eras
    .map((era) => ({
      era,
      verses: bestVerses.filter((v) => v.era === era),
    }))
    .filter((g) => g.verses.length > 0);

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 py-16">
        <Container>
          <SectionHeading
            eyebrow="أجمل ما ذكر"
            title="أبيات خالدة عبر التاريخ"
            description="مختارات من الشعر العربي (الجاهلية حتى الحديث). قابلة للتحديث والتجديد: أضف بيتاً جديداً في src/data/best-verses.ts."
          />

          <div className="mt-6 text-center text-sm text-muted">
            عدد الأبيات: {bestVerses.length}
          </div>

          <div className="mt-12 space-y-12">
            {grouped.map((group) => (
              <section key={group.era}>
                <h2 className="text-foreground mb-5 text-2xl font-bold">{group.era}</h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {group.verses.map((v) => (
                    <Card key={v.text}>
                      <p className="text-foreground text-lg leading-8 font-serif">{v.text}</p>
                      <p className="text-muted mt-3 text-sm font-semibold">
                        — {v.author}
                        {v.theme ? ` · ${v.theme}` : ""}
                      </p>
                      {v.note ? <p className="text-muted mt-1 text-xs">{v.note}</p> : null}
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
