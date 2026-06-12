import type { Profile, SocialLink } from "@/types/home";

type ContactSectionProps = {
  profile: Profile;
  socialLinks: SocialLink[];
};

export function ContactSection({
  profile,
  socialLinks,
}: ContactSectionProps) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-space">
      <div className="grid-shell">
        <div
          data-card
          className="grid gap-8 overflow-hidden p-8 sm:p-10 lg:grid-cols-[1.3fr_0.7fr]"
        >
          <div className="space-y-5">
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300">
              Contact
            </p>
            <h2
              id="contact-title"
              className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Looking for an engineer who cares about structure as much as polish.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              If your team needs a frontend engineer who thinks in systems, ships
              responsibly, and can raise the baseline of product quality, let’s talk.
            </p>
          </div>

          <aside className="space-y-5">
            <a
              href={`mailto:${profile.email}`}
              className="block rounded-[1.5rem] border border-white/12 bg-white/6 p-5 transition hover:border-cyan-400/60"
            >
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-slate-400">
                Email
              </p>
              <p className="mt-3 text-lg font-semibold text-white">{profile.email}</p>
            </a>

            <div className="rounded-[1.5rem] border border-white/12 bg-white/6 p-5">
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-slate-400">
                Elsewhere
              </p>
              <ul className="mt-4 flex flex-wrap gap-3" aria-label="External profiles">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-white/12 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/60"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
