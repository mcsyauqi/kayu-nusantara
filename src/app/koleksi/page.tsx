"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";

export default function KoleksiPage() {
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
              Koleksi Furniture
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Temukan Furniture Impian Anda
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Jelajahi berbagai koleksi furniture kayu jati premium kami,
              dirancang dengan keindahan dan dibuat untuk bertahan selamanya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full">
                          {category.count}+ Produk
                        </span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm mb-4">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gold font-semibold text-lg">{category.price}</span>
                        <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                          <ArrowRight size={20} className="text-white" />
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

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Tidak Menemukan yang Anda Cari?
          </h2>
          <p className="text-white/80 mb-8">
            Kami juga menerima custom order sesuai dengan desain dan ukuran yang Anda inginkan
          </p>
          <Link
            href="/custom"
            className="inline-flex items-center px-8 py-4 bg-gold text-accent font-semibold rounded-lg hover:bg-gold/90 transition-colors"
          >
            Custom Order
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
