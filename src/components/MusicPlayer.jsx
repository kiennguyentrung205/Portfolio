import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  const togglePlay = () => setIsPlaying(!isPlaying)
  const skipForward = () => { audioRef.current.currentTime += 10 }
  const skipBack = () => { audioRef.current.currentTime -= 10 }

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw]">
      <div className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg shadow-black/50 hover:bg-white/10 transition-colors">
        
        {/* Vinyl Cover */}
        <div className={`w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full overflow-hidden border-2 border-cyan-500/50 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
          <img src={`${import.meta.env.BASE_URL}blue.jpg`} alt="Cover" className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div className="flex flex-col min-w-[80px] sm:min-w-[120px]">
          <span className="text-xs sm:text-sm font-semibold text-white tracking-wide truncate">yung kai</span>
          <span className="text-[10px] sm:text-xs text-cyan-400 truncate">blue</span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 sm:gap-3">
          <button onClick={skipBack} className="p-1 sm:p-2 text-gray-300 hover:text-white transition-colors">
            <SkipBack size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button 
            onClick={togglePlay} 
            className="p-2 sm:p-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full transition-transform hover:scale-110 active:scale-95"
          >
            {isPlaying ? <Pause size={18} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" /> : <Play size={18} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />}
          </button>
          <button onClick={skipForward} className="p-1 sm:p-2 text-gray-300 hover:text-white transition-colors">
            <SkipForward size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Hidden Audio Element */}
        <audio ref={audioRef} src={`${import.meta.env.BASE_URL}blue.mp3`} loop />
      </div>
    </div>
  )
}
