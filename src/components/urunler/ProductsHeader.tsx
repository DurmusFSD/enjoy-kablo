export default function ProductsHeader() {
  return (
    <section className="py-stack-lg px-gutter max-w-[1280px] mx-auto border-b border-outline-variant bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-stack-md">
        <div>
          <span className="text-label-caps text-primary-container uppercase mb-2 block">
            Profesyonel Çözümler
          </span>
          <h1 className="text-h1 font-bold text-on-surface">Ürün Grupları</h1>
        </div>

        {/* <div className="flex flex-wrap gap-stack-sm items-end">
          <div className="flex flex-col gap-1">
            <label className="text-label-caps text-secondary uppercase">Kesit</label>
            <select className="bg-white border border-on-secondary-fixed rounded px-stack-sm py-2 text-body-md focus:border-primary-container outline-none min-w-[120px]">
              <option>Tümü</option>
              <option>3x1.5 mm²</option>
              <option>3x2.5 mm²</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-label-caps text-secondary uppercase">Uzunluk</label>
            <select className="bg-white border border-on-secondary-fixed rounded px-stack-sm py-2 text-body-md focus:border-primary-container outline-none min-w-[120px]">
              <option>Tümü</option>
              <option>20m</option>
              <option>35m</option>
              <option>50m</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-label-caps text-secondary uppercase">Tip</label>
            <select className="bg-white border border-on-secondary-fixed rounded px-stack-sm py-2 text-body-md focus:border-primary-container outline-none min-w-[120px]">
              <option>Tümü</option>
              <option>Kauçuk</option>
              <option>PVC</option>
            </select>
          </div>
        </div> */}
      </div>
    </section>
  );
}