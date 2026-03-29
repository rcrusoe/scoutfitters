export function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(120,113,108,0.3),_transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:py-40">
        <p className="text-sm font-medium uppercase tracking-widest text-stone-400">
          Coming Soon
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Secondhand menswear,{" "}
          <span className="text-amber-500">handpicked for you.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
          Tell us your size and style. Our network of scouts will hit the best
          local thrift stores and send you a curated bundle of pieces
          you&rsquo;ll actually wear. Keep what you love, send back the rest.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100"
          >
            Join the Waitlist
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full border border-stone-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-stone-400"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
