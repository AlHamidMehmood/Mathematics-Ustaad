import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Play, Clock, BookOpen, CheckCircle, ArrowLeft, ShoppingCart } from 'lucide-react';
import { COURSES } from '@/src/constants';
import { useState } from 'react';

export default function CourseDetail() {
  const { id } = useParams();
  const course = COURSES.find(c => c.id === id);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-academic-bg">
        <div className="text-center">
          <h1 className="font-sans text-4xl font-bold uppercase mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-academic-accent font-sans text-xs font-bold tracking-widest uppercase hover:underline">
            Back to Curriculum
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id="course-detail-page" className="bg-academic-bg min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <Link 
          id="back-to-curriculum-link"
          to="/courses"
          className="inline-flex items-center text-[10px] font-sans font-bold tracking-widest uppercase text-academic-gray-dark hover:text-academic-accent transition-colors mb-12"
        >
          <ArrowLeft size={14} className="mr-2" /> Back to Curriculum
        </Link>

        <div id="course-detail-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Content */}
          <motion.div 
            id="course-info-section"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span id="course-category-label" className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-accent mb-4 block">
              {course.category}
            </span>
            <h1 id="course-title" className="font-sans text-3xl sm:text-5xl lg:text-7xl font-bold uppercase mb-8 leading-tight">
              {course.title}
            </h1>
            <p id="course-description" className="font-serif text-lg lg:text-xl text-academic-gray-dark leading-relaxed mb-12">
              {course.description}
            </p>

            <div id="course-meta" className="grid grid-cols-2 sm:flex sm:items-center sm:space-x-12 gap-6 lg:gap-12 mb-12">
              <div id="meta-instructor">
                <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-gray-dark mb-1">Instructor</p>
                <p className="font-serif text-lg text-academic-ink">{course.instructor}</p>
              </div>
              <div id="meta-duration">
                <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-gray-dark mb-1">Duration</p>
                <p className="font-serif text-lg text-academic-ink">{course.duration}</p>
              </div>
              <div id="meta-price">
                <p className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-gray-dark mb-1">Price</p>
                <p className="font-serif text-lg text-academic-accent font-bold">${course.price}</p>
              </div>
            </div>

            <div id="course-outcomes" className="space-y-8 mb-16">
              <h3 id="outcomes-title" className="font-sans font-bold text-xs tracking-widest uppercase text-academic-gray-dark border-b border-academic-gray pb-4">What you'll master</h3>
              <div id="outcomes-list" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Geometric intuition of abstract concepts",
                  "Rigorous proofs from first principles",
                  "Applications in modern engineering",
                  "Visual problem-solving techniques"
                ].map((item, i) => (
                  <div key={i} id={`outcome-item-${i}`} className="flex items-start space-x-3">
                    <CheckCircle className="text-academic-accent mt-1 flex-shrink-0" size={18} />
                    <p className="font-serif text-academic-gray-dark leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <button id="enroll-button" className="w-full py-6 bg-academic-accent text-white font-sans text-sm font-bold tracking-widest uppercase hover:bg-academic-accent-light transition-all flex items-center justify-center group shadow-xl">
              Enroll in Course <ShoppingCart className="ml-3" size={18} />
            </button>
          </motion.div>

          {/* Video Preview */}
          <div id="video-preview-sidebar" className="sticky top-32">
            <div className="glass-card overflow-hidden">
              <div id="video-container" className="relative aspect-video bg-academic-accent/10 flex items-center justify-center group">
                {isPlaying ? (
                  <video 
                    id="course-preview-video"
                    src={course.teaserUrl} 
                    controls 
                    autoPlay 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-academic-accent/5" />
                    <button 
                      id="play-teaser-button"
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110 z-10"
                    >
                      <Play className="text-academic-accent fill-academic-accent ml-1" size={32} />
                    </button>
                    <div className="absolute bottom-8 left-8 right-8 text-center z-10">
                      <p id="teaser-label" className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-accent bg-white/90 backdrop-blur-sm px-4 py-2 inline-block">
                        Watch 30-Second Teaser
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div id="curriculum-highlights" className="p-8">
                <h4 id="highlights-title" className="font-sans font-bold text-xs tracking-widest uppercase text-academic-gray-dark mb-6">Curriculum Highlights</h4>
                <div id="highlights-list" className="space-y-4">
                  {[
                    { title: "Introduction to Visual Thinking", duration: "12:45" },
                    { title: "The Geometry of Space", duration: "45:20" },
                    { title: "Advanced Problem Solving", duration: "38:15" }
                  ].map((lesson, i) => (
                    <div key={i} id={`highlight-item-${i}`} className="flex justify-between items-center py-3 border-b border-academic-gray last:border-0">
                      <div className="flex items-center space-x-4">
                        <span className="font-sans text-[10px] font-bold text-academic-gray-dark">0{i+1}</span>
                        <span className="font-serif text-sm text-academic-ink">{lesson.title}</span>
                      </div>
                      <span className="font-sans text-[10px] font-bold text-academic-gray-dark">{lesson.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
