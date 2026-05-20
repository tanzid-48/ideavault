// all ideas
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

// get a single idea to show details
export const getSinglesIdea = async (_id) => {
  const res = await fetch(`http://localhost:5000/ideas/${_id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch the requested idea");
  }

  return res.json();
};

// Trending Ideas Section

export const getTrendingIdeas = async () => {
  const res = await fetch("http://localhost:5000/trending-ideas", {
    cache: "no-store",
  });

  if (!res.ok) {
    return { success: false, message: "Server error. Try again!" };
  }

  const data = await res.json();
  return data;
};

// get comment data 
export const getMyComments = async (userEmail) => {
  try {
    const res = await fetch(`http://localhost:5000/comment?email=${userEmail}`, {
      cache: "no-store",
    });

    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("My Interactions Fetch Error:", error);
    return [];
  }
};
