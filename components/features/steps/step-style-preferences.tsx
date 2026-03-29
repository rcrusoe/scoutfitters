import {
  STYLE_IMAGES,
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

  const selectedCount = data.selectedStyleImages.length;

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-stone-900">
          Pick the vibes you&rsquo;re drawn to
        </h2>
        <p className="mt-2 text-sm text-stone-500">
          Tap every image that feels like you. We&rsquo;ll use your picks to
          brief our scouts.{" "}
          <span className="font-medium text-stone-700">
            {selectedCount === 0
              ? "Select at least 2."
              : `${selectedCount} selected.`}
          </span>
        </p>
      </div>

      {/* Visual mood board grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {STYLE_IMAGES.map((image) => {
          const selected = data.selectedStyleImages.includes(image.id);
          return (
            <button
              key={image.id}
              type="button"
              onClick={() =>
                update({
                  selectedStyleImages: toggleItem(
                    data.selectedStyleImages,
                    image.id
                  ),
                })
              }
              className={`group relative aspect-[4/5] overflow-hidden rounded-xl border-2 transition-all ${
                selected
                  ? "border-stone-900 ring-2 ring-stone-900 ring-offset-2"
                  : "border-transparent hover:border-stone-300"
              }`}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`}
              />

              {/* Texture overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.08),_transparent_60%)]" />

              {/* Content */}
              <div className="relative flex h-full flex-col items-center justify-center p-3">
                <span className="text-3xl sm:text-4xl">{image.icon}</span>
                <span
                  className={`mt-3 text-center text-xs font-semibold leading-tight tracking-wide sm:text-sm ${
                    image.id === "linen-summer"
                      ? "text-stone-700"
                      : "text-white/90"
                  }`}
                >
                  {image.label}
                </span>
              </div>

              {/* Selection checkmark */}
              {selected && (
                <div className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-stone-900">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

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
          disabled={selectedCount < 2}
          className="flex-1 rounded-full bg-stone-900 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
