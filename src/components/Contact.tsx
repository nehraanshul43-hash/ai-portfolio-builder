const links = [
  { label: "anshul@example.com", href: "mailto:anshul@example.com" },
  { label: "GitHub", href: "https://github.com/anshul" },
  { label: "LinkedIn", href: "https://linkedin.com/in/anshul" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Contact</h2>
        <p className="text-muted-foreground text-lg mb-8">
          I'm open to internships, collaborations, and interesting conversations.
          Feel free to reach out.
        </p>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border rounded-md text-sm hover:bg-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
