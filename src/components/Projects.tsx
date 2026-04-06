const projects = [
  {
    title: "Heart Disease Prediction",
    description:
      "End-to-end ML pipeline with data preprocessing, feature engineering, and model serving via a Flask API.",
    tech: ["Python", "scikit-learn", "Flask", "Pandas"],
    github: "#",
  },
  {
    title: "Waste Image Classifier",
    description:
      "CNN-based computer vision model for automated waste classification to improve recycling workflows.",
    tech: ["TensorFlow", "Keras", "OpenCV"],
    github: "#",
  },
  {
    title: "RAG-based FAQ Chatbot",
    description:
      "Retrieval-augmented generation chatbot for intelligent Q&A from custom knowledge bases.",
    tech: ["LangChain", "FastAPI", "OpenAI"],
    github: "#",
  },
  {
    title: "Sentiment Analyzer",
    description:
      "NLP application for real-time sentiment analysis using transformer models and a Streamlit interface.",
    tech: ["PyTorch", "Transformers", "Streamlit"],
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg border bg-background hover:border-foreground/20 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full bg-accent text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors mt-1 shrink-0">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
