import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Certifications() {
  const certs = [
    { title: "Google UX Design Certificate", issuer: "Google", status: "Completed" },
    { title: "Interaction Design Foundation — UX Design", issuer: "IxDF", status: "Completed" },
    { title: "Meta Frontend Developer Certificate", issuer: "Meta", status: "Completed" },
    { title: "Adobe Certified Professional", issuer: "Adobe", status: "Completed" },
    { title: "Nielsen Norman Group UX Certification", issuer: "NN/g", status: "In Progress" },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <h3 className="text-3xl font-bold tracking-tight mb-12 flex items-center gap-3">
          <Award className="text-primary w-8 h-8" /> 
          Certifications
        </h3>
        
        <div className="space-y-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 rounded-xl bg-card border border-border group hover:border-primary/50 transition-colors"
            >
              <div>
                <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{cert.title}</h4>
                <p className="text-muted-foreground mt-1">{cert.issuer}</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  cert.status === "Completed" 
                    ? "bg-green-500/10 text-green-500 border border-green-500/20"
                    : "bg-primary/10 text-primary border border-primary/20"
                }`}>
                  {cert.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}