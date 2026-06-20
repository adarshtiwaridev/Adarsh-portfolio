const _jsxFileName = "src\\components\\home\\HeroSection.tsx"; function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }import Image from "next/image";
import { ArrowUpRight, Command, Download, Sparkles, Code2, Server, Database, Layers } from "lucide-react";
import { motion } from "framer-motion";

import { AmbientBackground } from "@/components/home/AmbientBackground";
import { SpotlightPanel } from "@/components/home/SpotlightPanel";










export function HeroSection({
  commandShortcut,
  onOpenCommandPalette,
  profile,
  proofPoints,
  socialLinks,
}) {
  return (
    React.createElement('header', {
      id: "top",
      'aria-labelledby': "hero-title",
      className: "section-space relative isolate overflow-hidden pt-12 sm:pt-20"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 25}}

      , React.createElement(AmbientBackground, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 30}} )

      , React.createElement('div', { className: "grid-shell relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 32}}
        , React.createElement('section', {
          'aria-label': "Hero introduction" ,
          className: "space-y-8 lg:space-y-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}

          , React.createElement('div', { className: "space-y-6", __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}
            , React.createElement(motion.p, {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              className: "hero-pill", __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}

              , profile.availability
            )
            , React.createElement('h1', {
              id: "hero-title",
              className: "max-w-5xl text-4xl font-semibold tracking-[-0.04em] text-[color:var(--text-strong)] sm:text-5xl lg:text-7xl"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}}

              , profile.name
              , React.createElement('span', { className: "hero-heading-accent mt-4 block"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}
                , profile.intro
              )
            )
            , React.createElement('p', { className: "max-w-2xl text-lg leading-8 text-[color:var(--text-muted)] sm:text-xl"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}
              , profile.summary
            )
          )

          , React.createElement('div', { className: "flex flex-wrap items-center gap-3"   , 'aria-label': "Tech stack badges"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}
            , _optionalChain([profile, 'access', _ => _.heroStack, 'optionalAccess', _2 => _2.map, 'call', _3 => _3((tech) => (
              React.createElement(motion.span, {
                key: tech,
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.45 },
                className: "rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-[color:var(--text-strong)] shadow-[0_12px_40px_rgba(0,0,0,0.08)]"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 62}}

                , tech
              )
            ))])
          )

          , React.createElement('div', { className: "flex flex-wrap items-center gap-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}
            , React.createElement('a', {
              href: "#projects",
              className: "hero-button-primary", __self: this, __source: {fileName: _jsxFileName, lineNumber: 75}}
, "View selected work"

              , React.createElement(ArrowUpRight, { className: "size-4", 'aria-hidden': "true", __self: this, __source: {fileName: _jsxFileName, lineNumber: 80}} )
            )
            , React.createElement('a', {
              href: profile.resumeHref,
              target: "_blank",
              rel: "noreferrer",
              className: "hero-button-secondary", __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}
, "Open resume"

              , React.createElement(Download, { className: "size-4", 'aria-hidden': "true", __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}} )
            )
            , React.createElement('button', {
              type: "button",
              onClick: onOpenCommandPalette,
              'aria-label': "Open command palette"  ,
              className: "hero-button-secondary", __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}}

              , React.createElement(Command, { className: "size-4", 'aria-hidden': "true", __self: this, __source: {fileName: _jsxFileName, lineNumber: 97}} ), "Explore with command palette"

              , React.createElement('span', { className: "kbd", __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}, commandShortcut)
            )
          )

          , React.createElement('dl', { className: "grid gap-4 sm:grid-cols-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}
            , proofPoints.map((item) => (
              React.createElement(SpotlightPanel, { key: item.label, className: "space-y-3 p-5" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}}
                , React.createElement('dt', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[color:var(--text-soft)]"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 106}}
                  , item.label
                )
                , React.createElement('dd', { className: "text-2xl font-semibold text-[color:var(--text-strong)]"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}}
                  , item.value
                )
                , React.createElement('p', { className: "text-sm leading-6 text-[color:var(--text-muted)]"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 112}}
                  , item.detail
                )
              )
            ))
          )
        )

        , React.createElement('aside', { 'aria-label': "Profile summary" , className: "space-y-5 lg:pl-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}
          , React.createElement(SpotlightPanel, { className: "hero-portrait-card overflow-hidden p-4 sm:p-5"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 121}}
            , React.createElement('div', { className: "relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-[color:var(--surface-muted)]"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}}
              , React.createElement(Image, {
                src: profile.portrait.src,
                alt: profile.portrait.alt,
                fill: true,
                priority: true,
                sizes: "(min-width: 1024px) 34vw, 90vw"   ,
                className: "object-cover", __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}
              )
              , React.createElement('div', { className: "hero-image-float", 'aria-hidden': "true", __self: this, __source: {fileName: _jsxFileName, lineNumber: 131}}
                , React.createElement('span', { className: "hero-tech-icon hero-tech-icon-1" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 132}}
                  , React.createElement(Code2, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 133}} )
                )
                , React.createElement('span', { className: "hero-tech-icon hero-tech-icon-2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 135}}
                  , React.createElement(Server, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 136}} )
                )
                , React.createElement('span', { className: "hero-tech-icon hero-tech-icon-3" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 138}}
                  , React.createElement(Database, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 139}} )
                )
                , React.createElement('span', { className: "hero-tech-icon hero-tech-icon-4" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 141}}
                  , React.createElement(Layers, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 142}} )
                )
              )
              , React.createElement('div', { className: "hero-image-shine", __self: this, __source: {fileName: _jsxFileName, lineNumber: 145}} )
            )
          )

          , React.createElement(SpotlightPanel, { className: "space-y-5 p-5 sm:p-6"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 149}}
            , React.createElement('div', { className: "flex items-center justify-between gap-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 150}}
              , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 151}}
                , React.createElement('p', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-[color:var(--text-soft)]"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 152}}, "Base"

                )
                , React.createElement('p', { className: "mt-2 text-lg text-[color:var(--text-strong)]"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 155}}
                  , profile.location
                )
              )
              , React.createElement('div', { className: "hero-status-indicator", 'aria-hidden': "true", __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}} )
            )

            , React.createElement('div', { className: "rounded-[1.4rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-muted)]/70 p-4"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 162}}
              , React.createElement('div', { className: "flex items-center gap-3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 163}}
                , React.createElement(Sparkles, { className: "size-4 text-[color:var(--accent-strong)]" , 'aria-hidden': "true", __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}} )
                , React.createElement('p', { className: "text-sm font-medium text-[color:var(--text-strong)]"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 165}}, "Premium interactions, production-grade structure, recruiter-first storytelling."

                )
              )
            )

            , React.createElement('ul', { className: "flex flex-wrap gap-3"  , 'aria-label': "Social links" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 171}}
              , socialLinks.map((link) => (
                React.createElement('li', { key: link.label, __self: this, __source: {fileName: _jsxFileName, lineNumber: 173}}
                  , React.createElement('a', {
                    href: link.href,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hero-social-chip", __self: this, __source: {fileName: _jsxFileName, lineNumber: 174}}

                    , link.label
                  )
                )
              ))
            )
          )
        )
      )
    )
  );
}
