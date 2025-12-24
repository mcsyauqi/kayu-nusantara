"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Proses Pembuatan
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Dari Konsep Hingga Rumah Anda
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Kami memastikan setiap tahap dilakukan dengan teliti untuk hasil terbaik
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div
                    className={`bg-background rounded-2xl p-8 ${
                      index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}
                  >
                    <span className="text-gold font-semibold text-sm">{step.duration}</span>
                    <h3 className="text-xl font-heading font-bold text-primary mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-heading font-bold text-xl">{step.step}</span>
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
