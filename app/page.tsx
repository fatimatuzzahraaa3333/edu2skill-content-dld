import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "edu2skill - Learn Web Development & Computer Skills",
  description:
    "edu2skill provides high-quality tutorials on HTML, CSS, JavaScript, React, Next.js, web deployment, and computer courses for beginners and professionals.",
  keywords: [
    "HTML tutorials",
    "CSS tutorials",
    "React tutorials",
    "Next.js tutorials",
    "Web Development",
    "Computer Courses",
    "Learn Programming",
  ],
  openGraph: {
    title: "edu2skill – Learn Web Development & Computer Skills",
    description:
      "Step-by-step tutorials on modern web technologies and computer skills.",
    url: "https://edu2skill.vercel.app",
    siteName: "edu2skill",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug md:leading-tight">
            Empowering your Career through Skill Development
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Are you ready to enhance your IT and programming skills? At edu2skill, we offer comprehensive tutorials to help you learn and grow. Whether you’re a beginner or an experienced developer, our tutorials provide step-by-step guidance to make learning easy and efficient.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn-primary"><Link href="/courses">Start Learning</Link></button>
            <button className="btn-primary btn-outline"><Link href="/tutorials">View Tutorials</Link></button>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Popular Tutorials
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <TutorialCard
              title="HTML & CSS"
              description="Build strong foundations with semantic HTML and modern CSS."
              link="/tutorials/html"
            />
            <TutorialCard
              title="React.js"
              description="Learn component-based development and hooks."
              link="/tutorials/react"
            />
            <TutorialCard
              title="Next.js"
              description="Create fast, SEO-optimized production websites."
              link="/tutorials/nextjs"
            />
          </div>
        </div>
      </section>

      {/* Why edu2skill */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Why Learn with edu2skill?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            edu2skill focuses on practical learning, modern tools, and
            industry-relevant skills. Each tutorial is designed to be simple,
            structured, and beginner-friendly while remaining valuable for
            professionals.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Start Your Learning Journey Today
          </h2>
          <button className="btn-primary">
            <Link href="/tutorials">Explore Tutorials</Link>
          </button>
        </div>
      </section>
    </main>
  );
}

function TutorialCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={link}
        className="text-black font-medium hover:underline"
      >
        Read Tutorials →
      </Link>
    </div>
  );
}
