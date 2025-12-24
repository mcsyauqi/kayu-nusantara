"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Instagram,
  Facebook,
  Send
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Raya Furniture No. 123\nJepara, Jawa Tengah 59419",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "0812-3456-7890",
    link: "tel:+6281234567890",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@kayunusantara.id",
    link: "mailto:info@kayunusantara.id",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Sabtu\n08:00 - 17:00 WIB",
    link: null,
  },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Kayu Nusantara,\n\nNama: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nPesan:\n${formData.message}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
              Hubungi Kami
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Mari Bicara tentang Proyek Anda
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Kami siap membantu mewujudkan furniture impian Anda. Hubungi kami
              untuk konsultasi gratis atau kunjungi showroom kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Kirim Pesan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      placeholder="0812-xxxx-xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  >
                    <option value="">Pilih subject</option>
                    <option value="Konsultasi Produk">Konsultasi Produk</option>
                    <option value="Custom Order">Custom Order</option>
                    <option value="Penawaran Harga">Penawaran Harga</option>
                    <option value="Kerjasama Bisnis">Kerjasama Bisnis</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Pesan *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none bg-white"
                    placeholder="Tulis pesan Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors"
                >
                  <Send size={20} className="mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Informasi Kontak
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <info.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-secondary hover:text-gold transition-colors whitespace-pre-line"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-secondary whitespace-pre-line">{info.content}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-500 rounded-2xl p-6 text-white mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Chat via WhatsApp</h3>
                    <p className="text-white/80 text-sm">Respon cepat dalam jam kerja</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-white text-green-600 font-semibold rounded-lg text-center hover:bg-white/90 transition-colors"
                >
                  Chat Sekarang
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-primary mb-4">Ikuti Kami</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              Lokasi Showroom
            </h2>
            <p className="text-secondary">
              Kunjungi showroom kami untuk melihat langsung koleksi furniture kami
            </p>
          </motion.div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-secondary/20">
            {/* Placeholder for map - in production, use Google Maps embed */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="text-center">
                <MapPin size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-primary text-xl mb-2">
                  Kayu Nusantara Showroom
                </h3>
                <p className="text-secondary">
                  Jl. Raya Furniture No. 123, Jepara
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
                >
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
