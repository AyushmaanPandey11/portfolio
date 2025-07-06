export default function Experience() {
  const experiences = [
    {
      title: 'Backend Developer',
      company: 'IthiSaga Dev Pvt Ltd',
      location: 'Hyderabad',
      period: 'Feb 2025 – Present',
      description: [
        'Migrated entire frontend to React with role-based authorization',
        'Implemented map integration using MapMyIndia and Leaflet',
        'Working with PostgreSQL, Express, Docker Compose, and AWS'
      ],
      technologies: ['PostgreSQL', 'React', 'Express', 'Docker', 'AWS'],
      icon: 'fas fa-briefcase',
      color: 'primary',
      current: true
    },
    {
      title: 'Backend Developer Intern',
      company: 'CourseConnect',
      location: 'Bengaluru',
      period: 'Nov 2024 – Jan 2025',
      description: [
        'Designed and developed full-stack application using Golang and Gin framework',
        'Optimized backend logic reducing storage usage by 80%',
        'Worked with Next.js and MySQL InnoDb for enhanced performance'
      ],
      technologies: ['Golang', 'Gin', 'Next.js', 'MySQL'],
      icon: 'fas fa-laptop-code',
      color: 'secondary',
      current: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'text-primary bg-primary/10 border-primary',
      secondary: 'text-secondary bg-secondary/10 border-secondary',
      accent: 'text-accent bg-accent/10 border-accent'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground">My professional journey</p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary rounded-full hidden md:block"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${getColorClasses(exp.color)} rounded-full flex items-center justify-center`}>
                        <i className={`${exp.icon} ${getColorClasses(exp.color).split(' ')[0]}`}></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold flex items-center">
                          {exp.title}
                          {exp.current && (
                            <span className="ml-2 bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                              Current
                            </span>
                          )}
                        </h3>
                        <p className={`${getColorClasses(exp.color).split(' ')[0]} font-semibold`}>{exp.company}</p>
                        <p className="text-muted-foreground text-sm">{exp.period}</p>
                      </div>
                    </div>
                    <div className="text-muted-foreground space-y-2">
                      {exp.description.map((desc, descIndex) => (
                        <p key={descIndex}>• {desc}</p>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`${getColorClasses(exp.color)} px-2 py-1 rounded text-xs`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${exp.current ? 'bg-primary' : 'bg-secondary'} rounded-full border-4 border-background hidden md:block`}></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
