import { useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock 
} from 'lucide-react';

const Contact = () => {
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
    
    const section = document.querySelector('#contact');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: 'Pune Maharashtra, India',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hariprasadthorve@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 7385284338',
    },
    {
      icon: Clock,
      title: 'Availability',
      details: 'Monday-Friday, 9AM-6PM IST',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Let's connect and discuss how we can work together"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-center">
          <div 
            className={`transition-all duration-1000 mx-auto ${
              animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ maxWidth: 500 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                Looking for a motivated engineering student with AI/ML skills?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm interested in AI research, machine learning projects, and software development opportunities where I can apply my skills in data science and programming.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Whether you have a project in mind or just want to connect, I'd love to hear from you!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;