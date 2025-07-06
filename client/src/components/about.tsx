export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">Passionate about creating innovative web solutions</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Profile Summary</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a recent MCA graduate with a solid background in full-stack web development. My experience spans across modern technologies including Go, React, Spring Boot, and Node.js, with a proven track record of successfully designing, developing, and deploying robust web solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-primary mr-3"></i>
                <span>Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-primary mr-3"></i>
                <span>ayushmaan1122pandey@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-primary mr-3"></i>
                <span>+91 8639619547</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-graduation-cap text-primary mr-3"></i>
                <span>MCA from Pondicherry University (GPA: 7.75)</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">10+</div>
                  <div className="text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">3+</div>
                  <div className="text-muted-foreground">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-muted-foreground">Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
