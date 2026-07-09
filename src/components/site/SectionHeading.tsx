import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** Zweiter, kursiver Serif-Akzent im Titel, z. B. "wirklich hilft". */
  titleAccent?: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 max-w-2xl md:mb-20",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <Reveal variant="fade">
          <p
            className={cn(
              "mb-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-accent uppercase",
              align === "center" ? "justify-center" : "",
            )}
          >
            <span aria-hidden className="inline-block h-px w-6 bg-accent/60" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="text-3xl leading-[1.1] font-semibold text-primary md:text-[2.6rem]">
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className="font-serif text-[1.15em] font-normal italic text-gradient-brand">
                {titleAccent}
              </span>
            </>
          )}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
