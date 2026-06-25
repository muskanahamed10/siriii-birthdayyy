import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function SurpriseSection() {
  const [isOpen, setIsOpen] = useState(false);

  const friends = ["Vandyy", "Muskan", "Hasini", "Jeevana", "Dhatri", "Joshitha", "Lekhya", "Purnima", "Lasya", "Varshitha"];

  return (
    <section id="surprise" className="py-32 px-4 z-10 relative overflow-hidden">
      {/* Intense glow background for this section */}
      <div className="absolute inset-0 bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-2xl bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-20">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Button
            onClick={() => setIsOpen(true)}
            className="h-auto py-8 px-12 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-2 border-white/20 shadow-[0_0_40px_rgba(255,100,200,0.6)] text-xl md:text-2xl font-bold tracking-wide"
            style={{
              animation: isOpen ? "none" : "pulse 2s infinite"
            }}
          >
            🎁 Open Your Birthday Surprise 🎁
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{
              background: "rgba(20,5,20,0.95)",
              backdropFilter: "blur(20px)"
            }}
          >
            {/* Fireworks / Intense Confetti effect */}
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={`fw-${i}`}
                initial={{ 
                  x: "50vw", y: "50vh", 
                  opacity: 1, scale: 0 
                }}
                animate={{ 
                  x: `${50 + (Math.random() * 100 - 50)}vw`, 
                  y: `${50 + (Math.random() * 100 - 50)}vh`,
                  opacity: 0,
                  scale: Math.random() * 2 + 1
                }}
                transition={{ 
                  duration: 1.5 + Math.random(), 
                  ease: "easeOut",
                }}
                className="absolute w-3 h-3 rounded-full pointer-events-none"
                style={{
                  backgroundColor: ["#FF69B4", "#DA70D6", "#9370DB", "#BA55D3", "#FFF"][Math.floor(Math.random() * 5)],
                  boxShadow: "0 0 10px currentColor"
                }}
              />
            ))}

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300, delay: 0.2 }}
              className="max-w-2xl w-full rounded-[30px] p-8 md:p-12 relative text-center overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,100,200,0.4)",
                boxShadow: "0 30px 60px -12px rgba(255,100,200,0.3), inset 0 0 20px rgba(255,255,255,0.1)"
              }}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4 rounded-full text-white/70 hover:text-white hover:bg-white/10 z-10"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6" />
              </Button>

              <div className="relative z-10 space-y-6 font-serif text-lg md:text-xl text-white leading-relaxed font-light">
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                  className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 mb-8"
                >
                  Dear Friend ❤️
                </motion.h3>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                  Thank you for being such an important part of our lives.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
                  Every memory with you is special. Every laugh is unforgettable. Every moment spent together becomes a cherished memory.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}>
                  No matter where life takes us, you will always be a part of our gang and our hearts.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }} className="font-bold text-2xl text-pink-300 mt-8">
                  Happy Birthday ❤️
                </motion.p>
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.5 }} className="pt-6 border-t border-white/20 mt-8">
                  <p className="text-sm md:text-base text-white/80 italic mb-4">Love,</p>
                  <p className="text-sm md:text-base text-primary font-sans font-medium leading-loose">
                    {friends.join(" • ")}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ delay: 7, duration: 1 }}
                  className="mt-12 pt-8"
                >
                  <span className="inline-block py-3 px-6 rounded-full bg-white/5 border border-primary/30 text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    ✨ Forever Friends. Forever Memories. Forever Us. ❤️ ✨
                  </span>
                </motion.div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
