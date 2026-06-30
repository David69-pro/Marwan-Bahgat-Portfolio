import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function Stats() {
  const stats = [
    { label: "Projects Completed", value: 50, suffix: "+" },
    { label: "Case Studies", value: 12, suffix: "+" },
    { label: "Design Hours", value: 8000, suffix: "+" },
    { label: "Happy Clients", value: 40, suffix: "+" },
    { label: "Years Learning", value: 4, suffix: "+" },
  ];

  return (
    <section className="py-24 bg-card/50 border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pattern-grid-lg opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}