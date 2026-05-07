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
    logoClassName: 'h-[78px] max-w-[66%]',
  },
  {
    id: 'bmw',
    name: 'BMW',
    sector: 'Mobilidade premium',
    logoSrc: brandLogoPath('bmw-v2.webp'),
    alt: 'Logo da BMW',
    logoClassName: 'h-[88px] max-w-[58%]',
  },
  {
    id: 'continental',
    name: 'Continental',
    sector: 'Autopeças e engenharia',
    logoSrc: brandLogoPath('continental.jpg'),
    alt: 'Logo da Continental',
    logoClassName: 'h-[58px] max-w-[94%]',
  },
  {
    id: 'daf',
    name: 'DAF',
    sector: 'Mobilidade industrial',
    logoSrc: brandLogoPath('daf.png'),
    alt: 'Logo da DAF',
    logoClassName: 'h-[70px] max-w-[94%]',
  },
  {
    id: 'electrolux',
    name: 'Electrolux',
    sector: 'Eletroindústria',
    logoSrc: brandLogoPath('electrolux.png'),
    alt: 'Logo da Electrolux',
    logoClassName: 'h-[72px] max-w-[94%]',
  },
  {
    id: 'jcb',
    name: 'JCB',
    sector: 'Máquinas e construção',
    logoSrc: brandLogoPath('jcb.svg'),
    alt: 'Logo da JCB',
    logoClassName: 'h-[70px] max-w-[82%]',
  },
  {
    id: 'klabin',
    name: 'Klabin',
    sector: 'Papel e celulose',
    logoSrc: brandLogoPath('klabin.png'),
    alt: 'Logo da Klabin',
    logoClassName: 'h-[88px] max-w-[74%]',
  },
  {
    id: 'brf',
    name: 'BRF',
    sector: 'Alimentos e supply',
    logoSrc: brandLogoPath('brf.png'),
    alt: 'Logo da BRF',
    logoClassName: 'h-[86px] max-w-[62%]',
  },
  {
    id: 'coca-cola',
    name: 'Coca-Cola',
    sector: 'Bens de consumo',
    logoSrc: brandLogoPath('coca-cola.webp'),
    alt: 'Logo da Coca-Cola',
    logoClassName: 'h-[70px] max-w-[84%]',
  },
  {
    id: 'makita',
    name: 'Makita',
    sector: 'Ferramentas industriais',
    logoSrc: brandLogoPath('makita.svg'),
    alt: 'Logo da Makita',
    logoClassName: 'h-[66px] max-w-[82%]',
  },
  {
    id: 'o-boticario',
    name: 'O Boticário',
    sector: 'Varejo e manufatura',
    logoSrc: brandLogoPath('o-boticario.png'),
    alt: 'Logo do O Boticário',
    logoClassName: 'h-[84px] max-w-[64%]',
  },
  {
    id: 'tetra-pak',
    name: 'Tetra Pak',
    sector: 'Embalagem e alimentos',
    logoSrc: brandLogoPath('tetra-pak-v2.svg'),
    alt: 'Logo da Tetra Pak',
    logoClassName: 'h-[92px] max-w-[70%]',
  },
  {
    id: 'heineken',
    name: 'Heineken',
    sector: 'Bens de consumo',
    logoSrc: brandLogoPath('heineken.jpg'),
    alt: 'Logo da Heineken',
    logoClassName: 'h-[64px] max-w-[78%]',
  },
  {
    id: 'toyota',
    name: 'Toyota',
    sector: 'Montadora',
    logoSrc: brandLogoPath('toyota-v2.png'),
    alt: 'Logo da Toyota',
    logoClassName: 'h-[74px] max-w-[76%]',
  },
  {
    id: 'volvo',
    name: 'Volvo',
    sector: 'Mobilidade e pesados',
    logoSrc: brandLogoPath('volvo.jpg'),
    alt: 'Logo da Volvo',
    logoClassName: 'h-[68px] max-w-[72%]',
  },
  {
    id: 'sig',
    name: 'SIG',
    sector: 'Embalagem industrial',
    logoSrc: brandLogoPath('sig.png'),
    alt: 'Logo da SIG',
    logoClassName: 'h-[84px] max-w-[68%]',
  },
]
