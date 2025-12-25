"use client";

import { motion } from "framer-motion";
import { Truck, MapPin, Clock } from "lucide-react";
import { shippingAreas } from "@/lib/data";

export default function ShippingAreas() {
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
          <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-3">
            Pengiriman
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
            Melayani Seluruh Indonesia
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Kami mengirim furniture ke seluruh nusantara dengan packing khusus dan ekspedisi terpercaya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shippingAreas.map((area, index) => (
            <motion.div
              key={area.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">{area.region}</h3>
                  <div className="flex items-center gap-1 text-gold text-sm">
                    <Clock size={12} />
                    <span>{area.estimate}</span>
                  </div>
                </div>
              </div>
              <p className="text-secondary text-sm">{area.cities.join(", ")}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 bg-primary rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Truck size={24} />
            </div>
            <div>
              <p className="font-bold">Gratis Ongkir Area Jepara</p>
              <p className="text-white/70 text-sm">Untuk pembelian minimal Rp 5.000.000</p>
            </div>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo, saya ingin bertanya tentang ongkir ke daerah saya"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gold text-accent font-semibold rounded-lg hover:bg-gold/90 transition-colors whitespace-nowrap"
          >
            Cek Ongkir
          </a>
        </motion.div>
      </div>
    </section>
  );
}
