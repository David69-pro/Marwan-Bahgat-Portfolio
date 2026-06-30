import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CaseStudyHero from "@/components/ui/CaseStudyHero";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ProjectSmartTransport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen font-sans text-foreground">
      <Nav />
      <main>
        <CaseStudyHero 
          title="Smart Transport" 
          subtitle="Transportation Logistics Platform" 
          image="/images/smart-transport-hero.png" 
        />
        
        <section className="py-20 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Riders and drivers needed real-time coordination across complex urban routes. Existing solutions were fragmented, leading to high driver cancellation rates and frustrated users who couldn't accurately track their rides in dense city environments.
                </p>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A centralized dashboard and mobile application ecosystem that visualizes complex logistical data simply.
                </p>
                <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed space-y-2">
                  <li>High-contrast mapping interface designed for outdoor visibility.</li>
                  <li>Streamlined booking flow reducing steps from 7 to 3.</li>
                  <li>Driver dashboard with massive tap targets and voice-first interaction design.</li>
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold mb-4">Accessibility Focus</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Given the context of use—drivers operating vehicles, users standing in bright sunlight—accessibility wasn't an afterthought, it was the core requirement.
                </p>
                <div className="p-6 bg-card border border-border rounded-xl">
                  <h3 className="font-bold text-lg mb-2">Key Implementations:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>AAA contrast ratios for all critical actionable elements.</li>
                    <li>Minimum 48x48dp touch targets on the driver app.</li>
                    <li>Color-blind safe status indicators (relying on shape/iconography, not just color).</li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-8">
              <div className="p-8 bg-card border border-border rounded-2xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-1">Role</h3>
                    <p className="font-medium text-lg">Senior UX Designer</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-1">Timeline</h3>
                    <p className="font-medium text-lg">4 Months</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-1">Tools</h3>
                    <p className="font-medium text-lg">Figma, FigJam, Adobe XD</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-primary/10 border border-primary/20 rounded-2xl">
                <h3 className="text-xl font-bold text-primary mb-4">Results</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-primary/10 pb-2">
                    <span className="text-muted-foreground">Booking Completion</span>
                    <span className="font-bold text-foreground text-xl">+52%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">Driver Acceptance</span>
                    <span className="font-bold text-green-500 text-xl">+38%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Final Mockups</h2>
            </motion.div>
            <div className="aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden relative border border-border">
               <img src="/images/smart-transport-hero.png" alt="Smart Transport Dashboard UI" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}