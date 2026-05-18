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
 revalidatePath("/ideas");
redirect("/ideas");
// return data;
   
};
