"use client";

import Link from "next/link";
import { useState } from "react";
import { Clock, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Clock className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-[360deg]" />
          <span className="font-serif text-xl font-bold text-foreground">
            TimeTravel
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-primary"
          >
            Accueil
          </Link>
          <Link
            href="/destinations"
            className="text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-primary"
          >
            Destinations
          </Link>
          <Link
            href="/destinations"
            className="rounded-md border border-primary bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90"
          >
            Reserver
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              Accueil
            </Link>
            <Link
              href="/destinations"
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              Destinations
            </Link>
            <Link
              href="/destinations"
              onClick={() => setIsOpen(false)}
              className="rounded-md border border-primary bg-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Reserver
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
