export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: 'fas fa-code',
      color: 'primary',
      skills: ['Java', 'JavaScript', 'TypeScript', 'Go', 'Solidity', 'C++', 'Rust']
    },
    {
      title: 'Frontend',
      icon: 'fas fa-palette',
      color: 'secondary',
      skills: ['React', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3', 'jQuery']
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      color: 'accent',
      skills: ['Gin', 'Spring Boot', 'Node.js', 'Express', 'WebSocket']
    },
    {
      title: 'Database & Tools',
      icon: 'fas fa-database',
      color: 'primary',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Docker', 'Git', 'AWS']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'text-primary bg-primary/10',
      secondary: 'text-secondary bg-secondary/10',
      accent: 'text-accent bg-accent/10'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">Technologies I work with</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <i className={`${category.icon} text-4xl ${getColorClasses(category.color).split(' ')[0]} mb-4`}></i>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`inline-block ${getColorClasses(category.color)} px-3 py-1 rounded-full text-sm mr-2 mb-2`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
