interface StatCardProps {
  number: string
  label: string
  icon: React.ReactNode
}

export default function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-3 text-primary-700">{icon}</div>
      <div className="text-3xl font-bold text-primary-700 mb-2">{number}</div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  )
}
