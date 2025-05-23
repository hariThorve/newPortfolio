import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import HobbyCard from '../components/HobbyCard';
import { 
  BookOpen, 
  Music, 
  Bike, 
  Camera, 
  Gamepad2, 
  Plane 
} from 'lucide-react';

const Hobbies = () => {
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
    
    const section = document.querySelector('#hobbies');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const hobbies = [
    {
      icon: BookOpen,
      title: 'Reading',
      description: 'I enjoy reading books about AI, philosophy, and science fiction to expand my knowledge and imagination.',
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capturing moments through the lens teaches me to appreciate details and find beauty in everyday life.',
    },
    {
      icon: Plane,
      title: 'Travel',
      description: 'Discovering new cultures and places broadens my worldview and inspires innovative thinking.',
    },
  ];

  return (
    <section id="hobbies" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Hobbies" 
          subtitle="What I enjoy doing when I'm not coding or studying"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <HobbyCard 
                icon={hobby.icon} 
                title={hobby.title} 
                description={hobby.description} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;