import { useEffect, useRef } from "react";

import type { CommandAction } from "@/types/home";

type CommandPaletteProps = {
  activeIndex: number;
  filteredActions: CommandAction[];
  isOpen: boolean;
  onClose: () => void;
  onQueryChange: (value: string) => void;
  onSelect: (action: CommandAction) => void;
  query: string;
  setActiveIndex: (index: number) => void;
};

export function CommandPalette({
  activeIndex,
  filteredActions,
  isOpen,
  onClose,
  onQueryChange,
  onSelect,
  query,
  setActiveIndex,
}: CommandPaletteProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    inputRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-hidden={!isOpen}
      className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/72 px-4 pt-[12vh] backdrop-blur-md"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="command-palette-title"
        className="w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/12 bg-[rgba(10,17,30,0.96)] shadow-[0_28px_120px_rgba(2,8,23,0.72)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-white/10 px-5 py-4">
          <p
            id="command-palette-title"
            className="font-[var(--font-mono)] text-xs uppercase tracking-[0.28em] text-cyan-300"
          >
            Command Palette
          </p>
          <label htmlFor="command-search" className="sr-only">
            Search command palette
          </label>
          <input
            id="command-search"
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search navigation, resume, GitHub..."
            className="mt-4 w-full bg-transparent text-lg text-white outline-none placeholder:text-slate-500"
          />
        </div>

        <ul role="listbox" aria-label="Command results" className="max-h-[50vh] overflow-y-auto p-2">
          {filteredActions.length === 0 ? (
            <li className="px-4 py-8 text-sm text-slate-400">
              No matches. Try “projects”, “resume”, or “contact”.
            </li>
          ) : (
            filteredActions.map((action, index) => (
              <li key={action.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={activeIndex === index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => onSelect(action)}
                  className={`flex w-full items-start justify-between gap-4 rounded-2xl px-4 py-4 text-left transition ${
                    activeIndex === index
                      ? "bg-cyan-300/12 text-white"
                      : "text-slate-200 hover:bg-white/6"
                  }`}
                >
                  <span className="space-y-1">
                    <span className="block font-medium">{action.label}</span>
                    <span className="block text-sm text-slate-400">
                      {action.description}
                    </span>
                  </span>
                  <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-slate-500">
                    {action.kind}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
