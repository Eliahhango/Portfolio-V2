import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import HtmlMirror from './HtmlMirror'
import NotFound from './NotFound'

const HtmlPathMirror = () => {
  const location = useLocation()

  const src = useMemo(() => {
    const pathname = location.pathname || '/'

    if (pathname === '/index.html') return '/original/index.html'
    if (pathname.endsWith('.html')) return `/original${pathname}`

    return null
  }, [location.pathname])

  if (!src) return <NotFound />

  return <HtmlMirror src={src} />
}

export default HtmlPathMirror
