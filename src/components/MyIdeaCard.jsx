"use client";

import { ArrowUpRight, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { deleteIdea } from "@/lib/action";
import { toast } from "sonner";
import { AlertDialog, Button } from "@heroui/react";

const MyIdeaCard = ({ idea }) => {
  const { _id, title, category, shortDescription, image } = idea;
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    const result = await deleteIdea(_id);
    setLoading(false);
    if (result?.success) {
      toast.success("Idea deleted!");
    } else {
      toast.error("Failed to delete idea.");
    }
  };

  return (
    <div className="group flex flex-col bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden hover:border-gray-300 dark:hover:border-zinc-600 hover:-translate-y-0.5 transition-all duration-200">

      {/* Image */}
      <div className="h-48 w-full overflow-hidden relative bg-zinc-100 dark:bg-zinc-800">
        <Image src={image} alt={title} fill className="object-cover" />
        <span className="absolute top-4 left-4 bg-cyan-600 dark:bg-black/75 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-2 mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">{title}</h2>
          <p className="text-sm text-gray-500 dark:text-zinc-400 font-medium line-clamp-2 leading-relaxed">
            {shortDescription}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-100 dark:border-zinc-800/80 flex items-center justify-between">

          {/* Explore */}
          <Link
            href={`/ideas/${_id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:gap-2 transition-all"
          >
            <span>Explore Thesis</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {/* Edit + Delete */}
          <div className="flex items-center gap-1">

            {/* Edit */}
            <Link
              href={`/editIdea/${_id}`}
              className="p-2 rounded-xl text-gray-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors"
            >
              <Pencil className="h-3.5 w-3.5" />
            </Link>

            {/* Delete */}
            <AlertDialog>
              <Button
                isIconOnly
                size="sm"
                variant="light"
                className="p-2 rounded-xl text-gray-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>

              <AlertDialog.Backdrop>
                <AlertDialog.Container>
                  <AlertDialog.Dialog className="sm:max-w-[400px]">
                    <AlertDialog.CloseTrigger />
                    <AlertDialog.Header>
                      <AlertDialog.Icon status="danger" />
                      <AlertDialog.Heading>Delete this idea?</AlertDialog.Heading>
                    </AlertDialog.Header>
                    <AlertDialog.Body>
                      <p className="text-sm text-gray-500 dark:text-zinc-400">
                        This will permanently delete <strong>{title}</strong>. This action cannot be undone.
                      </p>
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                      <Button slot="close" variant="tertiary">Cancel</Button>
                      <Button slot="close" variant="danger" isLoading={loading} onPress={handleDelete}>
                        Delete Idea
                      </Button>
                    </AlertDialog.Footer>
                  </AlertDialog.Dialog>
                </AlertDialog.Container>
              </AlertDialog.Backdrop>
            </AlertDialog>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyIdeaCard;