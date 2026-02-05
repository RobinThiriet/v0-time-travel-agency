import { Shield, Clock, Compass } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Precision Temporelle",
    description:
      "Notre technologie de saut quantique vous depose a la seconde pres dans l'epoque choisie, avec une marge d'erreur de 0.003%.",
  },
  {
    icon: Shield,
    title: "Securite Absolue",
    description:
      "Chaque voyageur est equipe d'un bouclier chrono-protecteur et d'un dispositif de retour immediat en cas d'urgence.",
  },
  {
    icon: Compass,
    title: "Guides Experts",
    description:
      "Nos guides temporels certifies connaissent chaque epoque dans les moindres details et parlent les langues d'epoque.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-border/50 bg-card py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Pourquoi Nous Choisir
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Le Voyage Temporel, Reinvente
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Depuis 2147, nous avons transporte plus de 12 000 voyageurs a
            travers les epoques avec un taux de satisfaction de 99.8%.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(196,166,71,0.06)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
