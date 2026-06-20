const _jsxFileName = "src\\components\\home\\ProcessSection.tsx";import { motion } from "framer-motion";







export function ProcessSection({ steps }) {
  return (
    React.createElement('section', { id: "process", 'aria-labelledby': "process-title", className: "section-space", __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
      , React.createElement('div', { className: "grid-shell space-y-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
        , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
          , React.createElement('p', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, "Development process"

          )
          , React.createElement('h2', { id: "process-title", className: "text-3xl font-semibold tracking-tight text-white sm:text-4xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}, "A disciplined workflow from discovery to deployment."

          )
          , React.createElement('p', { className: "max-w-3xl text-base leading-7 text-slate-300 sm:text-lg"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}, "I follow a structured process so every feature is built with clarity, quality, and measurable business purpose."

          )
        )

        , React.createElement('div', { className: "grid gap-6 xl:grid-cols-7"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
          , steps.map((step, index) => (
            React.createElement(motion.article, {
              key: step.title,
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.2 },
              transition: { duration: 0.45, delay: index * 0.05 },
              className: "rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-6 text-center shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}

              , React.createElement('span', { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-200"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
                , index + 1
              )
              , React.createElement('h3', { className: "mt-4 text-lg font-semibold text-white"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, step.title)
              , React.createElement('p', { className: "mt-3 text-sm leading-6 text-slate-300"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}, step.description)
            )
          ))
        )
      )
    )
  );
}
