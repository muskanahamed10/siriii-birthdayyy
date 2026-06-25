import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import childhood from "@assets/WhatsApp_Image_2026-06-24_at_6.45.31_PM_1782363440297.jpeg";
import school from "@assets/WhatsApp_Image_2026-06-24_at_6.45.32_PM_1782363461002.jpeg";
import teenage from "@assets/WhatsApp_Image_2026-06-24_at_6.52.23_PM_1782363519001.jpeg";
import recent from "@assets/WhatsApp_Image_2026-06-25_at_12.46.48_AM_1782363526544.jpeg";

const timelineSlides = [
  { id: 1, title: "Childhood 🌟", caption: "The beginning of a beautiful story 🌟", image: childhood },
  { id: 2, title: "School Days 📚", caption: "Making memories and collecting dreams 📚", image: school },
  { id: 3, title: "Teenage Years 💖", caption: "Growing stronger, brighter and more beautiful every day 💖", image: teenage },
  { id: 4, title: "Today ❤️", caption: "The wonderful person we all love today ❤️", image: recent },
];

export default function MemoryTimeline() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="timeline" className="py-24 px-4 z-10 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          A Journey of Beautiful Years ✨
        </h2>

        <div className="relative">
          <div className="overflow-hidden px-4 md:px-12" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {timelineSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_60%] lg:flex-[0_0_50%] pl-4 pr-4 transition-opacity duration-300"
                  style={{ opacity: selectedIndex === index ? 1 : 0.5 }}
                >
                  <div
                    className="rounded-[20px] p-6 flex flex-col items-center"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,100,200,0.25)"
                    }}
                  >
                    <div className="w-full aspect-[3/2] rounded-xl overflow-hidden mb-6 relative">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        style={{ filter: "brightness(0.95) saturate(1.1)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="text-white/90 font-serif text-sm font-semibold drop-shadow-md">
                          {slide.title}
                        </span>
                      </div>
                    </div>
                    <p className="text-center font-serif text-lg text-foreground/90 italic">
                      {slide.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-background/50 backdrop-blur-md border border-primary/30 hover:bg-primary/20"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 bg-background/50 backdrop-blur-md border border-primary/30 hover:bg-primary/20"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {timelineSlides.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "bg-primary w-8" : "bg-primary/30 w-2.5"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
