const _jsxFileName = "src\\components\\home\\ProjectsSection.tsx";

import { SectionHeading } from "./SectionHeading";





export function ProjectsSection({ projects }) {
  return (
    React.createElement('section', { id: "projects", 'aria-labelledby': "projects-title", className: "section-space", __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
      , React.createElement('div', { className: "grid-shell space-y-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
        , React.createElement(SectionHeading, {
          eyebrow: "Selected Work" ,
          title: "Project stories framed around engineering judgment"     ,
          description: "Each card emphasizes why the work mattered, not just which framework was used. That makes the homepage feel more senior and more credible."                      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
        )

        , React.createElement('div', { className: "grid gap-5 lg:grid-cols-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
          , projects.map((project) => (
            React.createElement('article', {
              key: project.name,
              'data-card': true,
              className: "group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35"        , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}

              , React.createElement('div', { className: "flex items-start justify-between gap-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 26}}
                , React.createElement('h3', { className: "text-xl font-semibold text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}, project.name)
                , React.createElement('span', { className: "rounded-full border border-white/12 px-3 py-1 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-cyan-200"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}, "Live"

                )
              )

              , React.createElement('p', { className: "mt-4 text-base leading-7 text-slate-300"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
                , project.summary
              )
              , React.createElement('p', { className: "mt-4 text-sm leading-6 text-slate-400"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}
                , project.impact
              )

              , React.createElement('ul', { className: "mt-6 flex flex-wrap gap-2"   , 'aria-label': `${project.name} stack`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 40}}
                , project.stack.map((item) => (
                  React.createElement('li', {
                    key: item,
                    className: "rounded-full bg-white/6 px-3 py-1 text-sm text-slate-200"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}

                    , item
                  )
                ))
              )

              , React.createElement('div', { className: "mt-8 flex flex-wrap gap-3"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}
                , React.createElement('a', {
                  href: project.href,
                  target: project.href.startsWith("http") ? "_blank" : undefined,
                  rel: project.href.startsWith("http") ? "noreferrer" : undefined,
                  className: "inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}
, "View project"

                )
                , project.repoHref ? (
                  React.createElement('a', {
                    href: project.repoHref,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex items-center rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/60"           , __self: this, __source: {fileName: _jsxFileName, lineNumber: 61}}
, "View source"

                  )
                ) : null
              )
            )
          ))
        )
      )
    )
  );
}
