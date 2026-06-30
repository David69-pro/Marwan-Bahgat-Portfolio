import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      title: "Design",
      skills: [
        { name: "Figma", level: 98 },
        { name: "FigJam", level: 95 },
        { name: "Adobe Illustrator", level: 90 },
        { name: "Adobe Photoshop", level: 85 },
      ]
    },
    {
      title: "Research & Strategy",
      skills: [
        { name: "UX Research", level: 90 },
        { name: "User Flows", level: 95 },
        { name: "Information Architecture", level: 92 },
        { name: "Personas", level: 88 },
        { name: "Competitive Analysis", level: 90 },
      ]
    },
    {
      title: "Systems",
      skills: [
        { name: "Design Systems", level: 95 },
        { name: "Auto Layout", level: 98 },
        { name: "Accessibility (WCAG)", level: 85 },
        { name: "Component Architecture", level: 92 },
      ]
    },
    {
      title: "Frontend Knowledge",
      skills: [
        { name: "HTML/CSS", level: 88 },
        { name: "JavaScript / React", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 95 },
      ]
    }
  ];

  return (
    <section className="py-32 relative bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Skills & Tools</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {skillGroups.map((group, groupIdx) => (
            <motion.div 
              key={groupIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
            >
              <h4 className="text-2xl font-bold mb-8 text-foreground">{group.title}</h4>
              <div className="space-y-6">
                {group.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (skillIdx * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}