import {
  ArrowRight,
  BadgeCheck,
  Brain,
  CheckCircle2,
  FileCheck2,
  Handshake,
  Lightbulb,
  Lock,
  Mail,
  MailCheck,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/contact";

interface Props {
  firstName?: string;
}

const steps = [
  {
    icon: MailCheck,
    title: "Eingang bestätigt",
    text: "Sie erhalten innerhalb weniger Minuten eine Eingangsbestätigung per E-Mail.",
  },
  {
    icon: Brain,
    title: "Analyse beginnt",
    text: "Wir prüfen bereits jetzt Ihre Angaben und identifizieren erste Potenziale für den Einsatz von Künstlicher Intelligenz.",
  },
  {
    icon: Handshake,
    title: "Persönlicher Kontakt",
    text: "Ein Ansprechpartner aus unserem Team meldet sich innerhalb von 24 Stunden persönlich bei Ihnen.",
    small: "Keine Hotline. Keine automatisierten Verkaufsgespräche.",
  },
  {
    icon: Lightbulb,
    title: "Ihr individuelles Konzept",
    text: "Im Erstgespräch erhalten Sie konkrete Handlungsempfehlungen für Ihr Unternehmen.",
    small: "Falls KI für einen Bereich keinen Mehrwert bringt, sagen wir Ihnen das ebenfalls offen.",
  },
];

const badges = [
  { icon: BadgeCheck, text: "Herstellerunabhängige Beratung" },
  { icon: Lock, text: "DSGVO-konforme Lösungen" },
  { icon: ShieldCheck, text: "Ehrliche Empfehlung statt Tool-Verkauf" },
  { icon: UserRound, text: "Persönliche Betreuung aus Deutschland" },
];

export function AiCheckSuccess({ firstName }: Props) {
  return (
    <div
      role="status"
      className="card-luxe relative overflow-hidden p-6 md:p-12 animate-scale-in"
    >
      {/* Ambient glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-soft/70 via-accent/10 to-transparent blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-16 right-12 h-2 w-2 animate-pulse rounded-full bg-accent/70"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-32 left-10 h-1.5 w-1.5 animate-pulse rounded-full bg-accent/50 [animation-delay:400ms]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-40 left-20 h-1 w-1 animate-pulse rounded-full bg-primary/40 [animation-delay:800ms]"
      />

      {/* Header */}
      <div className="relative text-center">
        <div className="relative mx-auto grid h-20 w-20 place-items-center">
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full bg-emerald-400/30"
          />
          <span
            aria-hidden
            className="absolute inset-2 rounded-full bg-emerald-400/20"
          />
          <span className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)]">
            <CheckCircle2 className="h-9 w-9" strokeWidth={2.5} />
          </span>
        </div>
        <h3 className="mt-6 text-3xl font-semibold text-primary md:text-4xl">
          {firstName ? `Vielen Dank, ${firstName}!` : "Vielen Dank für Ihre Anfrage!"}
        </h3>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Ihre Angaben wurden erfolgreich übermittelt.
        </p>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Vielen Dank für Ihr Vertrauen. Wir bereiten Ihr persönliches Erstgespräch bereits
          anhand Ihrer Angaben vor. Dadurch können wir direkt über konkrete Möglichkeiten
          für Ihr Unternehmen sprechen – ohne Zeit mit allgemeinen Präsentationen zu
          verlieren.
        </p>
      </div>

      {/* Prozess-Karten */}
      <div className="relative mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card/80 p-5 shadow-card backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-brand-glow"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand-glow">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-semibold tracking-widest text-accent uppercase">
                  Schritt {i + 1}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-primary">{s.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
              {s.small && (
                <p className="mt-2 text-xs italic text-muted-foreground/80">{s.small}</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Vertrauensbox */}
      <div className="relative mt-10 overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-brand-soft/70 via-card to-card p-6 shadow-card md:p-8">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl"
        />
        <div className="relative flex items-start gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand-glow">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <h4 className="text-lg font-semibold text-primary md:text-xl">
              Warum dieser Fragebogen?
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              Je mehr wir bereits vor unserem Gespräch über Ihr Unternehmen wissen, desto
              konkreter können wir Sie beraten. Unser Ziel ist keine allgemeine
              KI-Präsentation. Wir möchten Ihnen bereits im ersten Gespräch konkrete Ideen
              zeigen, die in Ihrem Unternehmen realistisch umsetzbar sind.
            </p>
          </div>
        </div>
      </div>

      {/* Qualitätsversprechen */}
      <div className="relative mt-8 grid gap-2.5 sm:grid-cols-2">
        {badges.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.text}
              className="flex items-center gap-2.5 rounded-xl border border-border bg-card/60 px-3.5 py-2.5 text-sm text-primary backdrop-blur"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
                <Icon className="h-4 w-4" />
              </span>
              <span className="font-medium">{b.text}</span>
            </div>
          );
        })}
      </div>

      {/* Kontakt */}
      <div className="relative mt-8 overflow-hidden rounded-2xl border border-border bg-card/80 p-6 shadow-card backdrop-blur md:p-8">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/5 text-primary">
            <FileCheck2 className="h-5 w-5" />
          </span>
          <h4 className="text-lg font-semibold text-primary md:text-xl">Noch Fragen?</h4>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <a
            href={CONTACT.phoneTel}
            className="group flex items-start gap-3 rounded-xl border border-border bg-background/60 p-3.5 transition-all hover:border-accent/60 hover:shadow-card"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-brand-glow">
              <Phone className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
                Telefon
              </p>
              <p className="text-sm font-medium text-primary group-hover:text-accent">
                {CONTACT.phoneDisplay}
              </p>
            </div>
          </a>
          <a
            href="mailto:info@newvisiondata.de"
            className="group flex items-start gap-3 rounded-xl border border-border bg-background/60 p-3.5 transition-all hover:border-accent/60 hover:shadow-card"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-brand-glow">
              <Mail className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
                E-Mail
              </p>
              <p className="truncate text-sm font-medium text-primary group-hover:text-accent">
                info@newvisiondata.de
              </p>
            </div>
          </a>
          <div className="flex items-start gap-3 rounded-xl border border-border bg-background/60 p-3.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-brand-glow">
              <MapPin className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
                Adresse
              </p>
              <p className="text-sm font-medium text-primary">
                NewVisionData GmbH
                <br />
                Hügelstr. 11a
                <br />
                49179 Ostercappeln
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-center">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-full"
        >
          <a href="#leistungen">Weitere Leistungen entdecken</a>
        </Button>
        <Button
          asChild
          size="lg"
          className="rounded-full bg-gradient-brand shadow-brand-glow transition-transform hover:scale-[1.02] sm:px-8"
        >
          <a href="/">
            Zur Startseite
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
