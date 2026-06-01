'use client'

import { useEffect, useRef } from 'react'

type Tile = {
  id: string
  emotion: string
  place: string
  gradient: string
  tone: 'light' | 'dark'
  // Optional: real photo URL. When present, photo replaces gradient.
  src?: string
}

const tilesA: Tile[] = [
  {
    id: 'a1',
    emotion: 'the laugh you weren’t ready for',
    place: 'bandra · sunday',
    gradient: 'linear-gradient(160deg, #FFD7C9 0%, #FF8E66 55%, #E54B36 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1633099796378-a399ab33157b?w=600&h=900&fit=crop&auto=format&q=80',
  },
  {
    id: 'a2',
    emotion: 'missing them, a little',
    place: 'last metro · 11:47',
    gradient: 'linear-gradient(180deg, #5B21B6 0%, #7C3AED 60%, #B05CFF 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1590501949668-2442efd4d3d7?w=600&h=900&fit=crop&auto=format&q=80',
  },
  {
    id: 'a3',
    emotion: 'first sip',
    place: 'koregaon park · 7am',
    gradient: 'linear-gradient(170deg, #FFF4EC 0%, #FFD7C9 55%, #FFA89B 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1630748662359-40a2105640c7?w=600&h=900&fit=crop&auto=format&q=80',
  },
  {
    id: 'a4',
    emotion: 'soft pride',
    place: 'after the call',
    gradient: 'linear-gradient(170deg, #C8FF5C 0%, #E2FF99 55%, #FAF7F2 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1706943262459-3ef6ce03305c?w=600&h=900&fit=crop&auto=format&q=80',
  },
  {
    id: 'a5',
    emotion: 'almost a tear',
    place: 'the long walk back',
    gradient: 'linear-gradient(180deg, #1F1F2B 0%, #5B21B6 70%, #FF6B57 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1685110191139-eb2caaac220d?w=600&h=900&fit=crop&auto=format&q=80',
  },
  {
    id: 'a6',
    emotion: 'the in-joke',
    place: 'on the back of a scooter',
    gradient: 'linear-gradient(160deg, #FF6B57 0%, #FFA89B 50%, #C8FF5C 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1633322451643-bf3ebcb30d10?w=600&h=900&fit=crop&auto=format&q=80',
  },
  {
    id: 'a7',
    emotion: 'stillness',
    place: 'marine drive · monsoon',
    gradient: 'linear-gradient(180deg, #14141F 0%, #1F1F2B 55%, #7C3AED 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1702382930514-9759f4ca5469?w=600&h=900&fit=crop&auto=format&q=80',
  },
  {
    id: 'a8',
    emotion: 'we did it',
    place: 'results day',
    gradient: 'linear-gradient(150deg, #FFD7C9 0%, #FF6B57 70%, #7C3AED 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1659080925920-1683d25f772a?w=600&h=900&fit=crop&auto=format&q=80',
  },
]

