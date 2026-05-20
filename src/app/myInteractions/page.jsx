import CommentCard from "@/components/CommentCard";
import { getMyComments } from "@/lib/data";
import React from "react";

const MyInteractionsPage = async () => {
  //   todo butter auth
  const loggedInUserEmail = "tanzid@gmail.com";
  const userComments = await getMyComments(loggedInUserEmail);
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 min-h-screen">
      <div className="border-b border-gray-200 dark:border-zinc-800 pb-4">
        <h1 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
          My Interactions
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 mt-1">
          You have contributed {userComments.length} comment
          {userComments.length !== 1 ? "s" : ""} across discussions.
        </p>
      </div>

      <div className="space-y-4">
        {userComments && userComments.length > 0 ? (
          userComments.map((comment) => (
            <CommentCard
              key={comment._id}
              commentId={comment._id}
              userName={comment.userName || "Tanzid"}
              text={comment.text}
              timestamp={new Date(comment.createdAt).toLocaleDateString(
                "en-US",
                {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                },
              )}
              ideaTitle={comment.ideaTitle || "Project Discussion"}
              showActions={true}
            />
          ))
        ) : (
          <div className="text-center py-16 border border-dashed border-gray-250 dark:border-zinc-800 rounded-2xl bg-white/30 dark:bg-zinc-900/10">
            <p className="text-sm font-semibold text-gray-400 dark:text-zinc-500">
              You have not made any comments yet!
            </p>
            <p className="text-xs text-gray-400 dark:text-zinc-600 mt-1">
              Join conversations in the Ideas page to see them here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyInteractionsPage;
