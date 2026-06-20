const _jsxFileName = "src\\components\\home\\PrinciplesSection.tsx";

import { SectionHeading } from "./SectionHeading";





export function PrinciplesSection({
  principles,
}) {
  return (
    React.createElement('section', {
      id: "principles",
      'aria-labelledby': "principles-title",
      className: "section-space", __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}

      , React.createElement('div', { className: "grid-shell space-y-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
        , React.createElement(SectionHeading, {
          eyebrow: "Approach",
          title: "Built like a maintainable product surface, not a decorative landing page"          ,
          description: "This homepage is organized around stable layout primitives, typed content, and interactions that make decision-making easier for employers."                 , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
        )

        , React.createElement('div', { className: "grid gap-5 lg:grid-cols-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
          , principles.map((principle) => (
            React.createElement('article', { key: principle.title, 'data-card': true, className: "p-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}
              , React.createElement('h3', { className: "text-xl font-semibold text-white"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 28}}
                , principle.title
              )
              , React.createElement('p', { className: "mt-4 text-base leading-7 text-slate-300"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
                , principle.description
              )
            )
          ))
        )
      )
    )
  );
}
