export default function JourneyMap({ src, alt = "" }) {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-white">
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain"
      />
    </section>
  );
}
