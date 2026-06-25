import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heartEmojis = ["💖", "💗", "💕", "💞", "💓", "💘"];
const balloonEmojis = ["🎈", "🎈", "🎈"];

export default function FloatingElements() {
  const [hearts, setHearts] = useState<{ id: number; x: number; delay: number; duration: number; size: number; emoji: string }[]>([]);
  const [balloons, setBalloons] = useState<{ id: number; x: number; delay: number; duration: number; emoji: string }[]>([]);
  const [confetti, setConfetti] = useState<{ id: number; x: number; delay: number; duration: number; color: string }[]>([]);

  useEffect(() => {
    // Generate hearts
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 10,
      size: 12 + Math.random() * 16,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
    }));
    setHearts(newHearts);

    // Generate balloons
    const newBalloons = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      emoji: balloonEmojis[0],
    }));
    setBalloons(newBalloons);

    // Generate confetti
    const colors = ["#FF69B4", "#DA70D6", "#9370DB", "#BA55D3", "#FFB6C1"];
    const newConfetti = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 7,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={`heart-${heart.id}`}
            initial={{ y: "110vh", opacity: 0, x: `${heart.x}vw` }}
            animate={{
              y: "-10vh",
              opacity: [0, 0.8, 0.8, 0],
              x: [`${heart.x}vw`, `${heart.x - 5}vw`, `${heart.x + 5}vw`, `${heart.x}vw`],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              fontSize: `${heart.size}px`,
            }}
          >
            {heart.emoji}
          </motion.div>
        ))}

        {balloons.map((balloon) => (
          <motion.div
            key={`balloon-${balloon.id}`}
            initial={{ y: "110vh", opacity: 0, x: `${balloon.x}vw` }}
            animate={{
              y: "-20vh",
              opacity: [0, 0.9, 0.9, 0],
              x: [`${balloon.x}vw`, `${balloon.x + 8}vw`, `${balloon.x - 4}vw`, `${balloon.x + 4}vw`],
            }}
            transition={{
              duration: balloon.duration,
              delay: balloon.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              fontSize: "32px",
            }}
          >
            {balloon.emoji}
          </motion.div>
        ))}

        {confetti.map((dot) => (
          <motion.div
            key={`confetti-${dot.id}`}
            initial={{ y: "-10vh", opacity: 0, x: `${dot.x}vw` }}
            animate={{
              y: "110vh",
              opacity: [0, 1, 1, 0],
              rotate: [0, 360],
              x: [`${dot.x}vw`, `${dot.x - 2}vw`, `${dot.x + 2}vw`],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              width: "6px",
              height: "6px",
              backgroundColor: dot.color,
              borderRadius: "50%",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
