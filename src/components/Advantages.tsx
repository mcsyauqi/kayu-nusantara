"use client";

import { motion } from "framer-motion";
import { TreeDeciduous, Hammer, Sparkles, Ruler } from "lucide-react";

const advantages = [
  {
    title: "Kayu Jati Grade A",
    description: "Hanya menggunakan kayu jati pilihan dengan serat dan warna terbaik",
    Icon: TreeDeciduous,
  },
  {
    title: "Pengrajin Berpengalaman",
    description: "Dibuat oleh tukang kayu dengan pengalaman 20+ tahun",
    Icon: Hammer,
  },
  {
    title: "Finishing Premium",
    description: "Menggunakan finishing natural oil yang aman dan tahan lama",
    Icon: Sparkles,
  },
  {
    title: "Custom Design",
    description: "Kami bisa membuat sesuai desain dan ukuran yang Anda inginkan",
    Icon: Ruler,
  },
];

export default function Advantages() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
            Keunggulan Kayu Nusantara
          </h2>
          <p className="text-secondary text-sm max-w-xl mx-auto">
            Komitmen kami adalah memberikan furniture berkualitas terbaik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.Icon size={24} className="text-primary" />
              </div>
              <h3 className="text-base font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
