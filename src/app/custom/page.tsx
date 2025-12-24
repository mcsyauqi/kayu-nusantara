"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Ruler, Palette, TreeDeciduous, CheckCircle2, Phone, MessageSquare } from "lucide-react";

const customFeatures = [
  { icon: Ruler, title: "Ukuran Custom", description: "Sesuaikan dimensi furniture dengan ruangan Anda" },
  { icon: Palette, title: "Pilihan Finishing", description: "Natural, coating, atau warna sesuai selera" },
  { icon: TreeDeciduous, title: "Jenis Kayu", description: "Pilih jenis kayu jati sesuai preferensi" },
];

const processSteps = [
  { step: 1, title: "Kirim Desain", description: "Kirimkan referensi desain atau sketsa" },
  { step: 2, title: "Konsultasi", description: "Tim kami akan menghubungi untuk diskusi" },
  { step: 3, title: "Penawaran", description: "Estimasi harga dan waktu pengerjaan" },
  { step: 4, title: "Produksi", description: "Setelah deal, proses pembuatan dimulai" },
];

export default function CustomPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", productType: "", dimensions: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ${formData.name} ingin custom order:\n\nProduk: ${formData.productType}\nUkuran: ${formData.dimensions}\nDeskripsi: ${formData.description}\n\nNomor HP: ${formData.phone}\nEmail: ${formData.email}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <section className="pt-24 pb-10 lg:pt-28 lg:pb-12 bg-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" alt="Workshop" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <span className="inline-block px-3 py-1.5 bg-gold/20 text-gold rounded-full text-xs font-medium mb-3">Custom Order</span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Wujudkan Furniture Impian Anda</h1>
            <p className="text-white/80 max-w-lg mx-auto text-sm">Kami bisa membuatkan furniture sesuai desain dan ukuran yang Anda inginkan</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {customFeatures.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white rounded-xl p-5 shadow-md text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-base font-bold text-primary mb-1">{feature.title}</h3>
                <p className="text-secondary text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-5">Kirim Permintaan Anda</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Nama Lengkap *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-secondary/30 focus:border-primary outline-none text-sm" placeholder="Nama Anda" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Nomor WhatsApp *</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-secondary/30 focus:border-primary outline-none text-sm" placeholder="0812-xxxx-xxxx" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-secondary/30 focus:border-primary outline-none text-sm" placeholder="email@example.com" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Jenis Produk *</label>
                    <select required value={formData.productType} onChange={(e) => setFormData({ ...formData, productType: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-secondary/30 focus:border-primary outline-none text-sm">
                      <option value="">Pilih jenis produk</option>
                      <option value="Meja Makan">Meja Makan</option>
                      <option value="Kursi & Sofa">Kursi & Sofa</option>
                      <option value="Lemari">Lemari</option>
                      <option value="Tempat Tidur">Tempat Tidur</option>
                      <option value="Meja Kerja">Meja Kerja</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Ukuran (P x L x T)</label>
                    <input type="text" value={formData.dimensions} onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-secondary/30 focus:border-primary outline-none text-sm" placeholder="180 x 90 x 75 cm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">Deskripsi / Referensi Desain *</label>
                  <textarea required rows={3} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-secondary/30 focus:border-primary outline-none text-sm resize-none" placeholder="Jelaskan desain yang Anda inginkan..." />
                </div>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors text-sm">
                  <MessageSquare size={16} className="mr-1.5" />
                  Kirim via WhatsApp
                </button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-5">Proses Custom Order</h2>
              <div className="space-y-4">
                {processSteps.map((step) => (
                  <div key={step.step} className="flex gap-3">
                    <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-sm">{step.title}</h3>
                      <p className="text-secondary text-xs">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-background rounded-xl">
                <h3 className="font-bold text-primary text-sm mb-3">Keuntungan Custom Order</h3>
                <ul className="space-y-2">
                  {["Desain sesuai keinginan", "Ukuran pas dengan ruangan", "Pilihan material & finishing", "Konsultasi gratis", "Garansi 10 tahun"].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-gold" />
                      <span className="text-foreground text-xs">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 p-4 bg-primary rounded-xl">
                <p className="text-white/80 text-xs mb-2">Atau hubungi kami langsung:</p>
                <a href="tel:+6281234567890" className="inline-flex items-center text-gold hover:text-gold/80 transition-colors text-sm">
                  <Phone size={14} className="mr-1.5" />
                  <span className="font-semibold">0812-3456-7890</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
