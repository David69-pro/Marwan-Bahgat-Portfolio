import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CaseStudyHero from "@/components/ui/CaseStudyHero";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ProjectDigilians() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen font-sans text-foreground">
      <Nav />
      <main>
        <CaseStudyHero 
          title="Digilians" 
          subtitle="Cross-Device File Transfer Platform" 
          image="/images/digilians-hero.png" 
        />
        
        <section className="py-20 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold mb-4">The Highlight</h2>
                <p className="text-xl font-medium text-primary leading-relaxed mb-4">
                  Zero friction. No login. No cables. No accounts.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Users transfer files between any device using a secure five-character code. The challenge was making a deeply technical action feel magically simple while maintaining absolute security confidence.
                </p>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold mb-4">Information Architecture & Flows</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We mapped out the fragmented device ecosystem (iOS to Windows, Android to Mac) and designed a universal web interface that adapts perfectly across all viewports.
                </p>
                <div className="p-6 bg-secondary/50 rounded-xl border border-border">
                  <p className="font-mono text-sm mb-2 text-primary">// The Golden Flow</p>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>Sender drops file → Receives 5-digit code.</li>
                    <li>Receiver opens URL on any device.</li>
                    <li>Receiver enters code → Download begins instantly.</li>
                  </ol>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold mb-4">Motion & Interaction Principles</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Motion was used strategically to communicate system status. Data particle animations represent transfer progress, while subtle haptic-like visual feedback confirms code entry. The interface feels alive and responsive, establishing trust during the invisible transfer process.
                </p>
              </motion.div>
            </div>
            
            <div className="space-y-8">
              <div className="p-8 bg-card border border-border rounded-2xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-1">Role</h3>
                    <p className="font-medium text-lg">Product Designer</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-1">Timeline</h3>
                    <p className="font-medium text-lg">6 Weeks</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-1">Tools</h3>
                    <p className="font-medium text-lg">Figma, FigJam</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-primary/10 border border-primary/20 rounded-2xl">
                <h3 className="text-xl font-bold text-primary mb-4">Impact</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-primary/10 pb-2">
                    <span className="text-muted-foreground">Transfer Success Rate</span>
                    <span className="font-bold text-foreground text-xl">99.2%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">Account-creation Friction</span>
                    <span className="font-bold text-green-500 text-xl">0</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Visual Design</h2>
              <p className="text-lg text-muted-foreground">
                Dark-first, highly accessible UI optimized for large displays and mobile equally.
              </p>
            </motion.div>
            <div className="aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden relative border border-border">
               <img src="/images/digilians-hero.png" alt="Digilians Platform UI" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}