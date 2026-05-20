"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";
import { Form } from "@heroui/react";
import { postComment } from "@/lib/action";
import { toast } from "sonner";
import CommentCard from "./CommentCard";
import { authClient } from "@/lib/auth-client";

const CommentSection = ({ ideaId, ideaTitle, user }) => {
  const { data: session } = authClient.useSession();

  
 const [comment, setComment] = useState("");
 const [commentsList, setCommentsList] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData);

 
    const finalCommentData = {
      ideaId,
      ideaTitle,
      userId: session?.user?.id,
      userName: session?.user?.name,
      userEmail: session?.user?.email,
      text: data.commentText,
      createdAt: new Date().toISOString(),
    };
    
    const result = await postComment(finalCommentData);

    if (result?.success) {
      toast.success("Comment added successfully! ");
      setCommentsList([finalCommentData, ...commentsList]);
      setComment("");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <Form onSubmit={onSubmit}>
        <div className="relative mb-8">
          <input
            type="text"
            name="commentText"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full pl-4 pr-12 py-3.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl text-sm font-medium text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 shadow-sm transition-colors"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-indigo-600 dark:text-indigo-400 hover:scale-105 transition-transform"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </Form>

      <div className="space-y-3 mt-6">
        {commentsList.length > 0 ? (
          commentsList.map((singleComment, index) => (
            <CommentCard
              key={singleComment._id || index}
              userName={singleComment.userName}
             text={singleComment.text}
              timestamp={new Date(singleComment.createdAt).toLocaleDateString()}
            />
          ))
        ) : (
          <p className="text-sm text-center text-gray-400 dark:text-zinc-500 py-4">
            No comments yet. Be the first to join the discussion!
          </p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;

