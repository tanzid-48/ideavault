import React from "react";
import {
  Lightbulb,
  Tag,
  DollarSign,
  Users,
  AlertCircle,
  CheckCircle,
  Image as ImageIcon,
  FileText,
  Layers,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { createIdea } from "@/lib/action";

const categories = [
  "Tech",
  "Health",
  "AI",
  "Education",
  "Fintech",
  "E-commerce",
  "SaaS",
];
const AddIdeaPage = async() => {
  const inputBaseStyles =
    "w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-100/70 hover:bg-gray-200/60 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/70 text-gray-900 dark:text-zinc-100 text-sm font-medium focus:bg-white dark:focus:bg-black focus:ring-2 focus:ring-indigo-500/80 focus:border-transparent outline-none transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-zinc-500 shadow-inner";
    
  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-black px-4 sm:px-6 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold border border-indigo-500/20 mb-4 tracking-wide uppercase">
            <Lightbulb className="h-3.5 w-3.5" /> Share Innovation
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Vault Your Startup Idea
          </h1>
          <p className="text-sm md:text-base text-gray-500 dark:text-zinc-400 mt-2 font-medium">
            Document your core concepts, identify target problems, and structure
            your roadmap for future collaboration.
          </p>
        </div>

        <form action={createIdea} className="space-y-10 bg-white dark:bg-zinc-900/30 border border-gray-100 dark:border-zinc-800/60 p-6 sm:p-10 rounded-[2.5rem] shadow-xl shadow-gray-100/40 dark:shadow-none backdrop-blur-md">
          <div className="space-y-6">
            <h3 className="text-md font-bold text-gray-800 dark:text-zinc-200 flex items-center gap-2 border-b border-gray-100 dark:border-zinc-800/80 pb-3 tracking-wide uppercase text-xs">
              <Layers className="h-4 w-4 text-indigo-500" /> Basic Overview
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">
                  Idea Title
                </label>
                <input
                name="title"
                  type="text"
                  required
                  placeholder="e.g., AI-Driven Micro-Grid Energy Optimizer"
                  className={inputBaseStyles}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">
                  Category
                </label>
                <div className="relative">
                  <select
                  name="category"
                    required
                    defaultValue=""
                    className={`${inputBaseStyles} cursor-pointer appearance-none pr-10 text-gray-900 dark:text-zinc-100`}
                  >
                    <option
                      value=""
                      disabled
                      className="text-gray-400 dark:text-zinc-500 bg-white dark:bg-zinc-950"
                    >
                      Select Category
                    </option>
                    {categories.map((cat, i) => (
                      <option
                        key={i}
                        value={cat}
                        className="text-gray-900 dark:text-zinc-900 bg-white dark:bg-zinc-100 py-3 font-medium"
                      >
                        {cat}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 h-4 w-4 text-gray-400 dark:text-zinc-500 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">
                  Tags{" "}
                  <span className="text-gray-400 dark:text-zinc-500 font-normal">
                    (Optional)
                  </span>
                </label>
                <div className="relative">
                  <Tag className="absolute left-4 top-3.5 h-4 w-4 text-gray-400 dark:text-zinc-500" />
                  <input
                   name="tags"
                    type="text"
                    placeholder="automation, green-tech, web3"
                    className={`${inputBaseStyles} pl-11`}
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">
                  Short Description
                </label>
                <input
                name="shortDescription" 
                  type="text"
                  required
                  maxLength={150}
                  placeholder="A catch line or elevator pitch in 1-2 sentences (Max 150 chars)."
                  className={inputBaseStyles}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">
                  Detailed Breakdown
                </label>
                <textarea
                name="details"
                  required
                  rows={4}
                  placeholder="Explain the entire core mechanism, how it operates, technical dependencies, and future features..."
                  className={`${inputBaseStyles} resize-none rounded-[1.5rem] py-3`}
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-md font-bold text-gray-800 dark:text-zinc-200 flex items-center gap-2 border-b border-gray-100 dark:border-zinc-800/80 pb-3 tracking-wide uppercase text-xs">
              <FileText className="h-4 w-4 text-indigo-500" /> Core Thesis
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">
                  Problem Statement
                </label>
                <div className="relative">
                  <AlertCircle className="absolute left-4 top-4 h-4 w-4 text-rose-400" />
                  <textarea
                  name="problemStatement"
                    required
                    rows={3}
                    placeholder="What specific issue or friction point in the market does this solve? Be descriptive."
                    className={`${inputBaseStyles} pl-11 resize-none rounded-[1.5rem] py-3`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">
                  Proposed Solution
                </label>
                <div className="relative">
                  <CheckCircle className="absolute left-4 top-4 h-4 w-4 text-emerald-400" />
                  <textarea
                  name="solution"
                    required
                    rows={3}
                    placeholder="How does your concept solve the problem optimally? What is your unfair advantage?"
                    className={`${inputBaseStyles} pl-11 resize-none rounded-[1.5rem] py-3`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-md font-bold text-gray-800 dark:text-zinc-200 flex items-center gap-2 border-b border-gray-100 dark:border-zinc-800/80 pb-3 tracking-wide uppercase text-xs">
              <Users className="h-4 w-4 text-indigo-500" /> Target & Logistics
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">
                  Target Audience
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-3.5 h-4 w-4 text-gray-400 dark:text-zinc-500" />
                  <input
                   name="targetAudience"
                    type="text"
                    required
                    placeholder="e.g., Small businesses, Gen-Z students, Devs"
                    className={`${inputBaseStyles} pl-11`}
                  />
                </div>
              </div>

              {/* Estimated Budget */}
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">
                  Estimated Budget{" "}
                  <span className="text-gray-400 dark:text-zinc-500 font-normal">
                    (Optional)
                  </span>
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-3.5 h-4 w-4 text-gray-400 dark:text-zinc-500" />
                  <input
                  name="estimatedBudget"
                    type="number"
                    placeholder="e.g., 5000 (in USD)"
                    className={`${inputBaseStyles} pl-11`}
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">
                  Concept Cover Image URL
                </label>
                <div className="relative">
                  <ImageIcon className="absolute left-4 top-3.5 h-4 w-4 text-gray-400 dark:text-zinc-500" />
                  <input
                  name="image"
                    type="url"
                    required
                    placeholder="https://images.unsplash.com/photo-..."
                    className={`${inputBaseStyles} pl-11`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 px-6 rounded-2xl active:scale-[0.98] transition-all duration-200 text-sm tracking-wide shadow-xl shadow-indigo-600/10 cursor-pointer"
            >
              <span>Submit Idea to Vault</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddIdeaPage;
