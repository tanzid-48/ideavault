import React from "react";
import { ArrowUpRight } from "lucide-react";
import DeleteCommentDialog from "./DeleteCommentDialog";
import EditCommentDialog from "./EditCommentDialog";

const CommentCard = ({
  commentId,
  ideaId,
  userName,
  text,
  timestamp,
  ideaTitle,
  showActions,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="p-4 bg-white dark:bg-zinc-900/50 border border-gray-200/60 dark:border-zinc-800 rounded-xl flex items-start justify-between gap-4 shadow-sm">
      <div className="space-y-1 flex-1">
        {ideaTitle && (
          <div className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400 tracking-wider flex items-center gap-0.5 mb-1">
            Commented on: {ideaTitle}
          </div>
        )}

        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
            {userName}
          </span>
          <span className="text-[10px] text-gray-400 font-medium">
            {timestamp}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-300 font-medium leading-relaxed">
          {text}
        </p>
      </div>

      {/* Actions */}
      {showActions && (
        <div className="flex items-center gap-1 shrink-0">
          <EditCommentDialog
            commentId={commentId}
            ideaId={ideaId}
            currentText={text}
            onEdit={onEdit}
          />
          <DeleteCommentDialog
            commentId={commentId}
            ideaId={ideaId}
            onDelete={onDelete}
          />
        </div>
      )}
    </div>
  );
};

export default CommentCard;
