"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ZoomIn, Star, Camera, Users, Award, MessageSquare } from "lucide-react";
import { galleryImages, portfolioProjects, testimonials } from "@/lib/data";

const allCategories = ["Semua", ...new Set(galleryImages.map((img) => img.category))];

const stats = [
  { icon: Camera, value: "500+", label: "Foto Karya" },
  { icon: Users, value: "500+", label: "Pelanggan Puas" },
  { icon: Award, value: "15+", label: "Tahun Pengalaman" },
];

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "Semua" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16 bg-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80" alt="Gallery" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">Galeri</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Galeri Karya Kami</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Jelajahi koleksi foto furniture kayu jati buatan tangan kami. Setiap karya adalah bukti dedikasi dan keahlian pengrajin Jepara.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <stat.icon size={20} className="text-gold" />
                  <div className="text-left">
                    <p className="text-white font-bold">{stat.value}</p>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-wrap justify-center gap-2 mb-10">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? "bg-primary text-white" : "bg-white text-foreground hover:bg-primary/10 shadow-sm"}`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
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
                  className={`group cursor-pointer ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md h-full">
                    <img src={image.src} alt={image.alt} className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${index === 0 ? "h-64 md:h-full" : "h-44 sm:h-52"}`} />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/60 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <ZoomIn size={20} className="text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-accent/80 to-transparent">
                      <p className="text-white font-semibold">{image.alt}</p>
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10" onClick={() => setSelectedImage(null)}>
              <X size={24} className="text-white" />
            </button>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage.src} alt={selectedImage.alt} className="w-full max-h-[70vh] object-contain rounded-lg" />
              <div className="mt-4 text-center">
                <p className="text-white font-bold text-xl">{selectedImage.alt}</p>
                <p className="text-white/70">{selectedImage.description}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-gold/20 text-gold rounded-full text-sm">{selectedImage.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Featured Projects */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-3">Proyek Unggulan</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Proyek Besar Kami</h2>
            <p className="text-secondary max-w-xl mx-auto">Beberapa proyek besar yang telah kami kerjakan</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioProjects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <span className="text-gold text-xs font-medium">{project.type}</span>
                  <h3 className="font-bold text-primary text-lg mt-1">{project.title}</h3>
                  <p className="text-secondary text-sm mt-1">{project.location}</p>
                  <p className="text-foreground text-sm mt-3 line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Kata Pelanggan</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div key={testimonial.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
                    <p className="text-secondary text-xs">{testimonial.product}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Tertarik dengan Karya Kami?</h2>
            <p className="text-white/80 mb-6">Hubungi kami untuk mewujudkan furniture impian Anda</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gold text-accent font-semibold rounded-xl hover:bg-gold/90 transition-colors">
                <MessageSquare size={18} className="mr-2" />
                Chat via WhatsApp
              </a>
              <Link href="/custom" className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/30">
                Custom Order
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
