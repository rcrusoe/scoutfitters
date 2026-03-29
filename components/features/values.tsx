const values = [
  {
    title: "Curated, Not Random",
    description:
      "Every item is hand-selected by a real person who knows your style \u2014 not an algorithm dumping surplus inventory.",
  },
  {
    title: "Sustainable by Default",
    description:
      "Secondhand clothing diverts textiles from landfills and skips the carbon footprint of new production. Good style, lighter impact.",
  },
  {
    title: "Zero Risk",
    description:
      "No subscription lock-in. No fees for returns. You only pay for the pieces you decide to keep.",
  },
];

export function Values() {
  return (
    <section className="border-t border-stone-200 bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-stone-400">
          Why Reclaimed
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Better Than the Alternatives
        </h2>
        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-stone-200 bg-white p-8"
            >
              <h3 className="text-lg font-semibold text-stone-900">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
