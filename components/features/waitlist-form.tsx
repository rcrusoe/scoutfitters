"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to backend when Supabase is added
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="bg-stone-900 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Get Early Access
        </h2>
        <p className="mt-4 text-lg text-stone-400">
          We&rsquo;re launching soon. Drop your email and be the first to build
          your secondhand wardrobe.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-stone-700 bg-stone-800 p-8">
            <p className="text-lg font-semibold text-white">
              You&rsquo;re on the list!
            </p>
            <p className="mt-2 text-sm text-stone-400">
              We&rsquo;ll be in touch when spots open up.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-stone-700 bg-stone-800 px-5 py-3.5 text-sm text-white placeholder:text-stone-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100"
            >
              Join Waitlist
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
