"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { aboutInfo } from "@/lib/data";

export default function AboutPreview() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-4">
              Tentang Kami
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              {aboutInfo.subtitle}
            </h2>
            <p className="text-secondary mb-6 leading-relaxed">
              {aboutInfo.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {aboutInfo.values.map((value) => (
                <div key={value.title} className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary text-sm">{value.title}</p>
                    <p className="text-secondary text-xs">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/proses"
              className="inline-flex items-center text-primary font-semibold hover:text-gold transition-colors"
            >
              Lihat Proses Pembuatan
              <ArrowRight size={16} className="ml-1.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                  alt="Workshop"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&q=80"
                  alt="Kayu Jati"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&q=80"
                  alt="Finishing"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600&q=80"
                  alt="Hasil"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
