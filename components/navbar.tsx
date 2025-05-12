"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <img src="/AKLogoBlack.jpg" alt="Arsitek Kode Logo" className="w-12 h-12 rounded-full" />
            <span className="text-xl font-semibold">
              <span style={{ color: "#F2F2F2" }}>Arsitek </span>
              <span style={{ color: "#74AEB1" }}>Kode</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-white hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#works" className="text-white hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#techstack" className="text-white hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#testimonials" className="text-white hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Button asChild>
              <a href="https://wa.me/6282169702020?text=Halo%20saya%20tertarik%20dengan%20jasa%20Anda%20di%20Arsitek%20Kode" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-4">
              <Link href="#services" className="text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="#works" className="text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
              <Link href="#skills" className="text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Skills
              </Link>
              <Link href="#testimonials" className="text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Testimonials
              </Link>
              <Button asChild className="w-full">
                <a href="https://wa.me/6282169702020?text=Halo%20saya%20tertarik%20dengan%20jasa%20Anda%20di%20Arsitek%20Kode" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
