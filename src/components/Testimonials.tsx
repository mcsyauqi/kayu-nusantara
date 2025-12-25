"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
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
          <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-3">
            Testimoni
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-secondary max-w-xl mx-auto">
            Kepercayaan pelanggan adalah motivasi terbesar kami untuk terus memberikan yang terbaik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="absolute -top-3 right-6">
                <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center shadow-lg">
                  <Quote size={18} className="text-white" />
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-5 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-secondary/20">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-secondary text-sm">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {testimonial.product}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt={t.name}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-secondary text-sm ml-2">500+ Pelanggan Puas</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-secondary/30" />
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="text-secondary text-sm">Rating 4.9/5</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
