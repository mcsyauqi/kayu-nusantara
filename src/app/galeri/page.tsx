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

  const filteredImages = selectedCategory === "Semua" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <section className="pt-24 pb-10 lg:pt-28 lg:pb-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-gold rounded-full text-xs font-medium mb-3">Galeri</span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Galeri Karya Kami</h1>
            <p className="text-white/80 max-w-lg mx-auto text-sm">Lihat koleksi furniture kayu jati buatan tangan kami</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? "bg-primary text-white" : "bg-white text-foreground hover:bg-primary/10"}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md">
                    <img src={image.src} alt={image.alt} className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/60 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                          <ZoomIn size={18} className="text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-accent/80 to-transparent">
                      <p className="text-white font-medium text-sm">{image.alt}</p>
                      <p className="text-white/70 text-xs">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredImages.length === 0 && <p className="text-secondary text-center py-8 text-sm">Tidak ada gambar untuk kategori ini</p>}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" onClick={() => setSelectedImage(null)}>
              <X size={20} className="text-white" />
            </button>
            <motion.img initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[80vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-white font-bold text-lg">{selectedImage.alt}</p>
              <p className="text-white/70 text-sm">{selectedImage.category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-10 lg:py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Tertarik dengan Karya Kami?</h2>
          <p className="text-white/80 text-sm mb-5">Hubungi kami untuk mewujudkan furniture impian Anda</p>
          <Link href="/kontak" className="inline-flex items-center px-5 py-2.5 bg-gold text-accent font-semibold rounded-lg hover:bg-gold/90 transition-colors text-sm">
            Hubungi Kami
            <ArrowRight size={16} className="ml-1.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
