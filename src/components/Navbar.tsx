import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav id="main-navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-academic-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link id="nav-logo" to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-academic-accent flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="font-sans font-bold text-lg sm:text-xl tracking-tight uppercase">
              The Math Collective
            </span>
          </Link>

          {/* Desktop Nav */}
          <div id="desktop-nav" className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                id={`nav-link-${link.name.toLowerCase()}`}
                to={link.path}
                className={cn(
                  "font-sans text-sm font-medium tracking-widest uppercase transition-colors hover:text-academic-accent",
                  location.pathname === link.path ? "text-academic-accent" : "text-academic-gray-dark"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="h-0.5 bg-academic-accent mt-1"
                  />
                )}
              </Link>
            ))}
            <Link 
              to="/courses"
              id="nav-enroll-button"
              className="px-6 py-2.5 bg-academic-accent text-white font-sans text-sm font-bold tracking-widest uppercase hover:bg-academic-accent-light transition-colors"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            id="mobile-menu-toggle"
            className="md:hidden text-academic-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          id="mobile-nav-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-academic-gray px-6 py-8 space-y-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              id={`mobile-nav-link-${link.name.toLowerCase()}`}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block font-sans text-lg font-medium text-academic-gray-dark hover:text-academic-accent"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/courses"
            id="mobile-nav-enroll-button"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-4 bg-academic-accent text-white font-sans font-bold tracking-widest uppercase"
          >
            Enroll Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
