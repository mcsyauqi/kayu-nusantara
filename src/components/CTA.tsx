"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Siap Mewujudkan Furniture Impian Anda?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Konsultasikan kebutuhan furniture Anda dengan tim kami. Kami siap membantu
            mewujudkan ruangan impian Anda dengan furniture kayu jati berkualitas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontak"
              className="inline-flex items-center px-8 py-4 bg-gold text-accent font-semibold rounded-lg hover:bg-gold/90 transition-colors"
            >
              Hubungi Kami
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <a
              href="tel:+6281234567890"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              <Phone size={20} className="mr-2" />
              0812-3456-7890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
