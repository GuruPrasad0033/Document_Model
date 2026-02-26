import { Star } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  position: string
  company: string
}

export default function TestimonialCard({ quote, author, position, company }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="text-accent-500 fill-accent-500" />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6 leading-relaxed">"{quote}"</p>
      <div className="border-t pt-4">
        <p className="font-bold text-gray-900">{author}</p>
        <p className="text-sm text-gray-600">{position}</p>
        <p className="text-sm text-primary-700 font-medium">{company}</p>
      </div>
    </div>
  )
}