const tilesB: Tile[] = [
  {
    id: 'b1',
    emotion: 'between trains',
    place: 'churchgate · 8:11',
    gradient: 'linear-gradient(170deg, #FAF7F2 0%, #E2FF99 60%, #C8FF5C 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1583671032556-c79120a4831c?w=600&h=900&fit=crop&auto=format&q=80',
  },
  {
    id: 'b2',
    emotion: 'the late call',
    place: 'lights off, voice notes',
    gradient: 'linear-gradient(190deg, #1F1F2B 0%, #7C3AED 60%, #FF6B57 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1654169720142-1c21a3b49a53?w=600&h=900&fit=crop&auto=format&q=80',
  },
  {
    id: 'b3',
    emotion: 'monsoon mood',
    place: 'window seat',
    gradient: 'linear-gradient(170deg, #A78BFA 0%, #7C3AED 60%, #14141F 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1764888801893-1ab48f8d23cb?w=600&h=900&fit=crop&auto=format&q=80',
  },
  {
    id: 'b4',
    emotion: 'tiny win',
    place: 'first salary',
    gradient: 'linear-gradient(150deg, #C8FF5C 0%, #FFD7C9 60%, #FF8E66 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1606150373064-4c53653eb6e6?w=600&h=900&fit=crop&auto=format&q=80',
  },
  {
    id: 'b5',
    emotion: 'post-class chai',
    place: 'hauz khas, 5pm',
    gradient: 'linear-gradient(160deg, #FFA89B 0%, #FF6B57 60%, #1F1F2B 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1625463006115-09f08489f591?w=600&h=900&fit=crop&auto=format&q=80',
  },
  {
    id: 'b6',
    emotion: 'quiet hours',
    place: 'no plans, no panic',
    gradient: 'linear-gradient(180deg, #FAF7F2 0%, #FFF4EC 60%, #FFD7C9 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1473830394358-91588751b241?w=600&h=900&fit=crop&auto=format&q=80',
  },
  {
    id: 'b7',
    emotion: 'first rain',
    place: 'balcony · june',
    gradient: 'linear-gradient(170deg, #5B21B6 0%, #A78BFA 60%, #C8FF5C 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1758792930399-72b6a7989891?w=600&h=900&fit=crop&auto=format&q=80',
  },
  {
    id: 'b8',
    emotion: 'after the show',
    place: 'we couldn’t stop talking',
    gradient: 'linear-gradient(160deg, #FF6B57 0%, #7C3AED 100%)',
    tone: 'dark',
    src: 'https://images.unsplash.com/photo-1729915884078-ca39997a9054?w=600&h=900&fit=crop&auto=format&q=80',
  },
]

