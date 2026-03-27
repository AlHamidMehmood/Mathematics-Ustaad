import { motion } from 'motion/react';
import { Play, Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { COURSES } from '@/src/constants';

export default function Dashboard() {
  // Mocking purchased courses
  const purchasedCourses = COURSES.slice(0, 2);

  return (
    <div id="dashboard-page" className="bg-academic-bg min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div id="dashboard-header" className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-20">
          <div id="dashboard-welcome">
            <span id="dashboard-label" className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-accent mb-4 block">
              Student Portal
            </span>
            <h1 id="dashboard-title" className="font-sans text-3xl sm:text-5xl lg:text-6xl font-bold uppercase mb-4 leading-tight">
              Your Library.
            </h1>
            <p id="dashboard-subtitle" className="font-serif text-lg text-academic-gray-dark italic">
              Welcome back, Student. Continue your journey into mathematical clarity.
            </p>
          </div>
          <div id="dashboard-stats" className="mt-8 md:mt-0 flex items-center space-x-8">
            <div id="stat-courses-count" className="text-center">
              <p className="font-sans font-bold text-3xl text-academic-accent">2</p>
              <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-gray-dark">Courses</p>
            </div>
            <div id="stat-lessons-count" className="text-center">
              <p className="font-sans font-bold text-3xl text-academic-accent">14</p>
              <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-gray-dark">Lessons</p>
            </div>
          </div>
        </div>

        <div id="dashboard-content-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div id="active-courses-section" className="lg:col-span-2 space-y-12">
            <h2 id="active-courses-title" className="font-sans text-xs font-bold tracking-widest uppercase text-academic-gray-dark border-b border-academic-gray pb-4 mb-8">
              Active Courses
            </h2>
            
            {purchasedCourses.map((course) => (
              <motion.div 
                key={course.id}
                id={`active-course-card-${course.id}`}
                whileHover={{ x: 10 }}
                className="glass-card p-8 flex flex-col md:flex-row gap-8 items-center group cursor-pointer"
              >
                <div id={`course-preview-${course.id}`} className="w-full md:w-48 aspect-video bg-academic-accent/10 flex items-center justify-center relative overflow-hidden">
                  <Play className="text-academic-accent z-10" size={32} />
                  <div className="absolute inset-0 bg-academic-accent/5 group-hover:bg-academic-accent/10 transition-colors" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 id={`course-title-${course.id}`} className="font-sans font-bold text-2xl group-hover:text-academic-accent transition-colors">
                      {course.title}
                    </h3>
                    <span id={`course-progress-label-${course.id}`} className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-gray-dark">
                      65% Complete
                    </span>
                  </div>
                  <p id={`course-next-lesson-${course.id}`} className="font-serif text-sm text-academic-gray-dark mb-6">
                    Next Lesson: The Fundamental Theorem of Line Integrals
                  </p>
                  
                  <div id={`course-progress-bar-bg-${course.id}`} className="w-full h-1 bg-academic-gray mb-6">
                    <div id={`course-progress-bar-fill-${course.id}`} className="h-full bg-academic-accent w-[65%]" />
                  </div>
                  
                  <button id={`resume-button-${course.id}`} className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-accent flex items-center hover:translate-x-2 transition-transform">
                    Resume Lecture <ArrowRight size={14} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div id="dashboard-sidebar" className="space-y-12">
            <div id="recent-activity-section">
              <h2 id="recent-activity-title" className="font-sans text-xs font-bold tracking-widest uppercase text-academic-gray-dark border-b border-academic-gray pb-4 mb-8">
                Recent Activity
              </h2>
              <div id="activity-list" className="space-y-6">
                {[
                  { id: "activity-1", action: "Watched", item: "Vector Fields", time: "2 hours ago" },
                  { id: "activity-2", action: "Completed", item: "Quiz: Divergence", time: "Yesterday" },
                  { id: "activity-3", action: "Downloaded", item: "Visual Notes: Calc III", time: "2 days ago" }
                ].map((activity, i) => (
                  <div key={i} id={activity.id} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-academic-accent rounded-full mt-1.5" />
                    <div>
                      <p className="font-sans text-sm font-bold tracking-tight">
                        {activity.action} <span className="text-academic-accent">{activity.item}</span>
                      </p>
                      <p className="font-serif text-xs text-academic-gray-dark italic">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="office-hours-card" className="glass-card p-8 bg-academic-accent text-white">
              <h3 id="office-hours-title" className="font-sans font-bold text-lg mb-4">Office Hours</h3>
              <p id="office-hours-description" className="font-serif text-sm text-white/70 mb-6 leading-relaxed">
                Join Dr. Thorne for a live Q&A session this Friday at 4:00 PM EST.
              </p>
              <button id="register-office-hours-button" className="w-full py-3 bg-white text-academic-accent font-sans text-[10px] font-bold tracking-widest uppercase hover:bg-academic-gray transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
