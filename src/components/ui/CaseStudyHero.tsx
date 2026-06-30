import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function CaseStudyHero({ title, subtitle, image }: CaseStudyHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">{title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">{subtitle}</p>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-6 mt-16"
      >
        <div className="rounded-2xl overflow-hidden border border-border shadow-2xl relative aspect-video">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </section>
  );
}