"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Ruler, Palette, TreeDeciduous, CheckCircle2, Phone, MessageSquare, ArrowRight, Star, Shield, Truck, Clock, Sparkles, Users } from "lucide-react";
import { portfolioProjects, testimonials, faqs } from "@/lib/data";

const customFeatures = [
  { icon: Ruler, title: "Ukuran Custom", description: "Sesuaikan dimensi furniture dengan ruangan Anda secara presisi" },
  { icon: Palette, title: "Pilihan Finishing", description: "Natural oil, coating, melamine, atau warna custom sesuai selera" },
  { icon: TreeDeciduous, title: "Jenis Kayu", description: "Pilih jenis kayu jati Grade A atau Grade B sesuai budget" },
  { icon: Sparkles, title: "Detail Ukiran", description: "Tambahkan ukiran khas Jepara sesuai keinginan" },
];

const processSteps = [
  { step: 1, title: "Kirim Desain", description: "Kirimkan referensi desain, foto, atau sketsa furniture yang diinginkan", duration: "Hari ke-1" },
  { step: 2, title: "Konsultasi", description: "Tim kami akan menghubungi untuk diskusi detail dan memberikan saran", duration: "Hari ke-2" },
  { step: 3, title: "Penawaran", description: "Anda akan menerima estimasi harga, material, dan waktu pengerjaan", duration: "Hari ke-3" },
  { step: 4, title: "Produksi", description: "Setelah deal dan DP, proses pembuatan furniture dimulai", duration: "14-30 hari" },
  { step: 5, title: "Quality Check", description: "Pemeriksaan kualitas dan dokumentasi sebelum pengiriman", duration: "2 hari" },
  { step: 6, title: "Pengiriman", description: "Furniture dikirim dengan packing khusus ke alamat Anda", duration: "3-7 hari" },
];

const benefits = [
  "Desain 100% sesuai keinginan Anda",
  "Ukuran pas dengan ruangan",
  "Pilihan material & finishing bebas",
  "Konsultasi gratis dengan desainer",
  "Garansi konstruksi 10 tahun",
  "Bisa request revisi desain",
  "Update progress via WhatsApp",
  "Pembayaran bisa dicicil",
];

