interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={centered ? "text-center mb-12" : "mb-12"}>
      <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
