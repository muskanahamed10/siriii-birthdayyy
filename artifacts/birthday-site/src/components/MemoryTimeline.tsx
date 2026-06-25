import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const timelineSlides = [
  { id: 1, title: "Childhood Photo 📷", caption: "The beginning of a beautiful story 🌟" },
  { id: 2, title: "School Days Photo 📷", caption: "Making memories and collecting dreams 📚" },
  { id: 3, title: "Teenage Years Photo 📷", caption: "Growing stronger, brighter and more beautiful every day 💖" },
  { id: 4, title: "Recent Photo 📷", caption: "The wonderful person we all love today ❤️" },
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
                    <div className="w-full aspect-[3/2] rounded-xl border-2 border-dashed border-primary/40 flex flex-col items-center justify-center mb-6 bg-black/20">
                      <Camera className="w-10 h-10 text-primary mb-3 opacity-70" />
                      <span className="font-medium text-foreground/80">{slide.title}</span>
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
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "bg-primary w-8" : "bg-primary/30"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
