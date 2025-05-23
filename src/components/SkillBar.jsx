import { useEffect, useState, useRef } from 'react';

const SkillBar = ({ name, percentage, color = 'blue' }) => {
  const [width, setWidth] = useState(0);
  const skillRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(percentage);
          }, 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [percentage]);

  const getColorClass = () => {
    const colorMap = {
      blue: 'bg-blue-600 dark:bg-blue-500',
      indigo: 'bg-indigo-600 dark:bg-indigo-500',
      purple: 'bg-purple-600 dark:bg-purple-500',
      pink: 'bg-pink-600 dark:bg-pink-500',
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div ref={skillRef} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-800 dark:text-gray-200">{name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div 
          className={`h-2.5 rounded-full ${getColorClass()} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;