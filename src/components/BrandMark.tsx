import { withBasePath } from '../lib/withBasePath'

type BrandMarkProps = {
  className?: string
  compact?: boolean
}

export function BrandMark({ className = '', compact = false }: BrandMarkProps) {
  const source = compact
    ? withBasePath('/brand/air-symbol.png')
    : withBasePath('/brand/air-wordmark.png')
  const alt = compact ? 'Air Digital' : 'Air Digital Marketing'
  const baseClassName = compact ? 'h-10 w-auto' : 'h-8 w-auto sm:h-10'

  return <img src={source} alt={alt} className={`${baseClassName} ${className}`.trim()} />
}
