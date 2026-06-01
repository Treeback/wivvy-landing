'use client'

import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'span'
  once?: boolean
}

const buildVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
})

const Reveal = ({
  children,
  delay = 0,
  y = 24,
  className,
  as = 'div',
  once = true,
}: Props) => {
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ delay }}
      variants={buildVariants(y)}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
