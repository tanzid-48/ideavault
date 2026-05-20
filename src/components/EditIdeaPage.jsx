"use client";

import React, { useState } from "react";
import {
  Lightbulb, Tag, DollarSign, Users, AlertCircle,
  CheckCircle, Image as ImageIcon, FileText, Layers,
  ArrowRight, Loader2, ChevronDown,
} from "lucide-react";
import { updateIdea } from "@/lib/action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";

const categories = ["Tech", "Health", "AI", "Education", "Fintech", "E-commerce", "SaaS"];

export default function EditIdeaPage({ idea }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title:            idea?.title || "",
    shortDescription: idea?.shortDescription || "",
    details:          idea?.details || "",
    category:         idea?.category || "",
    tags:             idea?.tags || "",
    image:            idea?.image || "",
    estimatedBudget:  idea?.estimatedBudget || "",
    targetAudience:   idea?.targetAudience || "",
    problemStatement: idea?.problemStatement || "",
    solution:         idea?.solution || "",
  });

  const inputBase =
    "w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-100/70 hover:bg-gray-200/60 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/70 text-gray-900 dark:text-zinc-100 text-sm font-medium focus:bg-white dark:focus:bg-black focus:ring-2 focus:ring-indigo-500/80 focus:border-transparent outline-none transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-zinc-500";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await updateIdea(idea._id, formData);
    setLoading(false);
    if (result?.success) {
      toast.success("Idea updated successfully!");
      router.push(`/ideas/${idea._id}`);
    } else {
      toast.error(result?.message || "Failed to update idea.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-black px-4 sm:px-6 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10 text-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold border border-indigo-500/20 mb-4 tracking-wide uppercase">
            <Lightbulb className="h-3.5 w-3.5" /> Edit Idea
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Update Your Idea
          </h1>
          <p className="text-sm md:text-base text-gray-500 dark:text-zinc-400 mt-2 font-medium">
            Refine your concept, update details, and keep your idea sharp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-10 bg-white dark:bg-zinc-900/30 border border-gray-100 dark:border-zinc-800/60 p-6 sm:p-10 rounded-[2.5rem] shadow-xl shadow-gray-100/40 dark:shadow-none backdrop-blur-md">

          {/* Section 1 */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-gray-800 dark:text-zinc-200 flex items-center gap-2 border-b border-gray-100 dark:border-zinc-800/80 pb-3 tracking-wide uppercase">
              <Layers className="h-4 w-4 text-indigo-500" /> Basic Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">Idea Title</label>
                <input type="text" name="title" required value={formData.title} onChange={handleChange} className={inputBase} placeholder="e.g., AI-Driven Micro-Grid Energy Optimizer" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">Category</label>
                <div className="relative">
                  <select name="category" required value={formData.category} onChange={handleChange} className={`${inputBase} appearance-none pr-10 cursor-pointer`}>
                    <option value="" disabled>Select Category</option>
                    {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">Tags <span className="text-gray-400 font-normal">(Optional)</span></label>
                <div className="relative">
                  <Tag className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="automation, green-tech, web3" className={`${inputBase} pl-11`} />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">Short Description</label>
                <input type="text" name="shortDescription" required maxLength={150} value={formData.shortDescription} onChange={handleChange} className={inputBase} placeholder="A catch line or elevator pitch (Max 150 chars)" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">Detailed Breakdown</label>
                <textarea name="details" required rows={4} value={formData.details} onChange={handleChange} className={`${inputBase} resize-none rounded-[1.5rem] py-3`} placeholder="Explain the core mechanism, tech stack, and future features..." />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-gray-800 dark:text-zinc-200 flex items-center gap-2 border-b border-gray-100 dark:border-zinc-800/80 pb-3 tracking-wide uppercase">
              <FileText className="h-4 w-4 text-indigo-500" /> Core Thesis
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">Problem Statement</label>
                <div className="relative">
                  <AlertCircle className="absolute left-4 top-4 h-4 w-4 text-rose-400" />
                  <textarea name="problemStatement" required rows={3} value={formData.problemStatement} onChange={handleChange} className={`${inputBase} pl-11 resize-none rounded-[1.5rem] py-3`} placeholder="What specific issue does this solve?" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">Proposed Solution</label>
                <div className="relative">
                  <CheckCircle className="absolute left-4 top-4 h-4 w-4 text-emerald-400" />
                  <textarea name="solution" required rows={3} value={formData.solution} onChange={handleChange} className={`${inputBase} pl-11 resize-none rounded-[1.5rem] py-3`} placeholder="How does your concept solve the problem?" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-gray-800 dark:text-zinc-200 flex items-center gap-2 border-b border-gray-100 dark:border-zinc-800/80 pb-3 tracking-wide uppercase">
              <Users className="h-4 w-4 text-indigo-500" /> Target & Logistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">Target Audience</label>
                <div className="relative">
                  <Users className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="text" name="targetAudience" required value={formData.targetAudience} onChange={handleChange} className={`${inputBase} pl-11`} placeholder="e.g., Small businesses, Gen-Z, Developers" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">Estimated Budget <span className="text-gray-400 font-normal">(Optional)</span></label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="number" name="estimatedBudget" value={formData.estimatedBudget} onChange={handleChange} className={`${inputBase} pl-11`} placeholder="e.g., 5000 (in USD)" />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2 pl-1">Cover Image URL</label>
                <div className="relative">
                  <ImageIcon className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="url" name="image" required value={formData.image} onChange={handleChange} className={`${inputBase} pl-11`} placeholder="https://images.unsplash.com/photo-..." />
                </div>
                {/* Image preview */}
                {formData.image && (
                  <div className="mt-3 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 h-40">
                    <Image
                    height={500}
                    width={500}
                    src={formData.image} alt="Preview" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = "none"} />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-400 text-white font-bold py-4 px-6 rounded-2xl active:scale-[0.99] transition-all shadow-lg shadow-indigo-600/20 text-sm tracking-wide cursor-pointer">
              {loading ? (
                <><Loader2 className="h-5 w-5 animate-spin" /> Updating...</>
              ) : (
                <><span>Update Idea</span><ArrowRight className="h-4 w-4" /></>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}