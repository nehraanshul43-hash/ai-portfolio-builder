import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/95 to-accent/10" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hi, I'm Anshul
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            An aspiring AI/ML Engineer & Software Developer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I build intelligent systems using Machine Learning, Deep Learning, Python, 
            and modern software engineering tools.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2"
            >
              Download Resume
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="hover:scale-110 transition-transform">
              <Github className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
            </a>
            <a href="mailto:anshul@example.com"
               className="hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
