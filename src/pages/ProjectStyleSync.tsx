import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CaseStudyHero from "@/components/ui/CaseStudyHero";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ProjectStyleSync() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen font-sans text-foreground">
      <Nav />
      <main>
        <CaseStudyHero 
          title="StyleSync" 
          subtitle="Luxury Fashion E-commerce App" 
          image="/images/stylesync-hero.png" 
        />
        
        <section className="py-20 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  StyleSync is a premium mobile application designed for luxury fashion enthusiasts. The platform needed to balance high-end aesthetics with seamless e-commerce functionality, ensuring that the shopping experience felt as curated and exclusive as the products themselves.
                </p>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold mb-4">Goals & Challenges</h2>
                <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed space-y-2">
                  <li>Reduce cart abandonment during the multi-step checkout process.</li>
                  <li>Create a visual language that communicates "luxury" without being overly stark.</li>
                  <li>Implement personalized style recommendations based on user browsing habits.</li>
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold mb-4">Research & Personas</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Conducted user interviews with 15 frequent luxury shoppers to understand their pain points. Key findings indicated that users desired high-resolution imagery, detailed fabric composition, and a frictionless way to save items for later.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-card border border-border rounded-xl">
                    <h3 className="font-bold text-lg mb-2">Persona 1: The Trendsetter</h3>
                    <p className="text-sm text-muted-foreground">Values speed, exclusive drops, and highly visual browsing.</p>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-xl">
                    <h3 className="font-bold text-lg mb-2">Persona 2: The Investor</h3>
                    <p className="text-sm text-muted-foreground">Values detail, authenticity verification, and careful consideration.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-8">
              <div className="p-8 bg-card border border-border rounded-2xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-1">Role</h3>
                    <p className="font-medium text-lg">Lead UX/UI Designer</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-1">Timeline</h3>
                    <p className="font-medium text-lg">3 Months</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-1">Tools</h3>
                    <p className="font-medium text-lg">Figma, FigJam, Illustrator</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-primary/10 border border-primary/20 rounded-2xl">
                <h3 className="text-xl font-bold text-primary mb-4">Impact</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-primary/10 pb-2">
                    <span className="text-muted-foreground">User Engagement</span>
                    <span className="font-bold text-foreground text-xl">+47%</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-primary/10 pb-2">
                    <span className="text-muted-foreground">Cart Abandonment</span>
                    <span className="font-bold text-green-500 text-xl">-23%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">Session Duration</span>
                    <span className="font-bold text-foreground text-xl">+35%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Design System & UI</h2>
              <p className="text-lg text-muted-foreground">
                Developed a dark-mode first design system focusing on deep contrasts to make product photography pop. Accessibility was maintained through strict color contrast checks.
              </p>
            </motion.div>
            
            {/* Visual placeholder for UI elements */}
            <div className="aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden relative border border-border">
               <img src="/images/stylesync-hero.png" alt="StyleSync UI Design" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}