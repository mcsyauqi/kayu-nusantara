export const categories = [
  {
    id: "meja-makan",
    name: "Meja Makan",
    description: "Meja makan elegan untuk kebersamaan keluarga",
    price: "Mulai Rp 8.500.000",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    count: 25,
    features: ["Berbagai ukuran", "4-12 orang", "Desain klasik & modern"],
  },
  {
    id: "kursi-sofa",
    name: "Kursi & Sofa",
    description: "Kenyamanan premium dengan sentuhan kayu jati",
    price: "Mulai Rp 3.500.000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    count: 40,
    features: ["Bantal premium", "Rangka kokoh", "Ergonomis"],
  },
  {
    id: "lemari-storage",
    name: "Lemari & Storage",
    description: "Solusi penyimpanan elegan dan fungsional",
    price: "Mulai Rp 6.000.000",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    count: 30,
    features: ["2-4 pintu", "Laci tambahan", "Cermin opsional"],
  },
  {
    id: "tempat-tidur",
    name: "Tempat Tidur",
    description: "Tidur berkualitas dengan rangka kayu jati solid",
    price: "Mulai Rp 12.000.000",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    count: 20,
    features: ["Single hingga King", "Headboard ukir", "Laci bawah"],
  },
  {
    id: "meja-kerja",
    name: "Meja Kerja",
    description: "Produktivitas maksimal dengan meja berkualitas",
    price: "Mulai Rp 4.500.000",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    count: 15,
    features: ["Laci built-in", "Cable management", "Ergonomis"],
  },
  {
    id: "outdoor-furniture",
    name: "Outdoor Furniture",
    description: "Furniture tahan cuaca untuk taman dan teras",
    price: "Mulai Rp 5.000.000",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    count: 20,
    features: ["Tahan cuaca", "Anti rayap", "Finishing khusus"],
  },
];

export const featuredProducts = [
  {
    id: 1,
    name: "Meja Makan Jengki",
    price: 15000000,
    originalPrice: 18000000,
    material: "Kayu Jati Grade A",
    dimension: "180 x 90 x 75 cm",
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&q=80",
    category: "meja-makan",
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 2,
    name: "Kursi Malang Classic",
    price: 2800000,
    originalPrice: null,
    material: "Kayu Jati Grade A",
    dimension: "45 x 45 x 90 cm",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
    category: "kursi-sofa",
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 3,
    name: "Lemari Jogja 3 Pintu",
    price: 18000000,
    originalPrice: 21000000,
    material: "Kayu Jati Grade A",
    dimension: "200 x 60 x 200 cm",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
    category: "lemari-storage",
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Tempat Tidur Bali",
    price: 22000000,
    originalPrice: null,
    material: "Kayu Jati Grade A",
    dimension: "200 x 180 x 120 cm",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    category: "tempat-tidur",
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 5,
    name: "Meja Kerja Minimalis",
    price: 6500000,
    originalPrice: 7500000,
    material: "Kayu Jati Grade A",
    dimension: "140 x 70 x 75 cm",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    category: "meja-kerja",
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 6,
    name: "Set Kursi Taman",
    price: 8500000,
    originalPrice: null,
    material: "Kayu Jati Grade A",
    dimension: "Set 4 kursi + meja",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    category: "outdoor-furniture",
    isNew: true,
    isBestSeller: false,
  },
];

export const advantages = [
  {
    title: "Kayu Jati Grade A",
    description: "Hanya menggunakan kayu jati pilihan dengan serat dan warna terbaik dari hutan perhutani",
    icon: "TreeDeciduous",
  },
  {
    title: "Pengrajin Berpengalaman",
    description: "Dibuat oleh tukang kayu profesional dengan pengalaman lebih dari 20 tahun di Jepara",
    icon: "Hammer",
  },
  {
    title: "Finishing Premium",
    description: "Menggunakan finishing natural oil berkualitas tinggi yang aman dan tahan lama",
    icon: "Sparkles",
  },
  {
    title: "Custom Design",
    description: "Kami bisa membuat furniture sesuai desain dan ukuran yang Anda inginkan",
    icon: "Ruler",
  },
];

export const stats = [
  { value: "15+", label: "Tahun Pengalaman", description: "Melayani pelanggan sejak 2009" },
  { value: "5000+", label: "Furniture Dibuat", description: "Untuk ribuan keluarga Indonesia" },
  { value: "500+", label: "Klien Puas", description: "Dari Sabang sampai Merauke" },
  { value: "50+", label: "Pengrajin Ahli", description: "Tim profesional berdedikasi" },
];

export const processSteps = [
  {
    step: 1,
    title: "Konsultasi Desain",
    duration: "1-2 hari",
    description: "Diskusikan kebutuhan dan preferensi desain furniture Anda dengan tim kami secara gratis",
  },
  {
    step: 2,
    title: "Pemilihan Kayu",
    duration: "1 hari",
    description: "Pilih kayu jati terbaik sesuai dengan karakteristik dan budget yang Anda inginkan",
  },
  {
    step: 3,
    title: "Proses Pembuatan",
    duration: "14-30 hari",
    description: "Pengrajin kami membuat furniture dengan teliti menggunakan teknik tradisional dan modern",
  },
  {
    step: 4,
    title: "Quality Control",
    duration: "2 hari",
    description: "Pemeriksaan kualitas menyeluruh untuk memastikan hasil sesuai standar premium kami",
  },
  {
    step: 5,
    title: "Pengiriman & Instalasi",
    duration: "1-7 hari",
    description: "Pengiriman aman ke lokasi Anda dengan packing khusus dan instalasi profesional",
  },
];

