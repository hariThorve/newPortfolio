import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
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
    
    const section = document.querySelector('#projects');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const projects = [
    {
      title: 'LUMA AI',
      description: 'LUMA is an AI-enhanced search platform that combines traditional web search with AI analysis to provide comprehensive answers to your queries..',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'LLM', 'LLAMA AI', 'Chromadb', 'Webscraping', 'Gemini AI', 'React.js'],
      githubLink: "https://github.com/hariThorve/luma.git",
      demoLink: "https://luma-zeta.vercel.app",
    },
    {
      title: 'RNN Time Series Prediction',
      description: 'A  Recurrent neural network model which is used to predict the time series by anaylizing the sales of the product.',
      image: 'https://i.pinimg.com/736x/80/b3/92/80b392b2022ba48ef01f22973b6d66df.jpg',
      technologies: ['Python', 'Tensorflow', 'Recurrent Neural Network', 'Pandas'],
      githubLink: "https://github.com/hariThorve/neuralNetworkProjects.git",
      demoLink: null,
    },
    {
      title: 'Digit Classification',
      description: 'Handwritten Digit classification uses Convolutional Neural Network to classify the digit present in the image.',
      image: 'https://i.pinimg.com/736x/3b/c0/7b/3bc07bbb0434886a2cfa766a70838fd2.jpg',
      technologies: ['Python', 'Tensorflow', 'Convolutional Neural Network', 'Pandas'],
      githubLink: "https://github.com/hariThorve/neuralNetworkProjects.git",
      demoLink: null,
    },
    {
      title: 'House Price Prediction',
      description: 'A tool that predicts the price of a house using a linear regression model.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'Linear Regression', 'Pandas', 'Scikit-learn'],
      githubLink: 'https://github.com/hariThorve/real_estate_prediction.git',
      demoLink: null,
    },
    {
      title: 'Spam Email Detection',
      description: 'Created a Logistic Regression model to predict whether the email is spam or ham.',
      image: 'https://i.pinimg.com/736x/b7/5d/ba/b75dba4d70c900d60a6267b5c9a8d291.jpg',
      technologies: ['Python', 'Logistic Regression', 'Scikit-Learn', 'Pandas'],
      githubLink: 'https://github.com/hariThorve/SpamEmailDetection.git',
      demoLink: null,
    },
    {
      title: 'Customer Ad Effectiveness Prediction',
      description: 'A Logistic Regression model to predict whether the adds were effective or not.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'Logistic Regression', 'Scikit-Learn', 'Pandas'],
      githubLink: 'https://github.com/hariThorve/machineLearningProjects.git',
      demoLink: null,
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Based on the data, the model will predict whether the employee is going to leave or not.',
      image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Python', 'Random Forest', 'Scikit-Learn', 'Pandas'],
      githubLink: 'https://github.com/hariThorve/machineLearningProjects.git',
      demoLink: null,
    },
    {
      title: 'IRIS Classification',
      description: 'Classify the typr of flower based on various properties using image classification with Naive Bayes.',
      image: 'https://i.pinimg.com/736x/65/d9/56/65d956278a83e18f0d0fb9ae7fdbdcab.jpg',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Naive Bayes Classifier'],
      githubLink: 'https://github.com/hariThorve/machineLearningProjects.git',
      demoLink: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Projects" 
          subtitle="Showcasing my expertise through real-world applications"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;