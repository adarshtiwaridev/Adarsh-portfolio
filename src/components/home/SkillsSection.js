const _jsxFileName = "src\\components\\home\\SkillsSection.tsx";import { motion } from "framer-motion";







export function SkillsSection({ categories }) {
  return (
    React.createElement('section', { id: "skills", 'aria-labelledby': "skills-title", className: "section-space", __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
      , React.createElement('div', { className: "grid-shell space-y-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
        , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
          , React.createElement('p', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, "Tech stack"

          )
          , React.createElement('h2', { id: "skills-title", className: "text-3xl font-semibold tracking-tight text-white sm:text-4xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}, "Skills organized by discipline and delivery strength."

          )
          , React.createElement('p', { className: "max-w-3xl text-base leading-7 text-slate-300 sm:text-lg"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}, "I focus on strong foundations, modern tools, and the systems knowledge that supports production-grade engineering."

          )
        )

        , React.createElement('div', { className: "grid gap-6 lg:grid-cols-2 xl:grid-cols-3"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
          , categories.map((category, index) => (
            React.createElement(motion.div, {
              key: category.label,
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.25 },
              transition: { duration: 0.45, delay: index * 0.06 },
              className: "rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-6 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}

              , React.createElement('div', { className: "flex items-center justify-between gap-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}
                  , React.createElement('h3', { className: "text-xl font-semibold text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}, category.label)
                  , React.createElement('p', { className: "mt-2 text-sm leading-6 text-slate-400"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, category.details)
                )
                , React.createElement('span', { className: "rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}
                  , category.skills.length, " skills"
                )
              )

              , React.createElement('div', { className: "mt-6 space-y-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}
                , category.skills.map((skill) => (
                  React.createElement('div', { key: skill.name, className: "space-y-2", __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}
                    , React.createElement('div', { className: "flex items-center justify-between gap-4 text-sm font-medium text-slate-100"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 48}}
                      , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 49}}, skill.name)
                      , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}, skill.level, "%")
                    )
                    , React.createElement('div', { className: "h-2 overflow-hidden rounded-full bg-white/10"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
                      , React.createElement('div', {
                        className: "h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-sky-400 transition-all"      ,
                        style: { width: `${skill.level}%` }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
                      )
                    )
                  )
                ))
              )
            )
          ))
        )
      )
    )
  );
}