export const testimonials = [
  {
    name: "Bapak Hendra Wijaya",
    location: "Jakarta Selatan",
    text: "Kualitas kayunya luar biasa. Sudah 5 tahun meja makan kami masih kuat dan warnanya makin bagus. Pengerjaan sangat detail dan rapi.",
    rating: 5,
    product: "Meja Makan Set",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Ibu Ratna Sari",
    location: "Surabaya",
    text: "Custom meja sesuai request kami, hasilnya perfect! Tim sangat responsif dan sabar mendengar semua permintaan. Worth every rupiah!",
    rating: 5,
    product: "Custom Meja Kerja",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "Villa Ubud Residence",
    location: "Bali",
    text: "Pengiriman sampai Bali lancar tanpa kendala. Packing sangat aman, semua furniture sampai tanpa cacat sedikitpun. Recommended!",
    rating: 5,
    product: "Full Interior Set",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  },
  {
    name: "Bapak Ahmad Fauzi",
    location: "Bandung",
    text: "Lemari jati 3 pintu pesanan kami sangat kokoh dan elegan. Ukiran detailnya menakjubkan. Keluarga sangat puas dengan hasilnya.",
    rating: 5,
    product: "Lemari 3 Pintu",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Ibu Linda Kusuma",
    location: "Semarang",
    text: "Proses pemesanan mudah, komunikasi lancar, dan hasil memuaskan. Tempat tidur kami sangat nyaman dan tahan lama. Terima kasih!",
    rating: 5,
    product: "Tempat Tidur King",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Hotel Amanjiwo",
    location: "Yogyakarta",
    text: "Kami memesan 50 set furniture untuk kamar hotel. Kualitas konsisten, pengerjaan tepat waktu. Partner yang sangat profesional.",
    rating: 5,
    product: "Hotel Furniture Set",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
  },
];

export const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    alt: "Living Room Set",
    category: "Interior",
    description: "Set ruang tamu lengkap dengan sofa jati premium",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    alt: "Dining Table",
    category: "Meja Makan",
    description: "Meja makan 8 orang dengan finishing natural",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    alt: "Bedroom Set",
    category: "Kamar Tidur",
    description: "Set kamar tidur lengkap dengan headboard ukir",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    alt: "Wardrobe",
    category: "Lemari",
    description: "Lemari 3 pintu dengan cermin built-in",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    alt: "Outdoor Set",
    category: "Outdoor",
    description: "Furniture taman tahan cuaca",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    alt: "Work Desk",
    category: "Meja Kerja",
    description: "Meja kerja minimalis dengan laci",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
    alt: "Chair Detail",
    category: "Kursi",
    description: "Detail ukiran kursi klasik Jepara",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&q=80",
    alt: "Table Detail",
    category: "Detail",
    description: "Detail finishing meja makan",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
    alt: "Cabinet Detail",
    category: "Lemari",
    description: "Detail ukiran lemari tradisional",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    alt: "Bedroom View",
    category: "Kamar Tidur",
    description: "View lengkap kamar tidur minimalis",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Workshop",
    category: "Workshop",
    description: "Proses pembuatan di workshop kami",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&q=80",
    alt: "Wood Selection",
    category: "Workshop",
    description: "Pemilihan kayu jati terbaik",
  },
];

export const faqs = [
  {
    question: "Berapa lama waktu pengerjaan furniture?",
    answer: "Waktu pengerjaan bervariasi tergantung kompleksitas desain. Untuk produk standar sekitar 14-21 hari, sedangkan custom order bisa mencapai 30-45 hari.",
  },
  {
    question: "Apakah bisa custom ukuran dan desain?",
    answer: "Tentu! Kami menerima custom order sesuai desain dan ukuran yang Anda inginkan. Tim kami akan membantu konsultasi untuk mewujudkan furniture impian Anda.",
  },
  {
    question: "Bagaimana dengan pengiriman ke luar Jawa?",
    answer: "Kami melayani pengiriman ke seluruh Indonesia. Untuk luar Jawa, kami menggunakan ekspedisi terpercaya dengan packing khusus untuk menjamin keamanan produk.",
  },
  {
    question: "Apa garansi yang diberikan?",
    answer: "Kami memberikan garansi konstruksi 10 tahun untuk semua produk. Garansi mencakup kerusakan struktur akibat cacat produksi, bukan kerusakan akibat pemakaian normal.",
  },
  {
    question: "Jenis kayu apa yang digunakan?",
    answer: "Kami hanya menggunakan kayu jati Grade A dari perhutani yang sudah dikeringkan dengan baik. Kayu jati terkenal tahan lama, tahan rayap, dan memiliki serat yang indah.",
  },
  {
    question: "Apakah harga sudah termasuk ongkir?",
    answer: "Harga yang tertera belum termasuk ongkir. Ongkir akan dihitung berdasarkan lokasi pengiriman dan volume barang. Untuk area Jepara gratis ongkir.",
  },
  {
    question: "Bagaimana cara perawatan furniture jati?",
    answer: "Furniture jati cukup dilap dengan kain lembab secara berkala. Hindari paparan sinar matahari langsung dan gunakan coaster untuk minuman panas. Poles dengan minyak jati setiap 6-12 bulan.",
  },
  {
    question: "Apakah bisa melihat proses pembuatan?",
    answer: "Tentu! Anda bisa berkunjung ke workshop kami di Jepara untuk melihat langsung proses pembuatan. Silakan hubungi kami untuk mengatur jadwal kunjungan.",
  },
];

