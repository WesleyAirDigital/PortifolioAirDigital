import { withBasePath } from '../lib/withBasePath'

export type LogisticsCase = {
  id: string
  title: string
  category: string
  thumbnail: string
  thumbnailClassName?: string
  videoUrl: string
  videoType?: 'youtube' | 'file'
  segment: string
  objective: string
  strategy: string
  result: string
  description: string
  badge: string
  duration: string
}

const imagePath = (fileName: string) => withBasePath(`/images/logistics/${fileName}`)
const youtubeVideoPath = (videoId: string) => `https://www.youtube.com/watch?v=${videoId}`

// Add, remove or reorder items here to update the streaming catalog.
// Keep one item per unique video to avoid duplicate cards in the landing.
export const logisticsCases: LogisticsCase[] = [
  {
    id: 'master-cargas-cftv',
    title: 'Master Cargas | Segurança, controle e rastreabilidade',
    category: 'Operação & Controle',
    thumbnail: imagePath('master-cargas-cftv.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('hVcco-4adw8'),
    videoType: 'youtube',
    segment: 'Logística / Transporte / Segurança operacional',
    objective:
      'Traduzir infraestrutura, rastreabilidade e governança em confiança comercial para grandes embarcadores.',
    strategy:
      'Vídeo institucional com captação aérea, base operacional, CCTV e linguagem visual tecnológica para reforçar controle, padrão e robustez.',
    result:
      'Mais respaldo para reuniões comerciais, argumentos visuais mais fortes e percepção de operação preparada para contratos de maior exigência.',
    description:
      'Controle, infraestrutura e rastreabilidade transformados em argumento de venda para grandes contas.',
    badge: 'Case real',
    duration: '0:20',
  },
  {
    id: 'master-cargas-operacao',
    title: 'Master Cargas | Operação que convence',
    category: 'Comercial B2B',
    thumbnail: imagePath('master-cargas-operacao.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('g0aG_GWlS68'),
    videoType: 'youtube',
    segment: 'Logística / Armazenagem / Supply',
    objective:
      'Converter rotina operacional em presença comercial forte para propostas, reuniões e follow-ups com indústria.',
    strategy:
      'Captação de armazém, movimentação e ritmo operacional com recorte visual orientado a valor percebido e vendas B2B.',
    result:
      'Mais clareza para mostrar estrutura, processo e escala sem depender apenas de discurso técnico.',
    description:
      'Armazenagem e ritmo de operação apresentados como prova visual de capacidade para contratos maiores.',
    badge: 'Comercial B2B',
    duration: '0:20',
  },
  {
    id: 'master-cargas-frota',
    title: 'Master Cargas | Presença institucional de escala',
    category: 'Institucional',
    thumbnail: imagePath('master-cargas-frota.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('CZ_0EdDrirM'),
    videoType: 'youtube',
    segment: 'Logística / Institucional / Presença executiva',
    objective:
      'Elevar o nível de percepção da marca para apoiar negociação, confiança e posicionamento corporativo.',
    strategy:
      'Vídeo institucional com apresentação dos modais, da estrutura e da proposta de valor da marca para reforçar solidez, amplitude e presença executiva.',
    result:
      'Marca mais memorável, comunicação mais sofisticada e melhor sustentação em vendas consultivas.',
    description:
      'Um institucional pensado para comunicar amplitude de atuação, confiança operacional e presença corporativa com mais clareza.',
    badge: 'Branding',
    duration: '2:01',
  },
  {
    id: 'operacao-bebidas-abastecimento',
    title: 'Operação de bebidas | Escala para abastecimento',
    category: 'Operação Industrial',
    thumbnail: imagePath('operacao-bebidas-abastecimento.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('M96m494yugE'),
    videoType: 'youtube',
    segment: 'Indústria / Bebidas / Distribuição',
    objective:
      'Mostrar capacidade de abastecimento, giro operacional e leitura de escala em uma operação industrial de alto volume.',
    strategy:
      'Captação externa e interna com foco em fluxo, docas, movimentação e percepção de robustez para ambientes B2B.',
    result:
      'Case com leitura imediata de estrutura, ritmo operacional e potencial para sustentar conversas com contas maiores.',
    description:
      'Um recorte visual de indústria e distribuição pensado para comunicar escala antes mesmo da proposta chegar.',
    badge: 'Operação',
    duration: '1:23',
  },
  {
    id: 'convencao-cultura-performance',
    title: 'GPTW 2026 | Cultura reconhecida, marca fortalecida',
    category: 'Marca Empregadora',
    thumbnail: imagePath('convencao-cultura-performance.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('6FsTk6fXU0A'),
    videoType: 'youtube',
    segment: 'Cultura / Marca empregadora / GPTW',
    objective:
      'Transformar o reconhecimento GPTW 2026 em um ativo de marca empregadora, orgulho interno e prova pública de cultura de alta performance.',
    strategy:
      'Captação do reconhecimento, da liderança e do time com linguagem institucional premium para conectar cultura, performance e credibilidade perante mercado e talentos.',
    result:
      'Mais força para employer branding, comunicação interna e posicionamento institucional com uma prova social clara da cultura da empresa.',
    description:
      'O reconhecimento GPTW 2026 apresentado como prova concreta de cultura, engajamento e visão de crescimento.',
    badge: 'GPTW 2026',
    duration: '1:11',
  },
  {
    id: 'master-cargas-joinville-escala',
    title: 'Master Cargas Brasil | Joinville como prova de escala',
    category: 'Operação & Controle',
    thumbnail: imagePath('master-cargas-joinville-escala.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('EDEEOhk7iGI'),
    videoType: 'youtube',
    segment: 'Logística / Armazenagem / Joinville',
    objective:
      'Evidenciar capacidade instalada, leitura de espaço e padrão operacional em uma unidade preparada para operações de maior porte.',
    strategy:
      'Captação ampla da unidade com movimentos que reforçam profundidade, organização visual e infraestrutura de armazenagem.',
    result:
      'Mais força para apresentar a estrutura da operação em reuniões, propostas e materiais de prospecção.',
    description:
      'Joinville apresentada como argumento comercial para quem precisa provar escala, organização e capacidade real de atendimento.',
    badge: 'Case real',
    duration: '3:25',
  },
  {
    id: 'importacao-v7-controle',
    title: 'Importação V7 | Conferência que reduz risco',
    category: 'Importação & Supply',
    thumbnail: imagePath('importacao-v7-controle.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('6Q6AMP88NLc'),
    videoType: 'youtube',
    segment: 'Importação / Recebimento / Conferência',
    objective:
      'Transformar rotina de recebimento, conferência e controle em um ativo visual de confiança para operações mais exigentes.',
    strategy:
      'Captação orientada a processo, precisão e leitura de fluxo para comunicar segurança operacional e governança.',
    result:
      'Material mais convincente para mostrar método, organização e previsibilidade em operações sensíveis.',
    description:
      'Um case focado em processo e controle para reforçar credibilidade em operações de importação e supply.',
    badge: 'Controle',
    duration: '1:25',
  },
  {
    id: 'master-cargas-bebidas-dedicada',
    title: 'Master Cargas | Operação dedicada para bebidas',
    category: 'Operação Industrial',
    thumbnail: imagePath('master-cargas-bebidas-dedicada.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('Jg5VPfU-ToU'),
    videoType: 'youtube',
    segment: 'Logística / Bebidas / Ponta Grossa',
    objective:
      'Evidenciar a escala e a cadência de uma operação dedicada ao setor de bebidas, com leitura imediata de giro, docas e capacidade de atendimento.',
    strategy:
      'Narrativa orientada a fluxo, movimentação e volume operacional para traduzir alta cadência e confiabilidade em um ambiente logístico de bebidas.',
    result:
      'Mais argumento comercial para defender operações dedicadas, capacidade instalada e consistência em cenários de alto giro.',
    description:
      'Ponta Grossa apresentada como operação dedicada de bebidas, com ritmo, escala e previsibilidade para grandes contas.',
    badge: 'Operação',
    duration: '1:02',
  },
  {
    id: 'daf-pos-venda-estrutura',
    title: 'DAF Caminhões | Pós-venda com estrutura de confiança',
    category: 'Pós-venda & Supply',
    thumbnail: imagePath('daf-pos-venda-estrutura.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('HgJe9dksSFY'),
    videoType: 'youtube',
    segment: 'Automotivo / Pós-venda / Rede de serviços',
    objective:
      'Valorizar estrutura técnica, atendimento e percepção de confiabilidade em uma operação ligada ao pós-venda automotivo.',
    strategy:
      'Captação institucional com foco em equipe, oficina, caminhões e leitura de suporte operacional à frota.',
    result:
      'Material mais sólido para comunicar padrão de atendimento, estrutura e confiança no relacionamento com o cliente.',
    description:
      'Pós-venda apresentado com linguagem premium para reforçar confiança, suporte e consistência operacional.',
    badge: 'Institucional',
    duration: '0:59',
  },
  {
    id: 'daf-pecas-armazenagem',
    title: 'DAF | Supply de peças com controle de ponta',
    category: 'Pós-venda & Supply',
    thumbnail: imagePath('daf-pecas-armazenagem.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('JqWYdVaRxgQ'),
    videoType: 'youtube',
    segment: 'Automotivo / Peças / Armazenagem',
    objective:
      'Traduzir organização de peças, fluxo de armazenagem e suporte logístico em confiança para operações de abastecimento.',
    strategy:
      'Captação orientada a estoque, identificação, movimentação e leitura de supply com recorte mais funcional.',
    result:
      'Mais clareza para mostrar estrutura de apoio, controle e velocidade operacional na cadeia de peças.',
    description:
      'Um case de supply e armazenagem pensado para comunicar ordem, disponibilidade e eficiência de operação.',
    badge: 'Supply',
    duration: '1:47',
  },
  {
    id: 'locacao-sao-jose-pinhais',
    title: 'São José dos Pinhais | Locação com presença comercial',
    category: 'Serviços & Locação',
    thumbnail: imagePath('locacao-sao-jose-pinhais.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('_XoYn7tYX5M'),
    videoType: 'youtube',
    segment: 'Locação / Comercial / São José dos Pinhais',
    objective:
      'Fortalecer a comunicação comercial de um serviço de locação com linguagem mais profissional e objetiva.',
    strategy:
      'Vídeo com fala direta, identidade de marca e ambientação corporativa para sustentar conversas comerciais locais.',
    result:
      'Mais clareza na oferta, melhor apresentação institucional e maior consistência na presença comercial.',
    description:
      'Um case enxuto e direto para apresentar serviços de locação com mais presença e credibilidade.',
    badge: 'Comercial',
    duration: '0:50',
  },
  {
    id: 'br-277-full-service',
    title: 'BR-277 | Full service com escala percebida',
    category: 'Full Service',
    thumbnail: imagePath('br-277-full-service.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('p8WI29mhz7s'),
    videoType: 'youtube',
    segment: 'Logística / Full service / BR-277',
    objective:
      'Comunicar uma operação full service com leitura clara de escala, armazenagem e capacidade de atendimento.',
    strategy:
      'Captação ampla da estrutura, do estoque e do ambiente operacional para reforçar profundidade e robustez da entrega.',
    result:
      'Case mais forte para sustentar propostas de operação integrada e transmitir confiança para contas estratégicas.',
    description:
      'Full service apresentado com a linguagem visual que grandes operações precisam para parecer à altura do que entregam.',
    badge: 'Operação',
    duration: '2:44',
  },
  {
    id: 'weg-continuidade-operacional',
    title: 'WEG | Continuidade operacional',
    category: 'Tecnologia & Infraestrutura',
    thumbnail: imagePath('weg-continuidade-operacional.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('USZQ8E8PtjA'),
    videoType: 'youtube',
    segment: 'Energia / Continuidade / Infraestrutura',
    objective:
      'Apresentar uma solução técnica com linguagem acessível, premium e adequada a decisores corporativos.',
    strategy:
      'Vídeo com recorte de produto, benefícios operacionais e narrativa de confiabilidade para uso institucional e comercial.',
    result:
      'Melhor leitura de valor técnico, mais clareza de aplicação e material mais forte para contexto B2B.',
    description:
      'Tecnologia apresentada com acabamento corporativo para reforçar continuidade, segurança e confiança operacional.',
    badge: 'Tecnologia',
    duration: '2:08',
  },
  {
    id: 'bioar-arla32-tecnologia-rota',
    title: 'Bioar Arla 32 | Tecnologia que acompanha a rota',
    category: 'Tecnologia & Infraestrutura',
    thumbnail: imagePath('bioar-arla32-tecnologia-rota.jpg'),
    thumbnailClassName: 'object-[58%_center]',
    videoUrl: youtubeVideoPath('JvPNOOOyp3o'),
    videoType: 'youtube',
    segment: 'Tecnologia / Estradas / Operação em campo',
    objective:
      'Associar tecnologia aplicada à rotina de campo com uma leitura visual mais moderna e orientada a performance.',
    strategy:
      'Narrativa com cenas de estrada, ritmo de deslocamento e enquadramentos que conectam tecnologia e operação real.',
    result:
      'Case mais fácil de consumir, com melhor retenção e leitura de aplicação prática para o ambiente B2B.',
    description:
      'Um vídeo que aproxima tecnologia e operação de campo com visual mais limpo e entendimento mais rápido.',
    badge: 'Tecnologia',
    duration: '1:15',
  },
  {
    id: 'spcs-supervisao-ativos',
    title: 'SPCS | Supervisão de ativos críticos',
    category: 'Tecnologia & Infraestrutura',
    thumbnail: imagePath('spcs-supervisao-ativos.jpg'),
    thumbnailClassName: 'object-[58%_center]',
    videoUrl: youtubeVideoPath('cuQra1S1Fvw'),
    videoType: 'youtube',
    segment: 'Energia / Supervisão / Ativos críticos',
    objective:
      'Explicar uma solução crítica de proteção e supervisão com linguagem visual mais segura e corporativa.',
    strategy:
      'Peça orientada a clareza, confiabilidade e leitura técnica simplificada para ambientes decisórios.',
    result:
      'Mais compreensão do valor da solução, mais credibilidade técnica e melhor apresentação institucional.',
    description:
      'Infraestrutura crítica comunicada com mais precisão visual para reforçar segurança, controle e confiança.',
    badge: 'Infraestrutura',
    duration: '1:59',
  },
  {
    id: 'master-cargas-cachoeirinha',
    title: 'Master Cargas Brasil | Cachoeirinha como prova de escala',
    category: 'Operação & Controle',
    thumbnail: imagePath('master-cargas-cachoeirinha.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('Vv4loubKXeU'),
    videoType: 'youtube',
    segment: 'Logística / Armazenagem / Cachoeirinha',
    objective:
      'Evidenciar capacidade instalada, metragem operacional e potencial de atendimento para operações de maior porte.',
    strategy:
      'Captação aérea da unidade com ênfase em área construída, docas, acesso e leitura clara de infraestrutura logística.',
    result:
      'Mais solidez para apresentar a unidade como ativo comercial e reforçar escala percebida em negociações estratégicas.',
    description:
      'Cachoeirinha apresentada como prova visual de escala, estrutura e prontidão para operações exigentes.',
    badge: 'Case real',
    duration: '1:08',
  },
  {
    id: 'motoristas-2025',
    title: 'Master Cargas | Marca empregadora para motoristas',
    category: 'Marca Empregadora',
    thumbnail: imagePath('motoristas-2025.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('lRjHhAjSn_c'),
    videoType: 'youtube',
    segment: 'Logística / Frota / Motoristas',
    objective:
      'Fortalecer a atração de motoristas com uma comunicação mais humana, organizada e alinhada à cultura operacional da marca.',
    strategy:
      'Recorte audiovisual com foco em rotina, cabine, identidade visual e valorização do profissional para reforçar employer branding.',
    result:
      'Mais consistência no discurso de recrutamento, melhor percepção de ambiente operacional e apoio à expansão da frota.',
    description:
      'Uma peça de marca empregadora que valoriza o motorista e sustenta o crescimento da operação com mais credibilidade.',
    badge: 'Cultura',
    duration: '1:34',
  },
  {
    id: 'indaiatuba-linha-branca',
    title: 'Indaiatuba | Estrutura pronta para linha branca',
    category: 'Operação Industrial',
    thumbnail: imagePath('indaiatuba-linha-branca.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('iFm_-vMIhng'),
    videoType: 'youtube',
    segment: 'Logística / Linha branca / Indaiatuba',
    objective:
      'Apresentar uma estrutura dedicada à linha branca com leitura objetiva de docas, fluxo e capacidade operacional.',
    strategy:
      'Captação da planta com foco em infraestrutura, acessos e pontos de operação para traduzir especialização logística.',
    result:
      'Mais clareza para defender estrutura dedicada, ampliar percepção de preparo e sustentar conversas com indústria.',
    description:
      'Um case orientado a infraestrutura para comunicar docas, organização e prontidão em operações de linha branca.',
    badge: 'Operação',
    duration: '1:07',
  },
  {
    id: 'armazem-2-ponta-grossa',
    title: 'Master Cargas | Expansão em Ponta Grossa',
    category: 'Operação & Controle',
    thumbnail: imagePath('armazem-2-ponta-grossa.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('w3q2x8G-aXM'),
    videoType: 'youtube',
    segment: 'Logística / Expansão / Ponta Grossa',
    objective:
      'Comunicar expansão de infraestrutura com uma leitura clara de malha, ocupação territorial e capacidade de crescimento.',
    strategy:
      'Captação aérea ampla com foco na implantação do armazém, na integração com a operação e na escala do complexo logístico.',
    result:
      'Mais força para mostrar crescimento estruturado, visão de longo prazo e capacidade de absorver novas demandas.',
    description:
      'Ponta Grossa apresentada como argumento de expansão e robustez para uma operação que quer parecer maior porque já é maior.',
    badge: 'Expansão',
    duration: '0:54',
  },
  {
    id: 'assertividade-modais',
    title: 'Master Cargas | Presença assertiva em todos os modais',
    category: 'Posicionamento Comercial',
    thumbnail: imagePath('assertividade-modais.jpg'),
    thumbnailClassName: 'object-center',
    videoUrl: youtubeVideoPath('ExemI3NnJtU'),
    videoType: 'youtube',
    segment: 'Logística / Multimodal / Presença comercial',
    objective:
      'Sintetizar a proposta de valor da marca em uma mensagem mais forte para vendas, posicionamento e presença institucional.',
    strategy:
      'Peça de narrativa com tipografia, ritmo e construção conceitual para reforçar consistência comercial em diferentes frentes de atuação.',
    result:
      'Mais clareza de posicionamento, discurso comercial mais memorável e melhor leitura da marca em contextos B2B.',
    description:
      'Um vídeo de posicionamento pensado para consolidar autoridade e amplitude de atuação em todos os modais.',
    badge: 'Comercial B2B',
    duration: '0:47',
  },
]
