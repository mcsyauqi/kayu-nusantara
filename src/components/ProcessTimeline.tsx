"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export default function ProcessTimeline() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
            Proses Pembuatan
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
            Dari Konsep Hingga Rumah Anda
          </h2>
          <p className="text-secondary text-sm max-w-xl mx-auto">
            Kami memastikan setiap tahap dilakukan dengan teliti
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-background rounded-xl p-4 text-center relative"
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-sm">{step.step}</span>
              </div>
              <span className="text-gold font-semibold text-xs">{step.duration}</span>
              <h3 className="text-sm font-bold text-primary mt-1 mb-2">{step.title}</h3>
              <p className="text-secondary text-xs leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
