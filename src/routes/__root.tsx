import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "Pv_vM0MN3OUGhWqTbY-Pmf-BsKvp5N-1Wvp4VGn4kF0" },
      { title: "NewVisionData GmbH | AI-Beratung für den Mittelstand" },
      {
        name: "description",
        content:
          "AI- und Automatisierungslösungen für den Mittelstand. Herstellerunabhängig, DSGVO-bewusst, praxisnah.",
      },
      { name: "author", content: "NewVisionData GmbH" },
      {
        property: "og:title",
        content: "NewVisionData GmbH | AI-Beratung für den Mittelstand",
      },
      {
        property: "og:description",
        content:
          "AI- und Automatisierungslösungen für den Mittelstand. Herstellerunabhängig, DSGVO-bewusst, praxisnah.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "NewVisionData GmbH" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:url", content: "https://www.newvisiondata.de/" },
      { property: "og:image", content: "https://www.newvisiondata.de/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "NewVisionData GmbH – AI-Beratung für den Mittelstand" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "NewVisionData GmbH | AI-Beratung für den Mittelstand" },
      {
        name: "twitter:description",
        content:
          "AI- und Automatisierungslösungen für den Mittelstand. Herstellerunabhängig, DSGVO-bewusst, praxisnah.",
      },
      { name: "twitter:image", content: "https://www.newvisiondata.de/og-image.jpg" },
      { name: "twitter:image:alt", content: "NewVisionData GmbH – AI-Beratung für den Mittelstand" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-9RXRPRLJ4S",
        async: true,
      },
      {
        children: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-9RXRPRLJ4S');`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "NewVisionData GmbH",
          description:
            "AI- und Automatisierungslösungen für den deutschen Mittelstand: Beratung, Integration und Schulung.",
          telephone: "+49 15565000062",
          email: "info@newvisiondata.de",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Hügelstr. 11a",
            postalCode: "49179",
            addressLocality: "Ostercappeln",
            addressCountry: "DE",
          },
          founder: [
            { "@type": "Person", name: "Dennis Schmidt Gantikow" },
            { "@type": "Person", name: "Viola Schmidt Gantikow" },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
