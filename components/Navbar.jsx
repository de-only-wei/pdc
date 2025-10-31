"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-bold text-lg">
              PDC
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-[#2d3748]">
                Prosper Dynamic
              </div>
              <div className="text-xs text-[#4a5568]">Construction</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors hover:text-[#1e3a5f] rounded-md",
                  pathname === link.href
                    ? "text-[#1e3a5f] bg-[#e2e8f0]"
                    : "text-[#4a5568]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="gold" className="ml-4">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[#4a5568] hover:text-[#1e3a5f] hover:bg-[#e2e8f0]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === link.href
                    ? "text-[#1e3a5f] bg-[#e2e8f0]"
                    : "text-[#4a5568] hover:text-[#1e3a5f] hover:bg-[#e2e8f0]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="gold" className="w-full mt-2">
                Get in Touch
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}


