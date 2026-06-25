import { motion } from "framer-motion";
import { useState } from "react";
import gangImg from "@assets/WhatsApp_Image_2026-06-25_at_10.06.05_AM_1782366383188.jpeg";

const messages = [
  { name: "Vandyy", gradient: "from-pink-500 to-rose-400", message: "Happy Birthday! You are my favourite secret-keeper and my forever person.\nThank you for all the laughs — stay happy, stay strong, keep shining always. ❤️" },
  { name: "Muskan", gradient: "from-purple-500 to-fuchsia-400", message: "Happy Birthday! Life genuinely became more fun the day you walked into it.\nWishing you happiness, success, and countless unforgettable memories ahead. 🎉" },
  { name: "Hasini", gradient: "from-rose-400 to-pink-600", message: "Happy Birthday! That smile of yours could brighten even the cloudiest day.\nThank you for being such an amazing, warm and beautiful friend. 💕" },
  { name: "Jeevana", gradient: "from-fuchsia-500 to-purple-500", message: "Happy Birthday! May every single day of this new year bring you pure joy.\nWishing you endless adventures, success, and wonderful surprises. 🎂" },
  { name: "Dhatri", gradient: "from-pink-400 to-rose-500", message: "Happy Birthday! You make even the ordinary moments feel extraordinary.\nThank you for always being there and for making every memory special. 🌸" },
  { name: "Joshitha", gradient: "from-violet-500 to-fuchsia-500", message: "Happy Birthday! My partner in crime and the chaos to my calm — love you!\nKeep smiling, keep shining, and keep being your wonderfully wild self. 💖" },
  { name: "Lekhya", gradient: "from-rose-500 to-pink-500", message: "Happy Birthday! You deserve every beautiful thing this world has to offer.\nAll the happiness, love and success in the world is truly yours today. 🎁" },
  { name: "Purnima", gradient: "from-fuchsia-400 to-purple-600", message: "Happy Birthday! Every memory we share together is something I cherish deeply.\nThank you for all the laughter, friendship and love — here's to many more. 🎊" },
  { name: "Lasya", gradient: "from-pink-500 to-purple-500", message: "Happy Birthday! Your energy and kindness make our gang so much brighter.\nWishing you endless joy, love, happiness and success always. ✨" },
  { name: "Varshitha", gradient: "from-violet-400 to-pink-500", message: "Happy Birthday! You are one of the most special people in our little gang.\nMay this year bring you everything your heart has ever wished for. 🌟" },
];

function FlipCard({ friend, index }: { friend: typeof messages[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative h-64 w-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
      data-testid={`card-friend-${friend.name.toLowerCase()}`}
    >
      <motion.div
        className="w-full h-full relative rounded-[20px]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className={`absolute w-full h-full rounded-[20px] p-6 flex flex-col items-center justify-center bg-gradient-to-br ${friend.gradient} shadow-lg border border-white/20`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
            <span className="text-2xl">❤️</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white text-center drop-shadow-md">
            {friend.name}
          </h3>
          <p className="text-white/80 text-sm mt-4 italic">Tap to read message</p>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full rounded-[20px] p-5 flex flex-col items-center justify-center overflow-hidden"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,100,200,0.3)",
          }}
        >
          <p className="text-foreground/90 font-sans text-center leading-relaxed font-medium text-sm" style={{ whiteSpace: "pre-line" }}>
            {friend.message}
          </p>
          <div className="absolute -bottom-4 -right-4 text-6xl opacity-10">✨</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FriendMessages() {
  return (
    <section id="messages" className="py-24 px-4 z-10 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold mb-6 text-center text-primary"
        >
          Messages From Your Gang 💌
        </motion.h2>

        {/* Gang photo banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[20px] overflow-hidden mb-12 mx-auto max-w-3xl"
          style={{
            border: "1px solid rgba(255,100,200,0.35)",
            boxShadow: "0 0 40px rgba(255,100,200,0.15)"
          }}
        >
          <img
            src={gangImg}
            alt="The whole gang together"
            className="w-full object-cover"
            style={{ maxHeight: "280px", objectPosition: "top" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(40,5,50,0.85) 0%, rgba(40,5,50,0.1) 60%, transparent 100%)"
            }}
          />
          <div className="absolute bottom-4 left-0 w-full text-center">
            <p className="font-serif text-white text-lg italic drop-shadow-lg">
              One gang. One heart. Always together. ❤️
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {messages.map((friend, index) => (
            <FlipCard key={friend.name} friend={friend} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
