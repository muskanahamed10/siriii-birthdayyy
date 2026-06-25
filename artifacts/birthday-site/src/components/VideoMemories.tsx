import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import vid1 from "@assets/WhatsApp_Video_2026-06-24_at_9.43.27_PM_1782365125453.mp4";
import vid2 from "@assets/WhatsApp_Video_2026-06-24_at_9.43.27_PM_(2)_1782365493553.mp4";
import vid5 from "@assets/WhatsApp_Video_2026-06-24_at_9.43.28_PM_1782368810411.mp4";
import vid6 from "@assets/WhatsApp_Video_2026-06-24_at_9.43.29_PM_1782368813253.mp4";
const videos = [
  { id: "v1", title: "Funny Videos 😂", src: vid1 },
  { id: "v2", title: "Gang Memories 👯", src: vid2 },
  { id: "v5", title: "Funny Videos 😂", src: vid5 },
  { id: "v6", title: "Funny Videos 😂", src: vid6 },
];

function VideoCard({ vid, index }: { vid: typeof videos[0]; index: number }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.play();
      setPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-[20px] p-4 flex flex-col group"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,100,200,0.2)"
      }}
      whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(255,100,200,0.25)" }}
      data-testid={`card-video-${vid.id}`}
    >
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-black">
        <video
          ref={ref}
          src={vid.src}
          className="w-full h-full object-cover"
          playsInline
          loop
          onEnded={() => setPlaying(false)}
          data-testid={`video-${vid.id}`}
        />
        <button
          onClick={toggle}
          className="absolute inset-0 flex items-center justify-center group/btn"
          data-testid={`button-play-${vid.id}`}
          style={{ background: playing ? "transparent" : "rgba(0,0,0,0.3)" }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-16 h-16 rounded-full flex items-center justify-center border-2 border-white/70 transition-opacity duration-300 ${playing ? "opacity-0 group-hover/btn:opacity-100" : "opacity-100"}`}
            style={{ background: "rgba(200,50,150,0.7)", backdropFilter: "blur(4px)" }}
          >
            {playing
              ? <Pause className="w-6 h-6 text-white" />
              : <Play className="w-6 h-6 text-white ml-1" />
            }
          </motion.div>
        </button>
      </div>
      <h3 className="font-serif text-xl font-medium text-foreground/90 text-center">
        {vid.title}
      </h3>
    </motion.div>
  );
}

export default function VideoMemories() {
  return (
    <section id="videos" className="py-24 px-4 z-10 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold mb-12 text-center text-primary"
        >
          Video Memories 🎥
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {videos.map((vid, index) => (
            <VideoCard key={vid.id} vid={vid} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
