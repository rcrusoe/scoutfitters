const steps = [
  {
    number: "01",
    title: "Sign Up & Share Your Style",
    description:
      "Create a profile with your measurements, preferred brands, and style preferences. Our quiz takes about 3 minutes.",
  },
  {
    number: "02",
    title: "Scouts Hit the Stores",
    description:
      "Our local style scouts search thrift stores, consignment shops, and estate sales for pieces that match your profile.",
  },
  {
    number: "03",
    title: "Receive Your Bundle",
    description:
      "A curated box of 5\u20138 handpicked items arrives at your door. Each piece is cleaned, inspected, and ready to wear.",
  },
  {
    number: "04",
    title: "Keep What You Love",
    description:
      "Try everything on at home. Keep the pieces that fit your life, send back the rest with the prepaid label. Only pay for what you keep.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-stone-400">
          The Process
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          How It Works
        </h2>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-4xl font-bold text-stone-200">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-stone-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
