export type Blog = {
  title: string;
  description: string;
  slug: string;
  category: string;
  date: string;
};

const blogs: Blog[] = [
  {
    title: "How HTML Works",
    description:
      "Understand how HTML structures web pages and how browsers interpret it.",
    slug: "how-html-works",
    category: "web-development",
    date: "2024-01-10",
  },
  {
    title: "CSS Flexbox Guide",
    description:
      "A practical guide to mastering CSS Flexbox layouts.",
    slug: "css-flexbox-guide",
    category: "web-development",
    date: "2024-01-15",
  },
  {
    title: "React Components Best Practices",
    description:
      "Best practices for building reusable React components.",
    slug: "react-components-best-practices",
    category: "react-nextjs",
    date: "2024-02-01",
  },
  {
    title: "Next.js Routing Explained",
    description:
      "A complete guide to routing in Next.js App Router.",
    slug: "nextjs-routing-explained",
    category: "react-nextjs",
    date: "2024-02-05",
  },
];

export function getAllBlogs(): Blog[] {
  return blogs;
}

export function getBlogsByCategory(category: string): Blog[] {
  return blogs.filter((blog) => blog.category === category);
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}
