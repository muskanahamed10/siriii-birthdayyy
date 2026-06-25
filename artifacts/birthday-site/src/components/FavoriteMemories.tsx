import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const memories = [
  "One of our happiest days together ❤️",
  "A moment we will never forget ✨",
  "Endless laughter and memories 😂",
  "The gang that stays together ❤️"
];

export default function FavoriteMemories() {
  return (
    <section id="memories" className="py-24 px-4 z-10 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
        >
          Our Favorite Moments Together ❤️
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {memories.map((caption, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="rounded-[24px] p-5 flex flex-col"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,100,200,0.25)"
              }}
            >
              <div className="w-full aspect-[4/3] rounded-xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center bg-black/10 mb-5 relative overflow-hidden">
                <Camera className="w-10 h-10 text-primary/50 mb-2" />
                <span className="text-sm font-medium text-foreground/50">Add Photo</span>
                
                {/* Decorative corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/30 rounded-tl" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/30 rounded-tr" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/30 rounded-bl" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/30 rounded-br" />
              </div>
              <p className="font-serif text-lg text-center italic text-foreground/90 px-4">
                "{caption}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
