const _jsxFileName = "src\\components\\home\\CodingProfilesSection.tsx";import { motion } from "framer-motion";







export function CodingProfilesSection({ profiles }) {
  return (
    React.createElement('section', { id: "coding-profiles", 'aria-labelledby': "coding-profiles-title", className: "section-space", __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
      , React.createElement('div', { className: "grid-shell space-y-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
        , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
          , React.createElement('p', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, "Coding profiles"

          )
          , React.createElement('h2', { id: "coding-profiles-title", className: "text-3xl font-semibold tracking-tight text-white sm:text-4xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}, "Performance on algorithm platforms and competitive programming."

          )
          , React.createElement('p', { className: "max-w-3xl text-base leading-7 text-slate-300 sm:text-lg"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}, "These profiles show my commitment to problem solving, technical growth, and interview readiness."

          )
        )

        , React.createElement('div', { className: "grid gap-6 sm:grid-cols-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
          , profiles.map((profile) => (
            React.createElement(motion.article, {
              key: profile.platform,
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.2 },
              transition: { duration: 0.45 },
              className: "rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-6 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}

              , React.createElement('div', { className: "flex items-center justify-between gap-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}
                  , React.createElement('p', { className: "text-lg font-semibold text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}, profile.platform)
                  , React.createElement('p', { className: "mt-2 text-sm text-slate-400"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, profile.badge)
                )
                , React.createElement('a', {
                  href: profile.url,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 transition hover:border-cyan-400/50"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}
, "View profile"

                )
              )

              , React.createElement('div', { className: "mt-6 space-y-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}
                , profile.stats.map((stat) => (
                  React.createElement('div', { key: stat.label, className: "flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
                    , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}, stat.label)
                    , React.createElement('span', { className: "font-semibold text-white" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}, stat.value)
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
