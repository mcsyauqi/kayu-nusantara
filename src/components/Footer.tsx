import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-accent font-bold text-lg">K</span>
              </div>
              <div>
                <p className="text-base font-bold leading-none">Kayu Nusantara</p>
                <p className="text-[10px] text-secondary leading-none mt-0.5">Keindahan Alami, Kualitas Abadi</p>
              </div>
            </div>
            <p className="text-secondary text-sm leading-relaxed">
              Furniture kayu jati premium buatan tangan oleh pengrajin berpengalaman.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              {[
                { href: "/koleksi", label: "Koleksi" },
                { href: "/custom", label: "Custom Order" },
                { href: "/proses", label: "Proses Pembuatan" },
                { href: "/galeri", label: "Galeri" },
                { href: "/kontak", label: "Kontak" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-secondary hover:text-gold transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Kategori</h4>
            <ul className="space-y-2">
              {[
                { href: "/koleksi/meja-makan", label: "Meja Makan" },
                { href: "/koleksi/kursi-sofa", label: "Kursi & Sofa" },
                { href: "/koleksi/lemari-storage", label: "Lemari & Storage" },
                { href: "/koleksi/tempat-tidur", label: "Tempat Tidur" },
                { href: "/koleksi/meja-kerja", label: "Meja Kerja" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-secondary hover:text-gold transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-secondary text-sm">
                  Jl. Raya Furniture No. 123, Jepara, Jawa Tengah
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a href="tel:+6281234567890" className="text-secondary hover:text-gold transition-colors text-sm">
                  0812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a href="mailto:info@kayunusantara.id" className="text-secondary hover:text-gold transition-colors text-sm">
                  info@kayunusantara.id
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-gold flex-shrink-0" />
                <span className="text-secondary text-sm">Sen - Sab: 08:00 - 17:00</span>
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
            <p className="text-secondary text-xs">© 2025 Kayu Nusantara. Furniture Kayu Jati Premium.</p>
            <p className="text-secondary text-xs">
              Dibuat dengan <span className="text-red-400">❤️</span> oleh{" "}
              <a href="https://creativism.id" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
