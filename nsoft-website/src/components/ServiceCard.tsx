interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary-700 group">
      <div className="text-5xl mb-4 text-primary-700 group-hover:text-accent-500 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
