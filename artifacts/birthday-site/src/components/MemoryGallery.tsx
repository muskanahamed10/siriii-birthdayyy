import { motion, AnimatePresence } from "framer-motion";
import { Camera, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const galleryCategories = [
  { id: "childhood", title: "Childhood Photos 👶" },
  { id: "school", title: "School Photos 🎒" },
  { id: "college", title: "College Photos 🎓" },
  { id: "group", title: "Group Photos 👯" },
  { id: "funny", title: "Funny Photos 😂" },
  { id: "celebration", title: "Celebration Photos 🎊" },
];

export default function MemoryGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-4 z-10 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold mb-12 text-center text-primary drop-shadow-[0_0_10px_rgba(255,100,200,0.3)]"
        >
          Our Memories Together 📸
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedCategory(cat.title)}
              className="cursor-pointer rounded-[20px] p-4 flex flex-col items-center group"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,100,200,0.2)"
              }}
            >
              <div className="w-full aspect-square rounded-xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center mb-4 bg-black/10 group-hover:bg-primary/5 transition-colors">
                <Camera className="w-8 h-8 text-primary/70 mb-2" />
                <span className="text-sm font-medium text-foreground/60">Add Photos Here</span>
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground/90">{cat.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(8px)"
            }}
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="max-w-md w-full rounded-[24px] p-8 text-center relative"
              style={{
                background: "linear-gradient(135deg, rgba(50,10,40,0.9), rgba(80,20,60,0.9))",
                border: "1px solid rgba(255,100,200,0.3)",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 40px rgba(255,100,200,0.2)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4 rounded-full text-foreground/70 hover:text-white hover:bg-white/10"
                onClick={() => setSelectedCategory(null)}
              >
                <X className="w-5 h-5" />
              </Button>
              
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">{selectedCategory}</h3>
              
              <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-primary/40 flex flex-col items-center justify-center bg-black/30 mb-6">
                <Camera className="w-12 h-12 text-primary/70 mb-4 animate-pulse" />
                <p className="text-foreground/80 font-medium px-4">Upload your photos to see them here! 📸</p>
              </div>
              
              <Button 
                className="w-full bg-primary/80 hover:bg-primary text-white rounded-xl"
                onClick={() => setSelectedCategory(null)}
              >
                Close Gallery
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
