"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, Instagram, Facebook, Send } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Alamat", content: "Jl. Raya Furniture No. 123, Jepara", link: "https://maps.google.com" },
  { icon: Phone, title: "Telepon", content: "0812-3456-7890", link: "tel:+6281234567890" },
  { icon: Mail, title: "Email", content: "info@kayunusantara.id", link: "mailto:info@kayunusantara.id" },
  { icon: Clock, title: "Jam Operasional", content: "Sen - Sab: 08:00 - 17:00", link: null },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Kayu Nusantara,\n\nNama: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nPesan:\n${formData.message}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <section className="pt-24 pb-10 lg:pt-28 lg:pb-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-gold rounded-full text-xs font-medium mb-3">Hubungi Kami</span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Mari Bicara tentang Proyek Anda</h1>
            <p className="text-white/80 max-w-lg mx-auto text-sm">Kami siap membantu mewujudkan furniture impian Anda</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-5">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Nama Lengkap *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-secondary/30 focus:border-primary outline-none text-sm bg-white" placeholder="Nama Anda" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Nomor WhatsApp *</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-secondary/30 focus:border-primary outline-none text-sm bg-white" placeholder="0812-xxxx-xxxx" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-secondary/30 focus:border-primary outline-none text-sm bg-white" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">Subject *</label>
                  <select required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-secondary/30 focus:border-primary outline-none text-sm bg-white">
                    <option value="">Pilih subject</option>
                    <option value="Konsultasi Produk">Konsultasi Produk</option>
                    <option value="Custom Order">Custom Order</option>
                    <option value="Penawaran Harga">Penawaran Harga</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">Pesan *</label>
                  <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-secondary/30 focus:border-primary outline-none text-sm resize-none bg-white" placeholder="Tulis pesan Anda..." />
                </div>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors text-sm">
                  <Send size={16} className="mr-1.5" />
                  Kirim Pesan
                </button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-5">Informasi Kontak</h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="bg-white rounded-xl p-4 shadow-md">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <info.icon size={18} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-primary text-sm mb-1">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-secondary hover:text-gold transition-colors text-xs" target={info.link.startsWith("http") ? "_blank" : undefined} rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}>{info.content}</a>
                    ) : (
                      <p className="text-secondary text-xs">{info.content}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-green-500 rounded-xl p-4 text-white mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Chat via WhatsApp</h3>
                    <p className="text-white/80 text-xs">Respon cepat dalam jam kerja</p>
                  </div>
                </div>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 bg-white text-green-600 font-semibold rounded-lg text-center hover:bg-white/90 transition-colors text-sm">
                  Chat Sekarang
                </a>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-md">
                <h3 className="font-semibold text-primary text-sm mb-3">Ikuti Kami</h3>
                <div className="flex gap-2">
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary">
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2">Lokasi Showroom</h2>
            <p className="text-secondary text-sm">Kunjungi showroom kami untuk melihat langsung koleksi furniture</p>
          </motion.div>

          <div className="rounded-xl overflow-hidden shadow-md h-64 bg-secondary/10">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-primary mx-auto mb-3" />
                <h3 className="font-bold text-primary text-base mb-1">Kayu Nusantara Showroom</h3>
                <p className="text-secondary text-sm mb-3">Jl. Raya Furniture No. 123, Jepara</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors text-sm">
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
