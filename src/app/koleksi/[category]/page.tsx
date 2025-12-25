"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Shield, Truck, CheckCircle2, Phone, MessageSquare } from "lucide-react";
import { categories, testimonials, materials } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

const generateProducts = (categoryId: string, category: typeof categories[0]) => {
  const baseProducts = [
    { suffix: "Classic", priceMultiplier: 1, desc: "Desain klasik yang tak lekang waktu" },
    { suffix: "Modern", priceMultiplier: 1.2, desc: "Gaya kontemporer untuk rumah modern" },
    { suffix: "Minimalis", priceMultiplier: 0.9, desc: "Simpel namun elegan" },
    { suffix: "Premium", priceMultiplier: 1.5, desc: "Material dan finishing terbaik" },
    { suffix: "Rustic", priceMultiplier: 1.1, desc: "Nuansa alami kayu jati" },
    { suffix: "Traditional", priceMultiplier: 1.3, desc: "Sentuhan ukiran Jepara" },
    { suffix: "Scandinavian", priceMultiplier: 1.15, desc: "Inspirasi Nordic modern" },
    { suffix: "Industrial", priceMultiplier: 1.25, desc: "Kombinasi kayu dan metal" },
  ];

  const basePrice = parseInt(category.price.replace(/[^0-9]/g, ""));

  return baseProducts.map((variant, index) => ({
    id: `${categoryId}-${index + 1}`,
    name: `${category.name.split(" ")[0]} ${variant.suffix}`,
    price: Math.round(basePrice * variant.priceMultiplier),
    material: "Kayu Jati Grade A",
    image: category.image,
    description: variant.desc,
    isNew: index < 2,
    isBestSeller: index === 0 || index === 3,
  }));
};

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-background">
        <div className="text-center px-4">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🔍</span>
          </div>
          <h1 className="text-2xl font-bold text-primary mb-3">Kategori Tidak Ditemukan</h1>
          <p className="text-secondary mb-6">Maaf, kategori yang Anda cari tidak tersedia.</p>
          <Link href="/koleksi" className="inline-flex items-center text-gold hover:underline">
            <ArrowLeft size={16} className="mr-1.5" />
            Kembali ke Koleksi
          </Link>
        </div>
      </div>
    );
  }

  const products = generateProducts(categoryId, category);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16 bg-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={category.image} alt={category.name} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/90 to-accent/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/koleksi" className="inline-flex items-center text-white/80 hover:text-gold mb-6 transition-colors">
              <ArrowLeft size={18} className="mr-2" />
              Kembali ke Koleksi
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
                  {category.count}+ Desain Tersedia
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {category.name}
                </h1>
                <p className="text-white/80 text-lg mb-6">
                  {category.description}. Setiap produk dibuat dengan teliti oleh pengrajin berpengalaman.
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {category.features.map((feature) => (
                    <span key={feature} className="flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full text-sm">
                      <CheckCircle2 size={14} className="text-gold" />
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan produk kategori ${category.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-gold text-accent font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                  >
                    <MessageSquare size={18} className="mr-2" />
                    Tanya via WhatsApp
                  </a>
                  <a
                    href="tel:+6281234567890"
                    className="inline-flex items-center px-5 py-2.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
                  >
                    <Phone size={18} className="mr-2" />
                    Telepon Sekarang
                  </a>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-white/70 text-sm">Harga Mulai</p>
                      <p className="text-gold font-bold text-2xl">{category.price}</p>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Star size={16} className="text-gold fill-gold" />
                      <span>4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-primary">Semua Produk</h2>
              <p className="text-secondary">
                Menampilkan <span className="text-primary font-semibold">{products.length}</span> produk
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                  <div className="relative overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">Baru</span>
                      )}
                      {product.isBestSeller && (
                        <span className="px-2 py-1 bg-gold text-accent text-xs font-semibold rounded-full flex items-center gap-1">
                          <Star size={10} fill="currentColor" />
                          Best Seller
                        </span>
                      )}
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-full">{product.material}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-primary mb-1">{product.name}</h3>
                    <p className="text-secondary text-sm mb-3">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
                      <a
                        href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan ${product.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors"
                      >
                        <MessageSquare size={16} className="text-primary group-hover:text-white transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Info */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Material Berkualitas</h2>
            <p className="text-secondary max-w-xl mx-auto">
              Kami hanya menggunakan material terbaik untuk hasil maksimal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {materials.map((material, index) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background rounded-xl overflow-hidden"
              >
                <img src={material.image} alt={material.name} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <h3 className="font-bold text-primary mb-2">{material.name}</h3>
                  <p className="text-secondary text-sm mb-3">{material.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {material.features.map((feature) => (
                      <span key={feature} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-primary mb-2">Kategori Lainnya</h2>
            <p className="text-secondary">Jelajahi koleksi furniture lainnya</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.filter((c) => c.id !== categoryId).map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link href={`/koleksi/${cat.id}`} className="group block">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <img src={cat.image} alt={cat.name} className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="p-3">
                      <h3 className="font-semibold text-primary text-sm group-hover:text-gold transition-colors">{cat.name}</h3>
                      <p className="text-xs text-secondary">{cat.count}+ produk</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-primary">Testimoni Pelanggan</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.slice(0, 2).map((testimonial, index) => (
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
                <p className="text-foreground leading-relaxed mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Tertarik dengan {category.name}?
            </h2>
            <p className="text-white/80 mb-6">
              Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gold text-accent font-semibold rounded-xl hover:bg-gold/90 transition-colors"
              >
                <MessageSquare size={18} className="mr-2" />
                Chat via WhatsApp
              </a>
              <Link
                href="/kontak"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/30"
              >
                Hubungi Kami
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {[
                { icon: Shield, text: "Garansi 10 Tahun" },
                { icon: Truck, text: "Kirim Seluruh Indonesia" },
                { icon: Star, text: "Rating 4.9/5" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/80">
                  <item.icon size={16} className="text-gold" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
