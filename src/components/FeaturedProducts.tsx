"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { featuredProducts } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function FeaturedProducts() {
  return (
    <section className="py-12 lg:py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-gold rounded-full text-xs font-medium mb-3">
              Produk Unggulan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Koleksi Terbaik Kami
            </h2>
            <p className="text-white/70 max-w-lg">
              Furniture pilihan dengan kualitas premium dan desain eksklusif
            </p>
          </div>
          <Link
            href="/koleksi"
            className="inline-flex items-center text-gold font-semibold hover:text-gold/80 transition-colors whitespace-nowrap"
          >
            Lihat Semua Produk
            <ArrowRight size={16} className="ml-1.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.slice(0, 6).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                        Baru
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="px-2.5 py-1 bg-gold text-accent text-xs font-semibold rounded-full flex items-center gap-1">
                        <Star size={10} fill="currentColor" />
                        Best Seller
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-primary text-white text-xs font-medium rounded-full">
                      {product.material}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-secondary text-sm mb-3">{product.dimension}</p>

                  <div className="flex items-end justify-between">
                    <div>
                      {product.originalPrice && (
                        <p className="text-secondary text-sm line-through">
                          {formatPrice(product.originalPrice)}
                        </p>
                      )}
                      <p className="text-xl font-bold text-primary">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                    <Link
                      href={`/koleksi/${product.category}`}
                      className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors"
                    >
                      <ArrowRight size={18} className="text-primary group-hover:text-white transition-colors" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { label: "Produk Ready Stock", value: "50+" },
            { label: "Kategori Tersedia", value: "6" },
            { label: "Varian Desain", value: "150+" },
            { label: "Harga Mulai", value: "Rp 2.8jt" },
          ].map((item) => (
            <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-gold mb-1">{item.value}</p>
              <p className="text-white/70 text-sm">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
