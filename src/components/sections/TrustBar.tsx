import { Container } from "@/components/ui/Container";
import { CheckIcon } from "@/components/ui/Icons";

type TrustBarProps = {
  title: string;
  items: string[];
};

export function TrustBar({ title, items }: TrustBarProps) {
  return (
    <section aria-label={title} className="border-hairline border-b bg-white">
      <Container size="wide">
        <ul className="grid gap-x-8 gap-y-4 py-7 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
              <CheckIcon className="text-light-500 mt-0.5 size-4 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
