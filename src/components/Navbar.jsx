"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import {
  Menu,
  X,
  Lightbulb,
  LogOut,
  Settings,
  PlusCircle,
  Folder,
  MessageSquare,
  Bookmark,
} from "lucide-react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import Image from "next/image";

const defaultAvatar =
  "https://cdn.create.vista.com/api/media/small/73040253/stock-vector-male-avatar-icon";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const isLoggedIn = !!session;

  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully!");
          setIsProfileOpen(false);
          setIsMobileMenuOpen(false);
          router.push("/signin");
          router.refresh();
        },
      },
    });
  };

  const navLink = (path) =>
    `font-semibold text-sm tracking-wide transition-colors flex items-center space-x-1.5 ${
      pathname === path
        ? "text-violet-600 dark:text-violet-400"
        : "text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
    }`;

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-indigo-600 font-extrabold text-xl tracking-wider"
            >
              <Lightbulb className="h-6 w-6 stroke-[2.5] text-violet-500 animate-pulse" />
              <span>
                Idea
                <span className="text-violet-600 dark:text-violet-400">
                  Vault
                </span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={navLink("/")}>
              <span>Home</span>
            </Link>
            <Link href="/ideas" className={navLink("/ideas")}>
              <span>Ideas</span>
            </Link>
            <Link href="/addIdea" className={navLink("/addIdea")}>
              <PlusCircle className="h-4 w-4 stroke-2" />
              <span>Add Idea</span>
            </Link>
            <Link href="/myIdeas" className={navLink("/myIdeas")}>
              <Folder className="h-4 w-4 stroke-2" />
              <span>My Ideas</span>
            </Link>
            <Link href="/myInteractions" className={navLink("/myInteractions")}>
              <MessageSquare className="h-4 w-4 stroke-2" />
              <span>My Interactions</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              className="p-2 text-gray-500 hover:text-indigo-600 bg-gray-50 hover:bg-indigo-50 rounded-xl transition-all shadow-sm border border-gray-100 flex items-center justify-center active:scale-95 cursor-pointer"
              title={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {isDarkMode ? (
                <HiOutlineSun className="h-5 w-5 text-amber-500" />
              ) : (
                <HiOutlineMoon className="h-5 w-5 text-indigo-600" />
              )}
            </button>

            {isPending ? (
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
            ) : isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center focus:outline-none p-0.5 rounded-full border-2 border-transparent hover:border-violet-500 transition-all shadow-sm cursor-pointer"
                >
                  <Image
                    alt={user?.name || "User"}
                    width={32}
                    height={32}
                    src={user?.image || defaultAvatar}
                    className="w-8 h-8 text-sm rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl py-2 border border-gray-100 dark:border-gray-700 z-50">
                    <div className="px-4 py-2 border-b border-gray-50 dark:border-gray-700">
                      <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
                        {user?.name || "Tanzid"}
                      </p>
                      <p className="text-xs text-gray-400 truncate">
                        {user?.email}
                      </p>
                    </div>

                    <Link
                      href="/profile"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-violet-50 dark:hover:bg-gray-700/50 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      <Settings className="h-4 w-4" />
                      <span>Profile Management</span>
                    </Link>
                    <Link
                      href="/savedIdeas"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Bookmark className="h-4 w-4" />
                      <span>Bookmark</span>
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-2 px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors text-left cursor-pointer"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/signin"
                  className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-indigo-600 text-white text-sm px-5 py-2 rounded-xl font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-md shadow-indigo-200"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              className="p-1.5 text-gray-500 bg-gray-50 rounded-lg border border-gray-100"
            >
              {isDarkMode ? (
                <HiOutlineSun className="h-4 w-4 text-amber-500" />
              ) : (
                <HiOutlineMoon className="h-4 w-4 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-indigo-600 focus:outline-none p-1"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 pt-2 pb-4 space-y-1.5 shadow-inner">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-gray-800 hover:text-violet-600"
          >
            Home
          </Link>
          <Link
            href="/ideas"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-gray-800 hover:text-violet-600"
          >
            Ideas
          </Link>
          <Link
            href="/addIdea"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-gray-800 hover:text-violet-600"
          >
            Add Idea
          </Link>
          <Link
            href="/myIdeas"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-gray-800 hover:text-violet-600"
          >
            My Ideas
          </Link>
          <Link
            href="/myInteractions"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-gray-800 hover:text-violet-600"
          >
            My Interactions
          </Link>

          <hr className="border-gray-100 dark:border-gray-800 my-1" />

          {isLoggedIn ? (
            <>
              <Link
                href="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-gray-800 hover:text-violet-600"
              >
                Profile Management
              </Link>
              <Link
                href="/savedIdeas"
                onClick={() => setIsMobileMenuOpen(false)}
               className="flex items-center space-x-2 px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                Bookmark
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left block px-3 py-2 rounded-xl text-base font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20"
              >
                Log Out
              </button>
            </>
          ) : (
            <div className="flex flex-col space-y-2 pt-1">
              <Link
                href="/signin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center border border-indigo-600 text-indigo-600 px-4 py-2 rounded-xl font-bold hover:bg-indigo-50 dark:hover:bg-gray-800"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-indigo-700 shadow-md"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
