"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/koleksi", label: "Koleksi" },
  { href: "/custom", label: "Custom Order" },
  { href: "/proses", label: "Proses" },
  { href: "/galeri", label: "Galeri" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-heading text-xl font-bold">K</span>
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-primary">Kayu Nusantara</h1>
              <p className="text-xs text-secondary -mt-1">Keindahan Alami, Kualitas Abadi</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+6281234567890"
              className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">0812-3456-7890</span>
            </a>
            <Link
              href="/kontak"
              className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-accent transition-colors font-medium"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="tel:+6281234567890"
                  className="flex items-center space-x-2 text-primary py-2"
                >
                  <Phone size={18} />
                  <span className="font-medium">0812-3456-7890</span>
                </a>
                <Link
                  href="/kontak"
                  onClick={() => setIsOpen(false)}
                  className="block mt-2 bg-primary text-white px-6 py-3 rounded-lg text-center font-medium"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
