"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1.5 bg-gold/20 text-gold rounded-full text-xs font-medium mb-3">
            Produk Unggulan
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Pilihan Terbaik Kami
          </h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Koleksi furniture paling populer yang dipercaya oleh ratusan pelanggan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/koleksi/${product.category}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-gold text-accent text-xs font-semibold rounded-full">
                      {product.material}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-primary mb-1">{product.name}</h3>
                    <p className="text-secondary text-xs mb-2">{product.dimension}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-primary">{formatPrice(product.price)}</span>
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ArrowRight size={14} className="text-primary group-hover:text-white transition-colors" />
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
