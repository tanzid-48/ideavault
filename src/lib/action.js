"use server";

import { revalidatePath } from "next/cache";
import { getCleanFormData } from "./utils";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const createIdea = async (formData) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  // JWT TOKEN
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const newIdea = getCleanFormData(formData);

  const ideaWithUser = {
    ...newIdea,
    userId: session?.user?.id,
    userEmail: session?.user?.email,
    userName: session?.user?.name,
  };

  const res = await fetch("http://localhost:5000/ideas", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(ideaWithUser),
  });

  if (!res.ok) {
    return { success: false, message: "Server error. Try again!" };
  }

  revalidatePath("/ideas");
  revalidatePath("/myIdeas");
  redirect("/myIdeas");
};
// delete idea
export const deleteIdea = async (id) => {
  const res = await fetch(`http://localhost:5000/ideas/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) return { success: false };
  revalidatePath("/myIdeas");
  return { success: true };
};
// updated idea
export const updateIdea = async (id, updatedData) => {
  const res = await fetch(`http://localhost:5000/ideas/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  if (!res.ok) return { success: false, message: "Failed to update." };
  revalidatePath(`/myIdeas`);
  revalidatePath("/myIdeas");
  return { success: true };
};

// Post data in to Database

export const postComment = async (commentData) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  // JWT TOKEN
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch("http://localhost:5000/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
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
