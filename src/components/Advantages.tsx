"use client";

import { motion } from "framer-motion";
import { TreeDeciduous, Hammer, Sparkles, Ruler } from "lucide-react";

const iconMap = {
  TreeDeciduous,
  Hammer,
  Sparkles,
  Ruler,
};

const advantages = [
  {
    title: "Kayu Jati Grade A",
    description: "Hanya menggunakan kayu jati pilihan dengan serat dan warna terbaik",
    icon: "TreeDeciduous",
  },
  {
    title: "Pengrajin Berpengalaman",
    description: "Dibuat oleh tukang kayu dengan pengalaman 20+ tahun",
    icon: "Hammer",
  },
  {
    title: "Finishing Premium",
    description: "Menggunakan finishing natural oil yang aman dan tahan lama",
    icon: "Sparkles",
  },
  {
    title: "Custom Design",
    description: "Kami bisa membuat sesuai desain dan ukuran yang Anda inginkan",
    icon: "Ruler",
  },
];

export default function Advantages() {
  return (
    <section className="py-20 bg-background bg-wood-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Keunggulan Kayu Nusantara
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Komitmen kami adalah memberikan furniture berkualitas terbaik dengan layanan prima
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = iconMap[advantage.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {advantage.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
