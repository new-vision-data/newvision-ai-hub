import { forwardRef } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  hash: string;
  onNavigate?: () => void;
}

/**
 * Internal link to a section on the homepage.
 * Works from any route: navigates to "/" and scrolls to the given hash.
 */
export const SectionLink = forwardRef<HTMLAnchorElement, Props>(
  ({ hash, onNavigate, onClick, children, ...rest }, ref) => {
    const pathname = useRouterState({ select: (s) => s.location.pathname });
    const isHome = pathname === "/";

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      onClick?.(e);
      if (e.defaultPrevented) return;
      if (isHome) {
        const el = document.getElementById(hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", `#${hash}`);
        }
      }
      onNavigate?.();
    };

    return (
      <Link
        ref={ref}
        to="/"
        hash={hash}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </Link>
    );
  },
);
SectionLink.displayName = "SectionLink";
