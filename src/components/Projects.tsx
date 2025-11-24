import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Heart Disease Prediction",
    description: "End-to-end ML pipeline with data preprocessing, feature engineering, and model deployment for predicting heart disease risk.",
    tech: ["Python", "scikit-learn", "Pandas", "Flask"],
    github: "#",
    demo: "#"
  },
  {
    title: "Waste Image Classifier",
    description: "CNN-based computer vision model for automated waste classification to improve recycling efficiency.",
    tech: ["TensorFlow", "Keras", "OpenCV", "Python"],
    github: "#",
    demo: "#"
  },
  {
    title: "Sentiment Analyzer",
    description: "NLP application for real-time sentiment analysis of text data using transformer models.",
    tech: ["PyTorch", "Transformers", "NLTK", "Streamlit"],
    github: "#",
    demo: "#"
  },
  {
    title: "RAG-based FAQ Chatbot",
    description: "Retrieval-augmented generation chatbot for intelligent question answering from custom knowledge bases.",
    tech: ["LangChain", "OpenAI", "Vector DB", "FastAPI"],
    github: "#",
    demo: "#"
  },
  {
    title: "End-to-End ML App",
    description: "Complete ML application with model training, API development, and interactive UI for predictions.",
    tech: ["Python", "FastAPI", "React", "Docker"],
    github: "#",
    demo: "#"
  },
  {
    title: "Image Caption Generator",
    description: "Deep learning model combining CNN and LSTM for automatic image caption generation.",
    tech: ["TensorFlow", "Keras", "CNN", "LSTM"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <Card 
              key={idx}
              className="p-6 shadow-[var(--shadow-card)] border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex-grow space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <Badge key={techIdx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 mt-6 pt-4 border-t">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-gradient-to-r from-primary to-accent"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
