import { GalleryItem } from "@/data/categories";
import Icon from "../Icon";

interface Props {
  gallery: GalleryItem[];
}

export default function ProductGallery({ gallery }: Props) {
  return (
    <section className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-gutter text-center mb-stack-lg">
        <h3 className="text-h2 font-bold uppercase mb-4 text-on-surface">
          Üretim Kalitesi ve Detaylar
        </h3>
        <div className="w-20 h-1 bg-primary-container mx-auto" />
      </div>

      <div className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
        {gallery.map((item) => (
          <div key={item.title} className="space-y-stack-md">
            <div className="aspect-[4/3] bg-white border border-outline-variant overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-surface-container-low text-primary-container">
                <Icon name={item.icon} size={80} />
              </div>
            </div>
            <h4 className="text-[18px] font-bold uppercase text-on-surface">
              {item.title}
            </h4>
            <p className="text-secondary text-[14px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}