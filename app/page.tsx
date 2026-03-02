import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import Features from "@/components/sections/Features";
import Comparison from "@/components/sections/Comparison";
import Courses from "@/components/sections/Courses";
import Syllabus from "@/components/sections/Syllabus";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import FloatingCTA from "@/components/sections/FloatingCTA";
import Header from "@/components/Navigation";
import Footer from "@/components/Footer";
import LiveNotification from "@/components/sections/LiveNotification";
import TestimonialVideos from "@/components/sections/TestimonialVideos";
import PastEventsGallery from "@/components/sections/PastEventsGallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <LiveNotification />
      <Hero />
      <TrustBadges />
      <Features />
      <Comparison />
      <Courses />
      <Syllabus />
      <TestimonialVideos />
      {/* <Testimonials /> */}
      <PastEventsGallery />
      <FAQ />
      {/* <FinalCTA /> */}

      {/* <FloatingCTA /> */}
      {/* <Footer /> */}
    </div>
  );
}
