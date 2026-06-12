import type { HTMLAttributes, ReactNode } from "react";

import { useSpotlight } from "@/hooks/use-spotlight";
import { cn } from "@/lib/utils";

type SpotlightPanelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function SpotlightPanel({
  children,
  className,
  ...props
}: SpotlightPanelProps) {
  const spotlight = useSpotlight<HTMLDivElement>();

  return (
    <div
      {...props}
      {...spotlight}
      className={cn("spotlight-panel", className)}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
