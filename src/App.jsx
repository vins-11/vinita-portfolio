import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const ringRefs = useRef([])

  useEffect(() => {
    // Create animated rings
    for (let i = 0; i < 3; i++) {
      const ring = document.createElement('div')
      ring.className = 'cursor-ring'
      ring.style.cssText = `
        left: -100px;
        top: -100px;
      `
      document.body.appendChild(ring)
      ringRefs.current.push(ring)
    }

    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY

      setMousePosition({ x, y })

      // Update main cursor with smooth easing
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`
        cursorRef.current.style.top = `${y}px`
      }

      // Update cursor dot with faster response
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${x}px`
        cursorDotRef.current.style.top = `${y}px`
      }

      // Update rings with staggered delay
      ringRefs.current.forEach((ring, index) => {
        if (ring) {
          setTimeout(() => {
            ring.style.left = `${x}px`
            ring.style.top = `${y}px`
          }, index * 50)
        }
      })
    }

    // Handle hover states on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive = target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.style.cursor === 'pointer'

      if (isInteractive) {
        setIsHovering(true)
        if (cursorRef.current) {
          cursorRef.current.classList.add('hover')
        }
      }
    }

    const handleMouseOut = (e) => {
      const target = e.target
      const isInteractive = target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.style.cursor === 'pointer'

      if (isInteractive) {
        setIsHovering(false)
        if (cursorRef.current) {
          cursorRef.current.classList.remove('hover')
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver, true)
    document.addEventListener('mouseout', handleMouseOut, true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver, true)
      document.removeEventListener('mouseout', handleMouseOut, true)
      ringRefs.current.forEach(ring => {
        if (ring && ring.parentNode) {
          ring.parentNode.removeChild(ring)
        }
      })
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Modern Animated Cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      />
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot"
      />

      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

