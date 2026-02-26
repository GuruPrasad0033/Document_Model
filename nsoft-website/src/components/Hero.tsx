import { ReactNode } from 'react'

interface HeroProps {
  title: string
  subtitle: string
  backgroundImage?: string
  children?: ReactNode
}

export default function Hero({ title, subtitle, backgroundImage, children }: HeroProps) {
  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] text-white flex items-center justify-center"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(135deg, rgba(22, 163, 74, 0.85) 0%, rgba(202, 138, 4, 0.85) 100%), url(${backgroundImage})`
          : 'linear-gradient(135deg, #16a34a 0%, #ca8a04 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white opacity-95 mb-8 animate-fade-in drop-shadow-md">
          {subtitle}
        </p>
        {children}
      </div>
    </div>
  )
}
