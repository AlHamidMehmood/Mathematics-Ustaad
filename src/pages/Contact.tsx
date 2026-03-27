import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact-page" className="bg-academic-bg min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Info */}
          <div id="contact-info">
            <span id="contact-label" className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-accent mb-4 block">
              Support
            </span>
            <h1 id="contact-title" className="font-sans text-4xl sm:text-6xl lg:text-7xl font-bold uppercase mb-8 leading-tight">
              Get in <br />Touch.
            </h1>
            <p id="contact-description" className="font-serif text-lg lg:text-xl text-academic-gray-dark leading-relaxed mb-12 lg:mb-16">
              Have questions about our curriculum, pricing, or institutional access? Our team is here to help you find the right path.
            </p>

            <div id="contact-methods" className="space-y-12">
              <div id="method-email" className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white border border-academic-gray flex items-center justify-center rounded-sm text-academic-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs tracking-widest uppercase mb-1">Email Us</h4>
                  <p className="font-serif text-lg text-academic-ink">hello@mathcollective.edu</p>
                </div>
              </div>
              
              <div id="method-chat" className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white border border-academic-gray flex items-center justify-center rounded-sm text-academic-accent">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs tracking-widest uppercase mb-1">Live Chat</h4>
                  <p className="font-serif text-lg text-academic-ink">Available Mon-Fri, 9am-5pm EST</p>
                </div>
              </div>

              <div id="method-location" className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white border border-academic-gray flex items-center justify-center rounded-sm text-academic-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs tracking-widest uppercase mb-1">Headquarters</h4>
                  <p className="font-serif text-lg text-academic-ink">Cambridge, Massachusetts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            id="contact-form-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 lg:p-12"
          >
            <form id="contact-form" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-gray-dark">First Name</label>
                  <input 
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                    className="w-full bg-academic-bg border border-academic-gray px-6 py-4 font-sans text-sm focus:outline-none focus:border-academic-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-gray-dark">Last Name</label>
                  <input 
                    id="last-name"
                    name="last-name"
                    type="text"
                    required
                    className="w-full bg-academic-bg border border-academic-gray px-6 py-4 font-sans text-sm focus:outline-none focus:border-academic-accent transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-gray-dark">Email Address</label>
                <input 
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-academic-bg border border-academic-gray px-6 py-4 font-sans text-sm focus:outline-none focus:border-academic-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-gray-dark">Subject</label>
                <select 
                  id="subject"
                  name="subject"
                  className="w-full bg-academic-bg border border-academic-gray px-6 py-4 font-sans text-sm focus:outline-none focus:border-academic-accent transition-colors appearance-none"
                >
                  <option>Course Inquiry</option>
                  <option>Technical Support</option>
                  <option>Institutional Access</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-gray-dark">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full bg-academic-bg border border-academic-gray px-6 py-4 font-sans text-sm focus:outline-none focus:border-academic-accent transition-colors resize-none"
                />
              </div>

              <button 
                id="contact-submit-button"
                type="submit"
                className="w-full py-6 bg-academic-accent text-white font-sans text-sm font-bold tracking-widest uppercase hover:bg-academic-accent-light transition-all flex items-center justify-center group"
              >
                Send Message <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
