import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { COURSES } from '@/src/constants';
import CourseCard from '@/src/components/CourseCard';
import { cn } from '@/src/lib/utils';

export default function Courses() {
  const [filter, setFilter] = useState<'All' | 'Calculus' | 'Algebra' | 'Statistics' | 'Geometry'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Calculus', 'Algebra', 'Statistics', 'Geometry'];

  const filteredCourses = COURSES.filter(course => {
    const matchesFilter = filter === 'All' || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div id="courses-page" className="bg-academic-bg min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div id="courses-header" className="mb-12 lg:mb-20 text-center max-w-3xl mx-auto">
          <span id="courses-label" className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-accent mb-4 block">
            The Shop
          </span>
          <h1 id="courses-title" className="font-sans text-4xl sm:text-6xl lg:text-7xl font-bold uppercase mb-8 leading-tight">
            The Curriculum.
          </h1>
          <p id="courses-description" className="font-serif text-lg lg:text-xl text-academic-gray-dark leading-relaxed">
            Explore our curated selection of premium mathematics courses. Each module is designed to provide deep structural understanding through visual storytelling.
          </p>
        </div>

        {/* Filters & Search */}
        <div id="courses-controls" className="flex flex-col lg:flex-row justify-between items-center mb-16 space-y-8 lg:space-y-0">
          <div id="category-filters" className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-button-${cat.toLowerCase()}`}
                onClick={() => setFilter(cat as any)}
                className={cn(
                  "px-6 py-2.5 font-sans text-[10px] font-bold tracking-widest uppercase border transition-all",
                  filter === cat 
                    ? "bg-academic-accent text-white border-academic-accent shadow-lg" 
                    : "bg-white text-academic-gray-dark border-academic-gray hover:border-academic-accent hover:text-academic-accent"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div id="search-container" className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-academic-gray-dark" size={18} />
            <input 
              id="course-search-input"
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white border border-academic-gray font-sans text-sm focus:outline-none focus:border-academic-accent transition-colors"
            />
          </div>
        </div>

        {/* Course Grid */}
        <motion.div 
          id="courses-grid-container"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                id={`course-card-wrapper-${course.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCourses.length === 0 && (
          <div id="no-results-container" className="py-32 text-center">
            <p className="font-serif text-2xl text-academic-gray-dark italic">
              No courses found matching your criteria.
            </p>
            <button 
              id="clear-filters-button"
              onClick={() => {setFilter('All'); setSearchQuery('');}}
              className="mt-8 font-sans text-xs font-bold tracking-widest uppercase text-academic-accent hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
