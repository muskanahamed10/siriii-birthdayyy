import { motion } from "framer-motion";
import mem1 from "@assets/WhatsApp_Image_2026-06-25_at_10.06.03_AM_1782367450568.jpeg";
import mem2 from "@assets/WhatsApp_Image_2026-06-25_at_11.37.10_AM_(1)_1782368306131.jpeg";
import mem3 from "@assets/WhatsApp_Image_2026-06-25_at_11.37.08_AM_(1)_1782368311293.jpeg";
import mem4 from "@assets/WhatsApp_Image_2026-06-25_at_11.37.06_AM_(1)_1782368315824.jpeg";
import mem5 from "@assets/WhatsApp_Image_2026-06-25_at_11.37.07_AM_(1)_1782368320864.jpeg";
import mem6 from "@assets/WhatsApp_Image_2026-06-25_at_11.37.09_AM_(1)_1782368326264.jpeg";

const memories = [
  { src: mem1, caption: "One of our happiest days together ❤️" },
  { src: mem2, caption: "A moment we will never forget ✨" },
  { src: mem3, caption: "Endless laughter and memories 😂" },
  { src: mem4, caption: "The gang that studies together, stays together 📚" },
  { src: mem5, caption: "The gang that stays together ❤️" },
  { src: mem6, caption: "Beautiful souls, beautiful memories 🌸" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-[24px] overflow-hidden flex flex-col"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,100,200,0.25)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)"
              }}
              data-testid={`card-memory-${index}`}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={memory.src}
                  alt={memory.caption}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(40,5,50,0.7) 0%, transparent 60%)"
                  }}
                />
              </div>
              <div className="p-4">
                <p className="font-serif text-base text-center italic text-foreground/90">
                  "{memory.caption}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
