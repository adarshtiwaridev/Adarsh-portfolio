type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
