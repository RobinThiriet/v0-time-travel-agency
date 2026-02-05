import { destinations } from "@/lib/destinations";
import { DestinationCard } from "@/components/destination-card";
import Link from "next/link";

export function FeaturedDestinations() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Destinations Populaires
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Choisissez Votre Epoque
            </span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/destinations"
            className="rounded-md border border-primary bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(196,166,71,0.3)]"
          >
            Toutes les Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
