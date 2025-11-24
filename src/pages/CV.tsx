import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CV = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Hidden on print */}
      <div className="print:hidden fixed top-4 left-4 right-4 z-50 flex justify-between items-center">
        <Button variant="outline" size="sm" asChild>
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </Button>
        <Button onClick={handlePrint} size="sm" className="bg-gradient-to-r from-primary to-accent">
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>

      {/* CV Content */}
      <div className="max-w-4xl mx-auto p-8 md:p-12 print:p-8">
        <div className="bg-card border-2 border-border rounded-lg shadow-[var(--shadow-card)] print:border-0 print:shadow-none">
          <div className="p-8 md:p-12 print:p-8">
            {/* Header */}
            <header className="border-b-2 border-border pb-6 mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Anshul</h1>
              <p className="text-xl text-primary font-semibold mb-4">AI/ML Engineer & Software Developer</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:anshul@example.com" className="hover:text-primary">anshul@example.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <a href="https://linkedin.com/in/anshul" target="_blank" rel="noopener noreferrer" className="hover:text-primary">linkedin.com/in/anshul</a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <a href="https://github.com/anshul" target="_blank" rel="noopener noreferrer" className="hover:text-primary">github.com/anshul</a>
                </div>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">Professional Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                Aspiring AI/ML Engineer with strong foundation in machine learning, deep learning, and software development. 
                Currently pursuing B.Tech in Computer Science Engineering (AIML) with hands-on experience in building 
                end-to-end ML pipelines, developing intelligent systems, and deploying production-ready applications. 
                Passionate about leveraging AI to solve real-world problems through innovative solutions.
              </p>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">B.Tech in Computer Science Engineering (AIML)</h3>
                      <p className="text-primary font-semibold">Your University Name</p>
                    </div>
                    <span className="text-muted-foreground font-semibold">2021 - 2025</span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Specialized in Artificial Intelligence and Machine Learning</li>
                    <li>Relevant coursework: Deep Learning, NLP, Computer Vision, Data Mining, Data Structures</li>
                    <li>Active participant in coding competitions, hackathons, and technical workshops</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">Technical Skills</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Programming Languages</h3>
                  <p className="text-muted-foreground">Python, C/C++, Java, JavaScript</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">ML/AI Frameworks</h3>
                  <p className="text-muted-foreground">scikit-learn, TensorFlow, PyTorch, Keras, OpenCV</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Data Science</h3>
                  <p className="text-muted-foreground">NumPy, Pandas, Matplotlib, Seaborn, Jupyter</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Development Tools</h3>
                  <p className="text-muted-foreground">Git/GitHub, VS Code, Google Colab, Kaggle</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Web Development</h3>
                  <p className="text-muted-foreground">FastAPI, Flask, Streamlit, Gradio, HTML/CSS, REST APIs</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Core Concepts</h3>
                  <p className="text-muted-foreground">Data Structures, OOP, DBMS, OS, Computer Networks</p>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">Key Projects</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Heart Disease Prediction System</h3>
                  <p className="text-sm text-primary font-semibold mb-2">Python • scikit-learn • Pandas • Flask</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Developed end-to-end ML pipeline with data preprocessing and feature engineering</li>
                    <li>Implemented multiple classification algorithms achieving 85%+ accuracy</li>
                    <li>Deployed model using Flask API for real-time predictions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Waste Image Classifier</h3>
                  <p className="text-sm text-primary font-semibold mb-2">TensorFlow • Keras • OpenCV • Python</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Built CNN-based computer vision model for automated waste classification</li>
                    <li>Trained on custom dataset with data augmentation techniques</li>
                    <li>Achieved 90%+ classification accuracy across multiple waste categories</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">RAG-based FAQ Chatbot</h3>
                  <p className="text-sm text-primary font-semibold mb-2">LangChain • OpenAI • Vector DB • FastAPI</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Developed retrieval-augmented generation chatbot for intelligent Q&A</li>
                    <li>Implemented semantic search using vector embeddings</li>
                    <li>Created REST API for seamless integration with web applications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Sentiment Analysis Application</h3>
                  <p className="text-sm text-primary font-semibold mb-2">PyTorch • Transformers • NLTK • Streamlit</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Built NLP application for real-time sentiment analysis using transformer models</li>
                    <li>Implemented interactive UI with Streamlit for user-friendly experience</li>
                    <li>Processed and analyzed large text datasets with high accuracy</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">Experience</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Machine Learning Intern</h3>
                      <p className="text-primary font-semibold">Company Name</p>
                    </div>
                    <span className="text-muted-foreground font-semibold">Month Year - Month Year</span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                    <li>Developed and deployed machine learning models for business use cases</li>
                    <li>Collaborated with cross-functional teams on data-driven projects</li>
                    <li>Optimized model performance through hyperparameter tuning and feature selection</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Achievements & Certifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">Achievements & Certifications</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li><strong>Kaggle Notebooks Expert</strong> - Multiple competition medals and contributions</li>
                <li><strong>Machine Learning Specialization</strong> - Coursera (Stanford University)</li>
                <li><strong>Deep Learning Specialization</strong> - deeplearning.ai</li>
                <li><strong>Best Project Award</strong> - College Tech Fest 2024</li>
                <li>Active participant in hackathons and coding competitions</li>
                <li>Regular attendee of ML/AI workshops and technical conferences</li>
              </ul>
            </section>

            {/* Additional Information */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">Additional Information</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Languages:</strong> English (Fluent), Hindi (Native)</p>
                <p><strong className="text-foreground">Interests:</strong> Machine Learning Research, Open Source Contributions, Competitive Programming</p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer - Hidden on print */}
        <div className="print:hidden text-center mt-8 text-sm text-muted-foreground">
          <p>This CV was generated from my portfolio. Visit <a href="/" className="text-primary hover:underline">my website</a> for more details.</p>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            background: white;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:border-0 {
            border: 0 !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:p-8 {
            padding: 2rem !important;
          }
          @page {
            margin: 1cm;
            size: A4;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CV;
