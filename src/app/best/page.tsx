import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, Container, SectionHeading } from "@/components/ui/layout";
import { site } from "@/lib/site";
import { bestVerses } from "@/data/poems";

export const metadata = {
  title: `أجمل ما ذكر | ${site.name}`,
  description: "أبيات مختارة من المعلقات السبع.",
};

export default function BestPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 py-16">
        <Container>
          <SectionHeading
            eyebrow="أجمل ما ذكر"
            title="أبيات مختارة"
            description="افتتاحيات وأبيات من المعلقات السبع."
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
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
