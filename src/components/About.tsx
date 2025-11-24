import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            About Me
          </h2>
          
          <Card className="p-8 shadow-[var(--shadow-card)] border-2 hover:border-primary/20 transition-all duration-300 animate-scale-in">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm currently pursuing my <span className="text-foreground font-semibold">B.Tech in Computer Science Engineering (AIML)</span>, 
                where I've developed a deep passion for artificial intelligence and machine learning.
              </p>
              
              <p>
                My expertise spans across <span className="text-foreground font-semibold">Python, Machine Learning, Deep Learning, and Data Structures & Algorithms</span>. 
                I love working on end-to-end model development — from data preprocessing and feature engineering 
                to model training, deployment, and building intuitive interfaces.
              </p>
              
              <p>
                I'm driven by the challenge of <span className="text-foreground font-semibold">solving real-world problems</span> through 
                intelligent systems and creating ML-powered applications that make a meaningful impact. 
                Whether it's computer vision, natural language processing, or predictive analytics, 
                I'm always eager to learn and build innovative solutions.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
