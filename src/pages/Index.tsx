import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import ContactsSection from "@/components/ContactsSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <ContactsSection />
    </div>
  );
}
