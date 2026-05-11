import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Factory,
  Handshake,
  Play,
  Radar,
  Route,
  ShieldCheck,
  Target,
  TrendingUp,
  Truck,
  Warehouse,
} from 'lucide-react'
import { startTransition, useDeferredValue, useState } from 'react'
import { BrandMark } from './components/BrandMark'
import { BrandWallCard } from './components/BrandWallCard'
import { SectionTitle } from './components/SectionTitle'
import { VideoCaseCard } from './components/VideoCaseCard'
import { VideoCaseModal } from './components/VideoCaseModal'
import { logisticsBrands } from './data/logisticsBrands'
import { logisticsCases } from './data/logisticsCases'

const createWhatsAppLink = (message: string) =>
  `https://wa.me/5541991361276?text=${encodeURIComponent(message)}`

const strategicDiagnosisHref = createWhatsAppLink(
  'Olá, vim pela landing de logística da Air Digital e quero agendar um diagnóstico comercial para minha operação.',
)

const specialistHref = createWhatsAppLink(
  'Olá, vim pela landing de logística da Air Digital e quero conversar sobre posicionamento comercial e autoridade para minha operação.',
)

const casePriorityOrder = [
  'master-cargas-operacao',
  'master-cargas-frota',
  'master-cargas-joinville-escala',
  'master-cargas-bebidas-dedicada',
  'br-277-full-service',
  'operacao-bebidas-abastecimento',
  'assertividade-modais',
  'master-cargas-cftv',
  'master-cargas-cachoeirinha',
  'indaiatuba-linha-branca',
  'daf-pos-venda-estrutura',
  'daf-pecas-armazenagem',
  'importacao-v7-controle',
  'convencao-cultura-performance',
  'motoristas-2025',
  'armazem-2-ponta-grossa',
  'weg-continuidade-operacional',
  'spcs-supervisao-ativos',
  'bioar-arla32-tecnologia-rota',
  'locacao-sao-jose-pinhais',
] as const

const casePriorityRank = new Map<string, number>(
  casePriorityOrder.map((id, index) => [id, index]),
)

const authorityMetrics = [
  {
    value: '+16 anos',
    label: 'de experiência combinando operação, comercial industrial e construção de presença estratégica.',
  },
  {
    value: '+800 milhões',
    label: 'em contratos, negociações e relacionamento com grandes players da cadeia logística e industrial.',
  },
  {
    value: 'Foco em logística',
    label: 'para transportadoras, operadores, operações dedicadas e vendas B2B de maior complexidade.',
  },
]

const painPoints = [
  'Estratégia comercial pouco clara para grandes contas',
  'Posicionamento fraco diante de embarcadores, compras e indústria',
  'Comunicação desconectada de vendas, autoridade e expansão B2B',
  'Presença digital que não traduz estrutura, governança nem escala',
  'Proposta de valor mal apresentada em reuniões, decks e follow-ups',
]

const painConsequences = [
  'Dependência excessiva de frete spot e demanda oportunista',
  'Margens comprimidas por comparação direta de preço',
  'Dificuldade para abrir agenda com embarcadores e grandes indústrias',
  'Baixa percepção de valor diante da operação real',
  'Menor força comercial em propostas, apresentações e negociações',
]

const serviceItems = [
  'Diagnóstico comercial da operação logística',
  'Estruturação do funil de vendas B2B',
  'Definição de nicho, ICP industrial e posicionamento',
  'Construção de proposta de valor para indústria e embarcadores',
  'Modelagem comercial para contratos logísticos',
  'Prospecção ativa para indústrias e embarcadores',
  'Vídeos institucionais estratégicos para autoridade',
  'Site corporativo sob medida para o comercial',
  'Posicionamento executivo no LinkedIn',
  'Branding logístico orientado à percepção de valor',
]

