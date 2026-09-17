const experiences = [
  { img: `${import.meta.env.BASE_URL}activity1.jpg`, alt: 'Experience 1' },
  { img: `${import.meta.env.BASE_URL}activity2.jpg`, alt: 'Experience 2' },
  { img: `${import.meta.env.BASE_URL}activity3.jpg`, alt: 'Experience 3' },
  { img: `${import.meta.env.BASE_URL}activity4.jpg`, alt: 'Experience 4' },
  { img: `${import.meta.env.BASE_URL}activity5.jpg`, alt: 'Experience 5' },
  { img: `${import.meta.env.BASE_URL}activity6.jpg`, alt: 'Experience 6' }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">My Experiences</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="exp-item reveal group relative h-64 rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <img 
              src={exp.img} 
              alt={exp.alt} 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
            />
            {/* Glassmorphism border effect */}
            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-cyan-500/50 rounded-2xl transition-colors duration-500 z-20"></div>
          </div>
        ))}
      </div>
    </section>
  )
}
