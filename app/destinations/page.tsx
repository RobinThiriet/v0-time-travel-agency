import type { Metadata } from "next";
import { destinations } from "@/lib/destinations";
import { DestinationCard } from "@/components/destination-card";

export const metadata: Metadata = {
  title: "Destinations | TimeTravel Agency",
  description:
    "Explorez nos destinations temporelles : Paris 1889, le Cretace, Florence 1504.",
};

export default function DestinationsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Nos Destinations
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
            <span className="text-balance">
              Ou Voulez-Vous Aller ?
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Trois epoques extraordinaires vous attendent. Choisissez votre
            aventure et preparez-vous a vivre l&apos;histoire comme jamais.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))}
        </div>
      </div>
    </div>
  );
}
