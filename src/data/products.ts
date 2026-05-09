export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  code: string; // ENJxxx
  title: string;
  description: string;
  technicalSpecs: TechnicalSpec[];
  category: string; // category slug
  image: string;
}

export const products: Product[] = [
  // ===================== SEYYAR MAKARALAR =====================
  {
    id: "1",
    code: "ENJ 274",
    title: " 20 MT BAKIR SEYYAR MAKARA",
    description: "20 metre uzunluğunda 3x1.5 mm² TTR kablolu seyyar makara.",
    technicalSpecs: [
      { label: "Kablo Tipi", value: "3x1.5 TTR" },
      { label: "Uzunluk", value: "20 metre" },
      { label: "Priz Sayısı", value: "4 adet" },
      { label: "Maks. Güç", value: "3500 W" },
    ],
    category: "seyyar-makaralar",
    image: "/images/products/enj-101.jpg",
  },
  {
    id: "2",
    code: "ENJ 102",
    title: "Seyyar Makara 3x1.5 TTR - 30m",
    description: "30 metre uzunluğunda 3x1.5 mm² TTR kablolu seyyar makara.",
    technicalSpecs: [
      { label: "Kablo Tipi", value: "3x1.5 TTR" },
      { label: "Uzunluk", value: "30 metre" },
      { label: "Priz Sayısı", value: "4 adet" },
      { label: "Maks. Güç", value: "3500 W" },
    ],
    category: "seyyar-makaralar",
    image: "/images/products/enj-102.jpg",
  },
  {
    id: "3",
    code: "ENJ 103",
    title: "Seyyar Makara 3x1.5 TTR - 50m",
    description: "50 metre uzunluğunda 3x1.5 mm² TTR kablolu seyyar makara.",
    technicalSpecs: [
      { label: "Kablo Tipi", value: "3x1.5 TTR" },
      { label: "Uzunluk", value: "50 metre" },
      { label: "Priz Sayısı", value: "4 adet" },
      { label: "Maks. Güç", value: "3500 W" },
    ],
    category: "seyyar-makaralar",
    image: "/images/products/enj-103.jpg",
  },
  {
    id: "4",
    code: "ENJ 104",
    title: "Seyyar Makara 3x2.5 TTR - 20m",
    description: "20 metre uzunluğunda 3x2.5 mm² TTR kablolu güçlendirilmiş makara.",
    technicalSpecs: [
      { label: "Kablo Tipi", value: "3x2.5 TTR" },
      { label: "Uzunluk", value: "20 metre" },
      { label: "Priz Sayısı", value: "4 adet" },
      { label: "Maks. Güç", value: "5000 W" },
    ],
    category: "seyyar-makaralar",
    image: "/images/products/enj-104.jpg",
  },
  {
    id: "5",
    code: "ENJ 105",
    title: "Seyyar Makara 3x2.5 TTR - 30m",
    description: "30 metre uzunluğunda 3x2.5 mm² TTR kablolu güçlendirilmiş makara.",
    technicalSpecs: [
      { label: "Kablo Tipi", value: "3x2.5 TTR" },
      { label: "Uzunluk", value: "30 metre" },
      { label: "Priz Sayısı", value: "4 adet" },
      { label: "Maks. Güç", value: "5000 W" },
    ],
    category: "seyyar-makaralar",
    image: "/images/products/enj-105.jpg",
  },
  {
    id: "6",
    code: "ENJ 106",
    title: "Seyyar Makara 3x2.5 TTR - 50m",
    description: "50 metre uzunluğunda 3x2.5 mm² TTR kablolu profesyonel makara.",
    technicalSpecs: [
      { label: "Kablo Tipi", value: "3x2.5 TTR" },
      { label: "Uzunluk", value: "50 metre" },
      { label: "Priz Sayısı", value: "4 adet" },
      { label: "Maks. Güç", value: "5000 W" },
    ],
    category: "seyyar-makaralar",
    image: "/images/products/enj-106.jpg",
  },
  {
    id: "7",
    code: "ENJ 110",
    title: "Bakır Seyyar Makara 3x2.5 - 30m",
    description: "Tam bakır iletkenli, 30 metre 3x2.5 mm² profesyonel makara.",
    technicalSpecs: [
      { label: "Kablo Tipi", value: "3x2.5 Bakır" },
      { label: "Uzunluk", value: "30 metre" },
      { label: "İletken", value: "%100 Bakır" },
      { label: "Maks. Güç", value: "5500 W" },
    ],
    category: "seyyar-makaralar",
    image: "/images/products/enj-110.jpg",
  },
  {
    id: "8",
    code: "ENJ 111",
    title: "Bakır Seyyar Makara 3x2.5 - 50m",
    description: "Tam bakır iletkenli, 50 metre 3x2.5 mm² profesyonel makara.",
    technicalSpecs: [
      { label: "Kablo Tipi", value: "3x2.5 Bakır" },
      { label: "Uzunluk", value: "50 metre" },
      { label: "İletken", value: "%100 Bakır" },
      { label: "Maks. Güç", value: "5500 W" },
    ],
    category: "seyyar-makaralar",
    image: "/images/products/enj-111.jpg",
  },

  // ===================== UZATMA VE FİŞLİ KABLOLAR =====================
  {
    id: "20",
    code: "ENJ 201",
    title: "Matkap Uzatma Kablosu 5m",
    description: "Matkap ve el aletleri için 5 metre fişli uzatma kablosu.",
    technicalSpecs: [
      { label: "Kablo Tipi", value: "3x1.5 TTR" },
      { label: "Uzunluk", value: "5 metre" },
      { label: "Fiş Tipi", value: "Topraklı" },
      { label: "Maks. Güç", value: "3500 W" },
    ],
    category: "uzatma-fisli-kablolar",
    image: "/images/products/enj-201.jpg",
  },
  {
    id: "21",
    code: "ENJ 202",
    title: "Matkap Uzatma Kablosu 10m",
    description: "Matkap ve el aletleri için 10 metre fişli uzatma kablosu.",
    technicalSpecs: [
      { label: "Kablo Tipi", value: "3x1.5 TTR" },
      { label: "Uzunluk", value: "10 metre" },
      { label: "Fiş Tipi", value: "Topraklı" },
      { label: "Maks. Güç", value: "3500 W" },
    ],
    category: "uzatma-fisli-kablolar",
    image: "/images/products/enj-202.jpg",
  },
  {
    id: "22",
    code: "ENJ 210",
    title: "Süpürge Kablosu 5m",
    description: "Elektrik süpürgesi için 5 metre yedek kablo.",
    technicalSpecs: [
      { label: "Kablo Tipi", value: "2x0.75" },
      { label: "Uzunluk", value: "5 metre" },
      { label: "Fiş Tipi", value: "Topraksız" },
      { label: "Kullanım", value: "Süpürge" },
    ],
    category: "uzatma-fisli-kablolar",
    image: "/images/products/enj-210.jpg",
  },
  {
    id: "23",
    code: "ENJ 220",
    title: "Power Kablo 3m",
    description: "Genel amaçlı 3 metre power kablosu.",
    technicalSpecs: [
      { label: "Kablo Tipi", value: "3x1.0 TTR" },
      { label: "Uzunluk", value: "3 metre" },
      { label: "Fiş Tipi", value: "Topraklı" },
      { label: "Maks. Güç", value: "2500 W" },
    ],
    category: "uzatma-fisli-kablolar",
    image: "/images/products/enj-220.jpg",
  },

  // ===================== AKÜ TAKVİYE =====================
  {
    id: "40",
    code: "ENJ 401",
    title: "Akü Takviye Kablosu 800 AMP",
    description: "Binek araçlar için 800 amper kapasiteli akü takviye kablosu.",
    technicalSpecs: [
      { label: "Akım Kapasitesi", value: "800 AMP" },
      { label: "Uzunluk", value: "2.5 metre" },
      { label: "Pens Tipi", value: "İzoleli Krokodil" },
      { label: "Kullanım", value: "Binek Araç" },
    ],
    category: "aku-takviye",
    image: "/images/products/enj-401.jpg",
  },
  {
    id: "41",
    code: "ENJ 402",
    title: "Akü Takviye Kablosu 1200 AMP",
    description: "Ağır vasıtalar için 1200 amper profesyonel akü takviye kablosu.",
    technicalSpecs: [
      { label: "Akım Kapasitesi", value: "1200 AMP" },
      { label: "Uzunluk", value: "3.5 metre" },
      { label: "Pens Tipi", value: "İzoleli Krokodil" },
      { label: "Kullanım", value: "Ağır Vasıta" },
    ],
    category: "aku-takviye",
    image: "/images/products/enj-402.jpg",
  },

  // ===================== AKSESUAR & KAUÇUK =====================
  {
    id: "60",
    code: "ENJ 150",
    title: "Kauçuk Fiş 16A",
    description: "Endüstriyel kullanım için 16 amper kauçuk topraklı fiş.",
    technicalSpecs: [
      { label: "Akım", value: "16 A" },
      { label: "Voltaj", value: "250 V" },
      { label: "Topraklama", value: "Var" },
      { label: "Malzeme", value: "Kauçuk" },
    ],
    category: "aksesuar-kaucuk",
    image: "/images/products/enj-150.jpg",
  },
  {
    id: "61",
    code: "ENJ 266",
    title: "Kauçuk Priz 16A",
    description: "Endüstriyel kullanım için 16 amper kauçuk topraklı priz.",
    technicalSpecs: [
      { label: "Akım", value: "16 A" },
      { label: "Voltaj", value: "250 V" },
      { label: "Topraklama", value: "Var" },
      { label: "Malzeme", value: "Kauçuk" },
    ],
    category: "aksesuar-kaucuk",
    image: "/images/products/enj-266.jpg",
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProductByCode(code: string): Product | undefined {
  return products.find((p) => p.code === code);
}
