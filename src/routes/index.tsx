import { AboutMeSection } from '@/components/Sections/AboutMeSection';
import { ContactSection } from '@/components/Sections/ContactSection';
import { ExperienceSection } from '@/components/Sections/ExperienceSection';
import { HeroSection } from '@/components/Sections/HeroSection';
import { SkillsSection } from '@/components/Sections/SkillsSection';
import { WorkSection } from '@/components/Sections/WorkSection';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <WorkSection />
      <ExperienceSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </>
  );
}
