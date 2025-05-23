import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillBar from '../components/SkillBar';
import { 
  Brain, 
  Code, 
  Database, 
  LucideBarChart2,
  Layers,
  CloudCog
} from 'lucide-react';

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.querySelector('#skills');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: [
        { name: 'TensorFlow', percentage: 50, color: 'blue' },
        { name: 'Scikit-Learn', percentage: 92, color: 'blue' },
        { name: 'LLMs', percentage: 88, color: 'blue' },
        { name: 'Deep Learning', percentage: 70, color: 'blue' },
        { name: 'NLP', percentage: 60, color: 'blue' },
        
      ],
    },
    {
      title: 'Data Science',
      icon: LucideBarChart2,
      skills: [
        { name: 'ML Models', percentage: 90, color: 'blue' },
        { name: 'Data Preprocessing', percentage: 94, color: 'indigo' },
        { name: 'Feature Engineering', percentage: 90, color: 'indigo' },
        { name: 'Pandas & NumPy', percentage: 95, color: 'indigo' },
      ],
    },
    {
      title: 'Web Development',
      icon: Code,
      skills: [
        { name: 'React.js', percentage: 85, color: 'purple' },
        { name: 'Next.js', percentage: 10, color: 'purple' },
        { name: 'Node.js', percentage: 75, color: 'purple' },
        { name: 'JavaScript', percentage: 90, color: 'purple' },
        { name: 'HTML/CSS', percentage: 100, color: 'purple' },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: CloudCog,
      skills: [
        { name: 'Git & Version Control', percentage: 92, color: 'pink' },
        { name: 'Jupyter Notebooks', percentage: 95, color: 'pink' },
        { name: 'Cursor', percentage: 100, color: 'pink' },
        { name: 'Vector Databases', percentage: 88, color: 'pink' },
        { name: 'Colab', percentage: 100, color: 'pink' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Skills" 
          subtitle="Leveraging AI, ML, and software development to solve real-world problems"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;