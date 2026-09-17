export default function Hobbies() {
  const hobbies = [
    { name: 'Music', color: 'from-blue-500 to-cyan-500' },
    { name: 'Traveling', color: 'from-cyan-500 to-teal-500' },
    { name: 'Coding', color: 'from-teal-500 to-emerald-500' },
    { name: 'Language learning', color: 'from-emerald-500 to-green-500' },
    { name: 'Running', color: 'from-green-500 to-lime-500' },
  ]

  return (
    <section id="hobbies" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">Enjoy</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image side */}
        <div className="w-full md:w-1/2 flex justify-center reveal">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <img 
              src={`${import.meta.env.BASE_URL}hobbie.jpg`} 
              alt="My Photo" 
              className="relative rounded-2xl w-full max-w-sm object-cover shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* List side */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className="hobby-item reveal relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 shadow-lg group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(6,182,212,0.2)] md:ml-[var(--stair)]"
              style={{ '--stair': `${index * 1.5}rem` }}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${hobby.color} opacity-70 group-hover:opacity-100 group-hover:w-2 transition-all duration-300`}></div>
              <h3 className="text-xl sm:text-2xl font-semibold pl-4">{hobby.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
