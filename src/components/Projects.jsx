import { GithubLogo } from '@phosphor-icons/react'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white/5 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Project Info */}
          <div className="project-content reveal lg:w-1/3 w-full bg-black/40 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-3xl shadow-xl lg:sticky lg:top-24">
            <h3 className="text-3xl font-bold text-white mb-4">Tetris Game</h3>
            <p className="text-cyan-400 font-medium mb-6">Java Swing Implementation</p>
            <p className="text-gray-300 leading-relaxed mb-8">
              A classic Tetris implementation built from scratch. It features dynamic levels, increasing speed, a scoring and ranking board, as well as customizable controls and themes.
            </p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                Dynamic difficulty
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                Leaderboard system
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                Custom UI themes
              </li>
            </ul>
            <a 
              href="https://github.com/kiennguyentrung205" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full gap-3 bg-white text-black py-3 px-6 rounded-full font-bold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <GithubLogo size={20} />
              View on GitHub
            </a>
          </div>

          {/* Project Images Grid - Exhibition Masonry Layout */}
          <div className="lg:w-2/3 columns-1 sm:columns-2 gap-6 space-y-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <div 
                key={num} 
                className="project-image reveal break-inside-avoid rounded-2xl overflow-hidden shadow-2xl relative group"
              >
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 transition-colors duration-500 z-10 pointer-events-none"></div>
                <img 
                  src={`/pjgame${num}.jpg`} 
                  alt={`Tetris Screen ${num}`} 
                  className="w-full h-auto object-contain rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-white/0 group-hover:border-cyan-400/50 rounded-2xl transition-colors duration-500 z-20 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
