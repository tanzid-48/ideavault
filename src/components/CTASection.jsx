import React from "react";
import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="w-full">
      <div className="relative flex flex-col md:flex-row items-stretch bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 overflow-hidden min-h-100">
        <div className="flex flex-col justify-center gap-5 px-8 py-14 sm:px-16 md:px-20 lg:px-28 w-full md:w-1/2 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-800/40 text-indigo-600 dark:text-indigo-400 text-[11px] font-bold uppercase tracking-widest w-fit">
            <Lightbulb className="h-3 w-3" />
            Join IdeaVault
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-snug">
            Build your startup vault & find your dream team.
          </h2>

          <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed max-w-sm">
            Submit your idea, gather community votes, connect with co-founders,
            and turn your concept into production — all in one place.
          </p>

          <div className="flex items-center gap-3 flex-wrap pt-1">
            <Link
              href="/signup"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold shadow-lg shadow-indigo-600/20 active:scale-95 transition-all duration-200"
            >
              Register Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/ideas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-zinc-300 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              Explore Ideas
            </Link>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 h-64 md:h-auto shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
            alt="Startup team collaborating"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-white dark:from-zinc-900 via-white/20 dark:via-zinc-900/20 to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-linear-to-b from-white dark:from-zinc-900 via-transparent to-transparent md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
