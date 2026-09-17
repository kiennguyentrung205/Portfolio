import { useEffect, useRef, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import gsap from 'gsap'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        if (!isVisible) setIsVisible(true)
      } else {
        if (isVisible) setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      gsap.to(buttonRef.current, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out' })
    } else {
      gsap.to(buttonRef.current, { autoAlpha: 0, y: 20, duration: 0.3, ease: 'power2.in' })
    }
  }, [isVisible])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:bg-cyan-500 hover:text-white transition-colors invisible"
    >
      <ArrowUp size={24} />
    </button>
  )
}
