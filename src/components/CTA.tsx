"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-12 lg:py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Siap Mewujudkan Furniture Impian Anda?
          </h2>
          <p className="text-white/80 text-sm max-w-lg mx-auto mb-6">
            Konsultasikan kebutuhan furniture Anda dengan tim kami
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/kontak"
              className="inline-flex items-center px-5 py-2.5 bg-gold text-accent font-semibold rounded-lg hover:bg-gold/90 transition-colors text-sm"
            >
              Hubungi Kami
              <ArrowRight size={16} className="ml-1.5" />
            </Link>
            <a
              href="tel:+6281234567890"
              className="inline-flex items-center px-5 py-2.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30 text-sm"
            >
              <Phone size={16} className="mr-1.5" />
              0812-3456-7890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
