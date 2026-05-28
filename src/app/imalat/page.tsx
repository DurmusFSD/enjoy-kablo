import { Metadata } from "next";
import { Cog, Layers, CheckCircle2, Package } from "lucide-react";
import CTASection from "@/components/imalat/CTASection";
import MachineGallery from "@/components/imalat/MachineGallery";
import CertificatesSection from "@/components/imalat/CertificatesSection";
import QualityPolicy from "@/components/imalat/QualityPolicy";
import CapacitySection from "@/components/imalat/CapacitySection";
import ProductionHero from "@/components/imalat/ProductionHero";
import ProductionVideos from "@/components/imalat/ProductionVideos";

export const metadata: Metadata = {
  title: "İmalat",
  description:
    "Enjoy Kablo üretim süreçleri, kalite kontrol ve modern imalat tesisleri hakkında bilgi.",
};

export default function ImalatPage() {
  const steps = [
    {
      icon: Layers,
      title: "Hammadde Seçimi",
      desc: "Kaliteli bakır iletken ve dayanıklı izolasyon malzemeleri özenle seçilir.",
    },
    {
      icon: Cog,
      title: "Üretim",
      desc: "Modern makinelerle hassas üretim süreçleri uygulanır.",
    },
    {
      icon: CheckCircle2,
      title: "Kalite Kontrol",
      desc: "Her ürün TSE standartlarına göre test edilir.",
    },
    {
      icon: Package,
      title: "Paketleme & Sevkiyat",
      desc: "Güvenli paketleme sonrası Türkiye geneli hızlı sevkiyat.",
    },
  ];

  const videos = [
  { src: "/videos/video1.mp4", poster: "/images/logo.png" },
  { src: "/videos/video2.mp4", poster: "/images/logo.png" },
  { src: "/videos/video3.mp4", poster: "/images/logo.png" },
];

  return (
    <>
    <ProductionHero/>
    <CapacitySection/>
      <QualityPolicy />
      <CertificatesSection />
      <ProductionVideos videos={videos} totalCount={3} />
      <MachineGallery />
      <CTASection />
    </>
  );
}
