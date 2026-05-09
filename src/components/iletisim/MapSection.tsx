import Image from "next/image";
import Icon from "../Icon";

export default function MapSection() {
  return (
    <section className="w-full h-[450px] bg-secondary-fixed relative overflow-hidden">
      <div className="absolute inset-0 grayscale opacity-80 pointer-events-none">
        <Image
          src="/images/map.png"
          alt="Enjoy Kablo konumu"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-gutter">
        <div className="bg-white p-gutter shadow-xl max-w-sm text-center border border-primary-container relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
            <Icon name="location_on" filled />
          </div>
          <h4 className="text-h3 font-semibold mb-2 mt-4">Enjoy Kablo</h4>
          <p className="text-secondary text-body-md mb-4">
            Üretim Tesisi & Merkez Ofis
          </p>
          
           <a href="https://www.google.com/maps/place/ENJOY+KABLO+ELEKTR%C4%B0K+AH%C5%9EAP+VE+HIRDAVAT+SAN.+T%C4%B0C.+LTD.+%C5%9ET%C4%B0./@41.0840877,28.9000623,539m/data=!3m1!1e3!4m14!1m7!3m6!1s0x14cab1947338ea1d:0x52d551737e60dbb2!2sENJOY+KABLO+ELEKTR%C4%B0K+AH%C5%9EAP+VE+HIRDAVAT+SAN.+T%C4%B0C.+LTD.+%C5%9ET%C4%B0.!8m2!3d41.0840877!4d28.9000623!16s%2Fg%2F11zhv78mny!3m5!1s0x14cab1947338ea1d:0x52d551737e60dbb2!8m2!3d41.0840877!4d28.9000623!16s%2Fg%2F11zhv78mny?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-on-secondary-fixed px-gutter py-2 text-button uppercase tracking-wider hover:bg-on-secondary-fixed hover:text-on-primary transition-all"
          >
            Yol Tarifi Al
          </a>
        </div>
      </div>
    </section>
  );
}