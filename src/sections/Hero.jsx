import { ArrowDownCircle, Github, Linkedin, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  const scrollToSkills = () => {
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full opacity-10 -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full opacity-10 -bottom-20 -right-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-6">
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-3 rounded-full text-sm font-medium mb-2">
                Engineering Student
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Hariparasad</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                Relentless engineering student focused on AI/ML and Data Science. Building real-world projects with TensorFlow and LLMs to prove my skills.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            
            <div className="flex space-x-5">
              <a 
                href="https://github.com/hariThorve" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/hariprasad-thorve-b36071271" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-50"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-sm text-gray-800 dark:text-gray-300 font-mono overflow-x-auto">
                  <code>
{`const profile = {
  name: "Hariprasad",
  focus: ["AI/ML", "Data Science", "Web Development"],
  skills: {
    languages: ["Python", "JavaScript"],
    frameworks: ["TensorFlow", "React", "Node.js"],
    tools: ["Jupyter", "Git", "VS Code", "Cursor", "Colab"]
  }
};

// Let's connect and build something amazing!`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToSkills} 
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="Scroll down"
          >
            <ArrowDownCircle size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;