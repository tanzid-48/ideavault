import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IdeaCard = ({ idea }) => {
  const { _id, title, category, shortDescription, image } = idea;

  return (
    <div className="group flex flex-col bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden hover:border-gray-300 dark:hover:border-zinc-600 hover:-translate-y-0.5 transition-all duration-200">

      <div className="h-48 w-full overflow-hidden relative bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <span className="absolute top-4 left-4 bg-cyan-600  dark:bg-black/75 backdrop-blur-md text-gray-900 dark:text-zinc-100 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
          {category}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-2 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
            {title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-zinc-400 font-medium line-clamp-2 leading-relaxed">
            {shortDescription}
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 dark:border-zinc-800/80 flex justify-end">
          <Link
            href={`/ideas/${_id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:gap-2 transition-all cursor-pointer"
          >
            <span>Explore Thesis</span>
            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default IdeaCard;