import { useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Hobbies from './sections/Hobbies';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { ThemeContext, ThemeProvider } from './utils/ThemeContext';

const AppContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;