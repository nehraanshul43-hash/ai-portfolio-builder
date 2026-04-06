const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-between text-sm text-muted-foreground">
        <span>© 2025 Anshul Nehra</span>
        <div className="flex gap-4">
          <a href="https://github.com/anshul" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/anshul" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
