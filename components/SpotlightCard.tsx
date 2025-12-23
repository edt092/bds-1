'use client'

import { useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function SpotlightCard({ children, className = '', delay = 0 }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <motion.div
      ref={ref}
      className={`bento-card spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
      } as React.CSSProperties}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  )
}
