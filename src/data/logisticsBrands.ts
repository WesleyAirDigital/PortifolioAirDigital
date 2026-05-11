import { withBasePath } from '../lib/withBasePath'

export type LogisticsBrand = {
  id: string
  name: string
  sector: string
  // When an official logo file is available, set the path here and the card will render the image automatically.
  logoSrc?: string
  alt?: string
  logoClassName?: string
  wordmarkClassName?: string
}

export const brandLogoPath = (fileName: string) => withBasePath(`/brands/logistics/${fileName}`)

export const logisticsBrands: LogisticsBrand[] = [
  {
    id: 'renault',
    name: 'Renault',
    sector: 'Montadora',
    logoSrc: brandLogoPath('renault.jpeg'),
    alt: 'Logo da Renault',
    logoClassName: 'h-[58px] max-w-[52%] sm:h-[66px]',
  },
  {
    id: 'bmw',
    name: 'BMW',
    sector: 'Mobilidade premium',
    logoSrc: brandLogoPath('bmw-v2.webp'),
    alt: 'Logo da BMW',
    logoClassName: 'h-[66px] max-w-[48%] sm:h-[72px]',
  },
  {
    id: 'continental',
    name: 'Continental',
    sector: 'Autopeças e engenharia',
    logoSrc: brandLogoPath('continental.jpg'),
    alt: 'Logo da Continental',
    logoClassName: 'h-[44px] max-w-[88%] sm:h-[50px]',
  },
  {
    id: 'daf',
    name: 'DAF',
    sector: 'Mobilidade industrial',
    logoSrc: brandLogoPath('daf.png'),
    alt: 'Logo da DAF',
    logoClassName: 'h-[54px] max-w-[84%] sm:h-[60px]',
  },
  {
    id: 'electrolux',
    name: 'Electrolux',
    sector: 'Eletroindústria',
    logoSrc: brandLogoPath('electrolux.png'),
    alt: 'Logo da Electrolux',
    logoClassName: 'h-[52px] max-w-[86%] sm:h-[58px]',
  },
  {
    id: 'jcb',
    name: 'JCB',
    sector: 'Máquinas e construção',
    logoSrc: brandLogoPath('jcb.svg'),
    alt: 'Logo da JCB',
    logoClassName: 'h-[54px] max-w-[68%] sm:h-[60px]',
  },
  {
    id: 'klabin',
    name: 'Klabin',
    sector: 'Papel e celulose',
    logoSrc: brandLogoPath('klabin.png'),
    alt: 'Logo da Klabin',
    logoClassName: 'h-[62px] max-w-[62%] sm:h-[70px]',
  },
  {
    id: 'brf',
    name: 'BRF',
    sector: 'Alimentos e supply',
    logoSrc: brandLogoPath('brf.png'),
    alt: 'Logo da BRF',
    logoClassName: 'h-[64px] max-w-[48%] sm:h-[70px]',
  },
  {
    id: 'coca-cola',
    name: 'Coca-Cola',
    sector: 'Bens de consumo',
    logoSrc: brandLogoPath('coca-cola.webp'),
    alt: 'Logo da Coca-Cola',
    logoClassName: 'h-[52px] max-w-[72%] sm:h-[58px]',
  },
  {
    id: 'makita',
    name: 'Makita',
    sector: 'Ferramentas industriais',
    logoSrc: brandLogoPath('makita.svg'),
    alt: 'Logo da Makita',
    logoClassName: 'h-[48px] max-w-[72%] sm:h-[54px]',
  },
  {
    id: 'o-boticario',
    name: 'O Boticário',
    sector: 'Varejo e manufatura',
    logoSrc: brandLogoPath('o-boticario.png'),
    alt: 'Logo do O Boticário',
    logoClassName: 'h-[64px] max-w-[52%] sm:h-[70px]',
  },
  {
    id: 'tetra-pak',
    name: 'Tetra Pak',
    sector: 'Embalagem e alimentos',
    logoSrc: brandLogoPath('tetra-pak-v2.svg'),
    alt: 'Logo da Tetra Pak',
    logoClassName: 'h-[68px] max-w-[58%] sm:h-[74px]',
  },
  {
    id: 'heineken',
    name: 'Heineken',
    sector: 'Bens de consumo',
    logoSrc: brandLogoPath('heineken.jpg'),
    alt: 'Logo da Heineken',
    logoClassName: 'h-[48px] max-w-[66%] sm:h-[54px]',
  },
  {
    id: 'toyota',
    name: 'Toyota',
    sector: 'Montadora',
    logoSrc: brandLogoPath('toyota-v2.png'),
    alt: 'Logo da Toyota',
    logoClassName: 'h-[56px] max-w-[62%] sm:h-[62px]',
  },
  {
    id: 'volvo',
    name: 'Volvo',
    sector: 'Mobilidade e pesados',
    logoSrc: brandLogoPath('volvo.jpg'),
    alt: 'Logo da Volvo',
    logoClassName: 'h-[50px] max-w-[62%] sm:h-[56px]',
  },
  {
    id: 'sig',
    name: 'SIG',
    sector: 'Embalagem industrial',
    logoSrc: brandLogoPath('sig.png'),
    alt: 'Logo da SIG',
    logoClassName: 'h-[62px] max-w-[52%] sm:h-[68px]',
  },
]
