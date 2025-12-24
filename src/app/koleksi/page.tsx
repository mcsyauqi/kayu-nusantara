"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";

export default function KoleksiPage() {
  return (
    <>
      <section className="pt-24 pb-10 lg:pt-28 lg:pb-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-gold rounded-full text-xs font-medium mb-3">
              Koleksi Furniture
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Temukan Furniture Impian Anda
            </h1>
            <p className="text-white/80 max-w-lg mx-auto text-sm">
              Jelajahi berbagai koleksi furniture kayu jati premium kami
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="relative overflow-hidden rounded-xl shadow-md">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-block px-2 py-1 bg-gold/20 text-gold text-xs rounded-full mb-2">
                        {category.count}+ Produk
                      </span>
                      <h3 className="text-lg font-bold text-white mb-1">{category.name}</h3>
                      <p className="text-white/80 text-xs mb-3">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gold font-semibold text-sm">{category.price}</span>
                        <span className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                          <ArrowRight size={16} className="text-white" />
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

      <section className="py-10 lg:py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Tidak Menemukan yang Anda Cari?
          </h2>
          <p className="text-white/80 text-sm mb-5">
            Kami juga menerima custom order sesuai keinginan Anda
          </p>
          <Link
            href="/custom"
            className="inline-flex items-center px-5 py-2.5 bg-gold text-accent font-semibold rounded-lg hover:bg-gold/90 transition-colors text-sm"
          >
            Custom Order
            <ArrowRight size={16} className="ml-1.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
