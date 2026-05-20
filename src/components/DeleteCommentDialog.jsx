"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { deleteComment } from "@/lib/action";
import { toast } from "sonner";

const DeleteCommentDialog = ({ commentId, ideaId, onDelete }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    const result = await deleteComment(commentId, ideaId);
    setLoading(false);

    if (result?.success) {
      toast.success("Comment deleted!");
      onDelete && onDelete(commentId);
    } else {
      toast.error(result?.message || "Failed to delete!");
    }
  };

  return (
    <AlertDialog>
      <Button
        isIconOnly
        size="sm"
        variant="light"
        className="text-gray-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg"
      >
        <Trash2 className="h-3.5 w-3.5" />
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete this comment?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p className="text-sm text-gray-500 dark:text-zinc-400">
                This will permanently delete your comment. This action <strong>cannot be undone.</strong>
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                slot="close"
                variant="danger"
                isLoading={loading}
                onPress={handleDelete}
              >
                Delete Comment
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteCommentDialog;