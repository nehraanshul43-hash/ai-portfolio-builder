import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "C/C++", "Java", "JavaScript"]
  },
  {
    title: "ML / AI",
    skills: ["scikit-learn", "NumPy", "Pandas", "TensorFlow", "PyTorch", "OpenCV", "Keras"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Jupyter", "Git/GitHub", "Kaggle", "SQL", "Google Colab", "VS Code"]
  },
  {
    title: "Development",
    skills: ["FastAPI", "Flask", "Streamlit", "Gradio", "HTML/CSS", "REST APIs"]
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx} 
              className="p-6 shadow-[var(--shadow-card)] border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <Badge 
                    key={skillIdx} 
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
