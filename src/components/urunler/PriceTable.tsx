import Link from "next/link";
import { Category } from "@/data/categories";
import Icon from "../Icon";
import { SITE_CONFIG } from "@/lib/constants";
import { whatsappLink } from "@/lib/constants";

interface Props {
  category: Category;
}

export default function PriceTable({ category }: Props) {
  return (
    <section className="py-section-gap bg-white">
      <div className="max-w-[1280px] mx-auto px-gutter">
        {/* Header */}
        <div className="mb-stack-lg flex flex-col md:flex-row justify-between items-start md:items-end gap-stack-md">
          <div>
            <h2 className="text-h2 font-bold text-on-surface mb-2 uppercase">
              Güncel Fiyat Listesi
            </h2>
            <p className="text-secondary text-body-md">
              {category.title} teknik özellikleri ve birim fiyatları.
            </p>
          </div>
          <div className="flex flex-wrap gap-stack-sm">
            <a href={whatsappLink(undefined, `${category.title} fiyat teklifi`)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-on-secondary-fixed text-on-secondary-fixed text-button uppercase px-stack-md py-3 hover:bg-on-secondary-fixed hover:text-on-primary transition-all"
            >
              Fiyat Teklifi Al
            </a>

            <a href={SITE_CONFIG.pdfCatalog}
              download
              className="bg-primary-container text-on-primary text-button uppercase px-stack-md py-3 hover:bg-primary transition-all flex items-center gap-2"
            >
              <Icon name="download" size={18} />
              Tümünü İndir
            </a>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-outline-variant shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-on-secondary-fixed text-on-primary border-b border-on-secondary-fixed-variant">
                <th className="px-gutter py-4 text-label-caps uppercase tracking-wider">
                  Ürün Kodu
                </th>
                <th className="px-gutter py-4 text-label-caps uppercase tracking-wider">
                  Ürün Özellikleri
                </th>
                <th className="px-gutter py-4 text-label-caps uppercase tracking-wider text-right">
                  Birim Fiyat (TL)
                </th>
                <th className="px-gutter py-4 text-label-caps uppercase tracking-wider text-center">
                  Durum
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {category.priceList.map((item, i) => (
                <tr
                  key={item.code}
                  className={`${i % 2 === 1 ? "bg-surface-container-lowest" : ""
                    } hover:bg-surface-container-low transition-colors`}
                >
                  <td className="px-gutter py-4 font-bold text-on-surface whitespace-nowrap">
                    {item.code}
                  </td>
                  <td className="px-gutter py-4 text-secondary">{item.spec}</td>
                  <td className="px-gutter py-4 text-right font-bold text-primary-container whitespace-nowrap">
                    {item.price}
                  </td>
                  <td className="px-gutter py-4 text-center">
                    <span
                      className={`px-2 py-1 text-[10px] font-bold uppercase rounded whitespace-nowrap ${item.status === "Stokta"
                        ? "bg-on-secondary-container/10 text-on-secondary-container"
                        : "bg-primary-container/10 text-primary-container"
                        }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}