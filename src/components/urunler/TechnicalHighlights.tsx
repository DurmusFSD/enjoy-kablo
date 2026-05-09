import { Highlight } from "@/data/categories";
import Icon from "../Icon";

interface Props {
  highlights: Highlight[];
}

export default function TechnicalHighlights({ highlights }: Props) {
  return (
    <section className="py-stack-lg bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-outline-variant p-stack-md flex flex-col gap-2 transition-all duration-200 hover:border-on-secondary-fixed hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.15)]"
            >
              <Icon
                name={item.icon}
                size={32}
                className="text-primary-container"
              />
              <h4 className="text-[18px] text-on-surface font-bold uppercase">
                {item.title}
              </h4>
              <p className="text-[14px] text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}