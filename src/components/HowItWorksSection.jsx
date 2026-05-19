import React from "react";
import {
  Lightbulb,
  Globe,
  Users,
  Rocket,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    icon: Lightbulb,
    gradient: "from-amber-400 to-orange-500",
    glow: "shadow-amber-500/25",
    glowBg: "rgba(251,191,36,0.08)",
    title: "Submit Your Idea",
    description:
      "Document your startup concept with a title, problem statement, proposed solution, and target audience.",
    tag: "Start Here",
    tagColor:
      "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-700/40",
    highlight: "bg-amber-500",
  },
  {
    step: "02",
    icon: Globe,
    gradient: "from-sky-400 to-blue-500",
    glow: "shadow-sky-500/25",
    glowBg: "rgba(56,189,248,0.08)",
    title: "Community Discovers",
    description:
      "Your idea goes live. Builders, investors, and innovators browse, upvote, and leave feedback.",
    tag: "Get Noticed",
    tagColor:
      "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-700/40",
    highlight: "bg-sky-500",
  },
  {
    step: "03",
    icon: Users,
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/25",
    glowBg: "rgba(139,92,246,0.08)",
    title: "Find Co-Founders",
    description:
      "Connect with developers, designers, and domain experts excited about your vision.",
    tag: "Build a Team",
    tagColor:
      "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/40 border-violet-200 dark:border-violet-700/40",
    highlight: "bg-violet-500",
  },
  {
    step: "04",
    icon: Rocket,
    gradient: "from-emerald-400 to-teal-500",
    glow: "shadow-emerald-500/25",
    glowBg: "rgba(52,211,153,0.08)",
    title: "Launch Your Startup",
    description:
      "With your team assembled and idea validated, take the leap and turn your concept into reality.",
    tag: "Ship It",
    tagColor:
      "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-700/40",
    highlight: "bg-emerald-500",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-zinc-950 overflow-hidden border-y border-gray-100 dark:border-zinc-900">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800/50 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 text-[11px] font-bold uppercase tracking-widest">
            <Rocket className="h-3 w-3" />
            The Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            How IdeaVault{" "}
            <span className="text-indigo-600 dark:text-indigo-400">works.</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-zinc-400 max-w-md leading-relaxed">
            From a raw concept to a launched startup — four simple steps to turn
            your idea into reality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="relative flex flex-col">
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-8 -right-4 z-10 w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-indigo-400" />
                  </div>
                )}

                <div className="group relative flex flex-col gap-5 rounded-3xl p-6 border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex-1 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${s.glowBg} 0%, transparent 70%)`,
                    }}
                  />
                  <div className="relative flex items-center justify-between">
                    <span className="text-5xl font-black text-gray-100 dark:text-zinc-800 leading-none select-none tabular-nums">
                      {s.step}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${s.tagColor}`}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <div
                    className={`relative w-12 h-12 rounded-2xl bg-linear-to-br ${s.gradient} flex items-center justify-center shadow-lg ${s.glow} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="relative flex flex-col gap-1.5">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                      {s.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                  <div
                    className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full ${s.highlight} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-3 mt-14">
          <Link
            href="/addIdea"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold shadow-xl shadow-indigo-600/25 active:scale-95 transition-all duration-200"
          >
            <Lightbulb className="h-4 w-4" />
            Start Vaulting Your Idea
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-xs text-gray-400 dark:text-zinc-600 flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-emerald-500" />
            Free to join — no credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
