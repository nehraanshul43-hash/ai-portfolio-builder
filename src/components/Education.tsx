import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Education & Experience
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <Card className="p-8 shadow-[var(--shadow-card)] border-2 hover:border-primary/20 transition-all duration-300 animate-fade-in-up">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  B.Tech in Computer Science Engineering (AIML)
                </h3>
                <p className="text-muted-foreground mb-4">2021 - 2025 (Expected)</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Specialized in Artificial Intelligence and Machine Learning</li>
                  <li>Relevant coursework: Deep Learning, NLP, Computer Vision, Data Mining</li>
                  <li>Active participation in coding competitions and hackathons</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Experience */}
          <Card className="p-8 shadow-[var(--shadow-card)] border-2 hover:border-primary/20 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Briefcase className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Internships & Work Experience
                </h3>
                <p className="text-muted-foreground mb-4">Various positions</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Machine Learning Intern - [Company Name]</li>
                  <li>Hackathon participation and project development</li>
                  <li>Open-source contributions to ML libraries</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-8 shadow-[var(--shadow-card)] border-2 hover:border-primary/20 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Achievements & Certifications
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Kaggle Notebooks Expert - Multiple competition medals</li>
                  <li>Machine Learning Specialization - Coursera</li>
                  <li>Deep Learning Specialization - deeplearning.ai</li>
                  <li>Best Project Award - College Tech Fest 2024</li>
                  <li>Attended ML/AI workshops and conferences</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
