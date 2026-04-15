'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Eye, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const creators = [
  {
    image: '/creators/hero-1.jpg',
    name: 'Abhi & Niyu',
    niche: 'Education',
    tag: '+2.3x retention',
    tagColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    glowColor: 'rgba(250,204,21,0.15)',
    views: '24M+',
  },
  {
    image: '/creators/hero-4.jpg',
    name: 'Prajakta Koli',
    niche: 'Comedy',
    tag: 'Hook: Relatable',
    tagColor: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
    glowColor: 'rgba(56,189,248,0.15)',
    views: '7.2M+',
  },
  {
    image: '/creators/hero-2.jpg',
    name: 'Ranveer A.',
    niche: 'Mindset',
    tag: 'Trending format',
    tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    glowColor: 'rgba(52,211,153,0.15)',
    views: '10M+',
  },
  {
    image: '/creators/hero-3.jpg',
    name: 'Nitish Rajput',
    niche: 'Geopolitics',
    tag: '+4.1x shares',
    tagColor: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
    glowColor: 'rgba(244,114,182,0.15)',
    views: '12.7M+',
  },
  {
    image: '/creators/hero-5.jpg',
    name: 'Nikhil Sharma',
    niche: 'Finance',
    tag: 'Pattern detected',
    tagColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    glowColor: 'rgba(192,132,252,0.15)',
    views: '5.8M+',
  },
  {
    image: '/creators/hero-6.jpg',
    name: 'Ashish C.',
    niche: 'Entertainment',
    tag: '1.9x engagement',
    tagColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    glowColor: 'rgba(251,146,60,0.15)',
    views: '30M+',
  },
]

// Floating animation configs per column (different speed/amplitude)
const columnFloat = [
  { y: [0, -12, 0], duration: 5.5 },
  { y: [0, 10, 0], duration: 6.5 },
  { y: [0, -8, 0], duration: 7 },
]

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-500/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/[0.03] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

          {/* Left: Copy */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-gray-400 text-sm mb-8"
            >
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
              Powered by specialized AI models trained on Indian content
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-white">We decoded</span>
              <br />
              <span className="text-white">what makes </span>
              <span className="text-gradient-yellow">Indian </span><span className="inline-block align-middle" aria-label="India flag">🇮🇳</span>
              <br />
              <span className="text-gradient-yellow">content go viral.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base lg:text-lg text-gray-400 mb-10 leading-relaxed max-w-lg"
            >
              We train specialized AI models on thousands of viral Indian videos
              to uncover repeatable patterns in hooks, storytelling, and engagement
              — so you can create content that actually performs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#insights"
                className="group inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-all shadow-lg shadow-white/10"
              >
                Explore Insights
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-2 border border-white/[0.15] text-gray-300 font-medium px-7 py-3.5 rounded-xl hover:bg-white/5 hover:border-white/[0.25] transition-all"
              >
                <Play className="w-4 h-4" />
                See How It Works
              </a>
            </motion.div>
          </div>

          {/* Right: Creator Grid with floating columns */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-3 gap-3">
              {/* Column 1 */}
              <motion.div
                animate={{ y: columnFloat[0].y }}
                transition={{ duration: columnFloat[0].duration, repeat: Infinity, ease: 'easeInOut' }}
                className="space-y-3 pt-8"
              >
                <CreatorCard creator={creators[0]} index={0} />
                <CreatorCard creator={creators[3]} index={3} />
              </motion.div>
              {/* Column 2 */}
              <motion.div
                animate={{ y: columnFloat[1].y }}
                transition={{ duration: columnFloat[1].duration, repeat: Infinity, ease: 'easeInOut' }}
                className="space-y-3"
              >
                <CreatorCard creator={creators[1]} index={1} />
                <CreatorCard creator={creators[4]} index={4} />
              </motion.div>
              {/* Column 3 */}
              <motion.div
                animate={{ y: columnFloat[2].y }}
                transition={{ duration: columnFloat[2].duration, repeat: Infinity, ease: 'easeInOut' }}
                className="space-y-3 pt-16"
              >
                <CreatorCard creator={creators[2]} index={2} />
                <CreatorCard creator={creators[5]} index={5} />
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile: Auto-scrolling marquee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:hidden -mx-6 overflow-hidden relative"
          >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: [0, -840] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="flex gap-3 pb-4"
            >
              {[...creators, ...creators].map((creator, i) => (
                <div key={i} className="flex-shrink-0 w-36">
                  <CreatorCard creator={creator} index={i % creators.length} />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

function CreatorCard({ creator, index }: { creator: typeof creators[0]; index: number }) {
  // Stagger entrance directions for variety
  const entranceVariants = [
    { x: -30, y: 20, rotate: -3 },
    { x: 0, y: 40, rotate: 0 },
    { x: 30, y: 20, rotate: 3 },
    { x: -20, y: 30, rotate: -2 },
    { x: 10, y: 35, rotate: 1 },
    { x: 20, y: 25, rotate: 2 },
  ]
  const entrance = entranceVariants[index]

  return (
    <motion.div
      initial={{ opacity: 0, ...entrance, scale: 0.85 }}
      animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.5 + index * 0.12,
        type: 'spring',
        stiffness: 80,
        damping: 15,
      }}
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: `0 20px 40px -12px ${creator.glowColor}`,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
    >
      {/* Image */}
      <Image
        src={creator.image}
        alt={creator.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 1024px) 160px, 200px"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

      {/* Scan line effect via CSS */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="absolute left-0 right-0 h-[2px]"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            animation: 'scanline 2.5s ease-in-out infinite',
          }}
        />
      </div>

      {/* Hover border glow ring */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1.5px ${creator.glowColor}, 0 0 20px ${creator.glowColor}`,
        }}
      />

      {/* Top: Data tag with shimmer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1 + index * 0.12, type: 'spring', stiffness: 120 }}
        className="absolute top-2.5 left-2.5 right-2.5"
      >
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border backdrop-blur-md text-[11px] font-semibold tracking-wide ${creator.tagColor}`}>
          <TrendingUp className="w-3 h-3" />
          {creator.tag}
        </div>
      </motion.div>

      {/* Bottom: Info with slide-up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white font-semibold text-sm leading-tight">{creator.name}</p>
            <p className="text-gray-400 text-xs">{creator.niche}</p>
          </div>
          <motion.div
            className="flex items-center gap-1 text-white/80"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
          >
            <Eye className="w-3 h-3" />
            <span className="text-xs font-medium">{creator.views}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
