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
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionLink } from "./SectionLink";
import { CONTACT } from "@/lib/contact";

interface Props {
  firstName?: string;
}

const steps = [
  {
    icon: MailCheck,
    title: "Eingang bestätigt",
    text: "Sie erhalten in Kürze eine Bestätigung per E-Mail.",
  },
  {
    icon: Brain,
    title: "Analyse beginnt",
    text: "Wir prüfen Ihre Angaben und erkennen erste Potenziale.",
  },
  {
    icon: Handshake,
    title: "Persönlicher Kontakt",
    text: "Ein Ansprechpartner meldet sich innerhalb von 24 Stunden.",
  },
  {
    icon: Lightbulb,
    title: "Ihr individuelles Konzept",
    text: "Im Erstgespräch erhalten Sie konkrete Empfehlungen für Ihr Unternehmen.",
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
      className="card-luxe relative overflow-hidden p-5 md:p-8 animate-scale-in"
    >
      {/* Ambient glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-soft/70 via-accent/10 to-transparent blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-14 h-52 w-52 rounded-full bg-accent/10 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-12 right-10 h-2 w-2 animate-pulse rounded-full bg-accent/70"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-28 left-8 h-1.5 w-1.5 animate-pulse rounded-full bg-accent/50 [animation-delay:400ms]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-32 left-16 h-1 w-1 animate-pulse rounded-full bg-primary/40 [animation-delay:800ms]"
      />

      {/* Header */}
      <div className="relative text-center">
        <div className="relative mx-auto grid h-16 w-16 place-items-center">
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full bg-emerald-400/30"
          />
          <span
            aria-hidden
            className="absolute inset-2 rounded-full bg-emerald-400/20"
          />
          <span className="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)]">
            <CheckCircle2 className="h-7 w-7" strokeWidth={2.5} />
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-primary md:text-3xl">
          {firstName ? `Vielen Dank, ${firstName}!` : "Vielen Dank für Ihre Anfrage!"}
        </h3>
        <p className="mt-2 text-base text-muted-foreground md:text-lg">
          Ihre Angaben wurden erfolgreich übermittelt. Wir prüfen Ihre Informationen und bereiten Ihr persönliches Erstgespräch vor.
        </p>
      </div>

      {/* Prozess-Karten */}
      <div className="relative mt-6 grid auto-rows-fr gap-3 md:grid-cols-2">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="group relative flex flex-col rounded-xl border border-border bg-card/80 p-4 shadow-card backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-brand-glow"
            >
              <div className="mb-2 flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-brand-glow">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-[11px] font-semibold tracking-widest text-accent uppercase">
                  Schritt {i + 1}
                </span>
              </div>
              <h4 className="text-base font-semibold text-primary">{s.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          );
        })}
      </div>

      {/* Vertrauensbox */}
      <div className="relative mt-5 rounded-xl border border-accent/30 bg-gradient-to-br from-brand-soft/70 via-card to-card p-4 shadow-card">
        <div className="flex items-start gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-brand-glow">
            <Sparkles className="h-4.5 w-4.5" />
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            <span className="font-medium text-primary">Warum dieser Fragebogen?</span>{" "}
            Je mehr wir bereits vor dem Gespräch über Ihr Unternehmen wissen, desto konkreter können wir Sie beraten und bereits erste realistische Potenziale aufzeigen.
          </p>
        </div>
      </div>

      {/* Qualitätsversprechen */}
      <div className="relative mt-5 grid gap-2 sm:grid-cols-2">
        {badges.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.text}
              className="flex items-center gap-2.5 rounded-lg border border-border bg-card/60 px-3 py-2 text-sm text-primary backdrop-blur"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-emerald-100 text-emerald-700">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="font-medium">{b.text}</span>
            </div>
          );
        })}
      </div>

      {/* Kontakt */}
      <div className="relative mt-5 overflow-hidden rounded-xl border border-border bg-card/80 p-4 shadow-card backdrop-blur">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/5 text-primary">
            <FileCheck2 className="h-4 w-4" />
          </span>
          <h4 className="text-base font-semibold text-primary md:text-lg">Noch Fragen?</h4>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <a
            href={CONTACT.phoneTel}
            className="group flex items-start gap-2.5 rounded-lg border border-border bg-background/60 p-3 transition-all hover:border-accent/60 hover:shadow-card"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-brand-glow">
              <Phone className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                Telefon
              </p>
              <p className="text-sm font-medium text-primary group-hover:text-accent">
                {CONTACT.phoneDisplay}
              </p>
            </div>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="group flex items-start gap-2.5 rounded-lg border border-border bg-background/60 p-3 transition-all hover:border-accent/60 hover:shadow-card"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-brand-glow">
              <Mail className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                E-Mail
              </p>
              <p className="text-sm font-medium text-primary group-hover:text-accent">
                {CONTACT.email}
              </p>
            </div>
          </a>
          <div className="flex items-start gap-2.5 rounded-lg border border-border bg-background/60 p-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-brand-glow">
              <MapPin className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                Adresse
              </p>
              <p className="text-sm font-medium text-primary">
                {CONTACT.companyName}
                <br />
                {CONTACT.street}
                <br />
                {CONTACT.city}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-center">
        <Button
          asChild
          variant="outline"
          size="default"
          className="rounded-full"
        >
          <SectionLink hash="beispiele">Weitere Leistungen entdecken</SectionLink>
        </Button>
        <Button
          asChild
          size="default"
          className="rounded-full bg-gradient-brand shadow-brand-glow transition-transform hover:scale-[1.02] sm:px-6"
        >
          <Link to="/">
            Zur Startseite
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
