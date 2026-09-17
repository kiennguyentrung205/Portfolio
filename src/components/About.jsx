export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
        <div className="flex-1 flex justify-center md:justify-end w-full reveal">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <img 
              src="/avatar3.jpg" 
              alt="Nguyen Trung Kien" 
              className="relative mx-auto max-w-xs sm:max-w-sm w-full rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] object-cover" 
            />
          </div>
        </div>
        
        <div className="flex-1 md:pl-4 text-center md:text-left reveal">
          <h2 className="text-4xl font-extrabold mb-6">Hello there!</h2>
          <div className="w-16 h-1 bg-cyan-500 mb-8 mx-auto md:mx-0 rounded-full"></div>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I’m <strong className="text-white font-bold">Nguyen Trung Kien</strong>, born in 2005, from Vietnam – Long Xuyen, An Giang. I’m currently studying Software Engineering at FPT University.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I’m passionate about technology and always eager to explore new trends, embracing challenges that bring valuable experiences.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            This is my portfolio website—where I showcase my projects, skills, and interests. Feel free to browse around and follow along on my journey!
          </p>
        </div>
      </div>
    </section>
  )
}
