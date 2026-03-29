import {
  BUDGET_RANGES,
  BUNDLE_FREQUENCIES,
  type OnboardingData,
} from "@/types/onboarding";

type Props = {
  data: OnboardingData;
  update: (fields: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
};

export function StepBudget({ data, update, onNext, onBack }: Props) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onNext();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-stone-900">
          Budget &amp; frequency
        </h2>
        <p className="mt-2 text-sm text-stone-500">
          This helps us price items right and know how often to send bundles.
        </p>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-stone-700">
          What&rsquo;s your budget per item?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {BUDGET_RANGES.map((range) => (
            <button
              key={range}
              type="button"
              onClick={() => update({ budgetPerItem: range })}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                data.budgetPerItem === range
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium text-stone-700">
          How often do you want bundles?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {BUNDLE_FREQUENCIES.map((freq) => (
            <button
              key={freq}
              type="button"
              onClick={() => update({ bundleFrequency: freq })}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                data.bundleFrequency === freq
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
              }`}
            >
              {freq}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <label
          htmlFor="additionalNotes"
          className="block text-sm font-medium text-stone-700"
        >
          Anything else our scouts should know?
        </label>
        <textarea
          id="additionalNotes"
          rows={3}
          value={data.additionalNotes}
          onChange={(e) => update({ additionalNotes: e.target.value })}
          placeholder="I'm looking for a good denim jacket, prefer earth tones, hate polyester..."
          className="mt-1.5 block w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
        />
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 rounded-full border border-stone-300 py-3.5 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-50"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 rounded-full bg-stone-900 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
        >
          Submit Profile
        </button>
      </div>
    </form>
  );
}
