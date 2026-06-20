const _jsxFileName = "src\\components\\home\\TestimonialsSection.tsx";import { motion } from "framer-motion";







export function TestimonialsSection({ testimonials }) {
  return (
    React.createElement('section', { id: "testimonials", 'aria-labelledby': "testimonials-title", className: "section-space", __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
      , React.createElement('div', { className: "grid-shell space-y-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
        , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
          , React.createElement('p', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, "Testimonials"

          )
          , React.createElement('h2', { id: "testimonials-title", className: "text-3xl font-semibold tracking-tight text-white sm:text-4xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}, "Feedback from collaborators and product partners."

          )
          , React.createElement('p', { className: "max-w-3xl text-base leading-7 text-slate-300 sm:text-lg"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}, "First-hand context from people who reviewed the work and experienced the outcomes."

          )
        )

        , React.createElement('div', { className: "grid gap-6 sm:grid-cols-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
          , testimonials.map((testimonial, index) => (
            React.createElement(motion.article, {
              key: `${testimonial.author}-${index}`,
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.2 },
              transition: { duration: 0.45, delay: index * 0.08 },
              className: "rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-8 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}

              , React.createElement('p', { className: "text-base leading-8 text-slate-200"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, "“", testimonial.quote, "”")
              , React.createElement('div', { className: "mt-6 border-t border-white/10 pt-5"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}
                , React.createElement('p', { className: "font-semibold text-white" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}, testimonial.author)
                , React.createElement('p', { className: "text-sm text-slate-400" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, testimonial.role, ", " , testimonial.company)
              )
            )
          ))
        )
      )
    )
  );
}
