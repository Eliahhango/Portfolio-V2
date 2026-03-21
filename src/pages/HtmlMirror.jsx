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

      @media (prefers-reduced-motion: reduce) {
        .ezw-reveal,
        .ezw-hoverable {
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
        }
      }
    `
    doc.head.appendChild(style)

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
