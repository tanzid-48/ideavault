import IdeaCard from '@/components/IdeaCard';
import { getAllIdeas } from '@/lib/data';
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