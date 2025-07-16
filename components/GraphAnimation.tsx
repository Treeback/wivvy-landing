'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const GraphAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    const nodes = [
      { x: 100, y: 100, vx: 0.5, vy: 0.3, radius: 4 },
      { x: 200, y: 150, vx: -0.3, vy: 0.5, radius: 6 },
      { x: 150, y: 200, vx: 0.4, vy: -0.2, radius: 5 },
      { x: 250, y: 100, vx: -0.2, vy: -0.4, radius: 4 },
      { x: 300, y: 180, vx: 0.3, vy: 0.2, radius: 7 },
    ]

    const animate = () => {
      ctx.fillStyle = 'rgba(13, 17, 23, 0.1)'
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x <= node.radius || node.x >= canvas.offsetWidth - node.radius) {
          node.vx = -node.vx
        }
        if (node.y <= node.radius || node.y >= canvas.offsetHeight - node.radius) {
          node.vy = -node.vy
        }

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = '#4D8CFF'
        ctx.fill()

        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4)
        gradient.addColorStop(0, 'rgba(77, 140, 255, 0.3)')
        gradient.addColorStop(1, 'rgba(77, 140, 255, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2)
        ctx.fill()

        nodes.forEach((otherNode, j) => {
          if (i < j) {
            const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y)
            if (distance < 150) {
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.strokeStyle = `rgba(77, 140, 255, ${0.2 * (1 - distance / 150)})`
              ctx.lineWidth = 1
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="absolute inset-0 opacity-50">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
    </div>
  )
}

export default GraphAnimation