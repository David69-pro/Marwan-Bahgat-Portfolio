import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  index: number;
}

export default function ProjectCard({ title, description, tags, image, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative flex flex-col gap-6 lg:flex-row lg:items-center rounded-2xl bg-card border border-border overflow-hidden"
    >
      <div className="lg:w-1/2 overflow-hidden aspect-video lg:aspect-auto lg:h-full relative">
        <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      <div className="p-8 lg:w-1/2 lg:p-12 flex flex-col justify-center">
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-8 text-lg">{description}</p>
        <Link href={link} className="inline-flex items-center gap-2 text-primary font-medium group/link w-fit">
          View Case Study
          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}