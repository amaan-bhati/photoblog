import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-zinc-100 dark:selection:bg-zinc-800">
      <main className="max-w-4xl mx-auto px-6 py-24 sm:py-32 md:py-40">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 transition-colors">
              Amaan's Photoblog
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              Capturing moments, stories, and everything in between through my lens.
              From friends and places to the quiet blues of a candid moment—every frame tells a story.
            </p>
          </div>

          <div className="w-12 h-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="pt-8">
            <button className="px-8 py-3 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-full font-medium transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg dark:hover:shadow-zinc-50/10">
              View Gallery
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
