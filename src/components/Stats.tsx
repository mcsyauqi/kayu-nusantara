"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="py-12 lg:py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Dipercaya Ribuan Keluarga Indonesia
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Lebih dari satu dekade kami melayani pelanggan dengan dedikasi dan kualitas terbaik
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
                <p className="text-4xl lg:text-5xl font-bold text-gold mb-2">{stat.value}</p>
                <p className="text-white font-semibold mb-1">{stat.label}</p>
                <p className="text-white/60 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
