import type { PropsWithChildren } from "react";

import type { NavItem } from "@/types/home";

type SiteShellProps = PropsWithChildren<{
  navigation: NavItem[];
  onOpenCommandPalette: () => void;
}>;

export function SiteShell({
  children,
  navigation,
  onOpenCommandPalette,
}: SiteShellProps) {
  return (
    <div className="min-h-screen">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="shell-header sticky top-0 z-40 backdrop-blur-xl">
        <div className="grid-shell flex h-18 items-center justify-between gap-6">
          <a
            href="#main-content"
            className="font-[var(--font-mono)] text-sm uppercase tracking-[0.24em] text-[color:var(--text-strong)]"
          >
            AT / Portfolio
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[color:var(--text-muted)] transition-all duration-500 ease-in-out hover:text-[color:var(--text-strong)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={onOpenCommandPalette}
            aria-label="Open command palette"
            className="hero-button-secondary text-sm"
          >
            <span>Command Menu</span>
            <span className="kbd">Ctrl K</span>
          </button>
        </div>
      </header>

      {children}

      <footer className="shell-footer py-8">
        <div className="grid-shell flex flex-col gap-3 text-sm text-[color:var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
          <p>Designed as a production-grade homepage system, not a one-off mockup.</p>
          <p className="font-[var(--font-mono)] uppercase tracking-[0.18em]">
            Semantic · Typed · Keyboard-first
          </p>
        </div>
      </footer>
    </div>
  );
}
