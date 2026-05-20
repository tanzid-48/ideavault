"use server";

import { revalidatePath } from "next/cache";
import { getCleanFormData } from "./utils";
import { redirect } from "next/navigation";

export const createIdea = async (formData) => {
  const newIdea = getCleanFormData(formData);

  const res = await fetch("http://localhost:5000/ideas", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newIdea),
  });

  if (!res.ok) {
    return { success: false, message: "Server error. Try again!" };
  }
  const data = await res.json();

  revalidatePath("/idea");
  revalidatePath("/myIdeas");
  redirect("/myIdeas");
  // return data;
};

// Post data in to Database

export const postComment = async (commentData) => {
  const res = await fetch("http://localhost:5000/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentData),
  });

  if (!res.ok) {
    return { success: false, message: "Failed to post comment on server." };
  }

  const data = await res.json();
  if (commentData.ideaId) {
  revalidatePath(`/ideas/${commentData.ideaId}`);
}
  revalidatePath("/myInteractions");
  return { success: true, message: "Comment posted successfully!" };
};

// Delete Comment
export const deleteComment = async (commentId, ideaId) => {
  const res = await fetch(`http://localhost:5000/comment/${commentId}`, {
    method: "DELETE",
  });
 
  if (!res.ok) {
    return { success: false, message: "Failed to delete comment." };
  }
 
  if (ideaId) {
    revalidatePath(`/ideas/${ideaId}`);
  }
  revalidatePath("/myInteractions");
  return { success: true, message: "Comment deleted!" };
};

// Update Comment
export const updateComment = async (commentId, newText, ideaId) => {
  const res = await fetch(`http://localhost:5000/comment/${commentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: newText }),
  });
 
  if (!res.ok) {
    return { success: false, message: "Failed to update comment." };
  }
 
  if (ideaId) {
    revalidatePath(`/ideas/${ideaId}`);
  }
  revalidatePath("/myInteractions");
  return { success: true, message: "Comment updated!" };
};