import React from "react";
import { Send } from "lucide-react";

const CommentSection = () => {
  return (
    <div className="max-w-3xl">
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Write a comment..."
          className="w-full pl-4 pr-12 py-3.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl text-sm font-medium text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 shadow-sm transition-colors"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-indigo-600 dark:text-indigo-400 hover:scale-105 transition-transform">
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
