"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqs } from "@/lib/data";

interface FAQProps {
  limit?: number;
  showContact?: boolean;
}

export default function FAQ({ limit, showContact = true }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-3">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-secondary max-w-xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami
          </p>
        </motion.div>

        <div className="space-y-3">
          {displayFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-primary pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-secondary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 pb-4 text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {showContact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 text-center"
          >
            <p className="text-secondary mb-4">
              Masih punya pertanyaan? Jangan ragu untuk menghubungi kami
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors"
            >
              <MessageCircle size={18} className="mr-2" />
              Hubungi Kami
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