export const materials = [
  {
    name: "Kayu Jati Grade A",
    description: "Kayu jati pilihan dengan serat rapat dan warna merata",
    features: ["Tahan rayap", "Awet 50+ tahun", "Serat indah"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    name: "Kayu Jati Perhutani",
    description: "Kayu jati legal dari hutan perhutani dengan sertifikasi",
    features: ["Bersertifikat", "Ramah lingkungan", "Kualitas terjamin"],
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=400&q=80",
  },
  {
    name: "Finishing Natural Oil",
    description: "Finishing dengan minyak alami yang menonjolkan keindahan serat kayu",
    features: ["Aman untuk kesehatan", "Mudah perawatan", "Tahan lama"],
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&q=80",
  },
];

export const workshopImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    title: "Area Pemotongan",
    description: "Kayu dipotong dengan presisi menggunakan mesin modern",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&q=80",
    title: "Gudang Kayu",
    description: "Penyimpanan kayu jati yang sudah dikeringkan",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80",
    title: "Area Finishing",
    description: "Proses finishing dengan teknik tradisional",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
    title: "Quality Control",
    description: "Pemeriksaan kualitas sebelum pengiriman",
  },
];

export const aboutInfo = {
  title: "Tentang Kayu Nusantara",
  subtitle: "Tradisi Kerajinan Sejak 2009",
  description: "Kayu Nusantara adalah produsen furniture kayu jati premium yang berlokasi di Jepara, kota yang terkenal sebagai pusat kerajinan furniture Indonesia. Kami menggabungkan teknik tradisional warisan leluhur dengan desain modern untuk menghasilkan furniture berkualitas tinggi.",
  mission: "Menyediakan furniture kayu jati berkualitas premium dengan harga yang terjangkau untuk keluarga Indonesia.",
  vision: "Menjadi produsen furniture kayu jati terpercaya dan terdepan di Indonesia dengan reputasi internasional.",
  values: [
    { title: "Kualitas", description: "Tidak ada kompromi untuk kualitas produk" },
    { title: "Kejujuran", description: "Transparansi dalam setiap transaksi" },
    { title: "Profesional", description: "Pelayanan terbaik untuk setiap pelanggan" },
    { title: "Inovasi", description: "Terus berinovasi dalam desain dan teknik" },
  ],
};

export const shippingAreas = [
  { region: "Jawa", cities: ["Jakarta", "Bandung", "Surabaya", "Semarang", "Yogyakarta", "Malang"], estimate: "3-5 hari" },
  { region: "Sumatera", cities: ["Medan", "Palembang", "Padang", "Pekanbaru", "Batam"], estimate: "5-7 hari" },
  { region: "Kalimantan", cities: ["Balikpapan", "Banjarmasin", "Pontianak", "Samarinda"], estimate: "5-7 hari" },
  { region: "Sulawesi", cities: ["Makassar", "Manado", "Kendari", "Palu"], estimate: "7-10 hari" },
  { region: "Bali & Nusa Tenggara", cities: ["Denpasar", "Mataram", "Kupang"], estimate: "5-7 hari" },
  { region: "Papua & Maluku", cities: ["Jayapura", "Sorong", "Ambon", "Ternate"], estimate: "10-14 hari" },
];

export const portfolioProjects = [
  {
    id: 1,
    title: "Villa Ubud Residence",
    location: "Bali",
    type: "Full Interior",
    description: "Pengerjaan full interior untuk villa 5 kamar dengan desain tradisional Bali modern",
    images: ["https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80"],
    items: ["20 set tempat tidur", "10 meja makan", "40 kursi", "15 lemari"],
  },
  {
    id: 2,
    title: "Hotel Amanjiwo",
    location: "Yogyakarta",
    type: "Hotel Furniture",
    description: "Penyediaan furniture untuk 50 kamar hotel bintang 5",
    images: ["https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80"],
    items: ["50 set kamar", "Restaurant furniture", "Lobby furniture"],
  },
  {
    id: 3,
    title: "Rumah Mewah PIK",
    location: "Jakarta",
    type: "Residential",
    description: "Custom furniture untuk rumah modern minimalis 3 lantai",
    images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"],
    items: ["Living room set", "Dining set", "5 kamar tidur", "Home office"],
  },
];
