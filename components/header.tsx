export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-stone-900">
            Reclaimed Outfitters
          </span>
        </a>
        <a
          href="#waitlist"
          className="rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-stone-800"
        >
          Join the Waitlist
        </a>
      </div>
    </header>
  );
}
