// Real photography frame — replaced the earlier gradient placeholder now
// that actual venue photos are available. Keeps the same caption-overlay
// treatment so it drops into Hero/VenueAreas/Gallery without other changes.
export default function PhotoFrame({ src, alt, caption, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-md ${className}`}>
      <img
        src={src}
        alt={alt || caption || ""}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
      {caption && (
        <span className="absolute bottom-0 left-0 z-10 p-4 font-[var(--font-label)] text-[0.62rem] tracking-[0.12em] uppercase text-white/95">
          {caption}
        </span>
      )}
    </div>
  );
}
