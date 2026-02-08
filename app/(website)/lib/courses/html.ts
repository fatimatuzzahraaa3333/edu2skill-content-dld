export type Html = {
  title: string;
  description: string;
  slug: string;
};

const courses_html: Html[] = [
  {
    title: "Basic Structure and Run Code",
    description:
      "Learn HTML from basics to advanced, the core language used to structure modern web pages. This course covers semantic HTML, forms, multimedia, and accessibility to build SEO-friendly and well-structured websites.",
    slug: "basic-structure-and-run-code",
  },
  {
    title: "Text Elements",
    description:
      "Master CSS for responsive and modern web design. This course explains layouts, Flexbox, Grid, animations, and best styling practices to create visually appealing and mobile-friendly websites.",
    slug: "css",
  },
  {
    title: "Lists",
    description:
      "Explore Tailwind CSS, a utility-first CSS framework for rapid UI development. Learn how to build responsive, clean, and scalable designs efficiently without writing custom CSS from scratch.",
    slug: "tailwind-css",
  },
  {
    title: "Links",
    description:
      "Understand JavaScript fundamentals and advanced concepts to create interactive and dynamic web applications. This course covers ES6+, DOM manipulation, events, APIs, and real-world coding examples.",
    slug: "javascript-basics",
  },
  {
    title: "Images",
    description:
      "Build high-performance React applications using Vite and custom CSS. Learn component-based architecture, hooks, state management, and fast development workflows for modern frontend projects.",
    slug: "reactjs-vite-custom-css",
  },
  {
    title: "Inline and Block Elements",
    description:
      "Develop modern React applications styled with Tailwind CSS. This course focuses on reusable components, responsive UI design, and clean frontend architecture for production-ready web apps.",
    slug: "reactjs-vite-tailwind-css",
  },
  {
    title: "Tables",
    description:
      "Learn Next.js for full-stack and SEO-optimized web applications. This course covers routing, server-side rendering (SSR), static site generation (SSG), API routes, and performance optimization for scalable websites.",
    slug: "nextjs-typescript",
  },
  {
    title: "Website Layout",
    description:
      "Learn Next.js for full-stack and SEO-optimized web applications. This course covers routing, server-side rendering (SSR), static site generation (SSG), API routes, and performance optimization for scalable websites.",
    slug: "nextjs-typescript1",
  },
];

export function getAllTopics4HTML(): Html[] {
  return courses_html;
}

export function getCourseBySlug(slug: string): Html | undefined {
  return courses_html.find((t) => t.slug === slug);
}
