import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { AiCheckSuccess } from "./AiCheckSuccess";
import { cn } from "@/lib/utils";

/* ---------- Optionen ---------- */

const INDUSTRIES = [
  "Immobilienwirtschaft",
  "Hausverwaltung",
  "Handwerk",
  "Bauwirtschaft",
  "Produktion",
  "Industrie",
  "Handel",
  "Dienstleistung",
  "Kanzlei / Rechtsberatung",
  "Steuerberatung / Wirtschaftsprüfung",
  "Gesundheitswesen",
  "Pflege / soziale Einrichtungen",
  "Gastronomie / Hotellerie",
  "Logistik / Transport",
  "Verwaltung / öffentlicher Bereich",
  "Sonstige Branche",
];

const SYSTEMS = [
  "Microsoft 365",
  "Google Workspace",
  "DATEV",
  "Lexoffice",
  "sevDesk",
  "CRM",
  "ERP",
  "Hausverwaltungssoftware",
  "Branchensoftware",
  "Sonstiges",
] as const;

const AI_EXPERIENCE = [
  "Nein",
  "ChatGPT",
  "Microsoft Copilot",
  "Claude",
  "Andere",
  "Wir testen aktuell",
] as const;

const PROBLEMS = [
  "Zu viele manuelle Aufgaben",
  "Zu viele E-Mails",
  "Dokumente kosten zu viel Zeit",
  "Fachkräftemangel",
  "Prozesse dauern zu lange",
  "Wir wissen nicht, wo AI helfen kann",
  "Sonstiges",
] as const;

const EXPECTATIONS = [
  "Orientierung",
  "Erste Ideen",
  "Konkrete Umsetzung",
  "Schulung",
  "Noch unsicher",
] as const;

const EMPLOYEE_RANGES = ["1–9", "10–49", "50–249", "250+"];
const TIMELINES = ["Sofort", "In 1–3 Monaten", "Später", "Erst einmal informieren"];

/* ---------- Schema ---------- */

const formSchema = z.object({
  firstName: z.string().trim().min(1, "Bitte geben Sie Ihren Vornamen an.").max(100),
  lastName: z.string().trim().min(1, "Bitte geben Sie Ihren Nachnamen an.").max(100),
  company: z.string().trim().min(1, "Bitte geben Sie Ihre Firma an.").max(200),
  position: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an.").max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  industry: z.string().min(1, "Bitte wählen Sie Ihre Branche."),
  industryOther: z.string().trim().max(200).optional().or(z.literal("")),
  employees: z.string().min(1, "Bitte wählen Sie die Unternehmensgröße."),
  systems: z.array(z.string()),
  systemsOther: z.string().trim().max(500).optional().or(z.literal("")),
  aiExperience: z.array(z.string()).min(1, "Bitte wählen Sie mindestens eine Option."),
  problems: z.array(z.string()).min(1, "Bitte wählen Sie mindestens ein Thema."),
  timeEater: z.string().trim().max(1000).optional().or(z.literal("")),
  expectation: z.string().min(1, "Bitte wählen Sie eine Option."),
  timeline: z.string().min(1, "Bitte wählen Sie einen Zeitraum."),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "Bitte stimmen Sie der Datenschutzerklärung zu." }),
  }),
});

export type AiCheckFormValues = z.infer<typeof formSchema>;

type FieldName = keyof AiCheckFormValues;

const stepMeta = [
  {
    icon: UserRound,
    title: "Daten",
    subtitle: "Damit wir uns bei Ihnen melden können.",
    fields: ["firstName", "lastName", "company", "position", "email", "phone", "website"] as FieldName[],
  },
  {
    icon: Building2,
    title: "Firma",
    subtitle: "Ein paar Fakten für die Einordnung.",
    fields: ["industry", "industryOther", "employees", "systems", "systemsOther"] as FieldName[],
  },
  {
    icon: ClipboardList,
    title: "Situation",
    subtitle: "Wo drückt der Schuh – und was ist schon im Einsatz?",
    fields: ["aiExperience", "problems", "timeEater"] as FieldName[],
  },
  {
    icon: Target,
    title: "Ziele",
    subtitle: "Wohin soll die Reise gehen – und was ist wichtig?",
    fields: ["expectation", "timeline", "message", "privacy"] as FieldName[],
  },
];

