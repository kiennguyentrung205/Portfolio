import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Hero() {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo('.hero-content > *', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      }
    )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-content relative z-10 flex flex-col items-center text-center px-4 mt-16">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <img 
            src={`${import.meta.env.BASE_URL}avatar.png`} 
            alt="My Avatar" 
            className="relative w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-[#0a0a0a] object-cover"
          />
        </div>
        
        <h1 className="mt-8 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Kien Nguyen Trung
        </h1>
        <p className="mt-4 text-xl text-cyan-400 font-medium">Software Engineering Student</p>
        <p className="mt-2 text-lg text-gray-300 max-w-xl mx-auto">
          Passionate about technology, coding, and crafting seamless digital experiences.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <a href="#projects" className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold transition-transform hover:scale-105 active:scale-95">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
