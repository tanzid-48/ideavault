import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "IdeaVault | Share & Discover Startup Ideas",
  description: "The ultimate vault for groundbreaking startup ideas and community feedback.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`light ${inter.className} h-full antialiased`}
    >
      <body className="min-h-full bg-gray-50 flex flex-col text-gray-900">
          <Navbar></Navbar>
        <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {children}</main>
          <Footer />
      </body>
    </html>
  );
}
