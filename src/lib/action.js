"use server";

import { getCleanFormData } from "./utils";

export const createIdea = async (formData) => {
  const newIdea = getCleanFormData(formData);

  const res = await fetch("http://localhost:5000/ideas", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newIdea),
  });
   
  const data = await res.json();
 //TODO    
   return data;
};
