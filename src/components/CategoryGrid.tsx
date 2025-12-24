"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";

export default function CategoryGrid() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
            Koleksi Kami
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
            Temukan Furniture Impian Anda
          </h2>
          <p className="text-secondary text-sm max-w-xl mx-auto">
            Berbagai pilihan furniture kayu jati berkualitas tinggi untuk setiap ruangan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/koleksi/${category.id}`} className="group block">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white mb-0.5">{category.name}</h3>
                    <p className="text-white/80 text-xs mb-2">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-semibold text-sm">{category.price}</span>
                      <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                        <ArrowRight size={14} className="text-white" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/koleksi"
            className="inline-flex items-center px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors text-sm"
          >
            Lihat Semua Koleksi
            <ArrowRight size={16} className="ml-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
