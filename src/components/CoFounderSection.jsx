import React from 'react';
import { Rocket, UserPlus, Users, Zap } from 'lucide-react';

const projects = [
  {
    initials: "SK",
    avatarColor: "from-violet-500 to-purple-600",
    accentText: "text-violet-600 dark:text-violet-400",
    accentBg: "bg-violet-50 dark:bg-violet-950/30",
    accentBorder: "border-violet-200 dark:border-violet-800/40",
    name: "SkillChain",
    description: "Blockchain micro-credentials for gig workers across platforms.",
    rolesNeeded: ["React Developer", "UI Designer"],
    applicants: 5,
    isActive: true,
    tag: "Web3",
    btnColor: "bg-violet-600 hover:bg-violet-500 shadow-violet-500/30",
  },
  {
    initials: "GR",
    avatarColor: "from-emerald-500 to-teal-600",
    accentText: "text-emerald-600 dark:text-emerald-400",
    accentBg: "bg-emerald-50 dark:bg-emerald-950/30",
    accentBorder: "border-emerald-200 dark:border-emerald-800/40",
    name: "GreenRoute",
    description: "AI-powered carbon-neutral routing for last-mile logistics.",
    rolesNeeded: ["ML Engineer", "Data Analyst"],
    applicants: 2,
    isActive: true,
    tag: "AI / Climate",
    btnColor: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30",
  },
  {
    initials: "HD",
    avatarColor: "from-amber-500 to-orange-500",
    accentText: "text-amber-600 dark:text-amber-400",
    accentBg: "bg-amber-50 dark:bg-amber-950/30",
    accentBorder: "border-amber-200 dark:border-amber-800/40",
    name: "HarvestDAO",
    description: "Decentralized cooperative for smallholder farmers worldwide.",
    rolesNeeded: ["Web3 Developer", "Community Lead"],
    applicants: 1,
    isActive: false,
    tag: "DeFi / AgriTech",
    btnColor: "bg-amber-600 hover:bg-amber-500 shadow-amber-500/30",
  },
];

const CoFounderSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950 border-y border-gray-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-800/50 bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 text-[11px] font-bold uppercase tracking-widest">
            <Rocket className="h-3 w-3" />
            Co-Founder Match
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Find Your Co-Founder
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-zinc-400 max-w-md leading-relaxed font-medium">
            Top IdeaVault projects are looking for elite builders. Secure your role, form your syndicate, and ship something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col bg-white dark:bg-zinc-900/40 border border-gray-200/80 dark:border-zinc-800/80 rounded-[2rem] overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-1 w-full ${project.isActive ? "bg-linear-to-r from-transparent via-emerald-400 to-transparent" : "bg-linear-to-r from-transparent via-gray-300 dark:via-zinc-700 to-transparent"}`} />

              <div className="p-6 flex flex-col gap-5 flex-1">

                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl bg-linear-to-br ${project.avatarColor} flex items-center justify-center text-sm font-bold text-white shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                      {project.initials}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                        {project.name}
                      </h3>
                      <span className={`text-[10px] font-bold flex items-center gap-1 mt-0.5 ${project.isActive ? "text-emerald-500" : "text-gray-400 dark:text-zinc-500"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full inline-block ${project.isActive ? "bg-emerald-500 animate-pulse" : "bg-gray-400 dark:bg-zinc-500"}`} />
                        {project.isActive ? "Actively recruiting" : "Positions filled"}
                      </span>
                    </div>
                  </div>

                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shrink-0 ${project.accentText} ${project.accentBg} ${project.accentBorder}`}>
                    {project.tag}
                  </span>
                </div>

                <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.rolesNeeded.map((role) => (
                    <span 
                      key={role}
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-xl bg-gray-50 dark:bg-zinc-800/50 text-gray-600 dark:text-zinc-300 border border-gray-100 dark:border-zinc-800"
                    >
                      <Zap className={`h-2.5 w-2.5 ${project.accentText}`} />
                      {role}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-zinc-800 mt-auto">
                  <span className="flex items-center gap-1.5 text-[11px] text-gray-400 dark:text-zinc-500 font-semibold">
                    <Users className="h-3.5 w-3.5" />
                    {project.applicants} applicant{project.applicants !== 1 ? "s" : ""}
                  </span>

                  <button
                    disabled={!project.isActive}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200 ${
                      project.isActive
                        ? `text-white shadow-lg active:scale-95 ${project.btnColor}`
                        : "text-gray-400 dark:text-zinc-600 bg-gray-100 dark:bg-zinc-800/80 cursor-not-allowed"
                    }`}
                  >
                    <UserPlus className="h-3 w-3" />
                    {project.isActive ? "Apply to Join" : "Closed"}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-violet-200 dark:border-violet-800/50 text-violet-600 dark:text-violet-400 text-sm font-bold hover:bg-violet-50 dark:hover:bg-violet-950/20 transition-all duration-300 shadow-sm">
            <Rocket className="h-4 w-4" />
            Browse all co-founder opportunities
          </button>
        </div>

      </div>
    </section>
  );
};

export default CoFounderSection;