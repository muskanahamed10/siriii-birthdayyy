import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  { q: "Who is her best friend? ❤️", a: "Everyone ❤️", options: ["Vandyy", "Muskan", "Hasini", "Everyone ❤️"], caption: "One heart, one gang, endless memories ❤️" },
  { q: "What is her favorite thing to do with the gang? 🍔", a: "Eating together 🍔", options: ["Taking photos 📸", "Eating together 🍔", "Roasting friends 😂", "Shopping 🛍️"], caption: "Food tastes better when the gang is together 😋❤️" },
  { q: "Who usually starts the chaos in the group? 😆", a: "Hasini", options: ["Vandyy", "Muskan", "Joshitha", "Hasini"], caption: "The certified troublemaker 😂" },
  { q: "Who makes her laugh the most? 😂", a: "Muskan", options: ["Hasini", "Muskan", "Lasya", "Purnima"], caption: "Unlimited laughter guaranteed 🤣" },
  { q: "Who takes the most photos with her? 📸", a: "Dhatri", options: ["Joshitha", "Lekhya", "Dhatri", "Hasini"], caption: "Camera roll partners forever 📸" },
  { q: "Who knows most of her secrets? 🤫", a: "Vandyy", options: ["Vandyy", "Dhatri", "Jeevana", "Lasya"], caption: "Keeper of secrets ❤️" },
  { q: "Who is most likely to call her first on her birthday? 🎂", a: "Muskan", options: ["Vandyy", "Muskan", "Dhatri", "Joshitha"], caption: "The first birthday wish is always special ☎️" },
  { q: "Who is her favorite selfie partner? 🤳", a: "Hasini", options: ["Hasini", "Lekhya", "Muskan", "Lasya"], caption: "Selfie Queens Forever 👑" },
  { q: "Who would she choose for an all-day outing? 🌈", a: "Entire Gang ❤️", options: ["Vandyy", "Dhatri", "Muskan", "Entire Gang ❤️"], caption: "Every adventure is better together ❤️" },
  { q: "Who is her partner-in-crime? 😈", a: "Joshitha", options: ["Vandyy", "Joshitha", "Hasini", "Jeevana"], caption: "Double Trouble Activated 😆🔥" },
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
                  
                  <div className="w-full max-w-sm rounded-xl border-2 border-dashed border-primary/40 p-4 bg-black/20 mb-6 flex flex-col items-center justify-center">
                    <Camera className="w-10 h-10 text-primary/60 mb-3" />
                    <p className="text-center font-serif italic text-foreground/80">
                      {questions[currentQ].caption}
                    </p>
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
