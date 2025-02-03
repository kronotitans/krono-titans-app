"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Socials from "@/components/Socials";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed w-full bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <Image
                  src="/ktn.png"
                  alt="Krono Titans Logo"
                  width={42}
                  height={42}
                />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Krono Titans
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#roadmap"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Roadmap
              </a>
              <a
                href="https://whitepaper.kronotitans.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Whitepaper
              </a>
              <a
                href="#socials"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Socials
              </a>
            </nav>

            <a
              href="https://t.me/KVX_Sponsors"
              target="_blank"
              className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Invest in KTN Now
            </a>

            <button
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute right-0 top-0 w-64 h-full bg-gray-900 shadow-lg p-5 flex flex-col space-y-6">
          <button className="self-end" onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-white" />
          </button>
          <nav className="flex flex-col space-y-4">
            <a
              href="#roadmap"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Roadmap
            </a>
            <div className="border border-zinc-600 h-[0.5px]"></div>
            <a
              href="https://whitepaper.kronotitans.com"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Whitepaper
            </a>
            <div className="border border-zinc-600 h-[0.5px]"></div>
            <a
              href="#socials"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Socials
            </a>
            <div className="border border-zinc-600 h-[0.5px]"></div>
            <a
              href="https://t.me/KVX_Sponsors"
              target="_blank"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-center"
            >
              Invest in KTN Now
            </a>
          </nav>
        </div>
      </div>

      <main className="pt-24">
        <Hero />
        <Roadmap />
        <Socials />
      </main>
    </div>
  );
}
