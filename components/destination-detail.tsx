"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, MessageCircle } from "lucide-react";
import type { Destination } from "@/lib/destinations";

export function DestinationDetail({ dest }: { dest: Destination }) {
  function openChat() {
    const chatBtn = document.querySelector(
      '[aria-label="Ouvrir le chat"]'
    ) as HTMLButtonElement | null;
    if (chatBtn) chatBtn.click();
  }

  return (
    <div className="pt-20">
      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[320px] w-full md:h-[60vh]">
        <Image
          src={dest.image || "/placeholder.svg"}
          alt={dest.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/destinations"
              className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux destinations
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-sm bg-primary/90 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                {dest.era}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {dest.title}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {dest.era}
              </span>
            </div>
            <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-5xl">
              {dest.title}
            </h1>
            <p className="mt-1 text-base text-muted-foreground md:text-lg">
              {dest.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        {/* Description */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            A propos de cette destination
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {dest.description}
          </p>
        </section>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Activities */}
          <section className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
              Activites Incluses
            </h3>
            <ul className="flex flex-col gap-3">
              {dest.activities.map((activity, i) => (
                <li
                  key={`activity-${i}`}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  {activity}
                </li>
              ))}
            </ul>
          </section>

          {/* Tips */}
          <section className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
              Conseils du Guide
            </h3>
            <ul className="flex flex-col gap-3">
              {dest.tips.map((tip, i) => (
                <li
                  key={`tip-${i}`}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {tip}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
          <h3 className="font-serif text-2xl font-bold text-foreground">
            {"Pret pour l'aventure ?"}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Nos agents temporels sont disponibles 24h/24 pour preparer votre
            voyage.
          </p>
          <button
            type="button"
            onClick={openChat}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(196,166,71,0.3)]"
          >
            <MessageCircle className="h-4 w-4" />
            {"Parler a l'agent"}
          </button>
        </div>
      </div>
    </div>
  );
}
