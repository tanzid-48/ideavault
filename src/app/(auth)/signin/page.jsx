"use client";
import { Suspense } from "react";
import LoginPage from "@/components/LoginPage";

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="flex h-screen justify-center items-center">Loading...</div>}>
      <LoginPage />
    </Suspense>
  );
}