'use client'

import React from 'react'
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion'
import { Brain, FileText, Link2, Mic, Sparkles, ChevronRight, Users, TrendingUp, Lightbulb } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

export default function IngestToInsightsFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [isLocked, setIsLocked] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const scrollAccumulator = useRef(0)
  const lastScrollY = useRef(0)
  const lastStepChange = useRef(0)
  const touchStartY = useRef(0)
  
  const steps = [
    {
      title: 'Capture Everything',
      description: 'Add thoughts, meetings, documents, links',
      icon: Brain,
      items: [
        { icon: Brain, label: 'Quick thought', color: 'text-blue-400' },
        { icon: FileText, label: 'Meeting notes', color: 'text-green-400' },
        { icon: Link2, label: 'Important link', color: 'text-purple-400' },
        { icon: Mic, label: 'Voice memo', color: 'text-orange-400' },
      ]
    },
    {
      title: 'AI Processing',
      description: 'Wivvy analyzes and connects your content',
      icon: Sparkles,
      items: [
        { label: 'Extracting key topics...', progress: 100 },
        { label: 'Finding connections...', progress: 100 },
        { label: 'Generating insights...', progress: 100 },
        { label: 'Building knowledge graph...', progress: 100 },
      ]
    },
    {
      title: 'Discover Insights',
      description: 'Uncover patterns and connections',
      icon: Lightbulb,
      items: [
        { icon: Users, label: '3 related meetings found', insight: true },
        { icon: TrendingUp, label: 'Recurring theme detected', insight: true },
        { icon: Brain, label: 'Connected to 5 past ideas', insight: true },
        { icon: Sparkles, label: 'New opportunity identified', insight: true },
      ]
    }
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current || !isLocked) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const inView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100
      
      if (inView) {
        e.preventDefault()
        e.stopPropagation()
        
        scrollAccumulator.current += e.deltaY
        
        // Threshold for changing steps (increased for less sensitivity)
        const threshold = 300
        const debounceTime = 500 // Minimum time between step changes
        const now = Date.now()
        
        if (scrollAccumulator.current > threshold && now - lastStepChange.current > debounceTime) {
          if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1)
            scrollAccumulator.current = 0
            lastStepChange.current = now
          } else {
            // Unlock scroll when reaching the end
            setIsLocked(false)
            document.documentElement.style.overflow = ''
            document.body.style.overflow = ''
          }
        } else if (scrollAccumulator.current < -threshold && now - lastStepChange.current > debounceTime) {
          if (currentStep > 0) {
            setCurrentStep(prev => prev - 1)
            scrollAccumulator.current = 0
            lastStepChange.current = now
          }
        }
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (!containerRef.current || !isLocked || !isMobile) return
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || !isLocked || !isMobile) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const inView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100
      
      if (inView) {
        e.preventDefault()
        e.stopPropagation()
        
        const currentY = e.touches[0].clientY
        const deltaY = touchStartY.current - currentY
        
        scrollAccumulator.current += deltaY * 2 // Multiply for sensitivity
        
        const threshold = 100 // Lower threshold for touch
        const debounceTime = 300 // Faster debounce for touch
        const now = Date.now()
        
        if (scrollAccumulator.current > threshold && now - lastStepChange.current > debounceTime) {
          if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1)
            scrollAccumulator.current = 0
            lastStepChange.current = now
          } else {
            setIsLocked(false)
            document.documentElement.style.overflow = ''
            document.body.style.overflow = ''
          }
        } else if (scrollAccumulator.current < -threshold && now - lastStepChange.current > debounceTime) {
          if (currentStep > 0) {
            setCurrentStep(prev => prev - 1)
            scrollAccumulator.current = 0
            lastStepChange.current = now
          }
        }
        
        touchStartY.current = currentY
      }
    }

    const handleScroll = () => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const inView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100
      
      // Lock scroll when section comes into view
      if (inView && !isLocked && currentStep < steps.length - 1) {
        setIsLocked(true)
        lastScrollY.current = window.scrollY
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
        window.scrollTo(0, lastScrollY.current)
      }
      
      // Reset when scrolled past
      if (!inView && isLocked) {
        setIsLocked(false)
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [isLocked, currentStep, isMobile])

  // Animated values for smooth transitions
  const animatedStep = useMotionValue(0)
  
  useEffect(() => {
    animate(animatedStep, currentStep, {
      type: "spring",
      stiffness: 300,
      damping: 30
    })
  }, [currentStep, animatedStep])

  const renderCard = (step: any, index: number) => {
    const isActive = currentStep === index
    const isPast = currentStep > index
    
    return React.createElement(
      'div',
      {
        className: `glass-card border rounded-xl p-6 h-full transition-all duration-500 ${
          isActive 
            ? 'border-polygon-purple shadow-lg shadow-polygon-purple/20' 
            : 'border-polygon-border'
        } relative overflow-hidden`
      },
      // Animated border highlight
      React.createElement(
        motion.div,
        {
          className: 'absolute inset-0 border-2 border-polygon-purple rounded-xl pointer-events-none',
          initial: { opacity: 0 },
          animate: { opacity: isActive ? 1 : 0 },
          transition: { duration: 0.3 }
        }
      ),
      // Animated background glow
      React.createElement(
        motion.div,
        {
          className: 'absolute inset-0 bg-polygon-purple/5 rounded-xl pointer-events-none',
          initial: { opacity: 0 },
          animate: { opacity: isActive ? 1 : 0 },
          transition: { duration: 0.3 }
        }
      ),
      React.createElement(
        'div',
        { className: 'flex items-center gap-3 mb-4 relative z-10' },
        React.createElement(
          motion.div,
          {
            className: 'p-3 rounded-lg',
            animate: {
              backgroundColor: isActive 
                ? 'rgba(139, 92, 246, 0.2)' 
                : 'rgba(139, 92, 246, 0)'
            },
            transition: { duration: 0.3 }
          },
          React.createElement(step.icon, {
            size: 24,
            className: isActive ? 'text-polygon-purple' : 'text-gray-400'
          })
        ),
        React.createElement(
          'div',
          null,
          React.createElement('h3', { className: 'text-lg font-semibold' }, step.title),
          React.createElement('p', { className: 'text-sm text-gray-400' }, step.description)
        )
      ),
      React.createElement(
        'div',
        { className: 'space-y-3 relative z-10' },
        step.items.map((item: any, itemIndex: number) => {
          return React.createElement(
            motion.div,
            {
              key: itemIndex,
              initial: { opacity: 0, x: -20 },
              animate: {
                opacity: isActive || isPast ? 1 : 0.3,
                x: isActive || isPast ? 0 : -20,
              },
              transition: { 
                duration: 0.3, 
                delay: isActive ? itemIndex * 0.1 : 0 
              }
            },
            index === 1 
              ? React.createElement(
                  'div',
                  { className: 'space-y-1' },
                  React.createElement('p', { className: 'text-sm text-gray-300' }, item.label),
                  React.createElement(
                    'div',
                    { className: 'w-full bg-polygon-card rounded-full h-1.5' },
                    React.createElement(
                      motion.div,
                      {
                        className: 'bg-gradient-to-r from-polygon-purple to-polygon-purple-light h-1.5 rounded-full',
                        initial: { width: '0%' },
                        animate: { 
                          width: (isActive || isPast) ? `${item.progress}%` : '0%' 
                        },
                        transition: { 
                          duration: 1, 
                          delay: isActive ? itemIndex * 0.2 : 0,
                          ease: "easeOut"
                        }
                      }
                    )
                  )
                )
              : React.createElement(
                  'div',
                  {
                    className: `flex items-center gap-2 p-3 rounded-lg ${
                      item.insight 
                        ? 'bg-polygon-purple/10 border border-polygon-purple/30' 
                        : 'bg-polygon-card/50'
                    }`
                  },
                  item.icon && React.createElement(item.icon, {
                    size: 18,
                    className: item.color || 'text-polygon-purple'
                  }),
                  React.createElement('span', { className: 'text-sm' }, item.label)
                )
          )
        })
      )
    )
  }

  return React.createElement(
    'section',
    { 
      ref: containerRef,
      className: 'py-20 bg-polygon-bg/50 relative min-h-screen',
      id: 'how-it-works'
    },
    React.createElement(
      'div',
      { className: 'container mx-auto px-6' },
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: 'text-center mb-12'
        },
        React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold mb-4' }, 'From Information to Intelligence'),
        React.createElement('p', { className: 'text-xl text-gray-400' }, 
          isLocked 
            ? 'Use scroll to navigate through the steps' 
            : 'Watch how Wivvy transforms your scattered thoughts into actionable insights'
        )
      ),
      React.createElement(
        'div',
        { className: 'max-w-6xl mx-auto' },
        // Mobile layout
        isMobile ? React.createElement(
          'div',
          { className: 'relative overflow-hidden' },
          React.createElement(
            'div',
            {
              className: 'flex transition-transform duration-500 ease-in-out',
              style: {
                transform: `translateX(-${currentStep * (100 / steps.length)}%)`,
                width: `${steps.length * 100}%`
              }
            },
            steps.map((step, index) => {
              const isActive = currentStep === index
              const isPast = currentStep > index
              
              return React.createElement(
                motion.div,
                {
                  key: index,
                  className: 'flex-1 px-4',
                  animate: {
                    opacity: isActive ? 1 : isPast ? 0.7 : 0.5,
                    scale: isActive ? 1.05 : 1,
                  },
                  transition: { duration: 0.5, ease: "easeInOut" }
                },
                renderCard(step, index)
              )
            })
          )
        ) : 
        // Desktop layout
        React.createElement(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
          steps.map((step, index) => {
            const isActive = currentStep === index
            const isPast = currentStep > index
            
            return React.createElement(
              motion.div,
              {
                key: index,
                className: 'relative z-10',
                animate: {
                  opacity: isActive ? 1 : isPast ? 0.7 : 0.5,
                  scale: isActive ? 1.05 : 1,
                },
                transition: { duration: 0.5, ease: "easeInOut" }
              },
              renderCard(step, index),
              index < steps.length - 1 && React.createElement(
                motion.div,
                {
                  className: 'hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20',
                  animate: {
                    opacity: isActive ? 1 : 0.3,
                    x: isActive ? [0, 5, 0] : 0,
                  },
                  transition: {
                    opacity: { duration: 0.3 },
                    x: { duration: 1, repeat: Infinity, repeatType: 'reverse' },
                  }
                },
                React.createElement(ChevronRight, { size: 32, className: 'text-polygon-purple' })
              )
            )
          })
        ),
        React.createElement(
          'div',
          { className: 'mt-8 flex justify-center gap-2' },
          steps.map((_, index) => {
            const isActive = currentStep === index
            
            return React.createElement(
              motion.div,
              {
                key: index,
                className: 'h-2 rounded-full',
                animate: {
                  width: isActive ? 32 : 8,
                  backgroundColor: isActive ? 'rgb(139, 92, 246)' : 'rgb(45, 45, 45)'
                },
                transition: { duration: 0.3 }
              }
            )
          })
        ),
        // Scroll indicator
        isLocked && React.createElement(
          motion.div,
          {
            className: 'mt-8 text-center',
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.5 }
          },
          React.createElement(
            'div',
            { className: 'text-sm text-gray-400 flex items-center justify-center gap-2' },
            React.createElement(
              motion.div,
              {
                animate: { y: [0, 5, 0] },
                transition: { duration: 1.5, repeat: Infinity }
              },
              '↕'
            ),
            React.createElement('span', null, 'Scroll to navigate')
          )
        )
      )
    )
  )
}