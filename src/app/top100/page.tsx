import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, Container, SectionHeading } from "@/components/ui/layout";
import { site } from "@/lib/site";
import { famousPoems } from "@/data/famous-poems";

export const metadata = {
  title: `أشهر 100 قصيدة | ${site.name}`,
  description: "مختارات من أشهر 100 قصيدة في التاريخ العربي.",
};

const eras = Array.from(new Set(famousPoems.map((p) => p.era)));

export default function Top100Page() {
  const grouped = eras.map((era) => ({
    era,
    poems: famousPoems.filter((p) => p.era === era),
  }));

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 py-16">
        <Container>
          <SectionHeading
            eyebrow="أنثولوجيا"
            title="أشهر 100 قصيدة من التاريخ العربي"
            description="مختارات (قابلة للتحديث) من قصائد عربية خالدة عبر العصور."
          />
          <div className="mt-6 text-center text-sm text-muted">
            عدد القصائد: {famousPoems.length}
          </div>

          <div className="mt-12 space-y-12">
            {grouped.map((group) => (
              <section key={group.era}>
                <h2 className="text-foreground mb-5 text-2xl font-bold">
                  {group.era} ({group.poems.length})
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {group.poems.map((p, idx) => (
                    <Card key={`${p.title}-${p.poet}-${idx}`}>
                      <h3 className="text-foreground text-lg font-bold">{p.title}</h3>
                      <p className="text-muted mt-1 text-sm">{p.poet}</p>
                      {p.theme ? (
                        <p className="text-muted mt-2 text-xs">الموضوع: {p.theme}</p>
                      ) : null}
                      {p.opening ? (
                        <p className="text-foreground mt-3 text-base leading-8 font-serif">
                          «{p.opening}»
                        </p>
                      ) : null}
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
