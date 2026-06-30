import { ArrowUpRight, Github, Linkedin, Dribbble, Figma } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">
              <span className="text-primary">M</span>.Bahgat
            </h2>
            <p className="text-muted-foreground max-w-sm mb-6">
              Designing intuitive digital experiences that connect user needs with business goals. 
              Based in Cairo, Egypt. Available globally.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Dribbble className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Figma className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navigation</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">About <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">Services <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">Projects <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">Contact <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="mailto:hello@marwanbahgat.com" className="text-muted-foreground hover:text-primary transition-colors">hello@marwanbahgat.com</a></li>
              <li className="text-muted-foreground">Cairo, Egypt</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Marwan Bahgat. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Designed & built with <span className="text-red-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}