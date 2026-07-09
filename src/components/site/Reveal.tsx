import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "fade" | "scale";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Verzögerung in ms für gestaffelte Animationen. */
  delay?: number;
  /** Bewegungsvariante. */
  variant?: RevealVariant;
  /** Nur einmal einblenden (default) oder bei jedem Sichtbarwerden wieder animieren. */
  once?: boolean;
}

const variantClass: Record<RevealVariant, string> = {
  up: "reveal",
  fade: "reveal-fade",
  scale: "reveal-scale",
};

/** Blendet Inhalte hochwertig ein, sobald sie in den Viewport scrollen. */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          if (once) observer.disconnect();
        } else if (!once) {
          el.classList.remove("is-visible");
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn(variantClass[variant], className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
