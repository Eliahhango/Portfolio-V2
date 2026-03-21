import { useRef } from 'react'

const HtmlMirror = ({ src }) => {
  const iframeRef = useRef(null)

  const injectAnimations = () => {
    const iframe = iframeRef.current
    if (!iframe) return

    const doc = iframe.contentDocument
    if (!doc || !doc.body) return

    if (doc.getElementById('ezw-motion-style')) return

    const style = doc.createElement('style')
    style.id = 'ezw-motion-style'
    style.textContent = `
      body {
        position: relative;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-synthesis: none;
        overflow-x: hidden;
      }

      h1, h2, h3 {
        text-wrap: balance;
        letter-spacing: -0.015em;
      }

      p, li {
        text-wrap: pretty;
      }

      main {
        scroll-behavior: smooth;
      }

      #ezw-network-canvas {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2147483640;
        opacity: 0.42;
      }

      .ezw-reveal {
        opacity: 0;
        transform: translateY(28px);
        transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        will-change: opacity, transform;
      }

      .ezw-reveal.ezw-in-view {
        opacity: 1;
        transform: translateY(0);
      }

      .ezw-slide-left {
        transform: translateX(-36px);
      }

      .ezw-slide-right {
        transform: translateX(36px);
      }

      .ezw-slide-left.ezw-in-view,
      .ezw-slide-right.ezw-in-view {
        transform: translateX(0);
      }

      .ezw-hoverable {
        transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, filter 0.35s ease;
        will-change: transform;
      }

      .ezw-hoverable:hover {
        transform: translateY(-4px) scale(1.024);
        filter: saturate(1.08);
      }

      .ezw-char {
        display: inline-block;
        opacity: 0;
        transform: translateY(14px) scale(0.98);
        animation: ezw-char-reveal 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        animation-play-state: paused;
      }

      .ezw-word-gap {
        display: inline-block;
        width: 0.32em;
      }

      @keyframes ezw-char-reveal {
        0% {
          opacity: 0;
          transform: translateY(14px) scale(0.98);
          filter: blur(2px);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }
      }

      .ezw-in-view .ezw-char {
        animation-play-state: running;
      }

      @media (prefers-reduced-motion: reduce) {
        .ezw-reveal,
        .ezw-hoverable,
        .ezw-char {
          opacity: 1 !important;
          transform: none !important;
          animation: none !important;
          transition: none !important;
        }

      }
    `
    doc.head.appendChild(style)

    const canvas = doc.createElement('canvas')
    canvas.id = 'ezw-network-canvas'
    doc.body.prepend(canvas)

    const ctx = canvas.getContext('2d')
    if (ctx) {
      const win = iframe.contentWindow
      const nodes = []
      const isMobile = win.innerWidth < 768
      const nodeCount = isMobile ? 20 : 36
      const maxDistance = isMobile ? 130 : 175
      const pointer = { x: win.innerWidth / 2, y: win.innerHeight / 2, active: false }
      let rafId = 0
      let lastTs = 0
      const targetFps = isMobile ? 32 : 50
      const frameStep = 1000 / targetFps

      const resizeCanvas = () => {
        const scale = Math.min(win.devicePixelRatio || 1, 2)
        canvas.width = Math.floor(win.innerWidth * scale)
        canvas.height = Math.floor(win.innerHeight * scale)
        ctx.setTransform(scale, 0, 0, scale, 0, 0)
      }

      const onPointerMove = (event) => {
        pointer.x = event.clientX
        pointer.y = event.clientY
        pointer.active = true
      }

      const onPointerLeave = () => {
        pointer.active = false
      }

      const onTouchMove = (event) => {
        const point = event.touches && event.touches[0]
        if (!point) return
        pointer.x = point.clientX
        pointer.y = point.clientY
        pointer.active = true
      }

      const onTouchEnd = () => {
        pointer.active = false
      }

      for (let i = 0; i < nodeCount; i += 1) {
        nodes.push({
          x: Math.random() * win.innerWidth,
          y: Math.random() * win.innerHeight,
          vx: (Math.random() - 0.5) * (isMobile ? 0.32 : 0.42),
          vy: (Math.random() - 0.5) * (isMobile ? 0.32 : 0.42),
          r: Math.random() * 1.4 + 0.8,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          glow: Math.random() * 0.22 + 0.16,
        })
      }

      const draw = (ts = 0) => {
        if (ts - lastTs < frameStep) {
          rafId = win.requestAnimationFrame(draw)
          return
        }
        lastTs = ts
        const t = ts * 0.001
        const focusX = pointer.active ? pointer.x : win.innerWidth * (0.5 + Math.sin(t * 0.18) * 0.08)
        const focusY = pointer.active ? pointer.y : win.innerHeight * (0.42 + Math.cos(t * 0.21) * 0.07)

        ctx.clearRect(0, 0, win.innerWidth, win.innerHeight)

        const gradient = ctx.createRadialGradient(focusX, focusY, 20, focusX, focusY, Math.max(win.innerWidth, win.innerHeight) * 0.65)
        gradient.addColorStop(0, 'rgba(0, 102, 255, 0.13)')
        gradient.addColorStop(1, 'rgba(0, 102, 255, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, win.innerWidth, win.innerHeight)

        for (let i = 0; i < nodes.length; i += 1) {
          const a = nodes[i]
          a.pulse += a.pulseSpeed

          if (pointer.active) {
            const pdx = pointer.x - a.x
            const pdy = pointer.y - a.y
            const pDistance = Math.sqrt(pdx * pdx + pdy * pdy)
            if (pDistance < 220 && pDistance > 0) {
              const pull = (1 - pDistance / 220) * 0.0038
              a.vx += pdx * pull
              a.vy += pdy * pull
            }
          }

          a.vx *= 0.996
          a.vy *= 0.996
          a.x += a.vx
          a.y += a.vy

          if (a.x < 0 || a.x > win.innerWidth) a.vx *= -1
          if (a.y < 0 || a.y > win.innerHeight) a.vy *= -1

          const dynamicR = a.r + Math.sin(a.pulse + t * 1.4) * 0.35
          ctx.beginPath()
          ctx.arc(a.x, a.y, dynamicR, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 102, 255, ${0.62 + Math.sin(a.pulse + t) * 0.14})`
          ctx.fill()

          ctx.beginPath()
          ctx.arc(a.x, a.y, dynamicR * 3.2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 170, 255, ${a.glow * 0.18})`
          ctx.fill()

          for (let j = i + 1; j < nodes.length; j += 1) {
            const b = nodes[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < maxDistance) {
              const energy = 0.86 + Math.sin(t * 1.2 + i * 0.2 + j * 0.12) * 0.14
              const alpha = (1 - distance / maxDistance) * 0.5 * energy
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.strokeStyle = `rgba(0, 125, 255, ${alpha})`
              ctx.lineWidth = 0.8 + (1 - distance / maxDistance) * 0.55
              ctx.stroke()
            }
          }
        }

        rafId = win.requestAnimationFrame(draw)
      }

      resizeCanvas()
      win.addEventListener('resize', resizeCanvas)
      win.addEventListener('orientationchange', resizeCanvas)
      doc.addEventListener('mousemove', onPointerMove)
      doc.addEventListener('mouseleave', onPointerLeave)
      doc.addEventListener('touchmove', onTouchMove, { passive: true })
      doc.addEventListener('touchend', onTouchEnd, { passive: true })

      doc.addEventListener('visibilitychange', () => {
        if (doc.visibilityState === 'hidden') {
          win.cancelAnimationFrame(rafId)
          return
        }
        rafId = win.requestAnimationFrame(draw)
      })

      rafId = win.requestAnimationFrame(draw)
    }

    const sectionNodes = Array.from(doc.querySelectorAll('section, main > div, article'))
    sectionNodes.forEach((node, index) => {
      node.classList.add('ezw-reveal')
      node.classList.add(index % 2 === 0 ? 'ezw-slide-left' : 'ezw-slide-right')
      node.style.transitionDelay = `${Math.min(index * 70, 350)}ms`
    })

    const textNodes = Array.from(doc.querySelectorAll('h1, h2, h3, p'))
    textNodes.forEach((node, index) => {
      node.classList.add('ezw-reveal')
      node.style.transitionDelay = `${Math.min((index % 8) * 55, 300)}ms`
    })

    const headlineNodes = Array.from(doc.querySelectorAll('h1, h2'))
    headlineNodes.forEach((node) => {
      if (node.dataset.ezwSplit === '1') return
      if (node.children.length > 0) return
      const text = node.textContent || ''
      if (!text.trim()) return

      node.dataset.ezwSplit = '1'
      node.textContent = ''

      let charDelay = 0
      for (const char of text) {
        if (char === ' ') {
          const gap = doc.createElement('span')
          gap.className = 'ezw-word-gap'
          gap.textContent = ' '
          node.appendChild(gap)
          continue
        }

        const span = doc.createElement('span')
        span.className = 'ezw-char'
        span.textContent = char
        span.style.animationDelay = `${Math.min(charDelay * 26, 900)}ms`
        node.appendChild(span)
        charDelay += 1
      }
    })

    const listItems = Array.from(doc.querySelectorAll('ul, ol'))
    listItems.forEach((list) => {
      const children = Array.from(list.children)
      children.forEach((item, index) => {
        item.classList.add('ezw-reveal')
        item.style.transitionDelay = `${Math.min(index * 85, 500)}ms`
      })
    })

    const hoverables = Array.from(doc.querySelectorAll('button, .rounded-xl, .rounded-2xl, .rounded-lg, a.bg-primary, a[class*="hover"], [role="button"]'))
    hoverables.forEach((node) => {
      node.classList.add('ezw-hoverable')
    })

    const revealables = Array.from(doc.querySelectorAll('.ezw-reveal'))
    const observer = new iframe.contentWindow.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ezw-in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -12% 0px' }
    )

    revealables.forEach((node) => observer.observe(node))
  }

  return (
    <div className="w-full min-h-[100dvh] h-[100dvh] overflow-hidden bg-white">
      <iframe
        ref={iframeRef}
        title={src}
        src={src}
        className="w-full h-[100dvh] border-0"
        loading="eager"
        referrerPolicy="no-referrer"
        onLoad={injectAnimations}
      />
    </div>
  )
}

export default HtmlMirror
