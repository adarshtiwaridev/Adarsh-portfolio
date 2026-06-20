const _jsxFileName = "src\\components\\home\\AboutSection.tsx";import { motion } from "framer-motion";







export function AboutSection({ aboutItems }) {
  return (
    React.createElement('section', { id: "about", 'aria-labelledby': "about-title", className: "section-space", __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
      , React.createElement('div', { className: "grid-shell space-y-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
        , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
          , React.createElement('p', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, "About Me"

          )
          , React.createElement('h2', { id: "about-title", className: "text-3xl font-semibold tracking-tight text-white sm:text-4xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}, "A focused developer narrative that connects intent, craft, and impact."

          )
          , React.createElement('p', { className: "max-w-3xl text-base leading-7 text-slate-300 sm:text-lg"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}, "I translate business requirements into stable product surfaces, build systems engineers can maintain, and keep user experience grounded in clarity."

          )
        )

        , React.createElement('div', { className: "grid gap-6 lg:grid-cols-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
          , aboutItems.map((item, index) => (
            React.createElement(motion.article, {
              key: `${item.title}-${index}`,
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.2 },
              transition: { duration: 0.5, delay: index * 0.08 },
              className: "group rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-6 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}

              , React.createElement('div', { className: "flex items-center justify-between gap-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
                , React.createElement('p', { className: "text-sm uppercase tracking-[0.28em] text-[color:var(--text-soft)]"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}
                  , item.category
                )
                , item.date ? (
                  React.createElement('p', { className: "rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-slate-200"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}
                    , item.date
                  )
                ) : null
              )
              , React.createElement('h3', { className: "mt-4 text-xl font-semibold text-white"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}, item.title)
              , React.createElement('p', { className: "mt-3 text-base leading-7 text-slate-300"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}}, item.description)
            )
          ))
        )
      )
    )
  );
}
