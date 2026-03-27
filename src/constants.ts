export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'Calculus' | 'Algebra' | 'Statistics' | 'Geometry';
  instructor: string;
  duration: string;
  teaserUrl: string;
}

export const COURSES: Course[] = [
  {
    id: 'calc-3-visual',
    title: 'Calculus III: The Visual Series',
    description: 'A deep dive into multivariable calculus with a focus on geometric intuition and visual proofs.',
    price: 249,
    category: 'Calculus',
    instructor: 'Dr. Elias Thorne',
    duration: '12 Hours',
    teaserUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  {
    id: 'linear-algebra-mastery',
    title: 'Linear Algebra: Foundations of Intelligence',
    description: 'Master the mathematics behind modern AI. From vector spaces to singular value decomposition.',
    price: 199,
    category: 'Algebra',
    instructor: 'Dr. Elias Thorne',
    duration: '10 Hours',
    teaserUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  },
  {
    id: 'stats-for-scientists',
    title: 'Statistical Inference for Modern Science',
    description: 'Moving beyond p-values. A rigorous approach to Bayesian and frequentist statistics.',
    price: 179,
    category: 'Statistics',
    instructor: 'Prof. Sarah Chen',
    duration: '8 Hours',
    teaserUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    id: 'non-euclidean-geometry',
    title: 'Non-Euclidean Geometry: Curving Space',
    description: 'Explore the mathematics of curved surfaces and the foundations of general relativity.',
    price: 299,
    category: 'Geometry',
    instructor: 'Dr. Elias Thorne',
    duration: '15 Hours',
    teaserUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  }
];
