"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Ruler,
  Palette,
  TreeDeciduous,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare
} from "lucide-react";

const customFeatures = [
  {
    icon: Ruler,
    title: "Ukuran Custom",
    description: "Sesuaikan dimensi furniture dengan ruangan Anda",
  },
  {
    icon: Palette,
    title: "Pilihan Finishing",
    description: "Natural, coating, atau warna sesuai selera Anda",
  },
  {
    icon: TreeDeciduous,
    title: "Jenis Kayu",
    description: "Pilih jenis kayu jati sesuai budget dan preferensi",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Kirim Desain",
    description: "Kirimkan referensi desain atau sketsa yang Anda inginkan",
  },
  {
    step: 2,
    title: "Konsultasi",
    description: "Tim kami akan menghubungi untuk diskusi detail",
  },
  {
    step: 3,
    title: "Penawaran",
    description: "Kami berikan estimasi harga dan waktu pengerjaan",
  },
  {
    step: 4,
    title: "Produksi",
    description: "Setelah deal, proses pembuatan dimulai",
  },
];

export default function CustomPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    productType: "",
    dimensions: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const message = `Halo, saya ${formData.name} ingin custom order:\n\nProduk: ${formData.productType}\nUkuran: ${formData.dimensions}\nDeskripsi: ${formData.description}\n\nNomor HP: ${formData.phone}\nEmail: ${formData.email}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

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
              Custom Order
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Wujudkan Furniture Impian Anda
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Tidak menemukan desain yang cocok? Kami bisa membuatkan furniture
              sesuai dengan desain, ukuran, dan spesifikasi yang Anda inginkan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Kirim Permintaan Anda
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
                      className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
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
                      className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Jenis Produk *
                    </label>
                    <select
                      required
                      value={formData.productType}
                      onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Pilih jenis produk</option>
                      <option value="Meja Makan">Meja Makan</option>
                      <option value="Kursi & Sofa">Kursi & Sofa</option>
                      <option value="Lemari">Lemari</option>
                      <option value="Tempat Tidur">Tempat Tidur</option>
                      <option value="Meja Kerja">Meja Kerja</option>
                      <option value="Outdoor">Outdoor Furniture</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ukuran (P x L x T)
                    </label>
                    <input
                      type="text"
                      value={formData.dimensions}
                      onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="contoh: 180 x 90 x 75 cm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Deskripsi / Referensi Desain *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Jelaskan desain yang Anda inginkan, atau lampirkan link referensi gambar..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-colors"
                >
                  <MessageSquare size={20} className="mr-2" />
                  Kirim via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Proses Custom Order
              </h2>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary text-lg">
                        {step.title}
                      </h3>
                      <p className="text-secondary">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-12 p-6 bg-background rounded-2xl">
                <h3 className="font-heading font-bold text-primary text-lg mb-4">
                  Keuntungan Custom Order
                </h3>
                <ul className="space-y-3">
                  {[
                    "Desain sesuai keinginan Anda",
                    "Ukuran pas dengan ruangan",
                    "Pilihan material dan finishing",
                    "Konsultasi gratis",
                    "Garansi kualitas 10 tahun",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-gold" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Alternative */}
              <div className="mt-8 p-6 bg-primary rounded-2xl">
                <p className="text-white/80 mb-4">
                  Atau hubungi kami langsung untuk konsultasi lebih lanjut:
                </p>
                <a
                  href="tel:+6281234567890"
                  className="inline-flex items-center text-gold hover:text-gold/80 transition-colors"
                >
                  <Phone size={20} className="mr-2" />
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
