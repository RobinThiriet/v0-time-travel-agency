import { Clock } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-bold text-foreground">
                TimeTravel Agency
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Votre passerelle vers les epoques les plus fascinantes de
              l&apos;histoire. Voyagez en toute securite depuis 2147.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Destinations
            </h4>
            <Link
              href="/destinations/paris-1889"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Paris 1889
            </Link>
            <Link
              href="/destinations/cretace-65m"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Cretace -65M
            </Link>
            <Link
              href="/destinations/florence-1504"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Florence 1504
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </h4>
            <p className="text-sm text-muted-foreground">
              support@timetravel.agency
            </p>
            <p className="text-sm text-muted-foreground">
              +33 (0)1 88 88 2147
            </p>
            <p className="text-sm text-muted-foreground">
              42 Rue du Futur, Paris 2147
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2147 TimeTravel Agency. Tous droits reserves a travers le
            temps.
          </p>
        </div>
      </div>
    </footer>
  );
}
