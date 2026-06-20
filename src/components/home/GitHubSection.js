const _jsxFileName = "src\\components\\home\\GitHubSection.tsx";import { motion } from "framer-motion";







export function GitHubSection({ metrics }) {
  return (
    React.createElement('section', { id: "github", 'aria-labelledby': "github-title", className: "section-space", __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
      , React.createElement('div', { className: "grid-shell space-y-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
        , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
          , React.createElement('p', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, "GitHub"

          )
          , React.createElement('h2', { id: "github-title", className: "text-3xl font-semibold tracking-tight text-white sm:text-4xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}, "Contribution metrics that reflect consistent growth."

          )
          , React.createElement('p', { className: "max-w-3xl text-base leading-7 text-slate-300 sm:text-lg"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}, "Recruiters can quickly scan the active engineering signals I deliver across code, open source, and collaboration."

          )
        )

        , React.createElement('div', { className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
          , metrics.map((metric, index) => (
            React.createElement(motion.article, {
              key: metric.label,
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.2 },
              transition: { duration: 0.45, delay: index * 0.05 },
              className: "rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-6 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}

              , React.createElement('p', { className: "text-sm uppercase tracking-[0.28em] text-[color:var(--text-soft)]"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, metric.label)
              , React.createElement('p', { className: "mt-4 text-4xl font-semibold text-white"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, metric.value)
              , React.createElement('p', { className: "mt-3 text-sm leading-6 text-slate-300"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}, metric.description)
            )
          ))
        )
      )
    )
  );
}
