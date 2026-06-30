import { motion } from "framer-motion";

export default function Clients() {
  const clients = ["Google", "Shopify", "Stripe", "Notion", "Linear", "Vercel", "Figma", "Spotify", "Airbnb"];

  return (
    <section className="py-20 border-y border-border/50 bg-card/30 overflow-hidden relative">
      <div className="container mx-auto px-6 text-center mb-8">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by great companies
        </p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap gap-16 items-center px-8"
        >
          {[...clients, ...clients].map((client, idx) => (
            <span 
              key={idx} 
              className="text-3xl md:text-4xl font-bold text-muted-foreground/30 hover:text-foreground/80 transition-colors duration-300"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}