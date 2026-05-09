import { Metadata } from "next";
import { Target, Eye, Heart } from "lucide-react";
import VisionMission from "@/components/hakkimizda/VisionMission";
import AboutSection from "@/components/hakkimizda/AboutSection";
import AboutHero from "@/components/hakkimizda/AboutHero";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Enjoy Kablo, yerli üretim seyyar makaralar ve elektrik aksesuarları konusunda uzmanlaşmış bir Türk üreticisidir.",
};

export default function AboutPage() {
  return (
    <>
    <AboutHero/>
    <AboutSection/>
    <VisionMission/>
    </>
  );
}
