export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="ambient-canvas">
      <span className="ambient-blob ambient-blob-a" />
      <span className="ambient-blob ambient-blob-b" />
      <span className="ambient-blob ambient-blob-c" />
      <span className="ambient-blob ambient-blob-d" />
      <div className="ambient-grid" />
      <div className="ambient-vignette" />
    </div>
  );
}
