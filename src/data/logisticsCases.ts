import { withBasePath } from '../lib/withBasePath'

export type LogisticsCase = {
  id: string
  title: string
  category: string
  thumbnail: string
  videoUrl: string
  segment: string
  objective: string
  strategy: string
  result: string
  description: string
  badge: string
  duration: string
}

const imagePath = (fileName: string) => withBasePath(`/images/logistics/${fileName}`)
const videoPath = (fileName: string) => withBasePath(`/media/logistics/${fileName}`)

// Add, remove or reorder items here to update the streaming catalog.
// Keep one item per unique video to avoid duplicate cards in the landing.
export const logisticsCases: LogisticsCase[] = [
  {
    id: 'master-cargas-cftv',
    title: 'Master Cargas | Segurança e controle',
    category: 'Operação & Controle',
    thumbnail: imagePath('master-cargas-cftv.jpg'),
    videoUrl: videoPath('master-cargas-cftv.mp4'),
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
    videoUrl: videoPath('master-cargas-operacao.mp4'),
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
    title: 'Master Cargas | Presença institucional',
    category: 'Institucional',
    thumbnail: imagePath('master-cargas-frota.jpg'),
    videoUrl: videoPath('master-cargas-frota.mp4'),
    segment: 'Logística / Branding / Presença executiva',
    objective:
      'Elevar o nível de percepção da marca para apoiar negociação, confiança e posicionamento corporativo.',
    strategy:
      'Peça institucional com acabamento premium, foco em detalhes visuais e narrativa de marca voltada ao ambiente executivo.',
    result:
      'Marca mais memorável, comunicação mais sofisticada e melhor sustentação em vendas consultivas.',
    description:
      'Um institucional pensado para parecer tão corporativo quanto a operação que está por trás dele.',
    badge: 'Branding',
    duration: '0:18',
  },
  {
    id: 'operacao-bebidas-abastecimento',
    title: 'Operação de bebidas | Abastecimento e escala',
    category: 'Operação Industrial',
    thumbnail: imagePath('operacao-bebidas-abastecimento.jpg'),
    videoUrl: videoPath('operacao-bebidas-abastecimento.mp4'),
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
    title: 'Convenção estratégica | Cultura e performance',
    category: 'Marca Empregadora',
    thumbnail: imagePath('convencao-cultura-performance.jpg'),
    videoUrl: videoPath('convencao-cultura-performance.mp4'),
    segment: 'Eventos corporativos / Cultura / Endomarketing',
    objective:
      'Registrar um encontro estratégico com padrão premium para reforçar cultura, engajamento interno e percepção de marca empregadora.',
    strategy:
      'Cobertura audiovisual com linguagem de evento corporativo, ritmo dinâmico e foco em palco, time e clima de reconhecimento.',
    result:
      'Material mais forte para employer branding, comunicação interna e posicionamento institucional da marca.',
    description:
      'Um case de convenção pensado para traduzir energia de time, cultura e direção estratégica com acabamento premium.',
    badge: 'Institucional',
    duration: '2:16',
  },
  {
    id: 'master-cargas-joinville-escala',
    title: 'Master Cargas Brasil | Escala em Joinville',
    category: 'Operação & Controle',
    thumbnail: imagePath('master-cargas-joinville-escala.jpg'),
    videoUrl: videoPath('master-cargas-joinville-escala.mp4'),
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
    title: 'Importação V7 | Controle e conferência',
    category: 'Importação & Supply',
    thumbnail: imagePath('importacao-v7-controle.jpg'),
    videoUrl: videoPath('importacao-v7-controle.mp4'),
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
    videoUrl: videoPath('master-cargas-bebidas-dedicada.mp4'),
    segment: 'Logística / Bebidas / Operação dedicada',
    objective:
      'Apresentar uma operação dedicada com leitura clara de estoque, movimentação e padronização em ambiente de alto giro.',
    strategy:
      'Captação com foco em armazenagem de bebidas, circulação de equipamentos e ambientação operacional de grande volume.',
    result:
      'Mais percepção de especialização e mais repertório visual para defender operações dedicadas com valor agregado.',
    description:
      'Um case que posiciona a operação como parceira preparada para rotinas intensas, visibilidade e controle.',
    badge: 'Operação',
    duration: '1:11',
  },
  {
    id: 'daf-pos-venda-estrutura',
    title: 'DAF Caminhões | Estrutura e pós-venda',
    category: 'Pós-venda & Supply',
    thumbnail: imagePath('daf-pos-venda-estrutura.jpg'),
    videoUrl: videoPath('daf-pos-venda-estrutura.mp4'),
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
    title: 'DAF | Peças, armazenagem e supply',
    category: 'Pós-venda & Supply',
    thumbnail: imagePath('daf-pecas-armazenagem.jpg'),
    videoUrl: videoPath('daf-pecas-armazenagem.mp4'),
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
    title: 'Locação | São José dos Pinhais',
    category: 'Serviços & Locação',
    thumbnail: imagePath('locacao-sao-jose-pinhais.jpg'),
    videoUrl: videoPath('locacao-sao-jose-pinhais.mp4'),
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
    title: 'BR-277 | Operação full service',
    category: 'Full Service',
    thumbnail: imagePath('br-277-full-service.jpg'),
    videoUrl: videoPath('br-277-full-service.mp4'),
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
    videoUrl: videoPath('weg-continuidade-operacional.mp4'),
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
    title: 'Bioar Arla 32 | Tecnologia na rota',
    category: 'Tecnologia & Infraestrutura',
    thumbnail: imagePath('bioar-arla32-tecnologia-rota.jpg'),
    videoUrl: videoPath('bioar-arla32-tecnologia-rota.mp4'),
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
    videoUrl: videoPath('spcs-supervisao-ativos.mp4'),
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
    title: 'Master Cargas Brasil | Cachoeirinha em escala',
    category: 'Operação & Controle',
    thumbnail: imagePath('master-cargas-cachoeirinha.jpg'),
    videoUrl: videoPath('master-cargas-cachoeirinha.mp4'),
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
    title: 'Master Cargas | Motoristas 2025',
    category: 'Marca Empregadora',
    thumbnail: imagePath('motoristas-2025.jpg'),
    videoUrl: videoPath('motoristas-2025.mp4'),
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
    title: 'Indaiatuba | Estrutura para linha branca',
    category: 'Operação Industrial',
    thumbnail: imagePath('indaiatuba-linha-branca.jpg'),
    videoUrl: videoPath('indaiatuba-linha-branca.mp4'),
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
    title: 'Master Cargas | Armazém 2 em Ponta Grossa',
    category: 'Operação & Controle',
    thumbnail: imagePath('armazem-2-ponta-grossa.jpg'),
    videoUrl: videoPath('armazem-2-ponta-grossa.mp4'),
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
    title: 'Master Cargas | Assertividade em todos os modais',
    category: 'Posicionamento Comercial',
    thumbnail: imagePath('assertividade-modais.jpg'),
    videoUrl: videoPath('assertividade-modais.mp4'),
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
