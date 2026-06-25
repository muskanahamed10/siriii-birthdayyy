import FloatingElements from "@/components/FloatingElements";
import HeroSection from "@/components/HeroSection";
import WelcomeMessage from "@/components/WelcomeMessage";
import MemoryTimeline from "@/components/MemoryTimeline";
import MemoryGallery from "@/components/MemoryGallery";
import FriendMessages from "@/components/FriendMessages";
import FriendshipQuiz from "@/components/FriendshipQuiz";
import VideoMemories from "@/components/VideoMemories";
import FavoriteMemories from "@/components/FavoriteMemories";
import SurpriseSection from "@/components/SurpriseSection";
import MusicControl from "@/components/MusicControl";

export default function Home() {
  return (
    <main className="min-h-screen relative w-full overflow-hidden text-foreground">
      {/* The base gradient background is defined in index.css body */}
      
      <FloatingElements />
      
      <div className="relative z-10">
        <HeroSection />
        <WelcomeMessage />
        <MemoryTimeline />
        <MemoryGallery />
        <FriendMessages />
        <FriendshipQuiz />
        <VideoMemories />
        <FavoriteMemories />
        <SurpriseSection />
      </div>

      <MusicControl />
    </main>
  );
}
