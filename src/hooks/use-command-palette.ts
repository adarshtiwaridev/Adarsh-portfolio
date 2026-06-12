import { useCallback, useEffect, useMemo, useState } from "react";

import type { CommandAction } from "@/types/home";

type CommandPaletteState = {
  activeIndex: number;
  closePalette: () => void;
  filteredActions: CommandAction[];
  isOpen: boolean;
  openPalette: () => void;
  query: string;
  runAction: (action: CommandAction) => void;
  setActiveIndex: (index: number) => void;
  setQuery: (value: string) => void;
};

export function useCommandPalette(
  actions: CommandAction[]
): CommandPaletteState {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredActions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return actions;
    }

    return actions.filter((action) => {
      const haystack = [
        action.label,
        action.description,
        action.href,
        ...action.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [actions, query]);

  const closePalette = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const openPalette = useCallback(() => {
    setIsOpen(true);
  }, []);

  const setQueryValue = useCallback((value: string) => {
    setQuery(value);
    setActiveIndex(0);
  }, []);

  const runAction = useCallback((action: CommandAction) => {
    closePalette();

    if (action.kind === "anchor") {
      const target = document.querySelector(action.href);

      if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", action.href);
      }

      return;
    }

    window.open(
      action.href,
      "_blank",
      action.kind === "external" ? "noopener,noreferrer" : undefined
    );
  }, [closePalette]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((current) => !current);
        return;
      }

      if (!isOpen) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closePalette();
        return;
      }

      if (filteredActions.length === 0) {
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((current) => (current + 1) % filteredActions.length);
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((current) =>
          current === 0 ? filteredActions.length - 1 : current - 1
        );
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        runAction(filteredActions[activeIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, filteredActions, isOpen, closePalette, runAction]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return {
    activeIndex,
    closePalette,
    filteredActions,
    isOpen,
    openPalette,
    query,
    runAction,
    setActiveIndex,
    setQuery: setQueryValue,
  };
}
