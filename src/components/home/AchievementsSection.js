const _jsxFileName = "src\\components\\home\\AchievementsSection.tsx";import { motion } from "framer-motion";







export function AchievementsSection({ achievements }) {
  return (
    React.createElement('section', { id: "achievements", 'aria-labelledby': "achievements-title", className: "section-space", __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
      , React.createElement('div', { className: "grid-shell space-y-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
        , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
          , React.createElement('p', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, "Achievements"

          )
          , React.createElement('h2', { id: "achievements-title", className: "text-3xl font-semibold tracking-tight text-white sm:text-4xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}, "Track record of meaningful engineering progress."

          )
          , React.createElement('p', { className: "max-w-3xl text-base leading-7 text-slate-300 sm:text-lg"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}, "These metrics reflect sustained effort in development, learning, and product delivery."

          )
        )

        , React.createElement('div', { className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-3"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
          , achievements.map((achievement, index) => (
            React.createElement(motion.article, {
              key: achievement.label,
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.2 },
              transition: { duration: 0.45, delay: index * 0.05 },
              className: "rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-6 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}

              , React.createElement('p', { className: "text-sm uppercase tracking-[0.28em] text-[color:var(--text-soft)]"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, achievement.label)
              , React.createElement('p', { className: "mt-4 text-4xl font-semibold text-white"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, achievement.value)
              , React.createElement('p', { className: "mt-3 text-sm leading-6 text-slate-300"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}, achievement.detail)
            )
          ))
        )
      )
    )
  );
}
