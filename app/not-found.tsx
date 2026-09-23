import { Hero } from "@/components/sections";

export default function NotFound() {
  return <Hero eyebrow="404" title="That page does not exist yet"
    sub="It may be on the roadmap. Try the products menu, or tell us what you were looking for."
    ctas={[{ label: "Back to home", href: "/" }, { label: "Contact us", href: "/enterprise/contact" }]} />;
}
