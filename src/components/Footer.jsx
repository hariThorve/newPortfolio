import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: GitHub, href: 'https://github.com/hariThorve', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hariprasad-thorve-b36071271', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/HariThorve', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hariprasadthorve@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300 text-center md:text-left">
              © {currentYear} HariprasadDev. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-5">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;