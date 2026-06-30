import { motion } from "framer-motion";
import { 
  Search, 
  Workflow, 
  Layers, 
  LayoutTemplate, 
  MousePointer2, 
  Palette, 
  Library, 
  Smartphone, 
  LayoutDashboard, 
  Monitor, 
  MonitorSmartphone, 
  TrendingUp, 
  Lightbulb, 
  ClipboardCheck 
} from "lucide-react";

export default function Services() {
  const services = [
    { name: "UX Research", icon: Search },
    { name: "User Flows", icon: Workflow },
    { name: "Information Architecture", icon: Layers },
    { name: "Wireframing", icon: LayoutTemplate },
    { name: "Interactive Prototyping", icon: MousePointer2 },
    { name: "UI Design", icon: Palette },
    { name: "Design Systems", icon: Library },
    { name: "Mobile Applications", icon: Smartphone },
    { name: "Dashboard Design", icon: LayoutDashboard },
    { name: "Website Design", icon: Monitor },
    { name: "Responsive Design", icon: MonitorSmartphone },
    { name: "Usability Improvements", icon: TrendingUp },
    { name: "Product Strategy", icon: Lightbulb },
    { name: "Design Audits", icon: ClipboardCheck },
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Capabilities</h3>
          <p className="text-muted-foreground text-lg">
            End-to-end product design services tailored to build scalable, intuitive, and beautiful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{service.name}</h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}