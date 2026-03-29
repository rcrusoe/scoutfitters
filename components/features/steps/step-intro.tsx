type Props = {
  onNext: () => void;
};

const steps = [
  {
    number: "1",
    title: "Define your style",
    description:
      "Take a quick quiz so our scouts know exactly what to look for.",
  },
  {
    number: "2",
    title: "We hit the thrift stores",
    description:
      "Our network of style scouts browse local thrift and consignment shops on your behalf.",
  },
  {
    number: "3",
    title: "Keep what you love",
    description:
      "You\u2019ll get a curated bag delivered to your door. Keep what you want, return everything else.",
  },
];

export function StepIntro({ onNext }: Props) {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Secondhand menswear,
          <br />
          handpicked for you.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-stone-500">
          Scoutfitters pairs you with style scouts who find the best thrifted
          pieces that match your taste, size, and budget.
        </p>
      </div>

      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
              {step.number}
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-500">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-stone-200 bg-white p-6">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-bold text-stone-900">$40</span>
            <span className="text-sm text-stone-500">/month</span>
          </div>
          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
            Membership
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-stone-500">
          Your monthly fee applies as credit toward anything you keep. You only
          pay for the items you decide to keep &mdash; return the rest for free.
        </p>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="w-full rounded-full bg-stone-900 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
      >
        Get Started
      </button>
    </div>
  );
}
