const _jsxFileName = "src\\components\\home\\CommandPalette.tsx"; function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }import { useEffect, useRef } from "react";














export function CommandPalette({
  activeIndex,
  filteredActions,
  isOpen,
  onClose,
  onQueryChange,
  onSelect,
  query,
  setActiveIndex,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    _optionalChain([inputRef, 'access', _ => _.current, 'optionalAccess', _2 => _2.focus, 'call', _3 => _3()]);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    React.createElement('div', {
      'aria-hidden': !isOpen,
      className: "fixed inset-0 z-50 flex items-start justify-center bg-slate-950/72 px-4 pt-[12vh] backdrop-blur-md"         ,
      onClick: onClose, __self: this, __source: {fileName: _jsxFileName, lineNumber: 41}}

      , React.createElement('div', {
        role: "dialog",
        'aria-modal': "true",
        'aria-labelledby': "command-palette-title",
        className: "w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/12 bg-[rgba(10,17,30,0.96)] shadow-[0_28px_120px_rgba(2,8,23,0.72)]"       ,
        onClick: (event) => event.stopPropagation(), __self: this, __source: {fileName: _jsxFileName, lineNumber: 46}}

        , React.createElement('div', { className: "border-b border-white/10 px-5 py-4"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 53}}
          , React.createElement('p', {
            id: "command-palette-title",
            className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.28em] text-cyan-300"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}
, "Command Palette"

          )
          , React.createElement('label', { htmlFor: "command-search", className: "sr-only", __self: this, __source: {fileName: _jsxFileName, lineNumber: 60}}, "Search command palette"

          )
          , React.createElement('input', {
            id: "command-search",
            ref: inputRef,
            type: "search",
            value: query,
            onChange: (event) => onQueryChange(event.target.value),
            placeholder: "Search navigation, resume, GitHub..."   ,
            className: "mt-4 w-full bg-transparent text-lg text-white outline-none placeholder:text-slate-500"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 63}}
          )
        )

        , React.createElement('ul', { role: "listbox", 'aria-label': "Command results" , className: "max-h-[50vh] overflow-y-auto p-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}}
          , filteredActions.length === 0 ? (
            React.createElement('li', { className: "px-4 py-8 text-sm text-slate-400"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 76}}, "No matches. Try “projects”, “resume”, or “contact”."

            )
          ) : (
            filteredActions.map((action, index) => (
              React.createElement('li', { key: action.id, __self: this, __source: {fileName: _jsxFileName, lineNumber: 81}}
                , React.createElement('button', {
                  type: "button",
                  role: "option",
                  'aria-selected': activeIndex === index,
                  onMouseEnter: () => setActiveIndex(index),
                  onClick: () => onSelect(action),
                  className: `flex w-full items-start justify-between gap-4 rounded-2xl px-4 py-4 text-left transition ${
                    activeIndex === index
                      ? "bg-cyan-300/12 text-white"
                      : "text-slate-200 hover:bg-white/6"
                  }`, __self: this, __source: {fileName: _jsxFileName, lineNumber: 82}}

                  , React.createElement('span', { className: "space-y-1", __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}}
                    , React.createElement('span', { className: "block font-medium" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}}, action.label)
                    , React.createElement('span', { className: "block text-sm text-slate-400"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 96}}
                      , action.description
                    )
                  )
                  , React.createElement('span', { className: "font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-slate-500"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 100}}
                    , action.kind
                  )
                )
              )
            ))
          )
        )
      )
    )
  );
}
