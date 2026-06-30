import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "StyleSync",
      description: "A luxury fashion e-commerce application designed to provide a premium, seamless shopping experience. Focused on elevated typography, high-quality imagery, and frictionless checkout.",
      tags: ["UX/UI Design", "E-commerce", "Mobile App"],
      image: "/images/stylesync-hero.png",
      link: "/projects/stylesync",
    },
    {
      title: "Smart Transportation",
      description: "A complex dashboard platform coordinating riders and drivers in real-time across urban routes. Solved major logistical challenges through intuitive mapping and precise data visualization.",
      tags: ["Dashboard", "SaaS", "UX Research"],
      image: "/images/smart-transport-hero.png",
      link: "/projects/smart-transport",
    },
    {
      title: "Digilians",
      description: "A revolutionary cross-device file transfer platform using a secure five-character code. Zero friction, no accounts required, optimized for everything from mobile devices to 4K displays.",
      tags: ["Web App", "Product Strategy", "Interaction Design"],
      image: "/images/digilians-hero.png",
      link: "/projects/digilians",
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Selected Work</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-2xl">
            Proof of craft.
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of recent projects highlighting my process from initial research to final polished interface.
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}