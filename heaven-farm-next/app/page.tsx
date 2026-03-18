import HeroSection from "@/components/home/HeroSection";
import ValuePropositions from "@/components/home/ValuePropositions";
import AboutSection from "@/components/home/AboutSection";
import CategorySection from "@/components/home/CategorySection";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuePropositions />
      <AboutSection />
      <CategorySection />
      <Testimonials />
      <ContactSection />
    </>
  );
}
