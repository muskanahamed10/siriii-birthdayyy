import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import hasiniImg from "@assets/WhatsApp_Image_2026-06-25_at_11.49.05_AM_1782368377451.jpeg";
import selfieImg from "@assets/WhatsApp_Image_2026-06-25_at_12.10.19_PM_1782370368460.jpeg";
import gangOutingImg from "@assets/WhatsApp_Image_2026-06-25_at_10.42.29_AM_1782370371355.jpeg";
import photoBuddyImg from "@assets/WhatsApp_Image_2026-06-25_at_11.49.12_AM_(1)_1782370415142.jpeg";
import eatingImg from "@assets/WhatsApp_Image_2026-06-25_at_11.36.20_AM_(1)_1782370515512.jpeg";

const questions = [
  { q: "Who is her best friend? ❤️", a: "Everyone ❤️", options: ["Vandyy", "Muskan", "Hasini", "Everyone ❤️"], caption: "One heart, one gang, endless memories ❤️", photo: null as string | null },
  { q: "What is her favorite thing to do with the gang? 🍔", a: "Eating together 🍔", options: ["Taking photos 📸", "Eating together 🍔", "Roasting friends 😂", "Shopping 🛍️"], caption: "Food tastes better when the gang is together 😋❤️", photo: eatingImg },
  { q: "Who usually starts the chaos in the group? 😆", a: "Hasini", options: ["Vandyy", "Muskan", "Joshitha", "Hasini"], caption: "The certified troublemaker 😂", photo: hasiniImg },
  { q: "Who makes her laugh the most? 😂", a: "Muskan", options: ["Hasini", "Muskan", "Lasya", "Purnima"], caption: "Unlimited laughter guaranteed 🤣", photo: null },
  { q: "Who takes the most photos with her? 📸", a: "Dhatri", options: ["Joshitha", "Lekhya", "Dhatri", "Hasini"], caption: "Camera roll partners forever 📸", photo: photoBuddyImg },
  { q: "Who knows most of her secrets? 🤫", a: "Vandyy", options: ["Vandyy", "Dhatri", "Jeevana", "Lasya"], caption: "Keeper of secrets ❤️", photo: null },
  { q: "Who is most likely to call her first on her birthday? 🎂", a: "Muskan", options: ["Vandyy", "Muskan", "Dhatri", "Joshitha"], caption: "The first birthday wish is always special ☎️", photo: null },
  { q: "Who is her favorite selfie partner? 🤳", a: "Hasini", options: ["Hasini", "Lekhya", "Muskan", "Lasya"], caption: "Selfie Queens Forever 👑", photo: selfieImg },
  { q: "Who would she choose for an all-day outing? 🌈", a: "Entire Gang ❤️", options: ["Vandyy", "Dhatri", "Muskan", "Entire Gang ❤️"], caption: "Every adventure is better together ❤️", photo: gangOutingImg },
  { q: "Who is her partner-in-crime? 😈", a: "Joshitha", options: ["Vandyy", "Joshitha", "Hasini", "Jeevana"], caption: "Double Trouble Activated 😆🔥", photo: null },
];

export default function FriendshipQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);

  const handleSelect = (opt: string) => {
    if (status === "correct") return;
    setSelectedOpt(opt);
    if (opt === questions[currentQ].a) {
      setStatus("correct");
    } else {
      setStatus("wrong");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(prev => prev + 1);
      setStatus("idle");
      setSelectedOpt(null);
    }
  };

  const isCompleted = currentQ === questions.length - 1 && status === "correct";

  return (
    <section id="quiz" className="py-24 px-4 z-10 relative">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary"
        >
          How Well Do You Know Her? 🧠
        </motion.h2>

        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-foreground/70 mb-2">
            <span>Question {currentQ + 1} of {questions.length}</span>
            <span>{Math.round(((currentQ) / questions.length) * 100)}%</span>
          </div>
          <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: `${(currentQ / questions.length) * 100}%` }}
              animate={{ width: `${((status === "correct" ? currentQ + 1 : currentQ) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="rounded-[24px] p-6 md:p-10"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,100,200,0.25)"
            }}
          >
            <h3 className="text-xl md:text-2xl font-medium mb-8 text-center leading-snug">
              {questions[currentQ].q}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQ].options.map((opt) => (
                <Button
                  key={opt}
                  variant="outline"
                  className={`h-auto py-4 text-base font-medium rounded-xl transition-all duration-300 border-primary/30
                    ${status === "correct" && opt === questions[currentQ].a ? "bg-green-500/20 border-green-500 text-green-300 hover:bg-green-500/30" : ""}
                    ${status === "wrong" && selectedOpt === opt ? "bg-red-500/20 border-red-500 text-red-300 hover:bg-red-500/30" : ""}
                    ${status === "idle" ? "hover:bg-primary/20 hover:border-primary" : ""}
                  `}
                  onClick={() => handleSelect(opt)}
                  disabled={status === "correct"}
                >
                  {opt}
                </Button>
              ))}
            </div>

            <AnimatePresence>
              {status === "wrong" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-center text-red-400 font-medium"
                >
                  ❌ Wrong Answer! Try Again
                </motion.div>
              )}

              {status === "correct" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-8 flex flex-col items-center"
                >
                  <p className="text-green-400 font-bold text-lg mb-6 drop-shadow-md">🎉 Correct Answer!</p>

                  <div className="w-full max-w-sm rounded-xl overflow-hidden mb-6"
                    style={{ border: "1px solid rgba(255,100,200,0.35)" }}
                  >
                    {questions[currentQ].photo ? (
                      <div className="relative">
                        <img
                          src={questions[currentQ].photo as string}
                          alt="Answer reveal"
                          className="w-full object-cover"
                          style={{ maxHeight: "260px" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <p className="absolute bottom-3 left-0 w-full text-center font-serif italic text-white drop-shadow-lg px-4">
                          {questions[currentQ].caption}
                        </p>
                      </div>
                    ) : (
                      <div className="p-4 bg-black/20 flex flex-col items-center justify-center py-8">
                        <Camera className="w-10 h-10 text-primary/60 mb-3" />
                        <p className="text-center font-serif italic text-foreground/80">
                          {questions[currentQ].caption}
                        </p>
                      </div>
                    )}
                  </div>

                  {!isCompleted ? (
                    <Button 
                      onClick={handleNext}
                      className="bg-primary hover:bg-primary/80 text-white rounded-full px-8 shadow-[0_0_15px_rgba(200,50,150,0.5)]"
                    >
                      Next Question ✨
                    </Button>
                  ) : (
                    <p className="text-xl font-serif font-bold text-primary mt-4">You know her perfectly! ❤️</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
