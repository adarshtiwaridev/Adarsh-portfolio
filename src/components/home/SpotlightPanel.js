const _jsxFileName = "src\\components\\home\\SpotlightPanel.tsx";

import { useSpotlight } from "@/hooks/use-spotlight";
import { cn } from "@/lib/utils";





export function SpotlightPanel({
  children,
  className,
  ...props
}) {
  const spotlight = useSpotlight();

  return (
    React.createElement('div', {
      ...props,
      ...spotlight,
      className: cn("spotlight-panel", className), __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}

      , React.createElement('div', { className: "relative z-10" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 23}}, children)
    )
  );
}
