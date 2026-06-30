import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Karim",
      role: "Co-founder @ NomadStack",
      content: "Marwan's work completely transformed our onboarding experience. What took us 5 steps now takes 2. Our activation rate jumped 60% in the first month."
    },
    {
      name: "Sara El-Masry",
      role: "CPO @ FinPath",
      content: "He's the rare designer who understands the business layer. He doesn't just design — he thinks. His strategic approach to UI saved us months of iteration."
    },
    {
      name: "David Chen",
      role: "Engineering Lead @ Verve Labs",
      content: "Working with Marwan was a master class. His documentation and component specs saved our team weeks. The handoff was flawless."
    },
    {
      name: "Lena Fischer",
      role: "CEO @ Klaro",
      content: "The rebrand Marwan led for us changed how enterprise clients perceived us overnight. It's sophisticated, scalable, and exactly what we needed."
    }
  ];

  return (
    <section className="py-32 relative bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Client Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Words from partners.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border relative overflow-hidden group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-muted-foreground/10 group-hover:text-primary/10 transition-colors" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-lg font-bold text-foreground">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}