import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, BookOpen, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COURSES } from '@/src/constants';
import CourseCard from '@/src/components/CourseCard';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section id="hero-section" className="relative min-h-[90vh] flex items-center pt-24 pb-20 lg:pt-20 lg:pb-32 px-6 lg:px-12 geometric-pattern bg-white">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            id="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 text-center lg:text-left"
          >
            <div id="hero-badge" className="inline-flex items-center space-x-3 mb-8 px-4 py-2 bg-academic-accent/5 rounded-sm border border-academic-accent/10">
              <GraduationCap className="text-academic-accent w-5 h-5" />
              <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-accent">
                Premium Mathematics Education
              </span>
            </div>
            
            <h1 id="hero-title" className="font-sans text-4xl sm:text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 uppercase">
              The Art of <br />
              <span className="text-academic-accent">Mathematical</span> <br />
              Clarity.
            </h1>
            
            <p id="hero-description" className="font-serif text-lg sm:text-xl lg:text-2xl text-academic-gray-dark max-w-xl lg:mx-0 mx-auto leading-relaxed mb-12 italic">
              "We don't just teach equations; we unveil the geometric intuition and logical beauty behind the universe's language."
            </p>
            
            <div id="hero-actions" className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
              <Link 
                to="/courses"
                id="hero-cta-browse"
                className="px-10 py-5 bg-academic-accent text-white font-sans text-sm font-bold tracking-widest uppercase hover:bg-academic-accent-light transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center group"
              >
                Browse Courses <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link 
                to="/philosophy"
                id="hero-cta-philosophy"
                className="px-10 py-5 bg-white text-academic-accent border border-academic-gray font-sans text-sm font-bold tracking-widest uppercase hover:bg-academic-gray transition-all flex items-center justify-center"
              >
                Our Philosophy
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            id="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] bg-academic-accent/5 border border-academic-gray relative overflow-hidden group">
              {/* Professional teacher in online classroom portrait */}
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Elias Thorne"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-academic-accent/10 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="glass-card p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="font-serif italic text-academic-accent text-3xl block mb-2">∫</span>
                  <p className="font-sans font-bold text-xs tracking-widest uppercase text-academic-gray-dark">
                    Featured Instructor
                  </p>
                  <h3 className="font-sans font-bold text-2xl mb-2">Dr. Elias Thorne</h3>
                  <p className="font-serif text-sm text-academic-gray-dark leading-relaxed">
                    Former MIT Research Fellow specializing in Topology and Visual Calculus.
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-academic-accent/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-academic-accent/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Course Grid Section */}
      <section id="curriculum-section" className="py-20 lg:py-32 px-6 lg:px-12 bg-academic-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <span id="curriculum-label" className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-accent mb-4 block">
                The Curriculum
              </span>
              <h2 id="curriculum-title" className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight uppercase mb-6">
                Master the <br />Foundations.
              </h2>
              <p id="curriculum-description" className="font-serif text-lg text-academic-gray-dark leading-relaxed">
                Our courses are designed for those who seek mastery, not just memorization. Each module is a curated journey through mathematical landscapes.
              </p>
            </div>
            <Link 
              to="/courses"
              id="curriculum-view-all"
              className="mt-8 md:mt-0 font-sans text-xs font-bold tracking-widest uppercase text-academic-accent hover:translate-x-2 transition-transform flex items-center"
            >
              View All Courses <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
          
          <div id="course-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {COURSES.slice(0, 3).map((course) => (
              <div key={course.id} id={`course-card-wrapper-${course.id}`}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Philosophy Section */}
      <section id="philosophy-section" className="py-20 lg:py-32 px-6 lg:px-12 bg-white border-y border-academic-gray">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div id="philosophy-pillars" className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {[
                { id: "visual-proofs", icon: BookOpen, title: "Visual Proofs", desc: "We prioritize geometric intuition over rote algebraic manipulation." },
                { id: "small-cohorts", icon: Users, title: "Small Cohorts", desc: "Direct access to instructors through our premium community forums." },
                { id: "rigorous-depth", icon: Award, title: "Rigorous Depth", desc: "Graduate-level concepts explained with undergraduate-level clarity." },
                { id: "career-impact", icon: GraduationCap, title: "Career Impact", desc: "Master the math that powers modern engineering and AI." }
              ].map((item, i) => (
                <div key={i} id={`philosophy-pillar-${item.id}`} className="glass-card p-6 lg:p-8 hover:border-academic-accent transition-colors">
                  <item.icon className="text-academic-accent mb-4" size={24} />
                  <h4 className="font-sans font-bold text-sm tracking-widest uppercase mb-2">{item.title}</h4>
                  <p className="font-serif text-sm text-academic-gray-dark leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div id="philosophy-text" className="order-1 lg:order-2">
            <span id="philosophy-label" className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-accent mb-4 block">
              The Philosophy
            </span>
            <h2 id="philosophy-title" className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight uppercase mb-8">
              Academic Zen <br />in Practice.
            </h2>
            <div id="philosophy-description" className="space-y-6 font-serif text-lg text-academic-gray-dark leading-relaxed">
              <p>
                At The Math Collective, we believe that the complexity of mathematics is often a byproduct of poor communication, not inherent difficulty.
              </p>
              <p>
                Our "Academic Zen" teaching method strips away the noise of traditional textbooks. We focus on the "Why" before the "How," using high-fidelity visualizations to anchor abstract concepts in reality.
              </p>
              <p id="philosophy-quote" className="italic border-l-4 border-academic-accent pl-6 py-2 text-academic-ink">
                "Mathematics is the music of reason. To understand it is to hear the harmony of the universe."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Bio Section */}
      <section id="instructor-section" className="py-20 lg:py-32 px-6 lg:px-12 bg-academic-bg">
        <div className="max-w-5xl mx-auto text-center">
          <div id="instructor-avatar" className="w-24 h-24 lg:w-32 lg:h-32 bg-academic-accent/10 rounded-full mx-auto mb-8 lg:mb-12 flex items-center justify-center overflow-hidden border border-academic-gray">
             <img 
               src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400" 
               alt="Dr. Elias Thorne"
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
          <span id="instructor-label" className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-accent mb-4 block">
            Lead Instructor
          </span>
          <h2 id="instructor-name" className="font-sans text-3xl lg:text-5xl font-bold uppercase mb-8">Dr. Elias Thorne</h2>
          <p id="instructor-bio" className="font-serif text-lg lg:text-xl text-academic-gray-dark leading-relaxed max-w-3xl mx-auto mb-12">
            With over 15 years of experience in research and pedagogy, Elias has dedicated his life to making complex mathematics accessible. His visual approach to Calculus and Topology has been adopted by thousands of students worldwide.
          </p>
          <div id="instructor-stats" className="flex justify-center space-x-6 sm:space-x-12">
            <div id="stat-students">
              <p className="font-sans font-bold text-2xl sm:text-3xl text-academic-accent">15k+</p>
              <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-gray-dark">Students</p>
            </div>
            <div id="stat-lectures">
              <p className="font-sans font-bold text-2xl sm:text-3xl text-academic-accent">400+</p>
              <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-gray-dark">Lectures</p>
            </div>
            <div id="stat-rating">
              <p className="font-sans font-bold text-2xl sm:text-3xl text-academic-accent">4.9/5</p>
              <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-gray-dark">Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-20 lg:py-32 px-6 lg:px-12 bg-academic-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 id="cta-title" className="font-sans text-3xl sm:text-5xl lg:text-7xl font-bold uppercase mb-8 leading-tight">
            Begin Your Journey <br />into Clarity.
          </h2>
          <p id="cta-description" className="font-serif text-lg lg:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Join The Math Collective today and gain lifetime access to our premium library of mathematical insights.
          </p>
          <Link 
            to="/courses"
            id="cta-enroll-button"
            className="inline-block px-10 py-5 sm:px-12 sm:py-6 bg-white text-academic-accent font-sans text-sm font-bold tracking-widest uppercase hover:bg-academic-gray transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            Explore the Curriculum
          </Link>
        </div>
      </section>
    </div>
  );
}
