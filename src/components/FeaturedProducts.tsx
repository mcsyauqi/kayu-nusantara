"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { featuredProducts } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
              Produk Unggulan
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Pilihan Terbaik Kami
            </h2>
            <p className="text-white/70 max-w-xl">
              Koleksi furniture paling populer yang dipercaya oleh ratusan pelanggan
            </p>
          </div>

          <div className="flex space-x-3 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/koleksi/${product.category}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-accent text-xs font-semibold rounded-full">
                      {product.material}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-bold text-primary mb-2">
                      {product.name}
                    </h3>
                    <p className="text-secondary text-sm mb-3">{product.dimension}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        {formatPrice(product.price)}
                      </span>
                      <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ArrowRight
                          size={18}
                          className="text-primary group-hover:text-white transition-colors"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
