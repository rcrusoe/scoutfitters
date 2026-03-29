import type { OnboardingData } from "@/types/onboarding";

type Props = {
  data: OnboardingData;
  update: (fields: Partial<OnboardingData>) => void;
  onNext: () => void;
};

export function StepBasicInfo({ data, update, onNext }: Props) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onNext();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-stone-900">
          Let&rsquo;s get to know you
        </h2>
        <p className="mt-2 text-sm text-stone-500">
          We&rsquo;ll use this to set up your profile and keep you in the loop.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-stone-700"
          >
            First name
          </label>
          <input
            id="firstName"
            type="text"
            required
            value={data.firstName}
            onChange={(e) => update({ firstName: e.target.value })}
            placeholder="James"
            className="mt-1.5 block w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-stone-700"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={data.email}
            onChange={(e) => update({ email: e.target.value })}
            placeholder="james@example.com"
            className="mt-1.5 block w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-stone-900 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
      >
        Continue
      </button>
    </form>
  );
}
