"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Filter, Star, Truck, Shield, Award, CheckCircle2 } from "lucide-react";
import { categories, featuredProducts, testimonials } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function KoleksiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16 bg-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80"
            alt="Koleksi"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
              Koleksi Furniture
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Temukan Furniture Impian Anda
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Jelajahi berbagai koleksi furniture kayu jati premium kami. Setiap produk dibuat dengan cinta dan keahlian pengrajin Jepara.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Filter, value: "150+", label: "Varian Produk" },
                { icon: Star, value: "4.9", label: "Rating" },
                { icon: Truck, value: "500+", label: "Terkirim" },
              ].map((stat) => (
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

      {/* Categories Grid */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
              Pilih Kategori
            </h2>
            <p className="text-secondary max-w-xl mx-auto">
              Klik kategori untuk melihat semua produk dalam kategori tersebut
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={`/koleksi/${category.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full mb-3">
                        {category.count}+ Produk
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                      <p className="text-white/80 text-sm mb-3">{category.description}</p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.features.map((feature) => (
                          <span key={feature} className="text-xs text-white/70 bg-white/10 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gold font-bold text-lg">{category.price}</span>
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
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
          >
            <div>
              <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-3">
                Best Seller
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                Produk Paling Diminati
              </h2>
              <p className="text-secondary">
                Furniture terlaris yang dipercaya ratusan pelanggan
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/koleksi/${product.category}`}>
                  <div className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.isBestSeller && (
                        <div className="absolute top-3 left-3 px-2 py-1 bg-gold text-accent text-xs font-semibold rounded-full flex items-center gap-1">
                          <Star size={10} fill="currentColor" />
                          Best Seller
                        </div>
                      )}
                      {product.isNew && (
                        <div className="absolute top-3 left-3 px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                          Baru
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-primary mb-1">{product.name}</h3>
                      <p className="text-secondary text-sm mb-2">{product.dimension}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">{formatPrice(product.price)}</span>
                        <ArrowRight size={16} className="text-primary group-hover:text-gold transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-secondary max-w-xl mx-auto">
              Keunggulan yang menjadikan kami berbeda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, title: "Kayu Jati Grade A", desc: "Hanya menggunakan material terbaik" },
              { icon: Shield, title: "Garansi 10 Tahun", desc: "Jaminan kualitas konstruksi" },
              { icon: Truck, title: "Kirim Seluruh Indonesia", desc: "Packing aman, pengiriman terpercaya" },
              { icon: Star, title: "Rating 4.9/5", desc: "Dipercaya 500+ pelanggan puas" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-secondary text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
              Kata Pelanggan Kami
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background rounded-xl p-5"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
                    <p className="text-secondary text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-12 lg:py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Tidak Menemukan yang Anda Cari?
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Kami juga menerima custom order sesuai keinginan Anda. Desain sendiri, ukuran sendiri, finishing sendiri!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/custom"
                className="inline-flex items-center px-6 py-3 bg-gold text-accent font-semibold rounded-xl hover:bg-gold/90 transition-colors"
              >
                Custom Order
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/30"
              >
                Konsultasi Gratis
              </Link>
            </div>

            {/* Benefits */}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {["Desain Sesuai Keinginan", "Ukuran Custom", "Konsultasi Gratis", "Garansi 10 Tahun"].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 size={16} className="text-gold" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
