import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Dribbble, Figma } from "lucide-react";

export default function Hero() {
  const [role, setRole] = useState("Product Designer");
  const roles = ["Product Designer", "UI/UX Designer", "Brand Thinker"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRole((current) => {
        const currentIndex = roles.indexOf(current);
        return roles[(currentIndex + 1) % roles.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[100px] mix-blend-screen"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-secondary-foreground">Available for Freelance & Full-time</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6"
          >
            Marwan Bahgat
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="h-12 md:h-16 lg:h-20 mb-6"
          >
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground flex items-center gap-4">
              I am a <span className="text-primary">{role}</span>
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            Designing intuitive digital experiences that connect user needs with business goals. Not just competent — visionary.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full text-center hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
            >
              View My Work
            </a>
            <a 
              href="/resume.pdf" 
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground border border-border font-semibold rounded-full text-center hover:bg-secondary/80 transition-all hover:scale-105 active:scale-95"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Social Links */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="absolute left-6 bottom-1/4 hidden lg:flex flex-col gap-6 z-20"
      >
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-full"><Linkedin className="w-5 h-5" /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-full"><Dribbble className="w-5 h-5" /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-full"><Figma className="w-5 h-5" /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-full"><Github className="w-5 h-5" /></a>
        <div className="w-px h-24 bg-border mx-auto mt-4" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}