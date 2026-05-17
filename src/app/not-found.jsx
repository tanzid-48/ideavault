"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { MoveLeft, HelpCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center text-center px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-200/20 rounded-full blur-3xl -z-10" />
      <div className="relative mb-4">
        <span className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-indigo-200 select-none tracking-tight">
          404
        </span>
        <div className="absolute -top-1 -right-3 bg-violet-100 text-violet-600 p-1.5 rounded-lg shadow-sm rotate-12">
          <HelpCircle className="h-4 w-4 stroke-[2.5]" />
        </div>
      </div>
      <div className="space-y-2 max-w-sm mx-auto mb-6">
        <h2 className="text-2xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          Page Not Found
        </h2>
        <p className="text-gray-500 font-medium text-xs sm:text-sm leading-relaxed">
          Sorry, the idea or page you are looking for could not be found in this
          vault. It might be broken or typed incorrectly.
        </p>
      </div>
      <Link href="/">
        <Button className="bg-indigo-500 text-white font-bold text-sm px-5 py-4 rounded-xl hover:bg-indigo-700 active:scale-95 transition-all shadow-md shadow-indigo-100 flex items-center gap-1.5">
          <MoveLeft className="h-3.5 w-3.5 stroke-[2.5]" />
          <span>Back to Home</span>
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
