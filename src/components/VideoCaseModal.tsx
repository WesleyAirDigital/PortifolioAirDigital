import {
  ArrowUpRight,
  Building2,
  CircleDot,
  PlayCircle,
  Target,
  TrendingUp,
  X,
} from 'lucide-react'
import { useEffect, useEffectEvent } from 'react'
import type { LogisticsCase } from '../data/logisticsCases'

type VideoCaseModalProps = {
  caseItem: LogisticsCase | null
  onClose: () => void
  contactHref: string
}

export function VideoCaseModal({
  caseItem,
  onClose,
  contactHref,
}: VideoCaseModalProps) {
  const handleEscape = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose()
    }
  })

  useEffect(() => {
    if (!caseItem) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      handleEscape(event)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [caseItem])

  if (!caseItem) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[rgba(2,4,10,0.78)] p-4 backdrop-blur-2xl md:items-center"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="panel-border animate-fade-up relative max-h-[92vh] w-full max-w-[1220px] overflow-hidden rounded-[34px] bg-[#03070f]/96 shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/44 text-white/76 transition hover:border-white/18 hover:text-white"
          aria-label="Fechar modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
          <div className="border-b border-white/8 bg-black lg:border-b-0 lg:border-r">
            <video
              key={caseItem.id}
              className="aspect-video w-full bg-black object-cover"
              controls
              playsInline
              preload="metadata"
              poster={caseItem.thumbnail}
            >
              <source src={caseItem.videoUrl} type="video/mp4" />
            </video>
          </div>

          <div className="flex flex-col gap-6 bg-[radial-gradient(circle_at_top,rgba(0,85,255,0.14),transparent_36%)] p-6 sm:p-7">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.26em] text-white/52">
                  {caseItem.category}
                </span>
                <span className="rounded-full border border-[#0055ff]/24 bg-[#0055ff]/12 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.26em] text-[#8bb8ff]">
                  {caseItem.badge}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/52">
                  <PlayCircle className="h-3.5 w-3.5 text-[#8bb8ff]" />
                  {caseItem.duration}
                </span>
              </div>

              <h2 className="font-display mt-4 text-[2.1rem] leading-[0.97] tracking-[-0.05em] text-[#eeeeee] sm:text-[2.6rem]">
                {caseItem.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-white/58">{caseItem.description}</p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3 text-[#8bb8ff]">
                  <Building2 className="h-4.5 w-4.5" />
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">Segmento</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/72">{caseItem.segment}</p>
              </div>

              <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3 text-[#8bb8ff]">
                  <Target className="h-4.5 w-4.5" />
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Objetivo comercial
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/72">{caseItem.objective}</p>
              </div>

              <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3 text-[#8bb8ff]">
                  <CircleDot className="h-4.5 w-4.5" />
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">Execução aplicada</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/72">{caseItem.strategy}</p>
              </div>

              <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3 text-[#8bb8ff]">
                  <TrendingUp className="h-4.5 w-4.5" />
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Impacto percebido
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/72">{caseItem.result}</p>
              </div>
            </div>

            <a
              href={contactHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0055ff] px-5 py-4 text-sm font-medium text-white shadow-[0_20px_50px_rgba(0,85,255,0.26)] transition hover:-translate-y-0.5 hover:bg-[#1767ff]"
            >
              Quero esse nível na minha operação
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
