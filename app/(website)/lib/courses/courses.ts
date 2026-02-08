import htmlIcon from '../../../../public/images/html_icon.png';
import dldIcon from '../../../../public/images/dld_icon.png';
import cssIcon from '../../../../public/images/css_icon.png';
import jsIcon from '../../../../public/images/js_icon.png';
import tailwindcssIcon from '../../../../public/images/tailwindcss_icon.png';
import reactjsIcon from '../../../../public/images/reactjs.png';
import nextjsIcon from '../../../../public/images/nextjs.png';


import { StaticImageData } from "next/image";

export type Course = {
  title: string;
  description: string;
  slug: string;
  courseImage: StaticImageData;
  level?: "Beginner" | "Intermediate" | "Advanced";
  sizeIconX: number;
  sizeIconY: number;
};

const courses: Course[] = [
  {
    title: "Digital Logic Design",
    description:
      "Learn Digital Logic Design from basics to advanced, covering number systems, Boolean algebra, logic gates, Karnaugh maps, and combinational and sequential circuits to design efficient, reliable digital systems.",
    slug: "dld",
    level: "Beginner",
    courseImage: dldIcon,
    sizeIconX: 120,
    sizeIconY: 120,
  },
  {
    title: "HyperText Markup Language (HTML)",
    description:
      "Learn HTML from basics to advanced, the core language used to structure modern web pages. This course covers semantic HTML, forms, multimedia, and accessibility to build SEO-friendly and well-structured websites.",
    slug: "html",
    level: "Beginner",
    courseImage: htmlIcon,
    sizeIconX: 80,
    sizeIconY: 80,
  },
  {
    title: "Cascading Style Sheets (CSS)",
    description:
      "Master CSS for responsive and modern web design. This course explains layouts, Flexbox, Grid, animations, and best styling practices to create visually appealing and mobile-friendly websites.",
    slug: "css",
    level: "Intermediate",
    courseImage: cssIcon,
    sizeIconX: 80,
    sizeIconY: 80,
  },
  {
    title: "Tailwind CSS",
    description:
      "Explore Tailwind CSS, a utility-first CSS framework for rapid UI development. Learn how to build responsive, clean, and scalable designs efficiently without writing custom CSS from scratch.",
    slug: "tailwind-css",
    level: "Intermediate",
    courseImage: tailwindcssIcon,
    sizeIconX: 80,
    sizeIconY: 80,
  },
  {
    title: "JavaScript Basics",
    description:
      "Understand JavaScript fundamentals and advanced concepts to create interactive and dynamic web applications. This course covers ES6+, DOM manipulation, events, APIs, and real-world coding examples.",
    slug: "javascript-basics",
    level: "Intermediate",
    courseImage: jsIcon,
    sizeIconX: 80,
    sizeIconY: 80,
  },
  {
    title: "ReactJS with Vite + CustomCSS",
    description:
      "Build high-performance React applications using Vite and custom CSS. Learn component-based architecture, hooks, state management, and fast development workflows for modern frontend projects.",
    slug: "reactjs-vite-custom-css",
    level: "Intermediate",
    courseImage: reactjsIcon,
    sizeIconX: 200,
    sizeIconY: 200,
  },
  {
    title: "React with Tailwind CSS",
    description:
      "Develop modern React applications styled with Tailwind CSS. This course focuses on reusable components, responsive UI design, and clean frontend architecture for production-ready web apps.",
    slug: "reactjs-vite-tailwind-css",
    level: "Intermediate",
    courseImage: reactjsIcon,
    sizeIconX: 200,
    sizeIconY: 200,
  },
  {
    title: "NextJS with TypeScript",
    description:
      "Learn Next.js for full-stack and SEO-optimized web applications. This course covers routing, server-side rendering (SSR), static site generation (SSG), API routes, and performance optimization for scalable websites.",
    slug: "nextjs-typescript",
    level: "Intermediate",
    courseImage: nextjsIcon,
    sizeIconX: 200,
    sizeIconY: 200,
  },
];

export function getAllCourses(): Course[] {
  return courses;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((t) => t.slug === slug);
}
