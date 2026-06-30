import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-black tracking-tighter"
            >
              <span className="text-primary">M</span>.Bahgat
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-background min-h-screen font-sans text-foreground">
        <Nav />
        <main>
          <Hero />
          <Clients />
          <About />
          <Stats />
          <Services />
          <Skills />
          <Process />
          <Projects />
          <Testimonials />
          <Certifications />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}