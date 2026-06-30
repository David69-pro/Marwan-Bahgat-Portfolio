import { motion } from "framer-motion";
import { Search, PenTool, Lightbulb, Figma, CheckSquare, RefreshCw } from "lucide-react";

export default function Process() {
  const steps = [
    {
      title: "Discover",
      description: "Understanding the problem, business goals, and user needs through research and stakeholder interviews.",
      icon: Search,
    },
    {
      title: "Define",
      description: "Synthesizing research into clear problem statements, personas, and actionable requirements.",
      icon: PenTool,
    },
    {
      title: "Ideate",
      description: "Exploring multiple concepts through wireframes, user flows, and information architecture.",
      icon: Lightbulb,
    },
    {
      title: "Prototype",
      description: "Crafting high-fidelity, interactive prototypes with pixel-perfect UI and scalable design systems.",
      icon: Figma,
    },
    {
      title: "Test",
      description: "Validating designs with real users to ensure usability, accessibility, and task success.",
      icon: CheckSquare,
    },
    {
      title: "Iterate",
      description: "Refining based on feedback and preparing comprehensive handoff documentation for developers.",
      icon: RefreshCw,
    }
  ];

  return (
    <section id="process" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Methodology</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">The Design Process</h3>
          <p className="text-muted-foreground text-lg">
            A systematic approach to solving complex problems, ensuring every decision is grounded in data and empathy.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border shadow-xl flex items-center justify-center mb-6 group hover:border-primary transition-colors cursor-default relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary border-4 border-background text-xs font-bold text-muted-foreground mb-4 lg:absolute lg:top-1/2 lg:-translate-y-1/2">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-foreground lg:mt-12">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}