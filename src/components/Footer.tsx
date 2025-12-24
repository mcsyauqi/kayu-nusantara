import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-accent font-heading text-xl font-bold">K</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Kayu Nusantara</h3>
                <p className="text-xs text-secondary">Keindahan Alami, Kualitas Abadi</p>
              </div>
            </div>
            <p className="text-secondary text-sm leading-relaxed">
              Furniture kayu jati premium buatan tangan oleh pengrajin berpengalaman.
              Setiap karya dibuat dengan kecintaan terhadap detail dan kualitas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Menu</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/koleksi" className="text-secondary hover:text-gold transition-colors">
                  Koleksi
                </Link>
              </li>
              <li>
                <Link href="/custom" className="text-secondary hover:text-gold transition-colors">
                  Custom Order
                </Link>
              </li>
              <li>
                <Link href="/proses" className="text-secondary hover:text-gold transition-colors">
                  Proses Pembuatan
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-secondary hover:text-gold transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-secondary hover:text-gold transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Kategori</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/koleksi/meja-makan" className="text-secondary hover:text-gold transition-colors">
                  Meja Makan
                </Link>
              </li>
              <li>
                <Link href="/koleksi/kursi-sofa" className="text-secondary hover:text-gold transition-colors">
                  Kursi & Sofa
                </Link>
              </li>
              <li>
                <Link href="/koleksi/lemari-storage" className="text-secondary hover:text-gold transition-colors">
                  Lemari & Storage
                </Link>
              </li>
              <li>
                <Link href="/koleksi/tempat-tidur" className="text-secondary hover:text-gold transition-colors">
                  Tempat Tidur
                </Link>
              </li>
              <li>
                <Link href="/koleksi/meja-kerja" className="text-secondary hover:text-gold transition-colors">
                  Meja Kerja
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-secondary text-sm">
                  Jl. Raya Furniture No. 123<br />
                  Jepara, Jawa Tengah 59419
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a href="tel:+6281234567890" className="text-secondary hover:text-gold transition-colors text-sm">
                  0812-3456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href="mailto:info@kayunusantara.id" className="text-secondary hover:text-gold transition-colors text-sm">
                  info@kayunusantara.id
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-gold flex-shrink-0" />
                <span className="text-secondary text-sm">
                  Senin - Sabtu: 08:00 - 17:00
                </span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary text-sm">
              &copy; 2025 Kayu Nusantara. Furniture Kayu Jati Premium.
            </p>
            <p className="text-secondary text-sm">
              Website ini dibuat dengan <span className="text-red-400">❤️</span> oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
