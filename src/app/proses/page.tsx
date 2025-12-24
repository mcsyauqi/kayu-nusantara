"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, TreeDeciduous, Hammer, CheckCircle, Truck, ArrowRight, Shield, Award, Clock } from "lucide-react";

const processSteps = [
  { step: 1, icon: MessageSquare, title: "Konsultasi Desain", duration: "1-2 hari", description: "Diskusikan kebutuhan dan preferensi desain furniture Anda" },
  { step: 2, icon: TreeDeciduous, title: "Pemilihan Kayu", duration: "1 hari", description: "Pilih kayu jati Grade A sesuai karakteristik yang diinginkan" },
  { step: 3, icon: Hammer, title: "Proses Pembuatan", duration: "14-30 hari", description: "Pengrajin berpengalaman membuat furniture dengan teliti" },
  { step: 4, icon: CheckCircle, title: "Quality Control", duration: "2 hari", description: "Pemeriksaan kualitas menyeluruh sebelum pengiriman" },
  { step: 5, icon: Truck, title: "Pengiriman", duration: "1-3 hari", description: "Pengiriman aman dengan packing khusus ke seluruh Indonesia" },
];

const guarantees = [
  { icon: Shield, title: "Garansi 10 Tahun", description: "Garansi konstruksi untuk ketenangan pikiran" },
  { icon: Award, title: "Kualitas Premium", description: "Material dan teknik terbaik" },
  { icon: Clock, title: "Tepat Waktu", description: "Pengerjaan sesuai jadwal" },
];

export default function ProsesPage() {
  return (
    <>
      <section className="pt-24 pb-10 lg:pt-28 lg:pb-12 bg-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" alt="Workshop" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-gold rounded-full text-xs font-medium mb-3">Proses Pembuatan</span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Dari Konsep Hingga Rumah Anda</h1>
            <p className="text-white/80 max-w-lg mx-auto text-sm">Setiap furniture dibuat dengan proses teliti dan standar kualitas tinggi</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white rounded-xl p-4 text-center shadow-md">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <step.icon size={18} className="text-white" />
                </div>
                <span className="text-gold font-semibold text-xs">{step.duration}</span>
                <h3 className="text-sm font-bold text-primary mt-1 mb-1">{step.title}</h3>
                <p className="text-secondary text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2">Komitmen Kami</h2>
            <p className="text-secondary text-sm">Kepuasan Anda adalah prioritas utama</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {guarantees.map((guarantee, index) => (
              <motion.div key={guarantee.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="text-center p-5 bg-background rounded-xl">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <guarantee.icon size={24} className="text-gold" />
                </div>
                <h3 className="text-base font-bold text-primary mb-1">{guarantee.title}</h3>
                <p className="text-secondary text-sm">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Siap Memulai Proyek Anda?</h2>
          <p className="text-white/80 text-sm mb-5">Hubungi kami sekarang untuk konsultasi gratis</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/kontak" className="inline-flex items-center px-5 py-2.5 bg-gold text-accent font-semibold rounded-lg hover:bg-gold/90 transition-colors text-sm">
              Hubungi Kami
              <ArrowRight size={16} className="ml-1.5" />
            </Link>
            <Link href="/koleksi" className="inline-flex items-center px-5 py-2.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30 text-sm">
              Lihat Koleksi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