function App() {
  const [selectedCase, setSelectedCase] = useState<(typeof logisticsCases)[number] | null>(null)
  const [activeCategory, setActiveCategory] = useState('Todos')
  const orderedCases = [...logisticsCases].sort((firstCase, secondCase) => {
    const firstRank = casePriorityRank.get(firstCase.id) ?? Number.MAX_SAFE_INTEGER
    const secondRank = casePriorityRank.get(secondCase.id) ?? Number.MAX_SAFE_INTEGER

    return firstRank - secondRank
  })

  const deferredCategory = useDeferredValue(activeCategory)
  const categories = ['Todos', ...new Set(orderedCases.map((item) => item.category))]
  const visibleCases =
    deferredCategory === 'Todos'
      ? orderedCases
      : orderedCases.filter((item) => item.category === deferredCategory)

  const featuredCase = orderedCases[0]
  const mobileHeroCase =
    orderedCases.find((item) => item.id === 'master-cargas-operacao') ?? orderedCases[0]
  const mobileCatalogCases = orderedCases.filter((item) => item.id !== mobileHeroCase.id)

  const openCase = (caseItem: (typeof logisticsCases)[number]) => {
    startTransition(() => {
      setSelectedCase(caseItem)
    })
  }

  const openCategory = (category: string) => {
    startTransition(() => {
      setActiveCategory(category)
    })
  }

  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(0,85,255,0.3),rgba(0,85,255,0.1)_22%,transparent_58%)]" />
        <div className="absolute left-1/2 top-14 -z-10 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-[#0055ff]/10 blur-3xl" />

        <header className="sticky top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-6 py-4 lg:px-8">
            <a href="#topo" aria-label="Voltar ao topo" className="shrink-0">
              <BrandMark />
            </a>

            <nav className="hidden items-center gap-8 text-sm text-white/64 lg:flex">
              <a className="transition hover:text-white" href="#catalogo">
                Cases
              </a>
              <a className="transition hover:text-white" href="#dor">
                Mercado
              </a>
              <a className="transition hover:text-white" href="#atuacao">
                O que fazemos
              </a>
              <a className="transition hover:text-white" href="#contato">
                Contato
              </a>
            </nav>

            <a
              href={specialistHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-[#0055ff] px-4 py-2.5 text-[13px] font-medium leading-[1.15] text-white shadow-[0_18px_50px_rgba(0,85,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1767ff] sm:px-5 sm:py-3 sm:text-sm"
            >
              Falar sobre sua operação
            </a>
          </div>
        </header>

        <main id="topo">
	          <section className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6 pb-16 pt-12 lg:px-8 lg:gap-14 lg:pb-24 lg:pt-20 xl:grid xl:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] xl:items-end">
            <div className="max-w-[760px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <span className="h-2 w-2 rounded-full bg-[#70b3ff]" />
                Portfólio premium de vídeo cases para logística
              </div>

              <h1 className="font-display text-glow mt-7 max-w-[14ch] text-[3rem] font-medium leading-[0.93] tracking-[-0.06em] text-[#eeeeee] sm:mt-8 sm:text-[4.4rem] lg:text-[5.6rem]">
                Transformamos operação logística em autoridade percebida para fechar com grandes indústrias
              </h1>

              <p className="mt-6 max-w-[63ch] text-base leading-7 text-white/62 sm:mt-7 sm:text-xl sm:leading-8">
                Da estratégia ao vídeo case, estruturamos presença comercial, argumento visual e percepção de valor para empresas que precisam abrir agenda, sustentar propostas e avançar em contratos maiores no B2B industrial.
              </p>

	              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
	                <a
	                  href={strategicDiagnosisHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0055ff] px-6 py-4 text-sm font-medium text-white shadow-[0_24px_60px_rgba(0,85,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1767ff]"
	                >
	                  Agendar diagnóstico comercial
	                  <ArrowRight className="h-4 w-4" />
	                </a>

	                <a
	                  href="#catalogo-mobile"
	                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-6 py-4 text-sm font-medium text-white/86 transition hover:border-white/18 hover:bg-white/8 lg:hidden"
	                >
	                  Ver cases que vendem operação
	                  <Play className="h-4 w-4" />
	                </a>

	                <a
	                  href="#catalogo"
	                  className="hidden items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-6 py-4 text-sm font-medium text-white/86 transition hover:border-white/18 hover:bg-white/8 lg:inline-flex"
	                >
	                  Ver cases que vendem operação
	                  <Play className="h-4 w-4" />
	                </a>
	              </div>

	              <div className="panel-border catalog-shadow mt-12 hidden gap-4 rounded-[30px] bg-white/[0.03] p-5 sm:grid-cols-3 lg:grid">
	                {authorityMetrics.map((metric) => (
	                  <div
	                    key={metric.value}
                    className="rounded-[22px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5"
                  >
                    <p className="font-display text-2xl tracking-[-0.04em] text-[#eeeeee]">
                      {metric.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/58">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

	            <div className="panel-border catalog-shadow soft-grid relative hidden rounded-[34px] bg-[#060b18]/80 p-5 sm:p-6 lg:block">
	              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
	              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.36em] text-white/38">Case de abertura</p>
                  <h2 className="mt-3 font-display text-3xl tracking-[-0.05em] text-[#eeeeee]">
                    {featuredCase.title}
                  </h2>
                </div>
                <span className="rounded-full border border-[#0055ff]/30 bg-[#0055ff]/10 px-3 py-1 text-xs font-medium text-[#8bb8ff]">
                  {featuredCase.badge}
                </span>
              </div>

              <button
                type="button"
                onClick={() => openCase(featuredCase)}
                className="group mt-6 block w-full text-left"
              >
                <div className="relative overflow-hidden rounded-[26px] border border-white/8 bg-black">
                  <img
                    src={featuredCase.thumbnail}
                    alt={featuredCase.title}
                    loading="eager"
                    className={`aspect-video w-full object-cover brightness-[0.96] contrast-[1.05] saturate-[0.96] transition duration-700 group-hover:scale-105 ${featuredCase.thumbnailClassName ?? 'object-center'}`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,8,0.08),rgba(2,3,8,0.82))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,85,255,0.18),transparent_52%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/18 bg-black/45 text-white shadow-[0_20px_60px_rgba(0,0,0,0.38)] backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:border-[#0055ff]/40 group-hover:bg-[#0055ff]/22">
                      <Play className="ml-1 h-7 w-7 fill-current" />
                    </span>
                  </div>
                </div>
              </button>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/36">
                    Objetivo comercial
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/62">{featuredCase.objective}</p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/36">
                    Execução aplicada
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/62">{featuredCase.strategy}</p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/36">
                    Ganho percebido
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/62">{featuredCase.result}</p>
                </div>
              </div>
	            </div>
	          </section>

	          <section
	            id="catalogo-mobile"
	            className="mx-auto w-full max-w-[1280px] px-6 pb-10 lg:hidden"
	          >
	            <div className="panel-border catalog-shadow overflow-hidden rounded-[34px] bg-[linear-gradient(180deg,rgba(6,11,24,0.95),rgba(3,7,15,0.98))] p-5">
	              <div className="flex items-center justify-between gap-3">
	                <span className="rounded-full border border-[#0055ff]/24 bg-[#0055ff]/12 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.26em] text-[#8bb8ff]">
	                  Portfólio em vídeo
	                </span>
	                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.26em] text-white/48">
	                  catálogo premium
	                </span>
	              </div>

	              <h2 className="font-display mt-5 max-w-[13ch] text-[2.35rem] leading-[0.94] tracking-[-0.06em] text-[#eeeeee]">
	                Cases que posicionam operações
	              </h2>
	              <p className="mt-4 max-w-[38ch] text-sm leading-7 text-white/60">
	                Um portfólio de vídeo cases criados para transformar operação, estrutura e autoridade em percepção de valor comercial.
	              </p>
	            </div>

	            <button
	              type="button"
	              onClick={() => openCase(mobileHeroCase)}
	              className="group mt-5 block w-full text-left focus-visible:outline-none"
	            >
	              <div className="panel-border catalog-shadow relative overflow-hidden rounded-[34px] border border-white/10 bg-[#02050b] transition duration-500 group-active:scale-[0.992]">
	                <img
	                  src={mobileHeroCase.thumbnail}
	                  alt={mobileHeroCase.title}
	                  loading="eager"
	                  className={`aspect-[0.9] w-full object-cover brightness-[0.95] contrast-[1.06] saturate-[0.96] transition duration-700 group-hover:scale-[1.05] ${mobileHeroCase.thumbnailClassName ?? 'object-center'}`}
	                />
	                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,10,0.04)_0%,rgba(2,4,10,0.22)_22%,rgba(2,4,10,0.58)_56%,rgba(2,4,10,0.96)_100%)]" />
	                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,85,255,0.34),transparent_42%)]" />
	                <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(2,4,10,0.26)_30%,rgba(2,4,10,0.9))]" />

	                <div className="absolute left-4 right-4 top-3.5 flex items-start justify-between gap-3">
	                  <div className="flex flex-wrap items-center gap-2">
		                    <span className="rounded-full border border-[#0055ff]/30 bg-[rgba(0,85,255,0.18)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[#9cc4ff] shadow-[0_10px_28px_rgba(0,85,255,0.18)] backdrop-blur-md">
	                      Case em destaque
	                    </span>
	                    <span className="rounded-full border border-white/12 bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/78 backdrop-blur-md">
	                      {mobileHeroCase.badge}
	                    </span>
	                  </div>
	                  <span className="rounded-full border border-white/12 bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white/76 backdrop-blur-md">
	                    {mobileHeroCase.duration}
	                  </span>
	                </div>

	                <div className="absolute inset-x-0 top-[25%] flex flex-col items-center gap-2.5">
	                  <span className="flex h-24 w-24 items-center justify-center rounded-full border border-[#8bb8ff]/38 bg-[radial-gradient(circle_at_32%_28%,rgba(37,110,255,0.44),rgba(3,8,19,0.92))] text-white shadow-[0_0_0_12px_rgba(255,255,255,0.04),0_0_0_28px_rgba(0,85,255,0.1),0_32px_120px_rgba(0,0,0,0.52)] backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:border-[#c8deff]/72 group-hover:shadow-[0_0_0_12px_rgba(255,255,255,0.06),0_0_0_34px_rgba(0,85,255,0.14),0_36px_120px_rgba(0,0,0,0.56)]">
	                    <Play className="ml-1 h-9 w-9 fill-current" />
	                  </span>
	                  <span className="rounded-full border border-white/10 bg-black/42 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/78 backdrop-blur-md">
	                    toque para assistir
	                  </span>
	                </div>

	                <div className="absolute inset-x-0 bottom-0 p-4">
	                  <div className="rounded-[26px] border border-white/12 bg-[linear-gradient(180deg,rgba(7,13,25,0.36),rgba(7,13,25,0.92))] p-4 shadow-[0_-24px_80px_rgba(0,0,0,0.34)] backdrop-blur-md">
	                    <h3 className="font-display max-w-[14ch] text-[1.92rem] leading-[0.98] tracking-[-0.05em] text-[#eeeeee] line-clamp-3">
	                      {mobileHeroCase.title}
	                    </h3>
	                    <p className="mt-3 max-w-[31ch] text-sm leading-6 text-white/70 line-clamp-3">
	                      Um case construído para mostrar força operacional, presença comercial e confiança para reuniões, prospecção e contratos maiores.
	                    </p>
	                    <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2.5 border-t border-white/8 pt-3 text-sm text-white/80">
	                      <span className="max-w-[9.5rem] truncate rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/64">
	                        {mobileHeroCase.segment}
	                      </span>
	                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#0055ff]/26 bg-[#0055ff]/12 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#9cc4ff] shadow-[0_14px_30px_rgba(0,85,255,0.16)]">
	                        Ver case em destaque
	                        <ArrowRight className="h-3.5 w-3.5" />
	                      </span>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </button>

	            <div className="mt-8 flex items-end justify-between gap-4">
	              <div className="max-w-[18rem]">
	                <h3 className="font-display text-[1.75rem] leading-[0.98] tracking-[-0.05em] text-[#eeeeee]">
	                  Mais cases da Air Digital
	                </h3>
	                <p className="mt-3 text-sm leading-6 text-white/56">
	                  Projetos reais para logística, indústria e operações que precisam vender com mais autoridade.
	                </p>
	              </div>
	              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/46">
	                deslize
	              </span>
	            </div>

	            <div className="scrollbar-hidden mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
	              {mobileCatalogCases.map((caseItem, index) => (
	                <VideoCaseCard
	                  key={caseItem.id}
	                  caseItem={caseItem}
	                  onOpen={openCase}
	                  isFeatured={index === 0}
	                />
	              ))}
	            </div>
	          </section>

	          <section className="mx-auto w-full max-w-[1280px] px-6 py-10 lg:px-8 lg:py-14">
	            <SectionTitle
	              eyebrow="Autoridade aplicada"
              title="Comunicação para logística só faz sentido quando fortalece o comercial, a confiança e o acesso a contratos maiores."
              description="A Air Digital combina bagagem operacional, leitura de indústria e execução premium para transformar operação em presença comercial percebida."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-4">
              {[
                {
                  icon: BriefcaseBusiness,
                  title: 'Experiência de campo',
                  text: 'Entendimento real de operação, supply, embarcadores e dinâmica de decisão em grandes contas.',
                },
                {
                  icon: TrendingUp,
                  title: 'Visão de crescimento',
                  text: 'A comunicação nasce para ampliar percepção de valor, margem e capacidade de fechamento comercial.',
                },
                {
                  icon: Factory,
                  title: 'Linguagem da indústria',
                  text: 'Traduzimos estrutura, processo, rastreabilidade e confiabilidade em argumentos que fazem sentido para compras e operações.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Presença premium',
                  text: 'Visual, vídeo e posicionamento para a marca parecer do tamanho da operação que ela já sustenta.',
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="panel-border rounded-[28px] bg-white/[0.03] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0055ff]/12 text-[#7db7ff]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl tracking-[-0.04em] text-[#eeeeee]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/56">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

	          <section
	            id="catalogo"
	            className="mx-auto hidden w-full max-w-[1280px] px-6 py-12 lg:block lg:px-8 lg:py-16"
	          >
	            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
	              <SectionTitle
	                eyebrow="Catálogo premium de vídeo cases"
	                title="Um catálogo de cases em vídeo pensado para vender operação, autoridade e presença comercial no mesmo nível da entrega."
	                description="Cada card funciona como um ativo comercial: abre rápido, mostra o contexto e ajuda a transformar estrutura operacional em argumento para reuniões, propostas e prospecção."
	              />

	              <div className="hidden flex-wrap gap-3 lg:flex">
	                {categories.map((category) => {
	                  const isActive = category === activeCategory
	                  return (
                    <button
                      key={category}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => openCategory(category)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                        isActive
                          ? 'border-[#0055ff]/40 bg-[#0055ff]/14 text-[#8bb8ff] shadow-[0_14px_40px_rgba(0,85,255,0.16)]'
                          : 'border-white/10 bg-white/5 text-white/58 hover:border-white/18 hover:text-white/82'
                      }`}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="scrollbar-hidden mt-10 flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible xl:grid-cols-3">
              {visibleCases.map((caseItem, index) => (
                <VideoCaseCard
                  key={caseItem.id}
                  caseItem={caseItem}
                  onOpen={openCase}
                  isFeatured={index === 0}
                />
              ))}
            </div>
          </section>

          <section id="dor" className="mx-auto w-full max-w-[1280px] px-6 py-12 lg:px-8 lg:py-16">
            <div className="panel-border overflow-hidden rounded-[36px] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
              <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="border-b border-white/8 p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <p className="text-xs uppercase tracking-[0.38em] text-white/36">Dor do mercado</p>
                  <h2 className="mt-5 font-display text-[2.3rem] leading-[0.95] tracking-[-0.06em] text-[#eeeeee] sm:text-[3rem]">
                    Muitas transportadoras têm operação forte, mas falham no comercial.
                  </h2>
                  <p className="mt-6 max-w-[44ch] text-base leading-8 text-white/56">
                    Quando a empresa comunica menos do que entrega, o mercado a empurra para comparação de preço. Quando comunica com clareza, passa a ser percebida como fornecedora séria para contratos maiores.
                  </p>
                </div>

                <div className="grid gap-0 sm:grid-cols-2">
                  <div className="border-b border-white/8 p-8 sm:border-b-0 sm:border-r lg:p-10">
                    <div className="flex items-center gap-3 text-[#8bb8ff]">
                      <Radar className="h-5 w-5" />
                      <p className="text-sm font-medium uppercase tracking-[0.32em] text-white/44">Falta</p>
                    </div>
                    <ul className="mt-6 space-y-4 text-sm leading-7 text-white/62">
                      {painPoints.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5f9bff]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 text-[#8bb8ff]">
                      <Target className="h-5 w-5" />
                      <p className="text-sm font-medium uppercase tracking-[0.32em] text-white/44">
                        Consequência
                      </p>
                    </div>
                    <ul className="mt-6 space-y-4 text-sm leading-7 text-white/62">
                      {painConsequences.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5f9bff]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="atuacao" className="mx-auto w-full max-w-[1280px] px-6 py-12 lg:px-8 lg:py-16">
            <div className="grid gap-10 xl:grid-cols-[0.74fr_1.26fr]">
              <div className="max-w-[560px]">
                <SectionTitle
                  eyebrow="O que fazemos"
                  title="Estrutura comercial, posicionamento e execução para logística que precisa vender melhor, parecer maior e negociar com mais força."
                  description="Não é produção de conteúdo por vaidade. É construção de presença comercial, valor percebido e argumentos visuais para equipes que precisam abrir contas, defender proposta e sustentar margem."
                />

                <div className="panel-border mt-8 rounded-[28px] bg-[#061125]/72 p-6">
                  <div className="flex items-center gap-4 text-white/66">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0055ff]/14 text-[#8bb8ff]">
                      <Route className="h-5 w-5" />
                    </div>
                    <p className="text-sm leading-7">
                      Estruturamos o discurso comercial da operação para que sua empresa deixe de parecer apenas mais uma transportadora e passe a ser percebida como parceira preparada para contratos industriais e contas estratégicas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {serviceItems.map((item, index) => (
                  <article
                    key={item}
                    className="panel-border rounded-[26px] bg-white/[0.03] p-5 transition hover:bg-white/[0.045]"
                  >
                    <p className="text-xs uppercase tracking-[0.34em] text-white/34">
                      {(index + 1).toString().padStart(2, '0')}
                    </p>
                    <h3 className="mt-4 font-display text-2xl tracking-[-0.04em] text-[#eeeeee]">
                      {item}
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-[1280px] px-6 py-12 lg:px-8 lg:py-16">
            <div className="panel-border animate-pulse-glow rounded-[40px] bg-[linear-gradient(135deg,rgba(0,85,255,0.18),rgba(255,255,255,0.03)_42%,rgba(255,255,255,0.02))] px-8 py-12 text-center lg:px-16 lg:py-16">
              <p className="text-xs uppercase tracking-[0.42em] text-white/36">Diferencial Air Digital</p>
              <h2 className="font-display mt-6 text-[3rem] leading-[0.92] tracking-[-0.08em] text-[#eeeeee] sm:text-[4.4rem]">
                Não fazemos marketing para likes.
              </h2>
              <p className="mx-auto mt-6 max-w-[760px] text-lg leading-8 text-white/62">
                Construímos presença, percepção de valor e autoridade para empresas de logística que precisam vender para a indústria, abrir agenda com embarcadores e sustentar contratos maiores com mais força comercial.
              </p>
            </div>
          </section>

          <section className="mx-auto w-full max-w-[1280px] px-6 py-12 lg:px-8 lg:py-16">
            <SectionTitle
              eyebrow="Parede de marcas"
              title="Marcas que reforçam a familiaridade da Air Digital com o ambiente industrial, logístico e B2B."
              description="Um repertório visual pensado para comunicar confiança, escala e proximidade com operações que exigem padrão alto de entrega."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {logisticsBrands.map((brand) => (
                <BrandWallCard key={brand.id} brand={brand} />
              ))}
            </div>
          </section>

          <section id="contato" className="mx-auto w-full max-w-[1280px] px-6 py-14 lg:px-8 lg:pb-24">
            <div className="panel-border overflow-hidden rounded-[40px] bg-[linear-gradient(180deg,rgba(8,17,34,0.96),rgba(2,3,8,0.92))]">
              <div className="grid gap-8 p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-12">
                <div>
                  <p className="text-xs uppercase tracking-[0.42em] text-white/36">Próximo passo</p>
                  <h2 className="mt-5 font-display max-w-[12ch] text-[2.8rem] leading-[0.94] tracking-[-0.06em] text-[#eeeeee] sm:text-[4rem]">
                    Sua operação já entrega. Agora sua marca precisa comunicar isso no mesmo nível.
                  </h2>
                  <p className="mt-6 max-w-[58ch] text-base leading-8 text-white/58">
                    Se a sua operação quer sair da comparação por frete, elevar a percepção de valor e ganhar força para avançar em grandes contas, a próxima etapa é alinhar posicionamento, presença comercial e execução com método.
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-6 rounded-[28px] border border-white/8 bg-white/[0.03] p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { icon: Truck, label: 'Operação forte' },
                      { icon: Warehouse, label: 'Estrutura comunicada' },
                      { icon: Building2, label: 'Presença corporativa' },
                      { icon: Handshake, label: 'Comercial mais confiável' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[22px] border border-white/8 bg-black/20 p-4 text-white/74"
                      >
                        <item.icon className="h-5 w-5 text-[#8bb8ff]" />
                        <p className="mt-4 text-sm">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <a
                      href={strategicDiagnosisHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#0055ff] px-5 py-4 text-sm font-medium text-white shadow-[0_20px_50px_rgba(0,85,255,0.26)] transition hover:-translate-y-0.5 hover:bg-[#1767ff]"
                    >
                      Agendar diagnóstico comercial
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href={specialistHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-5 py-4 text-sm font-medium text-white/84 transition hover:border-white/18 hover:bg-white/8"
                    >
                      Falar sobre posicionamento
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/8 py-6">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-6 text-sm text-white/44 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-center gap-4">
              <BrandMark className="h-8 sm:h-8" />
              <span className="hidden h-6 w-px bg-white/12 sm:block" />
              <p>Consultoria comercial, posicionamento e presença premium para logística B2B.</p>
            </div>
            <div className="flex items-center gap-5 text-white/36">
              <a href="https://www.instagram.com/air.digital/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={specialistHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </div>

      <VideoCaseModal
        caseItem={selectedCase}
        onClose={() => setSelectedCase(null)}
        contactHref={strategicDiagnosisHref}
      />
    </>
  )
}

export default App
