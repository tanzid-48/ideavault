// all ideas with search and filters
export const getAllIdeas = async (filters = {}) => {
  try {
    const params = new URLSearchParams();

    if (filters.search) params.append("search", filters.search);
    if (filters.category) params.append("category", filters.category);

    const res = await fetch(
      `http://localhost:5000/ideas?${params.toString()}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Error in getAllIdeas:", error);
    return [];
  }
};

// get a single idea to show details
export const getSinglesIdea = async (_id, token) => {
  const res = await fetch(`http://localhost:5000/ideas/${_id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

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
export const getMyComments = async (userId, token) => {
  try {
    const res = await fetch(`http://localhost:5000/comment?userId=${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`, 
      },
      cache: "no-store",
    });

    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("My Interactions Fetch Error:", error);
    return [];
  }
};
// my ideas
export const getMyIdeas = async (userId) => {
  const res = await fetch(`http://localhost:5000/ideas?userId=${userId}`, {
    cache: "no-store",
  });
  if (!res.ok) return [];
  return await res.json();
};
