import IdeaCard from '@/components/IdeaCard';
import { getAllIdeas } from '@/lib/data';
import { Filter, Search } from 'lucide-react';
import React from 'react';

const AllIdeaPage = async () => {
  const ideas = await getAllIdeas();

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-black px-4 sm:px-6 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
      
        <div className="mb-12 text-start">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            The Idea Vault
          </h1>
          <p className="text-sm md:text-base text-gray-500 dark:text-zinc-400 mt-2 font-medium">
            Explore community startup concepts, innovative solutions, and cast your votes.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full">
          <div className="relative w-full sm:flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search by idea title..." 
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl text-sm font-medium text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="relative w-full sm:w-56">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-zinc-500 pointer-events-none" />
            <select 
              defaultValue=""
              className="w-full pl-11 pr-10 py-3 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl text-sm font-bold text-gray-700 dark:text-zinc-300 appearance-none focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 cursor-pointer transition-colors"
            >
              <option value="" disabled hidden>Filter by Category</option>
              <option value="all">All Categories</option>
              <option value="saas">SaaS</option>
              <option value="ai">Artificial Intelligence</option>
              <option value="web3">Web3 / Crypto</option>
              <option value="fintech">Fintech</option>
              <option value="edtech">EdTech</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-400 dark:border-t-zinc-500 h-0 w-0" />
          </div>
        </div>

        {ideas.length === 0 ? (
          <div className="text-center py-20 text-gray-500 dark:text-zinc-500 font-medium">
            No ideas vaulted yet. Be the first to share one!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas?.map((idea) => (
              <IdeaCard 
                key={idea._id} 
                idea={idea} 
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default AllIdeaPage;