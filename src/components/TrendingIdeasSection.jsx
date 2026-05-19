import React from 'react';

import IdeaCard from '@/components/IdeaCard';
import Link from 'next/link';
import { TrendingUp, LayoutGrid, ArrowRight } from 'lucide-react';
import { getTrendingIdeas } from '@/lib/data';

const TrendingIdeasSection = async () => {
    const ideas = await getTrendingIdeas();

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">

            <div className="flex items-end justify-between mb-10">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-xs font-semibold uppercase tracking-widest">
                            Trending
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Ideas of the Week
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-zinc-400">
                        Most exciting startup concepts from our community
                    </p>
                </div>

                <Link
                    href="/ideas"
                    className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 px-5 py-2.5 rounded-full transition-all duration-200 shrink-0"
                >
                    <LayoutGrid className="h-3.5 w-3.5" />
                    View all ideas <ArrowRight className="h-5 w-5"></ArrowRight>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                ideas.map((idea) => (
                    <IdeaCard key={idea._id} idea={idea} />
                ))
                }
            </div>

        </section>
    );
};

export default TrendingIdeasSection;