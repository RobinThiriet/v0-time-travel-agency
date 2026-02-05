"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-[#0d0f14] via-[#1a1510] to-[#0d0f14]" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,166,71,0.08)_0%,_transparent_70%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(196,166,71,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(196,166,71,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="animate-fade-in-up mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary opacity-0">
          Agence de Voyages Temporels
        </p>

        <h1 className="animate-fade-in-up font-serif text-4xl font-bold leading-tight text-foreground opacity-0 animation-delay-200 sm:text-5xl md:text-7xl">
          <span className="text-balance">
            Explorez le Temps,{" "}
            <span className="text-primary">Vivez l&apos;Histoire</span>
          </span>
        </h1>

        <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground opacity-0 animation-delay-400 md:text-lg">
          De la Belle Epoque parisienne aux terres du Cretace, en passant par la
          Renaissance florentine. Choisissez votre epoque, nous ouvrons le
          passage.
        </p>

        <div className="animate-fade-in-up mt-10 flex flex-col items-center gap-4 opacity-0 animation-delay-600 sm:flex-row sm:justify-center">
          <Link
            href="/destinations"
            className="rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(196,166,71,0.3)]"
          >
            Voir les Destinations
          </Link>
          <Link
            href="#about"
            className="rounded-md border border-border px-8 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary/50 hover:text-primary"
          >
            En savoir plus
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
}
