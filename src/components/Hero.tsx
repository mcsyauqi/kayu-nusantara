"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Truck, Award, Phone } from "lucide-react";

const trustBadges = [
  { icon: Shield, text: "Garansi 10 Tahun" },
  { icon: Truck, text: "Kirim Seluruh Indonesia" },
  { icon: Award, text: "Kayu Jati Grade A" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80"
          alt="Furniture Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-accent/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6"
            >
              Furniture Kayu Jati Premium Jepara
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Keindahan Alami,{" "}
              <span className="text-gold">Kualitas Abadi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-white/90 mb-8 max-w-lg leading-relaxed"
            >
              Furniture kayu jati berkualitas tinggi dengan sentuhan pengrajin
              berpengalaman Jepara. Dibuat khusus untuk rumah impian Anda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                href="/koleksi"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-gold text-accent font-semibold rounded-xl hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl"
              >
                Lihat Koleksi
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href="/custom"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/30 backdrop-blur-sm"
              >
                Custom Order
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg"
                >
                  <badge.icon size={18} className="text-gold" />
                  <span className="text-white text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Featured Image & Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gold/20 rounded-full blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80"
                  alt="Featured Furniture"
                  className="w-full h-64 object-cover rounded-2xl mb-4"
                />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm">Produk Terlaris</p>
                    <p className="text-white font-bold text-lg">Meja Makan Jengki</p>
                    <p className="text-gold font-semibold">Rp 15.000.000</p>
                  </div>
                  <Link
                    href="/koleksi/meja-makan"
                    className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center hover:bg-gold/90 transition-colors"
                  >
                    <ArrowRight size={20} className="text-accent" />
                  </Link>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+6281234567890"
                    className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <Phone size={20} className="text-white" />
                  </a>
                  <div>
                    <p className="text-xs text-secondary">Hubungi Kami</p>
                    <p className="font-bold text-primary">0812-3456-7890</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
