export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-10 text-center">
        <p className="text-sm text-stone-500">
          &copy; {new Date().getFullYear()} Scoutfitters. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-stone-400">
          Better style. Less waste. More soul.
        </p>
      </div>
    </footer>
  );
}
