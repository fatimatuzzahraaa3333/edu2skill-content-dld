import htmlIcon from '../../../../public/images/html_icon.png';
import cssIcon from '../../../../public/images/css_icon.png';
import jsIcon from '../../../../public/images/js_icon.png';
import tailwindcssIcon from '../../../../public/images/tailwindcss_icon.png';
import reactjsIcon from '../../../../public/images/reactjs.png';

import { StaticImageData } from "next/image";

export type Tutorial = {
  title: string;
  description: string;
  slug: string;
  turorialImage: StaticImageData;
  level?: "Beginner" | "Intermediate" | "Advanced";
  sizeIconX: number;
  sizeIconY: number;
};

const tutorials: Tutorial[] = [
  {
    title: "Integrate Tailwind CSS with React Application - Step-by-Step Guide",
    description:
      "Learn how to integrate Tailwind CSS with a React application to build modern, responsive, and utility-first user interfaces efficiently. This tutorial covers setup, configuration, and best practices.",
    slug: "integrate-tailwind-css-with-react-application",
    level: "Beginner",
    turorialImage: htmlIcon,
    sizeIconX: 80,
    sizeIconY: 80,
  },
  {
    title: "Set Up React Development Environment Using Vite",
    description:
      "This tutorial explains how to set up a fast and modern React development environment using Vite, including project initialization, configuration, and development workflow optimization.",
    slug: "react-environment-setup-with-vite",
    level: "Intermediate",
    turorialImage: cssIcon,
    sizeIconX: 80,
    sizeIconY: 80,
  },
  {
    title: "MongoDB Installation Guide for Windows, macOS, and Linux",
    description:
      "A complete guide to installing MongoDB on Windows, macOS, and Linux systems. Learn how to configure MongoDB, verify installation, and prepare it for backend development.",
    slug: "mongodb-installation-guide",
    level: "Intermediate",
    turorialImage: tailwindcssIcon,
    sizeIconX: 80,
    sizeIconY: 80,
  },
  {
    title: "Integrate Express, Mongoose, and Nodemon with React Application",
    description:
      "Learn how to integrate Express.js, Mongoose, and Nodemon with a React application to build a full-stack MERN project, including backend setup and database connectivity.",
    slug: "integrate-express-mongoose-nodemon-with-react",
    level: "Intermediate",
    turorialImage: jsIcon,
    sizeIconX: 80,
    sizeIconY: 80,
  },
  {
    title: "Create Encrypted JWT Tokens for Secure Authentication",
    description:
      "This tutorial explains how to create encrypted JSON Web Tokens (JWT) for secure authentication and authorization in web applications, focusing on best practices and security concepts.",
    slug: "create-encrypted-jwt-token",
    level: "Intermediate",
    turorialImage: reactjsIcon,
    sizeIconX: 200,
    sizeIconY: 200,
  },
];

export function getAllTutorials(): Tutorial[] {
  return tutorials;
}

export function getCourseBySlug(slug: string): Tutorial | undefined {
  return tutorials.find((t) => t.slug === slug);
}
