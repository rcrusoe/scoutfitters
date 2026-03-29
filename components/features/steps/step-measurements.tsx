import { SHIRT_SIZES, FIT_PREFERENCES, type OnboardingData } from "@/types/onboarding";

type Props = {
  data: OnboardingData;
  update: (fields: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
};

export function StepMeasurements({ data, update, onNext, onBack }: Props) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onNext();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-stone-900">
          Your measurements
        </h2>
        <p className="mt-2 text-sm text-stone-500">
          Helps our scouts find pieces that actually fit. Don&rsquo;t worry about
          being exact &mdash; close enough works.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-stone-700">
            Shirt size
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {SHIRT_SIZES.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => update({ shirtSize: size })}
                className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors ${
                  data.shirtSize === size
                    ? "border-stone-900 bg-stone-900 text-white"
                    : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="pantWaist"
              className="block text-sm font-medium text-stone-700"
            >
              Pant waist (inches)
            </label>
            <input
              id="pantWaist"
              type="text"
              inputMode="numeric"
              required
              value={data.pantWaist}
              onChange={(e) => update({ pantWaist: e.target.value })}
              placeholder="32"
              className="mt-1.5 block w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>
          <div>
            <label
              htmlFor="pantInseam"
              className="block text-sm font-medium text-stone-700"
            >
              Pant inseam (inches)
            </label>
            <input
              id="pantInseam"
              type="text"
              inputMode="numeric"
              required
              value={data.pantInseam}
              onChange={(e) => update({ pantInseam: e.target.value })}
              placeholder="30"
              className="mt-1.5 block w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="shoeSize"
            className="block text-sm font-medium text-stone-700"
          >
            Shoe size (US)
          </label>
          <input
            id="shoeSize"
            type="text"
            inputMode="numeric"
            required
            value={data.shoeSize}
            onChange={(e) => update({ shoeSize: e.target.value })}
            placeholder="10"
            className="mt-1.5 block w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-stone-700"
            >
              Height
            </label>
            <input
              id="height"
              type="text"
              value={data.height}
              onChange={(e) => update({ height: e.target.value })}
              placeholder={`5'10"`}
              className="mt-1.5 block w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-stone-700"
            >
              Weight (lbs)
            </label>
            <input
              id="weight"
              type="text"
              inputMode="numeric"
              value={data.weight}
              onChange={(e) => update({ weight: e.target.value })}
              placeholder="170"
              className="mt-1.5 block w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-stone-700">
          How do you like your clothes to fit?
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {FIT_PREFERENCES.map((fit) => (
            <button
              key={fit}
              type="button"
              onClick={() => update({ fitPreference: fit })}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                data.fitPreference === fit
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
              }`}
            >
              {fit}
            </button>
          ))}
        </div>
      </fieldset>

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
          Continue
        </button>
      </div>
    </form>
  );
}
