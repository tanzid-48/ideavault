import { getSavedIdeas } from "@/lib/data";
import IdeaCard from "@/components/IdeaCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FiBookmark } from "react-icons/fi";

const SavedIdeasPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const ideas = await getSavedIdeas(session?.user?.id);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8 border-b border-gray-100 dark:border-zinc-800 pb-5">
        <h1 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
          <FiBookmark className="h-5 w-5 text-amber-500" /> Saved Ideas
        </h1>
        <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
          {ideas.length} idea{ideas.length !== 1 ? "s" : ""} saved
        </p>
      </div>

      {ideas.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-gray-200 dark:border-zinc-800 rounded-2xl">
          <FiBookmark className="h-8 w-8 text-gray-300 dark:text-zinc-700 mx-auto mb-3" />
          <p className="text-sm font-semibold text-gray-400">No saved ideas yet!</p>
          <p className="text-xs text-gray-400 mt-1">Browse ideas and click 🔖 to save them.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea) => <IdeaCard key={idea._id} idea={idea} />)}
        </div>
      )}
    </div>
  );
};

export default SavedIdeasPage;