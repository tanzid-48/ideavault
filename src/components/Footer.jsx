"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineLightBulb, HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

  const currentYear = new Date().getFullYear();
  const footerLink = "text-sm text-gray-600 hover:text-indigo-600 transition-colors font-medium";

  return (
    <footer className="bg-indigo-100/30 border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-indigo-600 font-extrabold text-xl tracking-wider">
              <HiOutlineLightBulb className="h-6 w-6 text-violet-500 animate-pulse" />
              <span>Idea<span className="text-violet-600">Vault</span></span>
            </Link>
            <p className="text-sm text-gray-600 font-medium leading-relaxed">
              The ultimate vault for groundbreaking startup ideas. Secure, collaborate, and grow your innovation with the community.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 flex flex-col">
              <li><Link href="/" className={footerLink}>Home</Link></li>
              <li><Link href="/ideas" className={footerLink}>Explore Ideas</Link></li>
              <li><Link href="/addIdea" className={footerLink}>Add New Idea</Link></li>
              <li><Link href="/categories" className={footerLink}>Categories</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 font-medium">
              <li className="flex items-center space-x-2">
                <HiOutlineMail className="h-4 w-4 text-violet-500 flex-shrink-0" />
                <span className="truncate">mdtanzid.525@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiOutlinePhone className="h-4 w-4 text-violet-500 flex-shrink-0" />
                <span>01798546510</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiOutlineLocationMarker className="h-4 w-4 text-violet-500 flex-shrink-0" />
                <span>Bogura, Bangladesh</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Follow Us</h4>
            <p className="text-xs text-gray-400 font-medium mb-2">Connect with our global community.</p>
            <div className="flex items-center space-x-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 bg-gray-50 hover:bg-indigo-50 text-gray-500 hover:text-indigo-600 rounded-xl transition-all shadow-sm flex items-center justify-center"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 bg-gray-50 hover:bg-indigo-50 text-gray-500 hover:text-indigo-600 rounded-xl transition-all shadow-sm flex items-center justify-center"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 bg-gray-50 hover:bg-indigo-50 text-gray-500 hover:text-indigo-600 rounded-xl transition-all shadow-sm flex items-center justify-center"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>

            </div>
          </div>

        </div>
        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-semibold tracking-wide">
            &copy; {currentYear} Tanzid Mondol. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-400 font-medium">
            <Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;