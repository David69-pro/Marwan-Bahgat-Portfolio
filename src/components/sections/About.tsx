import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-border/50 p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-50" />
              <img 
                src="/images/marwan-avatar.png" 
                alt="Marwan Bahgat Portrait" 
                className="w-full h-full object-cover rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-[60px] -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">About Me</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">Designing with purpose. Building with craft.</h3>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I design digital products that solve real business problems while delivering exceptional user experiences. My work combines UX research, information architecture, interaction design, visual design, and usability principles.
              </p>
              <p>
                I believe every interface should have a purpose. Every interaction should feel natural. Every decision should be backed by user-centered thinking to create products that are intuitive, scalable, accessible, and enjoyable to use.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-border/50">
              <div>
                <h4 className="text-foreground font-semibold mb-2">My Mission</h4>
                <p className="text-muted-foreground text-sm">To bridge the gap between complex systems and human intuition.</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-2">Working Philosophy</h4>
                <p className="text-muted-foreground text-sm">Systems thinking combined with relentless visual craft.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}