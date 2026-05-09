import Image from "next/image";
import { Product } from "@/data/products";
import { whatsappLink } from "@/lib/constants";
import Icon from "./Icon";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group bg-white border border-outline-variant hover:border-primary-container transition-all duration-300 flex flex-col overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square bg-surface-container overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Code badge */}
        <div className="absolute top-3 left-3 bg-primary-container text-on-primary text-label-caps uppercase px-3 py-1.5">
          {product.code}
        </div>
      </div>

      {/* Body */}
      <div className="p-stack-md flex-1 flex flex-col">
        <h3 className="text-h3 font-semibold text-on-surface mb-3 line-clamp-2 min-h-[3.6rem]">
          {product.title}
        </h3>

        {/* Tech specs */}
        <table className="w-full text-sm mb-stack-md border-t border-outline-variant">
          <tbody>
            {product.technicalSpecs.map((spec, i) => (
              <tr key={i} className="border-b border-outline-variant/50 last:border-0">
                <td className="py-2 pr-2 text-label-caps uppercase text-secondary-container">
                  {spec.label}
                </td>
                <td className="py-2 text-right text-body-md font-semibold text-on-surface">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* CTA */}
        <a
          href={whatsappLink(product.code, product.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 bg-on-secondary-fixed hover:bg-primary-container text-on-primary py-3 text-button uppercase tracking-wide transition-colors"
        >
          <Icon name="chat" size={18} />
          WhatsApp ile Teklif Al
        </a>
      </div>
    </article>
  );
}
