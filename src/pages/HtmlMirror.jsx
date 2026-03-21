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
      }

      #ezw-network-canvas {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        opacity: 0.7;
      }

      main, nav, header, footer, section {
        position: relative;
        z-index: 1;
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
        transform: translateY(-3px) scale(1.02);
      }

      .ezw-char {
        display: inline-block;
        opacity: 0;
        transform: translateY(14px) scale(0.98);
        animation: ezw-char-reveal 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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

      @media (prefers-reduced-motion: reduce) {
        .ezw-reveal,
        .ezw-hoverable,
        .ezw-char {
          opacity: 1 !important;
          transform: none !important;
          animation: none !important;
          transition: none !important;
        }

        #ezw-network-canvas {
          display: none !important;
        }
      }
    `
    doc.head.appendChild(style)

    const prefersReducedMotion = iframe.contentWindow.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion) {
      const canvas = doc.createElement('canvas')
      canvas.id = 'ezw-network-canvas'
      doc.body.prepend(canvas)

      const ctx = canvas.getContext('2d')
      const win = iframe.contentWindow

      const nodes = []
      const nodeCount = win.innerWidth < 768 ? 22 : 36
      const maxDistance = win.innerWidth < 768 ? 130 : 170

      const resizeCanvas = () => {
        canvas.width = win.innerWidth
        canvas.height = win.innerHeight
      }

      for (let i = 0; i < nodeCount; i += 1) {
        nodes.push({
          x: Math.random() * win.innerWidth,
          y: Math.random() * win.innerHeight,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: Math.random() * 1.6 + 0.8,
        })
      }

      const draw = () => {
        if (!ctx) return
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < nodes.length; i += 1) {
          const a = nodes[i]
          a.x += a.vx
          a.y += a.vy

          if (a.x < 0 || a.x > canvas.width) a.vx *= -1
          if (a.y < 0 || a.y > canvas.height) a.vy *= -1

          ctx.beginPath()
          ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(0, 102, 255, 0.6)'
          ctx.fill()

          for (let j = i + 1; j < nodes.length; j += 1) {
            const b = nodes[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < maxDistance) {
              const alpha = (1 - distance / maxDistance) * 0.35
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.strokeStyle = `rgba(0, 102, 255, ${alpha})`
              ctx.lineWidth = 1
              ctx.stroke()
            }
          }
        }

        win.requestAnimationFrame(draw)
      }

      resizeCanvas()
      win.addEventListener('resize', resizeCanvas)
      draw()
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
    <div className="w-full h-screen overflow-hidden bg-white">
      <iframe
        ref={iframeRef}
        title={src}
        src={src}
        className="w-full h-full border-0"
        loading="eager"
        referrerPolicy="no-referrer"
        onLoad={injectAnimations}
      />
    </div>
  )
}

export default HtmlMirror
