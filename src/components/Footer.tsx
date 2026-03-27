import { GraduationCap, Mail, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-white border-t border-academic-gray pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link id="footer-logo" to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-academic-accent flex items-center justify-center rounded-sm">
                <GraduationCap className="text-white w-5 h-5" />
              </div>
              <span className="font-sans font-bold text-lg tracking-tight uppercase">
                The Math Collective
              </span>
            </Link>
            <p className="font-serif text-academic-gray-dark max-w-md leading-relaxed">
              Redefining mathematical education through clarity, intuition, and rigorous visual storytelling. Join a community of thinkers dedicated to the beauty of logic.
            </p>
          </div>
          
          <div id="footer-explore-section">
            <h4 className="font-sans font-bold text-xs tracking-widest uppercase mb-6">Explore</h4>
            <ul className="space-y-4 font-sans text-sm text-academic-gray-dark">
              <li><Link id="footer-link-courses" to="/courses" className="hover:text-academic-accent transition-colors">All Courses</Link></li>
              <li><Link id="footer-link-philosophy" to="/philosophy" className="hover:text-academic-accent transition-colors">Our Philosophy</Link></li>
              <li><Link id="footer-link-instructors" to="/instructors" className="hover:text-academic-accent transition-colors">Instructors</Link></li>
              <li><Link id="footer-link-faq" to="/faq" className="hover:text-academic-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div id="footer-connect-section">
            <h4 className="font-sans font-bold text-xs tracking-widest uppercase mb-6">Connect</h4>
            <div className="flex space-x-5 text-academic-gray-dark">
              <a id="footer-social-twitter" href="#" className="hover:text-academic-accent transition-colors"><Twitter size={20} /></a>
              <a id="footer-social-instagram" href="#" className="hover:text-academic-accent transition-colors"><Instagram size={20} /></a>
              <a id="footer-social-linkedin" href="#" className="hover:text-academic-accent transition-colors"><Linkedin size={20} /></a>
              <a id="footer-social-mail" href="#" className="hover:text-academic-accent transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        
        <div id="footer-bottom-bar" className="pt-8 border-t border-academic-gray flex flex-col md:flex-row justify-between items-center text-xs font-sans text-academic-gray-dark tracking-widest uppercase">
          <p>© 2026 The Math Collective. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a id="footer-link-privacy" href="#" className="hover:text-academic-accent transition-colors">Privacy Policy</a>
            <a id="footer-link-terms" href="#" className="hover:text-academic-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
