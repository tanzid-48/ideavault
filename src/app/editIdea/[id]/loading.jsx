import React from "react";

const EditIdeaLoading = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 min-h-screen">
      <div className="border border-gray-100 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-sm animate-pulse space-y-6">
        <div className="space-y-2">
          <div className="h-7 bg-gray-200 dark:bg-zinc-800 rounded-md w-48"></div>
          <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded-md w-72"></div>
        </div>

        <div className="space-y-5 pt-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded-md w-20"></div>
              <div className="h-11 bg-gray-200 dark:bg-zinc-800 rounded-xl w-full"></div>
            </div>
          ))}
          
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded-md w-28"></div>
            <div className="h-32 bg-gray-200 dark:bg-zinc-800 rounded-xl w-full"></div>
          </div>
        </div>

        <div className="pt-4 flex justify-end space-x-3">
          <div className="h-11 bg-gray-200 dark:bg-zinc-800 rounded-xl w-24"></div>
          <div className="h-11 bg-gray-200 dark:bg-zinc-800 rounded-xl w-36"></div>
        </div>
      </div>
    </div>
  );
};

export default EditIdeaLoading;