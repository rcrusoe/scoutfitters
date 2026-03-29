import type { OnboardingData } from "@/types/onboarding";

type Props = {
  data: OnboardingData;
};

export function StepComplete({ data }: Props) {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-12 sm:py-20">
      <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-stone-900">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>

        <h2 className="mt-6 text-2xl font-bold tracking-tight text-stone-900">
          You&rsquo;re all set, {data.firstName}!
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-stone-500">
          Your style profile is locked in. Our scouts are getting briefed and
          will start hunting for pieces that match your vibe. We&rsquo;ll email
          you at <span className="font-medium text-stone-700">{data.email}</span>{" "}
          when your first bundle is ready.
        </p>

        <div className="mx-auto mt-8 max-w-sm rounded-xl bg-stone-50 p-6 text-left">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Your Profile Summary
          </h3>
          <dl className="mt-4 space-y-3 text-sm">
            <ProfileRow label="Shirt" value={data.shirtSize} />
            <ProfileRow
              label="Pants"
              value={`${data.pantWaist}W x ${data.pantInseam}L`}
            />
            <ProfileRow label="Shoes" value={`US ${data.shoeSize}`} />
            <ProfileRow label="Fit" value={data.fitPreference} />
            <ProfileRow
              label="Style"
              value={data.styleArchetypes.join(", ")}
            />
            <ProfileRow label="Budget" value={data.budgetPerItem} />
            <ProfileRow label="Frequency" value={data.bundleFrequency} />
          </dl>
        </div>
      </div>
    </div>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;

  return (
    <div className="flex justify-between gap-4">
      <dt className="text-stone-500">{label}</dt>
      <dd className="text-right font-medium text-stone-900">{value}</dd>
    </div>
  );
}
