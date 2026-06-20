"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";







export function CaseStudiesSection({ caseStudies }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    React.createElement('section', { id: "case-studies", 'aria-labelledby': "case-studies-title", className: "section-space", __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
      , React.createElement('div', { className: "grid-shell space-y-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
        , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
          , React.createElement('p', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}, "Case studies"

          )
          , React.createElement('h2', { id: "case-studies-title", className: "text-3xl font-semibold tracking-tight text-white sm:text-4xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}, "Deeper stories for the projects that matter most."

          )
          , React.createElement('p', { className: "max-w-3xl text-base leading-7 text-slate-300 sm:text-lg"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}, "Every major project includes the problem, architecture, solution, and results so recruiters can understand the engineering value."

          )
        )

        , React.createElement('div', { className: "grid gap-6 xl:grid-cols-[0.95fr_1.05fr]"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
          , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
            , caseStudies.map((study, index) => (
              React.createElement('button', {
                key: study.projectName,
                type: "button",
                onClick: () => setActiveIndex(index),
                className: `block w-full rounded-[1.6rem] border px-5 py-4 text-left transition ${
                  activeIndex === index
                    ? "border-cyan-400/50 bg-[color:var(--surface-strong)]/90"
                    : "border-white/10 bg-[color:var(--surface)]/80 hover:border-white/20 hover:bg-[color:var(--surface)]/90"
                }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}

                , React.createElement('div', { className: "flex items-center justify-between gap-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}
                  , React.createElement('span', { className: "text-base font-semibold text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}, study.projectName)
                  , React.createElement('span', { className: "text-sm text-slate-400" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 45}}, "View details" )
                )
                , React.createElement('p', { className: "mt-2 text-sm leading-6 text-slate-300 line-clamp-2"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 47}}
                  , study.problem
                )
              )
            ))
          )

          , React.createElement(AnimatePresence, { mode: "wait", __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}
            , React.createElement(motion.div, {
              key: _nullishCoalesce(_optionalChain([caseStudies, 'access', _ => _[activeIndex], 'optionalAccess', _2 => _2.projectName]), () => ( "study")),
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              transition: { duration: 0.45 },
              className: "rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-8 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}

              , React.createElement('div', { className: "space-y-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}
                , React.createElement('div', { className: "flex flex-wrap items-center gap-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 64}}
                  , React.createElement('span', { className: "rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 65}}
                    , _optionalChain([caseStudies, 'access', _3 => _3[activeIndex], 'optionalAccess', _4 => _4.projectName])
                  )
                )
                , React.createElement('div', { className: "grid gap-6 md:grid-cols-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 69}}
                  , React.createElement('article', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
                    , React.createElement('h3', { className: "text-xl font-semibold text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}, "Problem")
                    , React.createElement('p', { className: "mt-3 text-slate-300" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 72}}, _optionalChain([caseStudies, 'access', _5 => _5[activeIndex], 'optionalAccess', _6 => _6.problem]))
                  )
                  , React.createElement('article', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}
                    , React.createElement('h3', { className: "text-xl font-semibold text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 75}}, "Architecture")
                    , React.createElement('p', { className: "mt-3 text-slate-300" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}, _optionalChain([caseStudies, 'access', _7 => _7[activeIndex], 'optionalAccess', _8 => _8.architecture]))
                  )
                )
                , React.createElement('div', { className: "grid gap-6 md:grid-cols-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 79}}
                  , React.createElement('article', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 80}}
                    , React.createElement('h3', { className: "text-lg font-semibold text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}, "Features")
                    , React.createElement('ul', { className: "mt-3 space-y-2 text-slate-300"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}
                      , _optionalChain([caseStudies, 'access', _9 => _9[activeIndex], 'optionalAccess', _10 => _10.features, 'access', _11 => _11.map, 'call', _12 => _12((item) => (
                        React.createElement('li', { key: item, className: "flex items-start gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 84}}
                          , React.createElement('span', { className: "mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}} )
                          , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}, item)
                        )
                      ))])
                    )
                  )
                  , React.createElement('article', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 91}}
                    , React.createElement('h3', { className: "text-lg font-semibold text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 92}}, "Challenges")
                    , React.createElement('ul', { className: "mt-3 space-y-2 text-slate-300"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}
                      , _optionalChain([caseStudies, 'access', _13 => _13[activeIndex], 'optionalAccess', _14 => _14.challenges, 'access', _15 => _15.map, 'call', _16 => _16((item) => (
                        React.createElement('li', { key: item, className: "flex items-start gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}
                          , React.createElement('span', { className: "mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}} )
                          , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 97}}, item)
                        )
                      ))])
                    )
                  )
                )
                , React.createElement('div', { className: "grid gap-6 md:grid-cols-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}
                  , React.createElement('article', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 104}}
                    , React.createElement('h3', { className: "text-lg font-semibold text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}, "Solution")
                    , React.createElement('p', { className: "mt-3 text-slate-300" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}, _optionalChain([caseStudies, 'access', _17 => _17[activeIndex], 'optionalAccess', _18 => _18.solution]))
                  )
                  , React.createElement('article', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}
                    , React.createElement('h3', { className: "text-lg font-semibold text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}}, "Results")
                    , React.createElement('ul', { className: "mt-3 space-y-2 text-slate-300"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}
                      , _optionalChain([caseStudies, 'access', _19 => _19[activeIndex], 'optionalAccess', _20 => _20.results, 'access', _21 => _21.map, 'call', _22 => _22((result) => (
                        React.createElement('li', { key: result, className: "flex items-start gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 112}}
                          , React.createElement('span', { className: "mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 113}} )
                          , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}, result)
                        )
                      ))])
                    )
                  )
                )
                , React.createElement('article', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}
                  , React.createElement('h3', { className: "text-lg font-semibold text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 121}}, "Learning")
                  , React.createElement('ul', { className: "mt-3 space-y-2 text-slate-300"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}}
                    , _optionalChain([caseStudies, 'access', _23 => _23[activeIndex], 'optionalAccess', _24 => _24.learning, 'access', _25 => _25.map, 'call', _26 => _26((item) => (
                      React.createElement('li', { key: item, className: "flex items-start gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 124}}
                        , React.createElement('span', { className: "mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 125}} )
                        , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 126}}, item)
                      )
                    ))])
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}
