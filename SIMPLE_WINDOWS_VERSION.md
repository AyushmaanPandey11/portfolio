# 🪟 Simple Windows Portfolio Setup

## 🚨 Quick Fix for Your Current Error

The error happens because your downloaded project still has server-side code, but you're running Windows. Here's a simple fix:

### Step 1: Create a new folder for your portfolio
```powershell
mkdir my-portfolio
cd my-portfolio
```

### Step 2: Create these files:

#### package.json (Windows-friendly)
```json
{
  "name": "ayushmaan-portfolio",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.453.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.2",
    "tailwindcss": "^3.4.17",
    "vite": "^5.4.19",
    "typescript": "5.6.3"
  }
}
```

#### vite.config.ts
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
});
```

#### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ayushmaan Pandey - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

#### src/main.tsx
```tsx
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(<App />);
```

#### src/App.tsx
```tsx
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">AP</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img
              src="/profile-photo.jpg"
              alt="Ayushmaan Pandey"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Ayushmaan Pandey
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">Full Stack Developer</p>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Recent MCA graduate with expertise in building dynamic, responsive web applications using modern technologies like Java Spring Boot, React, Go, and Node.js.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
              <i className="fas fa-code mr-2"></i>
              View My Work
            </a>
            <a href="#contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-colors">
              <i className="fas fa-envelope mr-2"></i>
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600">Passionate about creating innovative web solutions</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Profile Summary</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a recent MCA graduate with a solid background in full-stack web development. My experience spans across modern technologies including Java Spring Boot, React, Go, and Node.js.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-blue-600 mr-3"></i>
                  <span>Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-blue-600 mr-3"></i>
                  <span>ayushmaan1122pandey@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-graduation-cap text-blue-600 mr-3"></i>
                  <span>MCA from Pondicherry University (GPA: 7.75)</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                  <div className="text-gray-600">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                  <div className="text-gray-600">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">7+</div>
                  <div className="text-gray-600">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                  <div className="text-gray-600">Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                <i className="fas fa-book text-6xl text-white opacity-80"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Journal App</h3>
                <p className="text-gray-600 mb-4">
                  Secure journal application built with Spring Boot, Spring Security, JWT token system, and MongoDB.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Java</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Spring Boot</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">MongoDB</span>
                </div>
                <a href="https://github.com/AyushmaanPandey11/journal-app" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-github mr-1"></i>
                  View on GitHub
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-purple-500 flex items-center justify-center">
                <i className="fas fa-briefcase text-6xl text-white opacity-80"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Job Portal</h3>
                <p className="text-gray-600 mb-4">
                  Full-stack job portal developed with Spring Boot, Spring Security, JWT authentication, and PostgreSQL.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Java</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Spring Boot</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">PostgreSQL</span>
                </div>
                <a href="https://github.com/AyushmaanPandey11/job-portal" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-github mr-1"></i>
                  View on GitHub
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <i className="fas fa-film text-6xl text-white opacity-80"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Movie Recommendation App</h3>
                <p className="text-gray-600 mb-4">
                  React-based movie recommendation system using free movie APIs and Firebase authentication.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Redux</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Firebase</span>
                </div>
                <a href="https://github.com/AyushmaanPandey11/Movie-Recommendation-App" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-github mr-1"></i>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-12">Let's discuss your next project</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <a href="mailto:ayushmaan1122pandey@gmail.com" className="text-blue-600 hover:text-blue-800">
                ayushmaan1122pandey@gmail.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-github text-green-600 text-xl"></i>
              </div>
              <h3 className="font-bold mb-2">GitHub</h3>
              <a href="https://github.com/AyushmaanPandey11" className="text-green-600 hover:text-green-800">
                AyushmaanPandey11
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-linkedin text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/ayushmaan-pandey" className="text-purple-600 hover:text-purple-800">
                Connect with me
              </a>
            </div>
          </div>

          <a href="/resume.pdf" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-block">
            <i className="fas fa-download mr-2"></i>
            Download Resume
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 Ayushmaan Pandey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
```

### Step 3: Setup Commands (Windows PowerShell)
```powershell
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Step 4: Add Your Assets
1. Create a `public` folder
2. Add your profile photo as `public/profile-photo.jpg`
3. Add your resume as `public/resume.pdf`

## 🎯 This Simple Version:
- Works perfectly on Windows
- No server-side code
- No NODE_ENV issues
- Uses Tailwind CSS via CDN (no config needed)
- Includes all your projects and info
- Ready to deploy anywhere

Just run `npm run dev` and your portfolio will open at `http://localhost:3000`!