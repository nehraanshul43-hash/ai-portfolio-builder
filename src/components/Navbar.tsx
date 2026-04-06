const navLinks = ["About", "Projects", "Skills", "Contact"];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-tight text-foreground">
          Anshul Nehra
        </a>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
