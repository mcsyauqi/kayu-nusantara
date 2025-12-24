"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Hammer, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-accent/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6">
              Furniture Kayu Jati Premium
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Furniture Kayu Jati Asli{" "}
              <span className="text-gold">Buatan Tangan</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              Setiap karya kami dibuat dengan kecintaan terhadap detail, menggunakan
              kayu jati pilihan dari hutan rakyat yang dikelola berkelanjutan.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/koleksi"
                className="inline-flex items-center px-8 py-4 bg-gold text-accent font-semibold rounded-lg hover:bg-gold/90 transition-colors"
              >
                Jelajahi Koleksi
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/custom"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
              >
                Custom Order
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                  <Shield size={20} className="text-gold" />
                </div>
                <span className="text-white/90 text-sm font-medium">Kayu Jati Asli</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                  <Hammer size={20} className="text-gold" />
                </div>
                <span className="text-white/90 text-sm font-medium">Handcrafted</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                  <Award size={20} className="text-gold" />
                </div>
                <span className="text-white/90 text-sm font-medium">Garansi 10 Tahun</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/20 rounded-2xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                alt="Premium Teak Furniture"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4">
                <p className="text-sm text-secondary">Pengalaman</p>
                <p className="text-3xl font-heading font-bold text-primary">20+ Tahun</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
