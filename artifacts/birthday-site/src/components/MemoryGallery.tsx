import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import gang1 from "@assets/WhatsApp_Image_2026-06-25_at_9.56.26_AM_1782366331488.jpeg";
import gang2 from "@assets/WhatsApp_Image_2026-06-25_at_10.06.03_AM_1782366355050.jpeg";
import gang3 from "@assets/WhatsApp_Image_2026-06-25_at_10.06.05_AM_1782366383188.jpeg";
import gang4 from "@assets/WhatsApp_Image_2026-06-25_at_10.09.05_AM_1782366392950.jpeg";
import childhood1 from "@assets/WhatsApp_Image_2026-06-25_at_11.36.18_AM_1782368532046.jpeg";
import school1 from "@assets/WhatsApp_Image_2026-06-25_at_11.36.20_AM_1782368533864.jpeg";
import college1 from "@assets/WhatsApp_Image_2026-06-25_at_11.54.30_AM_1782368712765.jpeg";
import celebration1 from "@assets/WhatsApp_Image_2026-06-25_at_11.54.30_AM_(1)_1782368710734.jpeg";
import funny1 from "@assets/WhatsApp_Image_2026-06-25_at_12.02.35_PM_1782369407103.jpeg";

const gangPhotos = [
  { src: gang1, caption: "Temple visit with the gang 🙏" },
  { src: gang2, caption: "Fusion Foods outing — our kind of fun 🍔❤️" },
  { src: gang3, caption: "College selfie squad 📸" },
  { src: gang4, caption: "Uniform gang, unbreakable bond 💖" },
];

const galleryCategories = [
  { id: "childhood", title: "Childhood Photos 👶", photos: [{ src: childhood1, caption: "Little star at St. John's School 🌟" }] as typeof gangPhotos },
  { id: "school", title: "School Photos 🎒", photos: [{ src: school1, caption: "Good food, good days 😋" }] },
  { id: "college", title: "College Photos 🎓", photos: [{ src: college1, caption: "College days — the best chapter yet 🎓" }] },
  { id: "group", title: "Group Photos 👯", photos: gangPhotos },
  { id: "funny", title: "Funny Photos 😂", photos: [{ src: funny1, caption: "When the filter hits different 😂👀" }] },
  { id: "celebration", title: "Celebration Photos 🎊", photos: [{ src: celebration1, caption: "Celebrating her with cake and love 🎂❤️" }] },
];

type Category = typeof galleryCategories[0];

function Lightbox({ category, onClose }: { category: Category; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const hasPhotos = category.photos.length > 0;

  const prev = () => setCurrent(i => (i - 1 + category.photos.length) % category.photos.length);
  const next = () => setCurrent(i => (i + 1) % category.photos.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative max-w-2xl w-full rounded-[24px] overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(50,10,40,0.95), rgba(80,20,60,0.95))",
          border: "1px solid rgba(255,100,200,0.35)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.6), 0 0 50px rgba(255,100,200,0.15)"
        }}
        onClick={e => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 rounded-full text-white/70 hover:text-white hover:bg-white/15"
          onClick={onClose}
          data-testid="button-close-lightbox"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="p-6">
          <h3 className="font-serif text-2xl font-bold mb-4 text-primary text-center">
            {category.title}
          </h3>

          {hasPhotos ? (
            <>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4 bg-black">
                <motion.img
                  key={current}
                  src={category.photos[current].src}
                  alt={category.photos[current].caption}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {category.photos.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border border-white/30"
                      style={{ background: "rgba(200,50,150,0.6)", backdropFilter: "blur(4px)" }}
                      data-testid="button-lightbox-prev"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border border-white/30"
                      style={{ background: "rgba(200,50,150,0.6)", backdropFilter: "blur(4px)" }}
                      data-testid="button-lightbox-next"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </>
                )}
              </div>

              <p className="text-center text-foreground/80 font-serif italic mb-4">
                {category.photos[current].caption}
              </p>

              {category.photos.length > 1 && (
                <div className="flex gap-2 justify-center mb-4">
                  {category.photos.map((p, i) => (
                    <button key={i} onClick={() => setCurrent(i)}>
                      <img
                        src={p.src}
                        className={`w-14 h-10 object-cover rounded-lg border-2 transition-all ${i === current ? "border-primary scale-105" : "border-white/20 opacity-60"}`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-primary/40 flex flex-col items-center justify-center bg-black/30 mb-6">
              <Camera className="w-12 h-12 text-primary/70 mb-4 animate-pulse" />
              <p className="text-foreground/80 font-medium px-4 text-center">Upload your photos to see them here! 📸</p>
            </div>
          )}

          <Button
            className="w-full bg-primary/80 hover:bg-primary text-white rounded-xl"
            onClick={onClose}
            data-testid="button-close-gallery"
          >
            Close Gallery
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MemoryGallery() {
  const [selected, setSelected] = useState<Category | null>(null);

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
              onClick={() => setSelected(cat)}
              className="cursor-pointer rounded-[20px] p-4 flex flex-col items-center group"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: cat.photos.length > 0
                  ? "1px solid rgba(255,100,200,0.4)"
                  : "1px solid rgba(255,100,200,0.2)"
              }}
              data-testid={`card-gallery-${cat.id}`}
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 relative">
                {cat.photos.length > 0 ? (
                  <>
                    <img
                      src={cat.photos[0].src}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-2 right-2 bg-primary/80 text-white text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
                      {cat.photos.length} photos
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full border-2 border-dashed border-primary/30 flex flex-col items-center justify-center bg-black/10 group-hover:bg-primary/5 transition-colors rounded-xl">
                    <Camera className="w-8 h-8 text-primary/70 mb-2" />
                    <span className="text-sm font-medium text-foreground/60">Add Photos Here</span>
                  </div>
                )}
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground/90">{cat.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <Lightbox category={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
