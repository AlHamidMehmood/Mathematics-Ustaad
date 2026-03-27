import { motion } from 'motion/react';
import { Play, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Course } from '@/src/constants';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="glass-card group flex flex-col h-full"
    >
      <div className="relative aspect-video overflow-hidden bg-academic-accent/5">
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
            <Play className="text-academic-accent fill-academic-accent ml-1" size={20} />
          </div>
        </div>
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-sans font-bold tracking-widest uppercase text-academic-accent border border-academic-gray">
            {course.category}
          </span>
        </div>
        {/* Placeholder for course image */}
        <div className="w-full h-full bg-academic-accent/10 flex items-center justify-center">
           <span className="font-serif italic text-academic-accent/20 text-4xl">∫</span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-sans font-bold text-xl leading-tight group-hover:text-academic-accent transition-colors">
            {course.title}
          </h3>
          <span className="font-sans font-bold text-lg text-academic-accent">
            ${course.price}
          </span>
        </div>
        
        <p className="font-serif text-academic-gray-dark text-sm leading-relaxed mb-8 flex-grow">
          {course.description}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-academic-gray">
          <div className="flex items-center text-academic-gray-dark space-x-4">
            <div className="flex items-center text-[10px] font-sans font-bold tracking-widest uppercase">
              <Clock size={14} className="mr-1.5" />
              {course.duration}
            </div>
          </div>
          <Link 
            to={`/courses/${course.id}`}
            className="flex items-center text-[10px] font-sans font-bold tracking-widest uppercase text-academic-accent hover:translate-x-1 transition-transform"
          >
            Learn More <ArrowRight size={14} className="ml-1.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
