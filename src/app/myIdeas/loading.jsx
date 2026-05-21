import React from "react";

const MyIdeasLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-4">
      <div className="relative w-12 h-12">
        <div className="absolute w-12 h-12 rounded-full border-4 border-gray-200 dark:border-zinc-800"></div>
        <div className="absolute w-12 h-12 rounded-full border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
      </div>
      
      <div className="text-center">
        <p className="text-sm font-bold text-gray-900 dark:text-white tracking-wide animate-pulse">
          Loading Your Ideas...
        </p>
        <p className="text-xs text-gray-400 dark:text-zinc-500 mt-0.5">
          Fetching from IdeaVault Server
        </p>
      </div>
    </div>
  );
};

export default MyIdeasLoading;