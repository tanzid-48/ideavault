"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Edit2 } from "lucide-react";
import { useState } from "react";
import { updateComment } from "@/lib/action";
import { toast } from "sonner";

const EditCommentDialog = ({ commentId, ideaId, currentText, onEdit }) => {
  const [loading, setLoading] = useState(false);
  const [editText, setEditText] = useState(currentText);

  const handleSave = async () => {
    if (!editText.trim()) return;
    setLoading(true);
    const result = await updateComment(commentId, editText.trim(), ideaId);
    setLoading(false);

    if (result?.success) {
      toast.success("Comment updated!");
      onEdit && onEdit(commentId, editText.trim());
    } else {
      toast.error(result?.message || "Failed to update!");
    }
  };

  return (
    <AlertDialog>
      <Button
        isIconOnly
        size="sm"
        variant="light"
        className="text-gray-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-lg"
      >
        <Edit2 className="h-3.5 w-3.5" />
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Heading>Edit Comment</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <textarea
                rows={3}
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 resize-none transition-all"
              />
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                slot="close"
                variant="primary"
                isLoading={loading}
                onPress={handleSave}
                isDisabled={!editText.trim()}
              >
                Save Changes
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default EditCommentDialog;