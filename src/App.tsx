import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Philosophy from './pages/Philosophy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "courses/:id", element: <CourseDetail /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "contact", element: <Contact /> },
      { path: "philosophy", element: <Philosophy /> },
      { path: "*", element: <Home /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
