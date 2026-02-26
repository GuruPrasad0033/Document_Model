interface ProjectCardProps {
  title: string
  description: string
  category: string
  year: string
  badge?: string
}

export default function ProjectCard({ title, description, category, year, badge }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all group overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center relative overflow-hidden">
        <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
          {category === 'electricity' && '⚡'}
          {category === 'water' && '💧'}
          {category === 'billing' && '📊'}
        </div>
        {badge && (
          <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            {badge}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="text-sm font-semibold text-primary-700 mb-2">{category.toUpperCase()} · {year}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
