"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, Instagram, Facebook, Send, ArrowRight, Star, Shield, Truck, CheckCircle2 } from "lucide-react";
import { shippingAreas, testimonials, faqs } from "@/lib/data";

const contactInfo = [
  { icon: MapPin, title: "Alamat", content: "Jl. Raya Furniture No. 123, Jepara, Jawa Tengah", link: "https://maps.google.com" },
  { icon: Phone, title: "Telepon", content: "0812-3456-7890", link: "tel:+6281234567890" },
  { icon: Mail, title: "Email", content: "info@kayunusantara.id", link: "mailto:info@kayunusantara.id" },
  { icon: Clock, title: "Jam Operasional", content: "Senin - Sabtu: 08:00 - 17:00 WIB", link: null },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/kayunusantara", username: "@kayunusantara" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/kayunusantara", username: "Kayu Nusantara" },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Kayu Nusantara,\n\nNama: ${formData.name}\nNo. HP: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nPesan:\n${formData.message}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16 bg-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80" alt="Contact" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">Hubungi Kami</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Mari Bicara tentang Proyek Anda</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Tim kami siap membantu mewujudkan furniture impian Anda. Konsultasi gratis untuk semua pertanyaan!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors">
                <MessageSquare size={18} className="mr-2" />
                Chat WhatsApp
              </a>
              <a href="tel:+6281234567890" className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/30">
                <Phone size={18} className="mr-2" />
                Telepon
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-3">Kirim Pesan</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Formulir Kontak</h2>
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
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                  <select required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-secondary/30 focus:border-primary outline-none bg-white">
                    <option value="">Pilih subject</option>
                    <option value="Konsultasi Produk">Konsultasi Produk</option>
                    <option value="Custom Order">Custom Order</option>
                    <option value="Penawaran Harga">Penawaran Harga</option>
                    <option value="Kerjasama Bisnis">Kerjasama Bisnis</option>
                    <option value="Komplain">Komplain / After Sales</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Pesan *</label>
                  <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-secondary/30 focus:border-primary outline-none resize-none bg-white" placeholder="Tulis pesan Anda..." />
                </div>
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-accent transition-colors">
                  <Send size={18} className="mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Informasi Kontak</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <info.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-primary mb-1">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-secondary hover:text-gold transition-colors" target={info.link.startsWith("http") ? "_blank" : undefined} rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}>
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-secondary">{info.content}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-500 rounded-2xl p-6 text-white mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageSquare size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Chat via WhatsApp</h3>
                    <p className="text-white/80 text-sm">Respon cepat dalam jam kerja</p>
                  </div>
                </div>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-white text-green-600 font-semibold rounded-xl text-center hover:bg-white/90 transition-colors">
                  Chat Sekarang
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary mb-4">Ikuti Media Sosial Kami</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 bg-background rounded-xl hover:bg-primary/10 transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <social.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">{social.label}</p>
                        <p className="text-secondary text-sm">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-3">Lokasi</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Kunjungi Showroom Kami</h2>
            <p className="text-secondary max-w-xl mx-auto">Datang langsung untuk melihat koleksi furniture dan kualitas kayu jati kami</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 bg-secondary/10">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin size={32} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-primary text-xl mb-2">Kayu Nusantara Showroom</h3>
                  <p className="text-secondary mb-4">Jl. Raya Furniture No. 123<br />Jepara, Jawa Tengah 59419</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 bg-primary text-white font-semibold rounded-xl hover:bg-accent transition-colors">
                    Buka di Google Maps
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-primary text-xl mb-4">Jam Operasional</h3>
              <div className="space-y-3 mb-6">
                {[
                  { day: "Senin - Jumat", hours: "08:00 - 17:00 WIB" },
                  { day: "Sabtu", hours: "08:00 - 15:00 WIB" },
                  { day: "Minggu", hours: "Tutup" },
                ].map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center bg-background rounded-lg px-4 py-3">
                    <span className="font-medium text-primary">{schedule.day}</span>
                    <span className="text-secondary">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gold/10 rounded-xl p-5">
                <h4 className="font-bold text-primary mb-2">Kunjungan Workshop</h4>
                <p className="text-secondary text-sm mb-3">Ingin melihat proses pembuatan? Jadwalkan kunjungan ke workshop kami di Jepara.</p>
                <a href="https://wa.me/6281234567890?text=Halo, saya ingin menjadwalkan kunjungan ke workshop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-semibold hover:text-gold transition-colors">
                  Jadwalkan Kunjungan
                  <ArrowRight size={16} className="ml-1.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Areas */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-primary rounded-full text-xs font-medium mb-3">Pengiriman</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Area Pengiriman</h2>
            <p className="text-secondary max-w-xl mx-auto">Kami melayani pengiriman ke seluruh Indonesia</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shippingAreas.map((area, index) => (
              <motion.div key={area.region} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-primary">{area.region}</h3>
                  <span className="text-gold text-sm font-medium">{area.estimate}</span>
                </div>
                <p className="text-secondary text-sm">{area.cities.join(", ")}</p>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Siap Memulai?</h2>
            <p className="text-white/80 mb-6">Konsultasikan kebutuhan furniture Anda dengan tim kami</p>
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
                { icon: Star, text: "Rating 4.9/5" },
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
