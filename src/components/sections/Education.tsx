import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="py-24 relative bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h3 className="text-3xl font-bold tracking-tight mb-12 flex items-center gap-3">
          <GraduationCap className="text-primary w-8 h-8" /> 
          Education
        </h3>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-8 md:pl-0"
        >
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border" />
          
          <div className="relative md:pl-10 pb-8">
            <div className="hidden md:block absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-mono text-primary mb-2 block">Graduation: 2021</span>
            <h4 className="text-2xl font-bold text-foreground mb-2">Faculty of Fine Arts & Design</h4>
            <p className="text-lg text-muted-foreground mb-4">Cairo, Egypt</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">GPA:</span>
                <span className="text-muted-foreground">Excellent</span>
              </div>
              <div>
                <span className="font-semibold text-foreground block mb-2">Relevant Coursework:</span>
                <ul className="list-disc list-inside text-muted-foreground pl-4 space-y-1">
                  <li>Visual Communication</li>
                  <li>Typography</li>
                  <li>Human-Computer Interaction</li>
                  <li>Design Theory</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}