"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, Filter, ArrowUpDown } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";

const categories = [
  "Tech",
  "Health",
  "AI",
  "Education",
  "Fintech",
  "E-commerce",
  "SaaS",
];

export default function IdeaFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) params.set("search", term);
    else params.delete("search");
    router.push(`?${params.toString()}`);
  }, 300);

  const handleCategoryChange = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== "all") {
      params.set("category", value);
    } else {
      params.delete("category");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 mb-8 w-full">
      <div className="relative w-full sm:flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-zinc-500" />
        <input
          type="text"
          placeholder="Search ideas..."
          defaultValue={searchParams.get("search") || ""}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-2.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl text-sm font-medium text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors shadow-sm"
        />
      </div>

      <div className="relative w-full sm:w-44">
        <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-zinc-500 pointer-events-none" />
        <select
          defaultValue={searchParams.get("category") || ""}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="w-full pl-10 pr-8 py-2.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl text-sm font-medium text-gray-700 dark:text-zinc-300 appearance-none focus:outline-none focus:border-indigo-500 cursor-pointer transition-colors"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat.toLowerCase()}>
              {cat}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-400 dark:border-t-zinc-500" />
      </div>

      <div className="relative w-full sm:w-36">
        <ArrowUpDown className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-zinc-500 pointer-events-none" />
        <select
          defaultValue="newest"
          className="w-full pl-10 pr-8 py-2.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl text-sm font-medium text-gray-700 dark:text-zinc-300 appearance-none focus:outline-none focus:border-indigo-500 cursor-pointer transition-colors"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-400 dark:border-t-zinc-500" />
      </div>
    </div>
  );
}