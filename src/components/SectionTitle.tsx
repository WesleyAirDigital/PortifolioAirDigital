type SectionTitleProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionTitleProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex max-w-[760px] flex-col gap-4 ${alignment}`}>
      <p className="text-xs uppercase tracking-[0.38em] text-white/36">{eyebrow}</p>
      <h2 className="font-display text-[2.5rem] leading-[0.96] tracking-[-0.06em] text-[#eeeeee] sm:text-[3.4rem]">
        {title}
      </h2>
      <p className="max-w-[62ch] text-base leading-8 text-white/56">{description}</p>
    </div>
  )
}
