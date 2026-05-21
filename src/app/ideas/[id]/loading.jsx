import React from "react";

const DetailsLoading = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-[60vh] flex flex-col justify-center items-center">
      <div className="w-full space-y-6 animate-pulse">
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10 border-4 border-gray-200 dark:border-zinc-800 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        <div className="space-y-3 flex flex-col items-center">
          <div className="h-5 bg-gray-200 dark:bg-zinc-800 rounded-md w-24"></div>
          <div className="h-8 bg-gray-200 dark:bg-zinc-800 rounded-md w-3/4 sm:w-1/2"></div>
          <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded-md w-1/3"></div>
        </div>
        <div className="h-64 sm:h-96 bg-gray-200 dark:bg-zinc-800 rounded-2xl w-full max-w-3xl mx-auto"></div>
        <div className="space-y-2 max-w-3xl mx-auto">
          <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded-md w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded-md w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded-md w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsLoading;
