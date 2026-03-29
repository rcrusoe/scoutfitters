"use client";

import { useState } from "react";
import Image from "next/image";
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

const PAGE_SIZE = 6;

function toggleItem(list: string[], item: string): string[] {
  return list.includes(item)
    ? list.filter((i) => i !== item)
    : [...list, item];
}

export function StepStylePreferences({ data, update, onNext, onBack }: Props) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onNext();
  }

  const selectedCount = data.selectedStyleImages.length;
  const visibleImages = STYLE_IMAGES.slice(0, visibleCount);
  const hasMore = visibleCount < STYLE_IMAGES.length;

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-stone-900">
          Tap the looks you&rsquo;re drawn to
        </h2>
        <p className="mt-2 text-sm text-stone-500">
          Pick anything that feels like your style &mdash; the more you select,
          the better our scouts will know what to look for.{" "}
          <span className="font-medium text-stone-700">
            {selectedCount === 0
              ? "Select at least 3."
              : `${selectedCount} selected.`}
          </span>
        </p>
      </div>

      {/* Pinterest-style masonry grid */}
      <div className="columns-2 gap-3 sm:columns-3">
        {visibleImages.map((image) => {
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
              className={`group relative mb-3 block w-full overflow-hidden rounded-xl border-2 transition-all break-inside-avoid ${
                selected
                  ? "border-stone-900 ring-2 ring-stone-900 ring-offset-2"
                  : "border-transparent hover:border-stone-300"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={500}
                className="h-auto w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
              />

              {/* Hover overlay with tags */}
              <div
                className={`absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity ${
                  selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="flex flex-wrap gap-1 p-3">
                  {image.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Selection checkmark */}
              {selected && (
                <div className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 shadow-lg">
                  <svg
                    className="h-4 w-4 text-white"
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

      {hasMore && (
        <div className="text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => Math.min(c + PAGE_SIZE, STYLE_IMAGES.length))}
            className="rounded-full border border-stone-300 px-6 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50"
          >
            Show More Looks
          </button>
        </div>
      )}

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
          disabled={selectedCount < 3}
          className="flex-1 rounded-full bg-stone-900 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
