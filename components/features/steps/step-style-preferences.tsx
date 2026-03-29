import {
  STYLE_ARCHETYPES,
  COLORS,
  BRANDS,
  FIT_PREFERENCES,
  type OnboardingData,
} from "@/types/onboarding";

type Props = {
  data: OnboardingData;
  update: (fields: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
};

function toggleItem(list: string[], item: string): string[] {
  return list.includes(item)
    ? list.filter((i) => i !== item)
    : [...list, item];
}

export function StepStylePreferences({ data, update, onNext, onBack }: Props) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onNext();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-stone-900">
          Your style
        </h2>
        <p className="mt-2 text-sm text-stone-500">
          Pick everything that resonates. There are no wrong answers &mdash; this
          helps our scouts know what to look for.
        </p>
      </div>

      {/* Style archetypes */}
      <fieldset>
        <legend className="text-sm font-medium text-stone-700">
          What describes your style? (pick all that apply)
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {STYLE_ARCHETYPES.map((style) => (
            <button
              key={style}
              type="button"
              onClick={() =>
                update({
                  styleArchetypes: toggleItem(data.styleArchetypes, style),
                })
              }
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                data.styleArchetypes.includes(style)
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Fit preference */}
      <fieldset>
        <legend className="text-sm font-medium text-stone-700">
          How do you like your clothes to fit?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {FIT_PREFERENCES.map((fit) => (
            <button
              key={fit}
              type="button"
              onClick={() => update({ fitPreference: fit })}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
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

      {/* Favorite colors */}
      <fieldset>
        <legend className="text-sm font-medium text-stone-700">
          Colors you love
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {COLORS.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() =>
                update({
                  favoriteColors: toggleItem(data.favoriteColors, color),
                })
              }
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                data.favoriteColors.includes(color)
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Colors to avoid */}
      <fieldset>
        <legend className="text-sm font-medium text-stone-700">
          Colors to avoid
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {COLORS.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() =>
                update({
                  avoidColors: toggleItem(data.avoidColors, color),
                })
              }
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                data.avoidColors.includes(color)
                  ? "border-red-600 bg-red-50 text-red-700"
                  : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Brands */}
      <fieldset>
        <legend className="text-sm font-medium text-stone-700">
          Brands you&rsquo;d be happy to see (pick any)
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {BRANDS.map((brand) => (
            <button
              key={brand}
              type="button"
              onClick={() =>
                update({
                  favoriteBrands: toggleItem(data.favoriteBrands, brand),
                })
              }
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                data.favoriteBrands.includes(brand)
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
              }`}
            >
              {brand}
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
