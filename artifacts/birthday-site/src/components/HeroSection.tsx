import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToWelcome = () => {
    document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth" });
  };

  const words = "🎂 HAPPY BIRTHDAY 🎂".split(" ");

  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-secondary/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="z-10 flex flex-col items-center max-w-3xl mx-auto text-center space-y-10">
        
        {/* Photo Placeholder */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[200px] h-[200px] rounded-full border-2 border-dashed border-primary/60 flex flex-col items-center justify-center p-4"
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)"
          }}
        >
          <Camera className="w-8 h-8 text-primary mb-2 opacity-80" />
          <span className="text-sm font-medium text-foreground/80 text-center">Add Her Photo Here 📸</span>
        </motion.div>

        {/* Heading */}
        <div className="flex flex-wrap justify-center gap-x-4">
          {words.map((word, i) => (
            <motion.h1
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.8, ease: "easeOut" }}
              className="font-serif text-[clamp(2.5rem,8vw,6rem)] leading-tight font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
            >
              {word}
            </motion.h1>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-lg md:text-xl font-light italic text-foreground/90 max-w-lg"
        >
          To the most amazing friend from your crazy gang ❤️
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={scrollToWelcome}
            size="lg"
            className="rounded-full bg-primary/80 hover:bg-primary text-white border border-primary/50 shadow-[0_0_20px_rgba(200,50,150,0.4)] px-8 py-6 text-lg font-medium tracking-wide"
            style={{
              animation: "pulse 2s infinite"
            }}
          >
            ✨ Start The Journey ✨
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
