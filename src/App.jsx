import { ReactLenis } from 'lenis/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import ContactForm from './components/ContactForm'
import MusicPlayer from './components/MusicPlayer'
import { Mascot } from 'page-mascot'
import ScrollToTop from './components/ScrollToTop'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef(null)

  useGSAP(() => {
    // Sync ScrollTrigger with Lenis
    function update(time) {
      ScrollTrigger.update()
    }
    gsap.ticker.add(update)

    // Global Scroll Reveal
    gsap.utils.toArray('.reveal').forEach(el => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    return () => {
      gsap.ticker.remove(update)
    }
  }, { scope: appRef })

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div ref={appRef} className="relative min-h-screen bg-[#0a0a0a] text-gray-100 overflow-x-clip font-sans">
        <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 transform scale-75 sm:scale-100 origin-bottom-left pointer-events-none sm:pointer-events-auto">
          <div className="pointer-events-auto">
            <Mascot 
              directions={`${import.meta.env.BASE_URL}mascots/kien-directions.webp`} 
              reactions={`${import.meta.env.BASE_URL}mascots/kien-reactions.webp`} 
            />
          </div>
        </div>
        <MusicPlayer />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Hobbies />
        <ContactForm />
        <ScrollToTop />
      </div>
    </ReactLenis>
  )
}

export default App
