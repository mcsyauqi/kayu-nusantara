"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageSquare,
  TreeDeciduous,
  Hammer,
  CheckCircle,
  Truck,
  ArrowRight,
  Clock,
  Shield,
  Award
} from "lucide-react";

const processSteps = [
  {
    step: 1,
    icon: MessageSquare,
    title: "Konsultasi Desain",
    duration: "1-2 hari",
    description: "Diskusikan kebutuhan dan preferensi desain furniture Anda dengan tim kami. Kami akan membantu memilih desain yang tepat atau menyesuaikan dengan kebutuhan Anda.",
    details: [
      "Konsultasi gratis via WhatsApp atau telepon",
      "Diskusi kebutuhan ruangan",
      "Rekomendasi desain yang sesuai",
      "Estimasi harga awal",
    ],
  },
  {
    step: 2,
    icon: TreeDeciduous,
    title: "Pemilihan Kayu",
    duration: "1 hari",
    description: "Pilih kayu jati terbaik sesuai dengan karakteristik yang Anda inginkan. Kami hanya menggunakan kayu jati Grade A dari sumber yang terkelola dengan baik.",
    details: [
      "Kayu jati Grade A pilihan",
      "Serat dan warna terbaik",
      "Moisture content optimal",
      "Sertifikasi legal",
    ],
  },
  {
    step: 3,
    icon: Hammer,
    title: "Proses Pembuatan",
    duration: "14-30 hari",
    description: "Pengrajin kami dengan pengalaman 20+ tahun membuat furniture dengan teliti dan penuh dedikasi. Setiap detail dikerjakan dengan standar tinggi.",
    details: [
      "Dikerjakan pengrajin berpengalaman",
      "Teknik pertukangan tradisional",
      "Konstruksi sambungan kuat",
      "Finishing natural oil premium",
    ],
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Quality Control",
    duration: "2 hari",
    description: "Pemeriksaan kualitas menyeluruh untuk memastikan hasil terbaik. Setiap produk harus lulus QC sebelum dikemas dan dikirim.",
    details: [
      "Inspeksi konstruksi",
      "Pengecekan finishing",
      "Test fungsionalitas",
      "Dokumentasi foto",
    ],
  },
  {
    step: 5,
    icon: Truck,
    title: "Pengiriman & Instalasi",
    duration: "1-3 hari",
    description: "Pengiriman aman ke lokasi Anda dengan packing khusus. Tim instalasi profesional memastikan furniture terpasang dengan sempurna.",
    details: [
      "Packing kayu berlapis",
      "Asuransi pengiriman",
      "Pengiriman ke seluruh Indonesia",
      "Instalasi gratis (Jabodetabek)",
    ],
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Garansi 10 Tahun",
    description: "Garansi konstruksi untuk ketenangan pikiran Anda",
  },
  {
    icon: Award,
    title: "Kualitas Premium",
    description: "Hanya menggunakan material dan teknik terbaik",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    description: "Komitmen pengerjaan sesuai jadwal yang disepakati",
  },
];

export default function ProsesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Workshop"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
              Proses Pembuatan
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Dari Konsep Hingga Rumah Anda
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Setiap furniture Kayu Nusantara dibuat dengan proses yang teliti
              dan standar kualitas tinggi untuk hasil yang sempurna.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center">
                        <step.icon size={28} className="text-white" />
                      </div>
                      <div>
                        <span className="text-gold font-semibold text-sm">
                          Langkah {step.step}
                        </span>
                        <h3 className="text-2xl font-heading font-bold text-primary">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
                      <Clock size={14} className="inline mr-1" />
                      {step.duration}
                    </div>

                    <p className="text-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                          <span className="text-secondary">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Step Number */}
                <div className="hidden lg:flex items-center justify-center w-24">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-heading font-bold text-2xl">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Placeholder for alignment */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Komitmen Kami
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Kepuasan Anda adalah prioritas utama kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-background rounded-2xl"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <guarantee.icon size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-secondary">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-white/80 mb-8">
            Hubungi kami sekarang untuk konsultasi gratis
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontak"
              className="inline-flex items-center px-8 py-4 bg-gold text-accent font-semibold rounded-lg hover:bg-gold/90 transition-colors"
            >
              Hubungi Kami
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              href="/koleksi"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              Lihat Koleksi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
