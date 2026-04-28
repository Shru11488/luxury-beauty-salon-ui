import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import CarouselStrip from "@/components/sections/CarouselStrip";
import Categories from "@/components/sections/Categories";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/sections/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CarouselStrip />
      <Categories />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
