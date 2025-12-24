"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Hammer, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/85 to-accent/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-gold rounded-full text-xs font-medium mb-4">
              Furniture Kayu Jati Premium
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Furniture Kayu Jati Asli <span className="text-gold">Buatan Tangan</span>
            </h1>
            <p className="text-base text-white/80 leading-relaxed mb-6 max-w-lg">
              Setiap karya kami dibuat dengan kecintaan terhadap detail, menggunakan
              kayu jati pilihan dari hutan rakyat yang dikelola berkelanjutan.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="/koleksi"
                className="inline-flex items-center px-5 py-2.5 bg-gold text-accent font-semibold rounded-lg hover:bg-gold/90 transition-colors text-sm"
              >
                Jelajahi Koleksi
                <ArrowRight size={16} className="ml-1.5" />
              </Link>
              <Link
                href="/custom"
                className="inline-flex items-center px-5 py-2.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30 text-sm"
              >
                Custom Order
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: Shield, label: "Kayu Jati Asli" },
                { icon: Hammer, label: "Handcrafted" },
                { icon: Award, label: "Garansi 10 Tahun" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center">
                    <item.icon size={16} className="text-gold" />
                  </div>
                  <span className="text-white/90 text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                alt="Premium Teak Furniture"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3">
                <p className="text-xs text-secondary">Pengalaman</p>
                <p className="text-2xl font-bold text-primary">20+ Tahun</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
