import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { id: "v1", title: "Funny Videos 😂" },
  { id: "v2", title: "Birthday Clips 🎂" },
  { id: "v3", title: "Gang Memories 👯" },
  { id: "v4", title: "Short Reels 🎬" },
];

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
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-[20px] p-4 flex flex-col items-center group cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,100,200,0.2)"
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 20px rgba(255,100,200,0.2)",
                borderColor: "rgba(255,100,200,0.5)"
              }}
            >
              <div className="w-full aspect-video rounded-xl bg-black/40 border border-primary/20 flex flex-col items-center justify-center relative overflow-hidden mb-4 group-hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/40 flex items-center justify-center group-hover:bg-primary/40 group-hover:scale-110 transition-all">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
                <div className="absolute bottom-4 left-0 w-full text-center">
                  <span className="text-xs font-medium text-white/50 bg-black/40 px-3 py-1 rounded-full">
                    Upload your video here
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground/90">{vid.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
