const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "C/C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Web Technologies",
    items: ["React", "HTML/CSS", "FastAPI", "Flask", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["SQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git & GitHub", "Docker", "VS Code", "Linux", "Jupyter", "Google Colab"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
