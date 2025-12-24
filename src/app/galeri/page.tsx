"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ZoomIn } from "lucide-react";
import { galleryImages } from "@/lib/data";

const allCategories = ["Semua", ...new Set(galleryImages.map((img) => img.category))];

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    selectedCategory === "Semua"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
              Galeri
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Galeri Karya Kami
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Lihat koleksi furniture kayu jati buatan tangan yang telah kami
              hasilkan untuk pelanggan-pelanggan kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/60 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                          <ZoomIn size={24} className="text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-accent/80 to-transparent">
                      <p className="text-white font-medium">{image.alt}</p>
                      <p className="text-white/70 text-sm">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary">Tidak ada gambar untuk kategori ini</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} className="text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-white font-heading text-xl">{selectedImage.alt}</p>
              <p className="text-white/70">{selectedImage.category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Tertarik dengan Karya Kami?
          </h2>
          <p className="text-white/80 mb-8">
            Hubungi kami untuk mewujudkan furniture impian Anda
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center px-8 py-4 bg-gold text-accent font-semibold rounded-lg hover:bg-gold/90 transition-colors"
          >
            Hubungi Kami
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
