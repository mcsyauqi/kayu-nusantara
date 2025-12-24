"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

const generateProducts = (categoryId: string, category: typeof categories[0]) => {
  const baseProducts = [
    { suffix: "Classic", priceMultiplier: 1 },
    { suffix: "Modern", priceMultiplier: 1.2 },
    { suffix: "Minimalis", priceMultiplier: 0.9 },
    { suffix: "Premium", priceMultiplier: 1.5 },
    { suffix: "Rustic", priceMultiplier: 1.1 },
    { suffix: "Traditional", priceMultiplier: 1.3 },
  ];

  const basePrice = parseInt(category.price.replace(/[^0-9]/g, ""));

  return baseProducts.map((variant, index) => ({
    id: `${categoryId}-${index + 1}`,
    name: `${category.name.split(" ")[0]} ${variant.suffix}`,
    price: Math.round(basePrice * variant.priceMultiplier),
    material: "Kayu Jati",
    image: category.image,
    description: `${category.name} dengan desain ${variant.suffix.toLowerCase()} yang elegan`,
  }));
};

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-3">Kategori Tidak Ditemukan</h1>
          <Link href="/koleksi" className="text-gold hover:underline text-sm">Kembali ke Koleksi</Link>
        </div>
      </div>
    );
  }

  const products = generateProducts(categoryId, category);

  return (
    <>
      <section className="pt-24 pb-8 lg:pt-28 lg:pb-10 bg-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={category.image} alt={category.name} className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/koleksi" className="inline-flex items-center text-white/80 hover:text-gold mb-4 transition-colors text-sm">
              <ArrowLeft size={16} className="mr-1.5" />
              Kembali ke Koleksi
            </Link>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">{category.name}</h1>
            <p className="text-white/80 text-sm">{category.count}+ desain eksklusif dengan kualitas premium</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-secondary text-sm mb-6">
            Menampilkan <span className="text-primary font-semibold">{products.length}</span> produk
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-gold text-accent text-xs font-semibold rounded-full">{product.material}</div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-primary mb-1">{product.name}</h3>
                    <p className="text-secondary text-xs mb-3">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-primary">{formatPrice(product.price)}</span>
                      <Link href="/kontak" className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ArrowRight size={14} className="text-primary group-hover:text-white transition-colors" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-primary mb-4">Kategori Lainnya</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {categories.filter((c) => c.id !== categoryId).map((cat) => (
              <Link key={cat.id} href={`/koleksi/${cat.id}`} className="group p-3 bg-background rounded-lg hover:bg-primary transition-colors">
                <h3 className="font-semibold text-primary group-hover:text-white transition-colors text-sm">{cat.name}</h3>
                <p className="text-xs text-secondary group-hover:text-white/80 transition-colors">{cat.count}+ produk</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Tertarik dengan Produk Kami?</h2>
          <p className="text-white/80 text-sm mb-5">Hubungi kami untuk informasi lebih lanjut</p>
          <Link href="/kontak" className="inline-flex items-center px-5 py-2.5 bg-gold text-accent font-semibold rounded-lg hover:bg-gold/90 transition-colors text-sm">
            Hubungi Kami
            <ArrowRight size={16} className="ml-1.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
