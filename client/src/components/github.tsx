import { useState, useEffect } from 'react';

interface Repository {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
}

export default function GitHub() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const githubUsername = 'Ayushmaan-Pandey';

  // For now, we'll use static data based on the GitHub profile
  const githubData = {
    profile: {
      name: 'Ayushmaan Pandey',
      bio: 'Full Stack Developer',
      avatar: 'https://avatars.githubusercontent.com/u/65823392?v=4',
      url: 'https://github.com/Ayushmaan-Pandey',
      followers: 1,
      following: 0,
      public_repos: 1
    },
    repositories: [
      {
        name: 'Major-Project',
        description: 'Improving Classification Accuracy Using Enhanced Salp Swarm Algorithm',
        language: 'MATLAB',
        stars: 3,
        forks: 0,
        url: 'https://github.com/Ayushmaan-Pandey/Major-Project',
        topics: ['machine-learning', 'algorithm', 'research', 'classification']
      }
    ]
  };

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setRepos(githubData.repositories);
      setLoading(false);
    }, 1000);
  }, []);

  const getLanguageColor = (language: string) => {
    const colors = {
      'MATLAB': '#e16737',
      'JavaScript': '#f1e05a',
      'Python': '#3572A5',
      'TypeScript': '#2b7489',
      'Go': '#00ADD8',
      'Java': '#b07219',
      'React': '#61dafb'
    };
    return colors[language as keyof typeof colors] || '#8b8b8b';
  };

  return (
    <section id="github" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">GitHub Profile</h2>
          <p className="text-xl text-muted-foreground">My open source contributions</p>
        </div>

        {/* GitHub Profile Card */}
        <div className="bg-card rounded-2xl p-8 shadow-lg mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center md:text-left">
              <img
                src={githubData.profile.avatar}
                alt="GitHub Avatar"
                className="w-32 h-32 rounded-full mx-auto md:mx-0 mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{githubData.profile.name}</h3>
              <p className="text-muted-foreground mb-4">{githubData.profile.bio}</p>
              <a
                href={githubData.profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <i className="fab fa-github mr-2"></i>
                View Profile
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {githubData.profile.public_repos}
                </div>
                <div className="text-muted-foreground">Repositories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {githubData.profile.followers}
                </div>
                <div className="text-muted-foreground">Followers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {githubData.profile.following}
                </div>
                <div className="text-muted-foreground">Following</div>
              </div>
            </div>
          </div>
        </div>

        {/* Repositories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Loading skeletons
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                <div className="animate-pulse">
                  <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-muted rounded w-full mb-2"></div>
                  <div className="h-3 bg-muted rounded w-2/3 mb-4"></div>
                  <div className="flex items-center gap-4">
                    <div className="h-3 bg-muted rounded w-16"></div>
                    <div className="h-3 bg-muted rounded w-8"></div>
                  </div>
                </div>
              </div>
            ))
          ) : repos.length > 0 ? (
            repos.map((repo: any, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary/80">
                    {repo.name}
                  </h3>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {repo.description || 'No description available'}
                </p>
                
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {repo.topics.map((topic: string, topicIndex: number) => (
                      <span
                        key={topicIndex}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <div className="flex items-center gap-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        ></div>
                        <span>{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <i className="fas fa-star text-accent"></i>
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fas fa-code-branch text-secondary"></i>
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <i className="fab fa-github text-6xl text-muted-foreground mb-4"></i>
              <p className="text-muted-foreground">No repositories found</p>
            </div>
          )}
        </div>

        {/* GitHub Activity Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work? Check out my projects above or view my complete GitHub profile.
          </p>
          <a
            href={githubData.profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <i className="fab fa-github mr-2"></i>
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}