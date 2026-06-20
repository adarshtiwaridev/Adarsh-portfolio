const _jsxFileName = "src\\components\\home\\SectionHeading.tsx";





export function SectionHeading({
  description,
  eyebrow,
  title,
}) {
  return (
    React.createElement('div', { className: "max-w-3xl space-y-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
      , React.createElement('p', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}
        , eyebrow
      )
      , React.createElement('h2', { className: "text-3xl font-semibold tracking-tight text-white sm:text-4xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
        , title
      )
      , React.createElement('p', { className: "text-base leading-7 text-slate-300 sm:text-lg"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
        , description
      )
    )
  );
}
