import { ArrowUpRight, Play, Sparkles } from 'lucide-react'
import type { LogisticsCase } from '../data/logisticsCases'

type VideoCaseCardProps = {
  caseItem: LogisticsCase
  onOpen: (caseItem: LogisticsCase) => void
  isFeatured?: boolean
}

export function VideoCaseCard({
  caseItem,
  onOpen,
  isFeatured = false,
}: VideoCaseCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(caseItem)}
      className="card-lift group panel-border catalog-shadow min-w-[82vw] snap-start overflow-hidden rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,rgba(6,11,24,0.96),rgba(2,5,12,0.99))] text-left sm:min-w-[440px] md:min-w-0"
    >
      <div className="relative overflow-hidden">
        <img
          src={caseItem.thumbnail}
          alt={caseItem.title}
          loading="lazy"
          className="aspect-video w-full object-cover transition duration-700 group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,8,0.08),rgba(2,3,8,0.22)_30%,rgba(2,3,8,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,85,255,0.22),transparent_52%)] opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full border border-white/12 bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-white/72 backdrop-blur-md">
            {caseItem.badge}
          </span>
          {isFeatured ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-[#0055ff]/26 bg-[#0055ff]/12 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-[#8bb8ff]">
              <Sparkles className="h-3.5 w-3.5" />
              destaque
            </span>
          ) : null}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-full border border-white/16 bg-black/54 text-white shadow-[0_0_0_10px_rgba(0,85,255,0.06),0_22px_64px_rgba(0,0,0,0.4)] backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:border-[#66a6ff]/50 group-hover:bg-[#0055ff]/24 group-hover:shadow-[0_0_0_12px_rgba(0,85,255,0.08),0_24px_70px_rgba(0,0,0,0.46)]">
            <Play className="ml-1 h-5 w-5 fill-current sm:h-5 sm:w-5" />
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-xs">
          <span className="truncate rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] text-white/66 backdrop-blur-md">
            {caseItem.segment}
          </span>
          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] text-white/62 backdrop-blur-md">
            {caseItem.duration}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <div className="space-y-2.5">
          <p className="text-xs uppercase tracking-[0.34em] text-white/38">{caseItem.category}</p>
          <h3 className="font-display text-[1.7rem] leading-[1.02] tracking-[-0.05em] text-[#eeeeee]">
            {caseItem.title}
          </h3>
        </div>

        <p className="text-sm leading-7 text-white/58 transition duration-300 group-hover:text-white/72">
          {caseItem.description}
        </p>

        <div className="flex items-center justify-between border-t border-white/8 pt-4 text-sm text-white/72">
          <span>Assistir case completo</span>
          <ArrowUpRight className="h-4 w-4 text-[#8bb8ff] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </button>
  )
}
