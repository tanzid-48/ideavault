import { getSinglesIdea } from "@/lib/data";
import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import CommentSection from "@/components/CommentSection";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const idea = await getSinglesIdea(id);

  const {
    title,
    category,
    shortDescription,
    details,
    problemStatement,
    solution,
    targetAudience,
    estimatedBudget,
    image,
  } = idea;

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-zinc-950 px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 pb-5 mb-8">
          <div className="text-sm text-gray-500 dark:text-zinc-400">
            Category:{" "}
            <span className="text-gray-900 dark:text-white font-bold">
              {category}
            </span>
          </div>
          <Link
            href="/ideas"
            className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Ideas
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800/80 rounded-[2rem] overflow-hidden p-6 sm:p-8 mb-12 shadow-xl shadow-gray-100/40 dark:shadow-none">
          <div className="relative w-full h-[280px] md:h-auto rounded-2xl overflow-hidden select-none">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">
              {shortDescription}
            </p>

            <div className="space-y-4 text-xs sm:text-sm border-t border-gray-100 dark:border-zinc-800/60 pt-4">
              <p>
                <strong className="text-gray-900 dark:text-zinc-200 block mb-0.5">
                  Problem Statement:
                </strong>{" "}
                <span className="text-gray-600 dark:text-zinc-400 font-medium">
                  {problemStatement}
                </span>
              </p>
              <p>
                <strong className="text-gray-900 dark:text-zinc-200 block mb-0.5">
                  Solution:
                </strong>{" "}
                <span className="text-gray-600 dark:text-zinc-400 font-medium">
                  {solution}
                </span>
              </p>
              <p>
                <strong className="text-gray-900 dark:text-zinc-200 block mb-0.5">
                  Details:
                </strong>{" "}
                <span className="text-gray-600 dark:text-zinc-400 font-medium">
                  {details}
                </span>
              </p>
              <p>
                <strong className="text-gray-900 dark:text-zinc-200 block mb-0.5">
                  Target Audience:
                </strong>{" "}
                <span className="text-gray-600 dark:text-zinc-400 font-medium">
                  {targetAudience}
                </span>
              </p>
              <p className="pt-1">
                <strong className="text-gray-900 dark:text-zinc-200">
                  Estimated Budget:
                </strong>{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-bold ml-1">
                  ${estimatedBudget?.toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        </div>
       <div className="max-w-3xl mx-auto border-t border-gray-200 dark:border-zinc-800 pt-10">
          <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-6 tracking-tight">
            Discussion & Feedback
          </h3>
        </div>
       <CommentSection ideaId={id} 
          ideaTitle={title}></CommentSection>
      </div>
    </div>
  );
};

export default DetailsPage;