const PhotoTile = ({ tile, tilt }: { tile: Tile; tilt: number }) => {
  const labelTextClass = tile.tone === 'dark' ? 'text-cream' : 'text-ink'
  const subTextClass = tile.tone === 'dark' ? 'text-cream/65' : 'text-ink/55'

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[28px] border border-ink/5 bg-cream shadow-[0_2px_0_rgba(20,20,31,0.04),0_30px_60px_-25px_rgba(20,20,31,0.25)]"
      style={{
        width: '184px',
        height: '252px',
        transform: `rotate(${tilt}deg)`,
      }}
    >
      <div
        className="absolute inset-0"
        style={
          tile.src
            ? {
                backgroundImage: `url(${tile.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : { background: tile.gradient }
        }
      />

      {/* Grain for photographic feel */}
      <div className="noise pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay" />

      {/* Soft vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(20,20,31,0) 55%, rgba(20,20,31,0.45) 100%)',
        }}
      />

      {/* Caption */}
      <div className="absolute inset-x-3 bottom-3">
        <p className={`heading-display text-balance text-[15px] italic leading-tight ${labelTextClass}`}>
          {tile.emotion}
        </p>
        <p className={`mt-1 text-[10px] uppercase tracking-[0.16em] ${subTextClass}`}>
          {tile.place}
        </p>
      </div>
    </div>
  )
}

const Row = ({
  tiles,
  direction = 'left',
  pxPerFrame = 0.3,
  tilts,
}: {
  tiles: Tile[]
  direction?: 'left' | 'right'
  pxPerFrame?: number
  tilts: number[]
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const tripled = [...tiles, ...tiles, ...tiles]

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const segment = el.scrollWidth / 3
    el.scrollLeft = segment

    let userActive = false
    let userTimer: ReturnType<typeof setTimeout> | undefined
    let hovered = false
    let rafId = 0

    const markUserActive = () => {
      userActive = true
      if (userTimer) clearTimeout(userTimer)
      userTimer = setTimeout(() => {
        userActive = false
      }, 1500)
    }

    let isDragging = false
    let dragStartX = 0
    let dragStartScroll = 0
    let dragMoved = false

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      isDragging = true
      dragMoved = false
      dragStartX = e.clientX
      dragStartScroll = el.scrollLeft
      el.style.cursor = 'grabbing'
      markUserActive()
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return
      const dx = e.clientX - dragStartX
      if (Math.abs(dx) > 3) {
        dragMoved = true
        try {
          el.setPointerCapture(e.pointerId)
        } catch {}
      }
      el.scrollLeft = dragStartScroll - dx
      markUserActive()
    }

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging) return
      isDragging = false
      el.style.cursor = 'grab'
      try {
        el.releasePointerCapture(e.pointerId)
      } catch {}
      if (dragMoved) {
        const block = (ev: Event) => {
          ev.stopPropagation()
          ev.preventDefault()
          el.removeEventListener('click', block, true)
        }
        el.addEventListener('click', block, true)
      }
      markUserActive()
    }

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) markUserActive()
    }
    const onTouchStart = () => markUserActive()
    const onTouchMove = () => markUserActive()
    const onScroll = () => {
      if (el.scrollLeft >= segment * 2) el.scrollLeft -= segment
      else if (el.scrollLeft <= 0) el.scrollLeft += segment
    }
    const onEnter = () => {
      hovered = true
    }
    const onLeave = () => {
      hovered = false
    }

    el.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    el.addEventListener('wheel', onWheel, { passive: true })
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: true })
    el.addEventListener('scroll', onScroll, { passive: true })
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)

    const tick = () => {
      if (!userActive && !hovered && !isDragging) {
        el.scrollLeft += direction === 'left' ? pxPerFrame : -pxPerFrame
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      if (userTimer) clearTimeout(userTimer)
      el.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('scroll', onScroll)
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [direction, pxPerFrame])

  return (
    <div
      ref={scrollerRef}
      className="scrollbar-hide w-full select-none overflow-x-auto overscroll-x-contain py-3"
      style={{ cursor: 'grab', touchAction: 'pan-x pan-y' }}
    >
      <div className="flex w-max items-end gap-5">
        {tripled.map((t, i) => (
          <div
            key={`${t.id}-${i}`}
            className="transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 hover:scale-[1.03]"
          >
            <PhotoTile tile={t} tilt={tilts[i % tilts.length]} />
          </div>
        ))}
      </div>
    </div>
  )
}

const MomentMarquee = () => {
  const tiltsA = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 1.2]
  const tiltsB = [1.5, -1.5, 2, -1, 1, -2, 0.8, -1.8]

  return (
    <section
      role="region"
      aria-label="Moments from young India — drag, swipe, or scroll to wander"
      className="mt-20 md:mt-28"
    >
      {/* Caption above */}
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <p className="heading-display text-balance text-3xl italic leading-tight md:text-4xl lg:text-5xl">
          <span className="text-violet">feels.</span>{' '}
          <span className="text-coral">connects.</span>{' '}
          <span className="text-ink">lives.</span>
        </p>
        <p className="max-w-md text-pretty text-sm text-ink/55 md:text-base">
          every app we build starts with one of these.
        </p>
      </div>

      {/* Full-bleed photo band */}
      <div
        className="relative mt-6 marquee-mask md:mt-8"
        style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}
      >
        <div className="space-y-3 py-6 md:space-y-4 md:py-10">
          <Row tiles={tilesA} direction="left" pxPerFrame={0.32} tilts={tiltsA} />
          <Row tiles={tilesB} direction="right" pxPerFrame={0.26} tilts={tiltsB} />
        </div>

        {/* Fade into cream background top & bottom */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-20 md:h-24"
          style={{ background: 'linear-gradient(to bottom, #FAF7F2 0%, rgba(250,247,242,0) 100%)' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-24"
          style={{ background: 'linear-gradient(to top, #FAF7F2 0%, rgba(250,247,242,0) 100%)' }}
        />
      </div>

      {/* Hint below */}
      <p className="mt-2 flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink/40 md:mt-4">
        <span aria-hidden>←</span>
        drag · scroll · or just watch
        <span aria-hidden>→</span>
      </p>
    </section>
  )
}

export default MomentMarquee
