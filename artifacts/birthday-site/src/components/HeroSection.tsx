import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/WhatsApp_Image_2026-06-24_at_6.56.04_PM_1782363612617.jpeg";

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
      {/* Full-screen background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Birthday Girl"
          className="w-full h-full object-cover object-top"
        />
        {/* Dark pink-purple gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(40,5,50,0.55) 0%, rgba(80,10,70,0.65) 40%, rgba(20,5,40,0.85) 100%)"
          }}
        />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-[1]" />

      <div className="z-10 flex flex-col items-center max-w-3xl mx-auto text-center space-y-10">

        {/* Heading */}
        <div className="flex flex-wrap justify-center gap-x-4">
          {words.map((word, i) => (
            <motion.h1
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8, ease: "easeOut" }}
              className="font-serif text-[clamp(2.5rem,8vw,6rem)] leading-tight font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300"
              style={{ textShadow: "0 0 40px rgba(255,100,200,0.4)" }}
            >
              {word}
            </motion.h1>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-2xl font-light italic text-white/90 max-w-lg drop-shadow-lg"
        >
          To the most amazing friend from your crazy gang ❤️
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={scrollToWelcome}
            size="lg"
            className="rounded-full bg-primary/80 hover:bg-primary text-white border border-primary/50 shadow-[0_0_30px_rgba(200,50,150,0.5)] px-8 py-6 text-lg font-medium tracking-wide"
            style={{ animation: "pulse 2s infinite" }}
            data-testid="button-start-journey"
          >
            ✨ Start The Journey ✨
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
