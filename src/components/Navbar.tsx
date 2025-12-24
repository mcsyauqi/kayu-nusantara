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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-primary leading-none">Kayu Nusantara</p>
              <p className="text-[10px] text-secondary leading-none mt-0.5">Keindahan Alami, Kualitas Abadi</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+6281234567890" className="flex items-center gap-1.5 text-primary text-sm">
              <Phone size={14} />
              <span className="font-medium">0812-3456-7890</span>
            </a>
            <Link
              href="/kontak"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition-colors text-sm font-medium"
            >
              Hubungi Kami
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-primary">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 text-foreground hover:text-primary transition-colors font-medium border-b border-gray-100 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2">
                <a href="tel:+6281234567890" className="flex items-center gap-2 text-primary py-2">
                  <Phone size={16} />
                  <span className="font-medium">0812-3456-7890</span>
                </a>
                <Link
                  href="/kontak"
                  onClick={() => setIsOpen(false)}
                  className="block mt-2 bg-primary text-white py-2.5 rounded-lg text-center font-medium"
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
