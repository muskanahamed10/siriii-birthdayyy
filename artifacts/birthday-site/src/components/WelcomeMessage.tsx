import { motion } from "framer-motion";

export default function WelcomeMessage() {
  return (
    <section id="welcome" className="min-h-screen flex items-center justify-center py-20 px-4 z-10 relative">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full p-8 md:p-12 rounded-[20px] shadow-xl"
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,100,200,0.25)"
        }}
      >
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-center text-primary drop-shadow-[0_0_15px_rgba(255,100,200,0.5)]">
          Dear Birthday Girl ❤️
        </h2>
        
        <div className="space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed font-light font-sans text-center">
          <p>
            Today is a very special day because the world got a little brighter, a little louder, and a lot more fun when you were born.
          </p>
          <p>
            We wanted to do something different this year. Something that captures all the crazy moments, the endless laughter, and the beautiful bond we share. This little digital space is just for you.
          </p>
          <p>
            Take your time, scroll through the memories, and remember how much you are loved.
          </p>
          <p className="font-medium text-primary mt-8">
            Happy Birthday! Let the celebration begin! 🥂
          </p>
        </div>
      </motion.div>
    </section>
  );
}
