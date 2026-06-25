import { useState, useRef } from "react";
import { Music, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Handle promise to avoid uncaught play errors
        audioRef.current.play().catch(e => console.log("Audio play blocked:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio 
        ref={audioRef} 
        src="" // Placeholder: Add actual music file path here
        loop 
      />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={togglePlay}
            size="icon"
            className="w-14 h-14 rounded-full bg-primary/80 hover:bg-primary text-white shadow-[0_0_20px_rgba(200,50,150,0.5)] border border-white/20 backdrop-blur-md transition-transform hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Music className="w-6 h-6" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-black/80 border-primary/50 text-white">
          <p>Add your song file path to the audio src attribute in MusicControl.tsx</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
