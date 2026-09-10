import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArcDecor } from "@/components/ui/ArcDecor";

type StatsBandProps = {
  title: string;
  items: { value: string; label: string }[];
};

export function StatsBand({ title, items }: StatsBandProps) {
  return (
    <Section tone="deep" space="sm" className="overflow-hidden">
      <ArcDecor
        className="text-light-300 -start-40 -top-32 h-[34rem] w-[34rem]"
        opacity={0.14}
      />
      <Container size="wide">
        <h2 className="eyebrow text-light-300 relative">{title}</h2>
        <dl className="relative mt-9 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="border-t border-white/15 pt-5">
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="block font-serif text-4xl text-white sm:text-5xl">
                  {item.value}
                </span>
                <span className="mt-2 block text-sm text-white/60">{item.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
