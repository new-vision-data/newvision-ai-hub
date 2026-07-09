import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Building2, CheckCircle2, ClipboardList, Send, UserRound } from "lucide-react";
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

const AREAS = [
  "Kundenkommunikation",
  "E-Mail",
  "Angebote",
  "Buchhaltung",
  "Dokumente",
  "Interne Wissenssuche",
  "Marketing",
  "Vertrieb",
  "Personal",
  "Sonstiges",
] as const;

const SYSTEMS = [
  "Microsoft 365",
  "Google Workspace",
  "DATEV",
  "Lexoffice",
  "sevDesk",
  "CRM",
  "ERP",
  "Hausverwaltungssoftware",
  "Sonstiges",
] as const;

const INDUSTRIES = [
  "Immobilien & Hausverwaltung",
  "Handwerk & Bau",
  "Dienstleistung",
  "Produktion",
  "Kanzlei & Büro",
  "Verwaltung & Backoffice",
  "Andere Branche",
];

const EMPLOYEE_RANGES = ["1–9", "10–49", "50–249", "250+"];

const TIMELINES = ["Sofort", "In 1–3 Monaten", "Später", "Erst einmal informieren"];

const PRIVACY_LEVELS = [
  "Sehr wichtig – Daten müssen in der EU bleiben",
  "Wichtig – sollte berücksichtigt werden",
  "Offen – wir lassen uns beraten",
];

