const _jsxFileName = "src\\components\\home\\ExperienceSection.tsx";

import { SectionHeading } from "./SectionHeading";





export function ExperienceSection({ timeline }) {
  return (
    React.createElement('section', {
      id: "experience",
      'aria-labelledby': "experience-title",
      className: "section-space", __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}

      , React.createElement('div', { className: "grid-shell space-y-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
        , React.createElement(SectionHeading, {
          eyebrow: "Experience",
          title: "Signals that this portfolio was shaped by real delivery work"         ,
          description: "The goal is to communicate readiness for engineering teams: clear ownership, production habits, and increasing product responsibility."                , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
        )

        , React.createElement('ol', { className: "grid gap-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}
          , timeline.map((item) => (
            React.createElement('li', { key: `${item.company}-${item.period}`, 'data-card': true, className: "p-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
              , React.createElement('div', { className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
                , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
                  , React.createElement('h3', { className: "text-xl font-semibold text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
                    , item.role, " · "  , item.company
                  )
                  , React.createElement('p', { className: "mt-2 text-sm text-slate-400"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
                    , item.period, " · "  , item.location
                  )
                )

                , React.createElement('ul', { className: "max-w-2xl space-y-3 text-sm leading-7 text-slate-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}
                  , item.outcomes.map((outcome) => (
                    React.createElement('li', { key: outcome, className: "flex gap-3" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
                      , React.createElement('span', { className: "mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}} )
                      , React.createElement('span', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}, outcome)
                    )
                  ))
                )
              )
            )
          ))
        )
      )
    )
  );
}
