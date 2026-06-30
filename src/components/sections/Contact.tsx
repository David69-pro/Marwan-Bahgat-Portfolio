import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-primary/5 pattern-grid-lg opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-tight">
                Let's build something <span className="text-primary">amazing</span> together.
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Currently open to new opportunities. Whether you have a project in mind or just want to chat about design, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                <a href="mailto:hello@marwanbahgat.com" className="flex items-center gap-4 text-lg text-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  hello@marwanbahgat.com
                </a>
                <div className="flex items-center gap-4 text-lg text-foreground">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  Cairo, Egypt
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="projectType" className="text-sm font-medium text-foreground">Project Type</label>
                <select 
                  id="projectType" 
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                >
                  <option value="uiux">UI/UX Design</option>
                  <option value="product">Product Strategy</option>
                  <option value="web">Website Design</option>
                  <option value="mobile">Mobile App</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}