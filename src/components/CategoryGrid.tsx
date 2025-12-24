"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Koleksi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Temukan Furniture Impian Anda
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Berbagai pilihan furniture kayu jati berkualitas tinggi untuk setiap ruangan di rumah Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/koleksi/${category.id}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-heading font-bold text-white mb-1">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold font-semibold">{category.price}</span>
                      <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                        <ArrowRight size={18} className="text-white" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/koleksi"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors"
          >
            Lihat Semua Koleksi
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
