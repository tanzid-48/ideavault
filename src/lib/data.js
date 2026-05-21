// all ideas with search and filters
export const getAllIdeas = async (filters = {}) => {
  try {
    const params = new URLSearchParams();

    if (filters.search) params.append("search", filters.search);
    if (filters.category) params.append("category", filters.category);

    const res = await fetch(
      `https://ideavault-server-ah86.onrender.com/ideas?${params.toString()}`,
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
  try {
    const res = await fetch(`https://ideavault-server-ah86.onrender.com/ideas/${_id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) return null; 

    return res.json();
  } catch (error) {
    console.error("getSinglesIdea error:", error);
    return null;
  }
};

// Trending Ideas Section

export const getTrendingIdeas = async () => {
  const res = await fetch("https://ideavault-server-ah86.onrender.com/trending-ideas", {
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
    const res = await fetch(`https://ideavault-server-ah86.onrender.com/comment?userId=${userId}`, {
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
  const res = await fetch(`https://ideavault-server-ah86.onrender.com/ideas?userId=${userId}`, {
    cache: "no-store",
  });
  if (!res.ok) return [];
  return await res.json();
};

// save data fetch for Bookmark
export const getSavedIdeas = async (userId) => {
  const res = await fetch(`https://ideavault-server-ah86.onrender.com/saved?userId=${userId}`, {
    cache: "no-store",
  });
  if (!res.ok) return [];
  return await res.json();
};
// Check saved status
export const checkSaved = async (userId, ideaId) => {
  const res = await fetch(`https://ideavault-server-ah86.onrender.com/saved?userId=${userId}`, {
    cache: "no-store",
  });
  if (!res.ok) return false;
  const saved = await res.json();
  return saved.some(idea => idea._id === ideaId);
};