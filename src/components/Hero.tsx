const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center pt-14">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] animate-fade-in">
          Anshul Nehra
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Software Engineering Student & Aspiring Software Developer.
          I build real-world applications and solve problems with clean code.
        </p>
        <div className="mt-10 flex gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <a
            href="#projects"
            className="px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border text-sm font-medium rounded-md hover:bg-accent transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
