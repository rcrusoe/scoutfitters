"use client";

import { useState } from "react";
import { INITIAL_ONBOARDING_DATA, type OnboardingData } from "@/types/onboarding";
import { StepBasicInfo } from "./steps/step-basic-info";
import { StepMeasurements } from "./steps/step-measurements";
import { StepStylePreferences } from "./steps/step-style-preferences";
import { StepBudget } from "./steps/step-budget";
import { StepComplete } from "./steps/step-complete";

const STEP_LABELS = ["About You", "Measurements", "Style", "Budget"];

export function Onboarding() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(INITIAL_ONBOARDING_DATA);

  function update(fields: Partial<OnboardingData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  function next() {
    setStep((s) => Math.min(s + 1, 4));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  if (step === 4) {
    return <StepComplete data={data} />;
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12 sm:py-20">
      <ProgressBar currentStep={step} labels={STEP_LABELS} />

      <div className="mt-10">
        {step === 0 && (
          <StepBasicInfo data={data} update={update} onNext={next} />
        )}
        {step === 1 && (
          <StepMeasurements data={data} update={update} onNext={next} onBack={back} />
        )}
        {step === 2 && (
          <StepStylePreferences data={data} update={update} onNext={next} onBack={back} />
        )}
        {step === 3 && (
          <StepBudget data={data} update={update} onNext={next} onBack={back} />
        )}
      </div>
    </div>
  );
}

function ProgressBar({
  currentStep,
  labels,
}: {
  currentStep: number;
  labels: string[];
}) {
  return (
    <div className="flex items-center gap-2">
      {labels.map((label, i) => (
        <div key={label} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex w-full items-center gap-2">
            <div
              className={`h-1.5 w-full rounded-full transition-colors ${
                i <= currentStep ? "bg-stone-900" : "bg-stone-200"
              }`}
            />
          </div>
          <span
            className={`text-xs font-medium transition-colors ${
              i <= currentStep ? "text-stone-900" : "text-stone-400"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