const formSchema = z.object({
  firstName: z.string().trim().min(1, "Bitte geben Sie Ihren Vornamen an.").max(100),
  lastName: z.string().trim().min(1, "Bitte geben Sie Ihren Nachnamen an.").max(100),
  company: z.string().trim().min(1, "Bitte geben Sie Ihre Firma an.").max(200),
  position: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an.").max(255),
  phone: z.string().trim().min(5, "Bitte geben Sie Ihre Telefonnummer an.").max(50),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  industry: z.string().min(1, "Bitte wählen Sie Ihre Branche."),
  employees: z.string().min(1, "Bitte wählen Sie die Unternehmensgröße."),
  areas: z.array(z.string()).min(1, "Bitte wählen Sie mindestens einen Bereich."),
  systems: z.array(z.string()),
  systemsOther: z.string().trim().max(500).optional().or(z.literal("")),
  timeEater: z.string().trim().max(1000).optional().or(z.literal("")),
  existingAiTools: z.string().trim().max(500).optional().or(z.literal("")),
  privacyImportance: z.string().min(1, "Bitte wählen Sie eine Option."),
  timeline: z.string().min(1, "Bitte wählen Sie einen Zeitraum."),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type AiCheckFormValues = z.infer<typeof formSchema>;

/**
 * Übergabepunkt für die spätere Backend-Anbindung.
 * Hier später z. B. Supabase, Resend, Formspree oder eine eigene API anbinden:
 *
 *   await fetch("/api/ai-check", { method: "POST", body: JSON.stringify(values) })
 */
async function submitAiCheck(values: AiCheckFormValues): Promise<void> {
  // Simulierte Verarbeitung – aktuell ohne Backend.
  console.info("AI-Check-Anfrage (noch ohne Backend):", values);
  await new Promise((resolve) => setTimeout(resolve, 600));
}

function GroupHeader({
  icon: Icon,
  step,
  title,
  subtitle,
}: {
  icon: typeof UserRound;
  step: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand-glow">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold tracking-widest text-accent uppercase">{step}</p>
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}

export function AiCheckForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<AiCheckFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      position: "",
      email: "",
      phone: "",
      website: "",
      industry: "",
      employees: "",
      areas: [],
      systems: [],
      systemsOther: "",
      timeEater: "",
      existingAiTools: "",
      privacyImportance: "",
      timeline: "",
      message: "",
    },
  });

  const onSubmit = async (values: AiCheckFormValues) => {
    await submitAiCheck(values);
    setSubmitted(true);
  };

  return (
    <section id="ai-check" className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Kostenloser AI-Check"
          title="Starten Sie Ihre kostenlose Vorab-Analyse."
          subtitle="Je mehr wir vorab über Ihren Betrieb wissen, desto konkreter wird unser Erstgespräch. Dauert ca. 3 Minuten – unverbindlich und kostenlos."
        />

        {submitted ? (
          <div
            role="status"
            className="rounded-2xl border border-border bg-card p-10 text-center shadow-elevated"
          >
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-soft">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-primary">Vielen Dank für Ihre Anfrage!</h3>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Wir haben Ihre Angaben erhalten und melden uns in der Regel innerhalb von 1–2
              Werktagen bei Ihnen, um einen Termin für den kostenlosen AI-Check zu vereinbaren.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Dringende Fragen? Rufen Sie uns gerne an:{" "}
              <a href="tel:+4915565000062" className="font-semibold text-accent hover:underline">
                015565000062
              </a>
            </p>
          </div>
        ) : (
          <Reveal>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                noValidate
              >
                {/* Gruppe 1: Kontakt */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
                  <GroupHeader
                    icon={UserRound}
                    step="Schritt 1 von 3"
                    title="Ihre Kontaktdaten"
                    subtitle="Damit wir uns bei Ihnen melden können."
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vorname *</FormLabel>
                          <FormControl>
                            <Input placeholder="Max" autoComplete="given-name" {...field} />
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
                            <Input placeholder="Mustermann" autoComplete="family-name" {...field} />
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
                            <Input placeholder="Mustermann GmbH" autoComplete="organization" {...field} />
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
                          <FormLabel>Position / Funktion</FormLabel>
                          <FormControl>
                            <Input placeholder="z. B. Geschäftsführer" autoComplete="organization-title" {...field} />
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
                            <Input type="email" placeholder="max@firma.de" autoComplete="email" {...field} />
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
                          <FormLabel>Telefonnummer *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="0151 23456789" autoComplete="tel" {...field} />
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
                          <FormLabel>Website des Unternehmens</FormLabel>
                          <FormControl>
                            <Input type="url" placeholder="https://www.firma.de" autoComplete="url" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Gruppe 2: Unternehmen */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
                  <GroupHeader
                    icon={Building2}
                    step="Schritt 2 von 3"
                    title="Ihr Unternehmen"
                    subtitle="Ein paar Fakten für die Einordnung."
                  />
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
                    <FormField
                      control={form.control}
                      name="systems"
                      render={() => (
                        <FormItem className="sm:col-span-2">
                          <FormLabel>Welche Systeme werden bereits genutzt?</FormLabel>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {SYSTEMS.map((system) => (
                              <FormField
                                key={system}
                                control={form.control}
                                name="systems"
                                render={({ field }) => {
                                  const checked = field.value.includes(system);
                                  return (
                                    <FormItem>
                                      <FormLabel className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-sm font-medium transition-colors has-[[data-state=checked]]:border-accent has-[[data-state=checked]]:bg-brand-soft has-[[data-state=checked]]:text-primary">
                                        <FormControl>
                                          <Checkbox
                                            checked={checked}
                                            onCheckedChange={(value) =>
                                              field.onChange(
                                                value
                                                  ? [...field.value, system]
                                                  : field.value.filter((s) => s !== system),
                                              )
                                            }
                                          />
                                        </FormControl>
                                        {system}
                                      </FormLabel>
                                    </FormItem>
                                  );
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {form.watch("systems").includes("Sonstiges") && (
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
                </div>

                {/* Gruppe 3: Herausforderungen */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
                  <GroupHeader
                    icon={ClipboardList}
                    step="Schritt 3 von 3"
                    title="Ihre Herausforderungen"
                    subtitle="Wo drückt der Schuh – und wo soll es hingehen?"
                  />
                  <div className="grid gap-5">
                    <FormField
                      control={form.control}
                      name="areas"
                      render={() => (
                        <FormItem>
                          <FormLabel>Welche Bereiche sollen verbessert werden? *</FormLabel>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {AREAS.map((area) => (
                              <FormField
                                key={area}
                                control={form.control}
                                name="areas"
                                render={({ field }) => {
                                  const checked = field.value.includes(area);
                                  return (
                                    <FormItem>
                                      <FormLabel className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-sm font-medium transition-colors has-[[data-state=checked]]:border-accent has-[[data-state=checked]]:bg-brand-soft has-[[data-state=checked]]:text-primary">
                                        <FormControl>
                                          <Checkbox
                                            checked={checked}
                                            onCheckedChange={(value) =>
                                              field.onChange(
                                                value
                                                  ? [...field.value, area]
                                                  : field.value.filter((a) => a !== area),
                                              )
                                            }
                                          />
                                        </FormControl>
                                        {area}
                                      </FormLabel>
                                    </FormItem>
                                  );
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="timeEater"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Was ist aktuell der größte Zeitfresser im Unternehmen?</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={3}
                              placeholder="z. B. E-Mails sortieren und beantworten, Angebote schreiben, Dokumente ablegen …"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="existingAiTools"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>Gibt es bereits AI-Tools im Einsatz?</FormLabel>
                            <FormControl>
                              <Input placeholder="z. B. ChatGPT, Copilot – oder: noch keine" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="privacyImportance"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Wie wichtig ist Datenschutz / Speicherung in der EU? *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Bitte wählen" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {PRIVACY_LEVELS.map((p) => (
                                  <SelectItem key={p} value={p}>
                                    {p}
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
                          <FormLabel>Nachricht / Freitext</FormLabel>
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
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-gradient-brand text-base shadow-brand-glow transition-transform hover:scale-[1.01] sm:w-auto sm:px-10"
                  >
                    <Send className="mr-1 h-4 w-4" />
                    {form.formState.isSubmitting ? "Wird gesendet …" : "Kostenlosen AI-Check anfragen"}
                  </Button>
                  <p className="max-w-md text-center text-xs text-muted-foreground">
                    Ihre Angaben werden vertraulich behandelt und ausschließlich zur Vorbereitung
                    des Erstgesprächs genutzt. Kostenlos und unverbindlich.
                  </p>
                </div>
              </form>
            </Form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
