import type { LogisticsBrand } from '../data/logisticsBrands'

type BrandWallCardProps = {
  brand: LogisticsBrand
}

export function BrandWallCard({ brand }: BrandWallCardProps) {
  return (
    <article className="group panel-border catalog-shadow relative overflow-hidden rounded-[28px] border border-white/8 bg-[#050a14]/88 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#0055ff]/24 hover:bg-[#061125]/92 hover:shadow-[0_28px_70px_rgba(0,0,0,0.42),0_0_0_1px_rgba(0,85,255,0.08)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,85,255,0.16),transparent_56%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />

      <div className="relative flex flex-col gap-4">
        <p className="text-[11px] uppercase tracking-[0.32em] text-white/34">{brand.sector}</p>

        <div className="flex min-h-[124px] items-center justify-center rounded-[24px] border border-white/7 bg-[linear-gradient(180deg,#f7f9ff,#edf2fb)] px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.88),0_14px_28px_rgba(0,0,0,0.12)]">
          {brand.logoSrc ? (
            <img
              src={brand.logoSrc}
              alt={brand.alt ?? brand.name}
              loading="lazy"
              className={`mx-auto w-full object-contain mix-blend-multiply opacity-92 transition duration-300 group-hover:opacity-100 ${brand.logoClassName ?? 'h-[72px] max-w-[82%]'}`}
            />
          ) : (
            <span
              className={`text-center font-display text-[1.9rem] leading-none text-[#f2f5fb] ${brand.wordmarkClassName ?? 'tracking-[-0.05em]'}`}
            >
              {brand.name}
            </span>
          )}
        </div>

        <p className="text-sm text-white/48 transition duration-300 group-hover:text-white/64">
          Contexto industrial e logístico B2B.
        </p>
      </div>
    </article>
  )
}
