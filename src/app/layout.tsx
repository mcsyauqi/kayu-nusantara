import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kayu Nusantara | Toko Furniture Kayu Jati Asli | Custom Order",
  description: "Furniture kayu jati premium buatan tangan oleh pengrajin berpengalaman. Keindahan Alami, Kualitas Abadi. Custom order tersedia.",
  keywords: "furniture kayu, kayu jati, meja makan kayu, kursi kayu, lemari kayu jati, custom furniture, furniture premium indonesia",
  openGraph: {
    title: "Kayu Nusantara - Furniture Kayu Jati Premium",
    description: "Furniture kayu jati premium buatan tangan. Keindahan Alami, Kualitas Abadi.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Nunito+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
