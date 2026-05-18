
export const getAllIdeas = async () => {
  const res = await fetch("http://localhost:5000/ideas", {
    cache: "no-store",
  });

  if (!res.ok) {
    return { success: false, message: "Server error. Try again!" };
  }

  const data = await res.json();
  return data;
};
