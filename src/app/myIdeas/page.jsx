import { getMyIdeas } from "@/lib/data";
import MyIdeaCard from "@/components/MyIdeaCard";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const MyIdeasPage = async () => {

 const session = await auth.api.getSession({ headers: await headers() });
  const userId = session?.user?.id;
  const ideas = await getMyIdeas(userId);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-zinc-800 pb-5">
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white">
            My Ideas
          </h1>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
            {ideas.length} idea{ideas.length !== 1 ? "s" : ""} vaulted
          </p>
        </div>
        <Link
          href="/addIdea"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold shadow-lg shadow-indigo-600/20 active:scale-95 transition-all"
        >
          <PlusCircle className="h-4 w-4" /> Add New Idea
        </Link>
      </div>

      {ideas.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-gray-200 dark:border-zinc-800 rounded-2xl">
          <p className="text-sm font-semibold text-gray-400">No ideas yet!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea) => (
            <MyIdeaCard key={idea._id} idea={idea} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyIdeasPage;