async function submitAiCheck(values: AiCheckFormValues): Promise<void> {
  const res = await fetch("/api/ai-check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  let payload: { ok?: boolean; error?: string } = {};
  try {
    payload = await res.json();
  } catch {
    /* ignore */
  }
  if (!res.ok || !payload.ok) {
    throw new Error(payload.error || "Ihre Anfrage konnte nicht versendet werden. Bitte versuchen Sie es erneut.");
  }
}

export function AiCheckForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const totalSteps = stepMeta.length;

  const form = useForm<AiCheckFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      position: "",
      email: "",
      phone: "",
      website: "",
      industry: "",
      industryOther: "",
      employees: "",
      systems: [],
      systemsOther: "",
      aiExperience: [],
      problems: [],
      timeEater: "",
      expectation: "",
      timeline: "",
      message: "",
      privacy: false as unknown as true,
    },
  });

  const progress = useMemo(() => ((step + 1) / totalSteps) * 100, [step, totalSteps]);
  const current = stepMeta[step];
  const isLast = step === totalSteps - 1;

  const goNext = async () => {
    const valid = await form.trigger(current.fields);
    if (!valid) return;
    setStep((s) => Math.min(s + 1, totalSteps - 1));
    window.setTimeout(
      () =>
        document
          .getElementById("ai-check")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      50,
    );
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (values: AiCheckFormValues) => {
    setSubmitError(null);
    try {
      await submitAiCheck(values);
      setSubmitted(true);
      window.setTimeout(
        () =>
          document
            .getElementById("ai-check")
            ?.scrollIntoView({ behavior: "smooth", block: "start" }),
        50,
      );
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Ihre Anfrage konnte nicht versendet werden. Bitte versuchen Sie es erneut.",
      );
    }
  };

  return (
    <section id="ai-check" className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/50 to-background"
      />
      <div
        aria-hidden
        className="absolute top-24 left-1/2 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-soft/60 to-transparent blur-3xl"
      />
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Kostenloser AI-Check"
          title="Starten Sie Ihre"
          titleAccent="kostenlose Vorab-Analyse."
          subtitle="Je mehr wir vorab über Ihren Betrieb wissen, desto konkreter wird unser Erstgespräch. Vier kurze Schritte – ca. 3 Minuten, unverbindlich und kostenlos."
        />

        {submitted ? (
          <Reveal variant="scale">
            <AiCheckSuccess firstName={form.getValues("firstName")} />
          </Reveal>
        ) : (
          <Reveal>
            <div className="card-luxe relative overflow-hidden p-6 md:p-10">
              {/* Stepper Header */}
              <div className="mb-8">
                <div className="mb-5 flex items-center justify-between text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  <span>
                    Schritt {step + 1} von {totalSteps}
                  </span>
                  <span className="text-accent">{Math.round(progress)}% abgeschlossen</span>
                </div>
                <div className="relative h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-brand shadow-brand-glow transition-all duration-700 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Step Dots */}
                <ol className="mt-6 grid grid-cols-4 gap-2">
                  {stepMeta.map((s, i) => {
                    const active = i === step;
                    const done = i < step;
                    const Icon = s.icon;
                    return (
                      <li
                        key={s.title}
                        className={cn(
                          "flex items-center gap-2.5 rounded-xl border p-2.5 text-left transition-all",
                          active
                            ? "border-accent bg-brand-soft text-primary shadow-card"
                            : done
                              ? "border-border bg-card text-primary"
                              : "border-border bg-secondary/50 text-muted-foreground",
                        )}
                      >
                        <span
                          className={cn(
                            "grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-all",
                            active || done
                              ? "bg-gradient-brand text-primary-foreground shadow-brand-glow"
                              : "bg-background text-muted-foreground",
                          )}
                        >
                          {done ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : (
                            <Icon className="h-4 w-4" />
                          )}
                        </span>
                        <span className="hidden flex-1 whitespace-nowrap text-center text-xs font-semibold sm:block">
                          {i + 1}. {s.title}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="mb-7 flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand-glow">
                  <current.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold tracking-widest text-accent uppercase">
                    Schritt {step + 1} von {totalSteps}
                  </p>
                  <h3 className="text-xl font-semibold text-primary md:text-2xl">
                    {current.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{current.subtitle}</p>
                </div>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                  noValidate
                >
                  {step === 0 && <StepContact form={form} />}
                  {step === 1 && <StepCompany form={form} />}
                  {step === 2 && <StepSituation form={form} />}
                  {step === 3 && <StepGoals form={form} />}

                  {/* Navigation */}
                  <div className="flex flex-col-reverse items-stretch gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={goBack}
                      disabled={step === 0}
                      className="rounded-full"
                    >
                      <ArrowLeft className="mr-1 h-4 w-4" />
                      Zurück
                    </Button>

                    {isLast ? (
                      <Button
                        type="submit"
                        size="lg"
                        disabled={form.formState.isSubmitting}
                        className="rounded-full bg-gradient-brand shadow-brand-glow transition-transform hover:scale-[1.02] sm:px-8"
                      >
                        <Send className="mr-1 h-4 w-4" />
                        {form.formState.isSubmitting
                          ? "Wird gesendet …"
                          : "AI-Check kostenlos anfragen"}
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        size="lg"
                        onClick={goNext}
                        className="rounded-full bg-gradient-brand shadow-brand-glow transition-transform hover:scale-[1.02] sm:px-8"
                      >
                        Weiter
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  {isLast && submitError && (
                    <div
                      role="alert"
                      className="rounded-xl border border-destructive/40 bg-destructive/5 p-3 text-center text-sm text-destructive"
                    >
                      {submitError}
                    </div>
                  )}

                  {isLast && (
                    <p className="pt-1 text-center text-xs text-muted-foreground">
                      <ShieldCheck className="mr-1 inline h-3.5 w-3.5 text-accent" />
                      Ihre Angaben werden vertraulich behandelt und ausschließlich zur Vorbereitung
                      des Erstgesprächs genutzt.
                    </p>
                  )}
                </form>
              </Form>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ---------- Step Components ---------- */

type StepProps = { form: ReturnType<typeof useForm<AiCheckFormValues>> };

function ChipCheckboxGroup({
  form,
  name,
  options,
}: {
  form: StepProps["form"];
  name: "systems" | "aiExperience" | "problems";
  options: readonly string[];
}) {
  return (
    <div className="mt-1 flex flex-wrap gap-2">
      {options.map((option) => (
        <FormField
          key={option}
          control={form.control}
          name={name}
          render={({ field }) => {
            const value = (field.value as string[]) ?? [];
            const checked = value.includes(option);
            return (
              <FormItem>
                <FormLabel className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-sm font-medium transition-all has-[[data-state=checked]]:border-accent has-[[data-state=checked]]:bg-brand-soft has-[[data-state=checked]]:text-primary has-[[data-state=checked]]:shadow-card">
                  <FormControl>
                    <Checkbox
                      checked={checked}
                      onCheckedChange={(v) =>
                        field.onChange(
                          v ? [...value, option] : value.filter((s: string) => s !== option),
                        )
                      }
                    />
                  </FormControl>
                  {option}
                </FormLabel>
              </FormItem>
            );
          }}
        />
      ))}
    </div>
  );
}

function StepContact({ form }: StepProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vorname *</FormLabel>
            <FormControl>
              <Input placeholder="Ihr Vorname" autoComplete="given-name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nachname *</FormLabel>
            <FormControl>
              <Input placeholder="Ihr Nachname" autoComplete="family-name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="company"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Firma *</FormLabel>
            <FormControl>
              <Input placeholder="Name Ihres Unternehmens" autoComplete="organization" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="position"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Position / Funktion (optional)</FormLabel>
            <FormControl>
              <Input
                placeholder="z. B. Geschäftsführung, Teamleitung"
                autoComplete="organization-title"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>E-Mail *</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="Ihre geschäftliche E-Mail-Adresse"
                autoComplete="email"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefonnummer (optional)</FormLabel>
            <FormControl>
              <Input
                type="tel"
                placeholder="Für einen kurzen Rückruf"
                autoComplete="tel"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="website"
        render={({ field }) => (
          <FormItem className="sm:col-span-2">
            <FormLabel>Website des Unternehmens (optional)</FormLabel>
            <FormControl>
              <Input
                type="url"
                placeholder="https://www.ihre-firma.de"
                autoComplete="url"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

function StepCompany({ form }: StepProps) {
  const industry = form.watch("industry");
  const systems = form.watch("systems");
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField
        control={form.control}
        name="industry"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Branche *</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Bitte wählen" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {INDUSTRIES.map((ind) => (
                  <SelectItem key={ind} value={ind}>
                    {ind}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="employees"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Anzahl Mitarbeiter *</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Bitte wählen" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {EMPLOYEE_RANGES.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r} Mitarbeiter
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      {industry === "Sonstige Branche" && (
        <FormField
          control={form.control}
          name="industryOther"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>Welche Branche?</FormLabel>
              <FormControl>
                <Input placeholder="Bitte kurz beschreiben" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      <FormField
        control={form.control}
        name="systems"
        render={() => (
          <FormItem className="sm:col-span-2">
            <FormLabel>Welche Systeme nutzen Sie regelmäßig?</FormLabel>
            <ChipCheckboxGroup form={form} name="systems" options={SYSTEMS} />
            <FormMessage />
          </FormItem>
        )}
      />
      {systems.includes("Sonstiges") && (
        <FormField
          control={form.control}
          name="systemsOther"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>Sonstige Systeme</FormLabel>
              <FormControl>
                <Input placeholder="Welche weiteren Systeme nutzen Sie?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </div>
  );
}

function StepSituation({ form }: StepProps) {
  return (
    <div className="grid gap-5">
      <FormField
        control={form.control}
        name="aiExperience"
        render={() => (
          <FormItem>
            <FormLabel>
              Haben Sie bereits Erfahrungen mit künstlicher Intelligenz gesammelt? *
            </FormLabel>
            <ChipCheckboxGroup form={form} name="aiExperience" options={AI_EXPERIENCE} />
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="problems"
        render={() => (
          <FormItem>
            <FormLabel className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-accent" />
              Was ist aktuell Ihr größtes Problem? *
            </FormLabel>
            <ChipCheckboxGroup form={form} name="problems" options={PROBLEMS} />
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="timeEater"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Was ist aktuell der größte Zeitfresser im Unternehmen? (optional)</FormLabel>
            <FormControl>
              <Textarea
                rows={4}
                placeholder="z. B. E-Mails sortieren und beantworten, Angebote schreiben, Dokumente ablegen …"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

function StepGoals({ form }: StepProps) {
  return (
    <div className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="expectation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Was erwarten Sie von unserem Gespräch? *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Bitte wählen" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {EXPECTATIONS.map((e) => (
                    <SelectItem key={e} value={e}>
                      {e}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="timeline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wann soll das Thema umgesetzt werden? *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Bitte wählen" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {TIMELINES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nachricht / Freitext (optional)</FormLabel>
            <FormControl>
              <Textarea
                rows={4}
                placeholder="Gibt es etwas, das wir vorab wissen sollten?"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="privacy"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-background/60 p-4 text-sm font-normal leading-relaxed transition-all has-[[data-state=checked]]:border-accent has-[[data-state=checked]]:bg-brand-soft">
              <FormControl>
                <Checkbox
                  checked={field.value === true}
                  onCheckedChange={(v) => field.onChange(v === true)}
                  className="mt-0.5"
                />
              </FormControl>
              <span className="text-muted-foreground">
                Ich habe die{" "}
                <a
                  href="/datenschutz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:underline"
                >
                  Datenschutzerklärung
                </a>{" "}
                gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.
              </span>
            </FormLabel>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
