"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { galleryImages } from "@/lib/data";

export default function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 6);

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
        >
          <div>
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-3">
              Galeri
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
              Karya Terbaik Kami
            </h2>
            <p className="text-secondary max-w-lg">
              Lihat berbagai furniture yang telah kami buat untuk pelanggan di seluruh Indonesia
            </p>
          </div>
          <Link
            href="/galeri"
            className="inline-flex items-center text-primary font-semibold hover:text-gold transition-colors whitespace-nowrap"
          >
            Lihat Semua
            <ArrowRight size={16} className="ml-1.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl shadow-md ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  index === 0 ? "h-64 md:h-full" : "h-40 md:h-48"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold">{image.alt}</p>
                <p className="text-white/70 text-sm">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
