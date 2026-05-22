"use client";
import { FiBookmark } from "react-icons/fi";
import { useState } from "react";
import { saveIdea, unsaveIdea } from "@/lib/action";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

const SaveButton = ({ ideaId, initialSaved = false }) => {
  const { data: session } = authClient.useSession();
  const [saved, setSaved] = useState(initialSaved);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    if (!session) return toast.error("Please login first!");
    if (loading) return; 
    
    setLoading(true);
    
    if (saved) {
      const result = await unsaveIdea(ideaId, session.user.id);
      if (result?.success) {
        setSaved(false);
        toast.success("Removed from saved!");
      }
    } else {
      const result = await saveIdea(ideaId, session.user.id);
      if (result?.success) {
        setSaved(true);
        toast.success("Idea saved! 🔖");
      }
    }
    
    setLoading(false);
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className={`p-2 rounded-xl transition-all active:scale-95 disabled:opacity-50 ${
        saved
          ? "bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400"
          : "text-gray-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/30"
      }`}
    >
      <FiBookmark className={`h-4 w-4 transition-all ${saved ? "fill-current" : ""}`} />
    </button>
  );
};

export default SaveButton;