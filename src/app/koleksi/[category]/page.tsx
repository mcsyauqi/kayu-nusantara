"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Filter } from "lucide-react";
import { categories, featuredProducts } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

// Generate more products for each category
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">
            Kategori Tidak Ditemukan
          </h1>
          <Link href="/koleksi" className="text-gold hover:underline">
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
      <section className="pt-32 pb-16 bg-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/koleksi"
              className="inline-flex items-center text-white/80 hover:text-gold mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Kembali ke Koleksi
            </Link>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-white/80 max-w-2xl text-lg">
              {category.count}+ desain eksklusif dengan kualitas premium
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <p className="text-secondary">
              Menampilkan <span className="text-primary font-semibold">{products.length}</span> produk
            </p>
            <button className="inline-flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Filter size={18} className="mr-2 text-primary" />
              <span className="text-primary font-medium">Filter</span>
            </button>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-accent text-xs font-semibold rounded-full">
                      {product.material}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-primary mb-2">
                      {product.name}
                    </h3>
                    <p className="text-secondary text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        {formatPrice(product.price)}
                      </span>
                      <Link
                        href="/kontak"
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors"
                      >
                        <ArrowRight
                          size={20}
                          className="text-primary group-hover:text-white transition-colors"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-primary mb-8">
            Kategori Lainnya
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories
              .filter((c) => c.id !== categoryId)
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/koleksi/${cat.id}`}
                  className="group p-4 bg-background rounded-xl hover:bg-primary transition-colors"
                >
                  <h3 className="font-semibold text-primary group-hover:text-white transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-secondary group-hover:text-white/80 transition-colors">
                    {cat.count}+ produk
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Tertarik dengan Produk Kami?
          </h2>
          <p className="text-white/80 mb-8">
            Hubungi kami untuk informasi lebih lanjut atau kunjungi showroom kami
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center px-8 py-4 bg-gold text-accent font-semibold rounded-lg hover:bg-gold/90 transition-colors"
          >
            Hubungi Kami
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
