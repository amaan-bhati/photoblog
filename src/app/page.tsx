import Image from "next/image";

import Loader from "@/components/Loader";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-zinc-100 dark:selection:bg-zinc-800 flex flex-col">
      <header className="max-w-4xl mx-auto px-6 pt-24 sm:pt-32 md:pt-40 text-center">
        <div className="space-y-4">
          <Loader
            sentence="Amaan's Photoblog"
            manualMode={false}
            blurAmount={5}
            borderColor="#66ff00"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
          {/* <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            Capturing moments, stories, and everything in between through my lens.
            From friends and places to the quiet blues of a candid moment—every frame tells a story.
          </p> */}
        </div>
      </header>

      {/* <Gallery
        fit={0.8}
        minRadius={1000}
        maxVerticalRotationDeg={20}
        segments={34}
        dragDampening={1.2}
        grayscale */}
      {/* /> */}

      <main className="flex-1 w-full min-h-[600px] sm:min-h-[800px] mt-12 relative overflow-hidden">
        <div className="w-full h-full relative flex items-center justify-center">
          <Gallery
            fit={0.9}
            minRadius={800}
            maxRadius={1200}
            maxVerticalRotationDeg={20}
            segments={28}
            dragDampening={1.2}
          />
        </div>
      </main>

      <footer className="py-12 text-center text-zinc-400 text-sm">
        <div className="w-12 h-px bg-zinc-200 dark:bg-zinc-800 mx-auto mb-8" />
        <p>© {new Date().getFullYear()} Amaan's Photoblog</p>
      </footer>
    </div>
  );
}