export default function CustomPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", productType: "", dimensions: "", description: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Kayu Nusantara, saya ${formData.name} ingin custom order:\n\nProduk: ${formData.productType}\nUkuran: ${formData.dimensions}\nDeskripsi: ${formData.description}\n\nNomor HP: ${formData.phone}\nEmail: ${formData.email}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16 bg-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" alt="Workshop" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">Custom Order</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Wujudkan Furniture Impian Anda</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Kami bisa membuatkan furniture sesuai desain, ukuran, dan finishing yang Anda inginkan. 100% custom, 100% sesuai keinginan!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="#form" className="inline-flex items-center px-6 py-3 bg-gold text-accent font-semibold rounded-xl hover:bg-gold/90 transition-colors">
                Mulai Custom Order
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/30">
                <MessageSquare size={18} className="mr-2" />
                Chat WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Users, value: "500+", label: "Custom Order" },
                { icon: Star, value: "4.9", label: "Rating" },
                { icon: Clock, value: "14-30", label: "Hari Pengerjaan" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <stat.icon size={20} className="text-gold" />
                  <div className="text-left">
                    <p className="text-white font-bold">{stat.value}</p>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Apa yang Bisa di-Custom?</h2>
            <p className="text-secondary max-w-xl mx-auto">Hampir semua aspek furniture bisa disesuaikan dengan keinginan Anda</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {customFeatures.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={28} className="text-gold" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-secondary text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-3">Proses Custom Order</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Langkah Mudah Memesan</h2>
            <p className="text-secondary max-w-xl mx-auto">Dari konsep sampai furniture jadi, kami dampingi setiap langkahnya</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((step, index) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-background rounded-xl p-5 relative">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <div>
                    <span className="text-gold text-xs font-medium">{step.duration}</span>
                    <h3 className="font-bold text-primary mt-1">{step.title}</h3>
                    <p className="text-secondary text-sm mt-1">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Benefits */}
      <section id="form" className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-3">Form Custom Order</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Kirim Permintaan Anda</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Nama Lengkap *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-secondary/30 focus:border-primary outline-none bg-white" placeholder="Nama Anda" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Nomor WhatsApp *</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-secondary/30 focus:border-primary outline-none bg-white" placeholder="0812-xxxx-xxxx" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email (opsional)</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-secondary/30 focus:border-primary outline-none bg-white" placeholder="email@example.com" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Jenis Produk *</label>
                    <select required value={formData.productType} onChange={(e) => setFormData({ ...formData, productType: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-secondary/30 focus:border-primary outline-none bg-white">
                      <option value="">Pilih jenis produk</option>
                      <option value="Meja Makan">Meja Makan</option>
                      <option value="Kursi & Sofa">Kursi & Sofa</option>
                      <option value="Lemari">Lemari</option>
                      <option value="Tempat Tidur">Tempat Tidur</option>
                      <option value="Meja Kerja">Meja Kerja</option>
                      <option value="Kitchen Set">Kitchen Set</option>
                      <option value="Full Interior">Full Interior</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Ukuran (P x L x T)</label>
                    <input type="text" value={formData.dimensions} onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-secondary/30 focus:border-primary outline-none bg-white" placeholder="180 x 90 x 75 cm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Deskripsi / Referensi Desain *</label>
                  <textarea required rows={4} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-secondary/30 focus:border-primary outline-none resize-none bg-white" placeholder="Jelaskan desain yang Anda inginkan, atau kirim link gambar referensi..." />
                </div>
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-accent transition-colors">
                  <MessageSquare size={18} className="mr-2" />
                  Kirim via WhatsApp
                </button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Keuntungan Custom Order</h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                      <span className="text-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Hubungi Langsung</h3>
                <p className="text-white/80 text-sm mb-4">Lebih cepat? Langsung hubungi tim kami!</p>
                <div className="space-y-3">
                  <a href="tel:+6281234567890" className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 hover:bg-white/20 transition-colors">
                    <Phone size={20} className="text-gold" />
                    <div>
                      <p className="text-xs text-white/70">Telepon</p>
                      <p className="font-semibold">0812-3456-7890</p>
                    </div>
                  </a>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-green-500 rounded-xl px-4 py-3 hover:bg-green-600 transition-colors">
                    <MessageSquare size={20} />
                    <div>
                      <p className="text-xs text-white/80">WhatsApp</p>
                      <p className="font-semibold">Chat Sekarang</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-3">Portfolio</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Proyek Custom Kami</h2>
            <p className="text-secondary max-w-xl mx-auto">Beberapa proyek custom order yang telah kami kerjakan</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioProjects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-background rounded-xl overflow-hidden">
                <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <span className="text-gold text-xs font-medium">{project.type}</span>
                  <h3 className="font-bold text-primary text-lg mt-1">{project.title}</h3>
                  <p className="text-secondary text-sm mt-1">{project.location}</p>
                  <p className="text-foreground text-sm mt-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.items.slice(0, 3).map((item) => (
                      <span key={item} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Testimoni Custom Order</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div key={testimonial.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white rounded-xl p-5 shadow-sm">
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
                    <p className="text-secondary text-xs">{testimonial.product}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Pertanyaan Umum</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.slice(0, 5).map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} className="bg-background rounded-xl overflow-hidden">
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
      <section className="py-12 lg:py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Siap Wujudkan Furniture Impian?</h2>
            <p className="text-white/80 mb-6">Konsultasi gratis dengan tim desainer kami sekarang!</p>
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

            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {[
                { icon: Shield, text: "Garansi 10 Tahun" },
                { icon: Truck, text: "Kirim Seluruh Indonesia" },
                { icon: Star, text: "500+ Custom Order" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/80">
                  <item.icon size={16} className="text-gold" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
