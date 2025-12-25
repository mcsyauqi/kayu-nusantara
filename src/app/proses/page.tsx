"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, TreeDeciduous, Hammer, CheckCircle, Truck, ArrowRight, Shield, Award, Clock, Sparkles, Eye, Users, Star, Phone } from "lucide-react";
import { workshopImages, materials, testimonials, faqs } from "@/lib/data";
import { useState } from "react";

const processSteps = [
  { step: 1, icon: MessageSquare, title: "Konsultasi Desain", duration: "1-2 hari", description: "Diskusikan kebutuhan dan preferensi desain furniture Anda. Tim kami akan memberikan saran terbaik sesuai ruangan dan budget." },
  { step: 2, icon: TreeDeciduous, title: "Pemilihan Kayu", duration: "1 hari", description: "Pilih kayu jati Grade A dari koleksi kami. Anda bisa melihat langsung karakteristik serat dan warna kayu yang diinginkan." },
  { step: 3, icon: Hammer, title: "Proses Pembuatan", duration: "14-30 hari", description: "Pengrajin berpengalaman 20+ tahun membuat furniture dengan teknik tradisional dan peralatan modern untuk hasil maksimal." },
  { step: 4, icon: Sparkles, title: "Finishing", duration: "3-5 hari", description: "Proses finishing menggunakan natural oil atau coating premium untuk menonjolkan keindahan serat kayu dan melindungi furniture." },
  { step: 5, icon: Eye, title: "Quality Control", duration: "2 hari", description: "Pemeriksaan kualitas menyeluruh meliputi konstruksi, finishing, dan detail ukiran sebelum dinyatakan siap kirim." },
  { step: 6, icon: Truck, title: "Pengiriman & Instalasi", duration: "3-7 hari", description: "Pengiriman dengan packing kayu khusus ke seluruh Indonesia. Untuk area tertentu, kami sediakan layanan instalasi gratis." },
];

const guarantees = [
  { icon: Shield, title: "Garansi 10 Tahun", description: "Garansi konstruksi untuk ketenangan pikiran Anda" },
  { icon: Award, title: "Kualitas Premium", description: "Hanya menggunakan material dan teknik terbaik" },
  { icon: Clock, title: "Tepat Waktu", description: "Pengerjaan sesuai jadwal yang disepakati" },
  { icon: Users, title: "Tim Profesional", description: "Pengrajin berpengalaman lebih dari 20 tahun" },
];

const whyChooseUs = [
  "Kayu jati 100% asli dari perhutani",
  "Pengrajin Jepara berpengalaman 20+ tahun",
  "Finishing dengan natural oil berkualitas",
  "Konstruksi kuat dengan teknik mortise & tenon",
  "Quality control ketat sebelum pengiriman",
  "Packing kayu khusus untuk keamanan",
];

export default function ProsesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16 bg-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" alt="Workshop" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">Proses Pembuatan</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Dari Konsep Hingga Rumah Anda</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Setiap furniture kami dibuat dengan proses teliti, menggunakan teknik tradisional Jepara yang dipadukan dengan teknologi modern untuk hasil sempurna.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/custom" className="inline-flex items-center px-6 py-3 bg-gold text-accent font-semibold rounded-xl hover:bg-gold/90 transition-colors">
                Custom Order
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/galeri" className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/30">
                Lihat Galeri
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Alur Pembuatan Furniture</h2>
            <p className="text-secondary max-w-xl mx-auto">Proses terstruktur untuk memastikan kualitas terbaik</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Step {step.step}</span>
                      <span className="text-gold text-xs font-medium">{step.duration}</span>
                    </div>
                    <h3 className="font-bold text-primary text-lg mb-2">{step.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Images */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-3">Workshop Kami</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Lihat Workshop Kami</h2>
            <p className="text-secondary max-w-xl mx-auto">Tempat di mana keajaiban terjadi - workshop kami di Jepara</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workshopImages.map((image, index) => (
              <motion.div key={image.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="group">
                <div className="relative overflow-hidden rounded-xl shadow-md">
                  <img src={image.src} alt={image.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold">{image.title}</h3>
                    <p className="text-white/70 text-sm">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-3">Material</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Material Berkualitas</h2>
            <p className="text-secondary max-w-xl mx-auto">Kami hanya menggunakan material terbaik untuk hasil maksimal</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <motion.div key={material.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img src={material.image} alt={material.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="font-bold text-primary text-lg mb-2">{material.name}</h3>
                  <p className="text-secondary text-sm mb-4">{material.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {material.features.map((feature) => (
                      <span key={feature} className="text-xs bg-gold/20 text-primary px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 lg:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Mengapa Memilih Kami?</h2>
              <div className="space-y-3">
                {whyChooseUs.map((item, index) => (
                  <motion.div key={item} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.1 }} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                    <CheckCircle size={20} className="text-gold flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid grid-cols-2 gap-4">
              {guarantees.map((guarantee, index) => (
                <div key={guarantee.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <guarantee.icon size={24} className="text-gold" />
                  </div>
                  <h3 className="text-white font-bold mb-1">{guarantee.title}</h3>
                  <p className="text-white/70 text-sm">{guarantee.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Kata Pelanggan</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div key={testimonial.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-background rounded-xl p-5">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
                    <p className="text-secondary text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Pertanyaan Umum</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.slice(0, 4).map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-4 text-left">
                  <span className="font-semibold text-primary pr-4">{faq.question}</span>
                  <ArrowRight size={18} className={`text-secondary transition-transform ${openFaq === index ? "rotate-90" : ""}`} />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4 text-secondary">{faq.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Siap Memulai Proyek Anda?</h2>
            <p className="text-white/80 mb-6">Hubungi kami sekarang untuk konsultasi gratis</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gold text-accent font-semibold rounded-xl hover:bg-gold/90 transition-colors">
                <MessageSquare size={18} className="mr-2" />
                Chat via WhatsApp
              </a>
              <Link href="/koleksi" className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/30">
                Lihat Koleksi
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
