const _jsxFileName = "src\\components\\home\\CertificationsSection.tsx";import { motion } from "framer-motion";







export function CertificationsSection({ certifications }) {
  return (
    React.createElement('section', { id: "certifications", 'aria-labelledby': "certifications-title", className: "section-space", __self: this, __source: {fileName: _jsxFileName, lineNumber: 11}}
      , React.createElement('div', { className: "grid-shell space-y-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 12}}
        , React.createElement('div', { className: "space-y-4", __self: this, __source: {fileName: _jsxFileName, lineNumber: 13}}
          , React.createElement('p', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-cyan-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 14}}, "Certifications"

          )
          , React.createElement('h2', { id: "certifications-title", className: "text-3xl font-semibold tracking-tight text-white sm:text-4xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}, "Recognized credentials that support the product story."

          )
          , React.createElement('p', { className: "max-w-3xl text-base leading-7 text-slate-300 sm:text-lg"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}, "Verified industry certifications show the professional practices and discipline I bring to engineering work."

          )
        )

        , React.createElement('div', { className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-3"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}
          , certifications.map((cert) => (
            React.createElement(motion.a, {
              key: cert.title,
              href: cert.href,
              target: "_blank",
              rel: "noreferrer",
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.2 },
              transition: { duration: 0.45 },
              className: "group rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)]/80 p-6 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/40"          , __self: this, __source: {fileName: _jsxFileName, lineNumber: 27}}

              , React.createElement('div', { className: "aspect-[4/3] overflow-hidden rounded-3xl bg-slate-950/60"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
                , React.createElement('img', { src: cert.image, alt: cert.title, className: "h-full w-full object-cover"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}} )
              )
              , React.createElement('div', { className: "mt-5", __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}
                , React.createElement('p', { className: "text-sm uppercase tracking-[0.24em] text-[color:var(--text-soft)]"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 42}}, cert.issuer)
                , React.createElement('h3', { className: "mt-3 text-xl font-semibold text-white"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}}, cert.title)
                , React.createElement('p', { className: "mt-2 text-sm leading-6 text-slate-300"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 44}}, cert.date)
              )
            )
          ))
        )
      )
    )
  );
}
