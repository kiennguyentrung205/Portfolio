import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

// PLACEHOLDERS: Replace these with actual EmailJS values
const EMAILJS_PUBLIC_KEY = 'aKV63u4y3NQa4wIE6'
const EMAILJS_SERVICE_ID = 'service_95x7hcc'
const EMAILJS_TEMPLATE_ID = 'template_3j5r55e'

export default function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  // Initialize EmailJS outside of GSAP
  if (typeof window !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current)
      .then(() => {
        setStatus('success')
        formRef.current.reset()
        setTimeout(() => setStatus('idle'), 5000)
      })
      .catch((error) => {
        console.error('EmailJS Error:', error)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      })
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="contact-element reveal text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>

        <form 
          ref={formRef} 
          onSubmit={handleSubmit}
          className="contact-element reveal relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="alias" className="text-sm font-semibold text-gray-300">Name / Alias</label>
            <input 
              type="text" 
              name="alias" 
              id="alias" 
              required
              placeholder="How should I call you?" 
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-gray-300">Message</label>
            <textarea 
              name="message" 
              id="message" 
              rows="5" 
              required
              placeholder="Your message here..." 
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="mt-4 flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100"
          >
            {status === 'idle' && <><Send size={20} /> Send Message</>}
            {status === 'loading' && <span className="animate-pulse">Đang gửi...</span>}
            {status === 'success' && <><CheckCircle size={20} /> Sent Successfully!</>}
            {status === 'error' && <><AlertCircle size={20} /> Error Sending</>}
          </button>
        </form>
      </div>

      {/* Footer / Social links placeholder */}
      <div className="contact-element mt-20 text-center text-gray-400 text-sm">
        <p>&copy; 2026 Kien Nguyen Trung. All rights reserved.</p>
      </div>
    </section>
  )
}
