"use client";

import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/destinations";
import { ArrowRight } from "lucide-react";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(196,166,71,0.08)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4">
          <span className="rounded-sm bg-primary/90 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            {destination.era}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-serif text-xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
          {destination.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {destination.tagline}
        </p>
        <div className="mt-2 flex items-center gap-1 text-sm font-medium text-primary">
          <span>Explorer</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
