import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abo Bakar Aslam | Curriculum Vitae",
  description:
    "Curriculum Vitae of Abo Bakar Aslam – Computer Science Instructor and Full Stack Web Developer",
};

export default function AuthorCVPage() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <header className="border-b pb-6 mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Abo Bakar Aslam
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Computer Science Instructor | Full Stack Web Developer
          </p>
          <div className="text-sm text-gray-600 mt-3 space-y-1">
            <p>Email: abobakaraslam@example.com</p>
            <p>Location: Punjab, Pakistan</p>
            <p>
              Expertise: Web Technologies, React, Next.js, MongoDB, Machine Learning
            </p>
          </div>
        </header>

        {/* Profile */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Profile</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a dedicated Computer Science instructor with strong industry
            experience in full-stack web development. My professional focus
            lies in building scalable, high-performance web applications using
            modern JavaScript frameworks and teaching web technologies at
            university level with a practical, industry-oriented approach.
          </p>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Master’s Degree in Computer Science</strong><br />
              University of Gujrat, Punjab, Pakistan
            </li>
            <li>
              <strong>Bachelor’s Degree in Computer Science</strong><br />
              Punjab, Pakistan
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Professional Experience</h2>
          <div className="space-y-5 text-gray-700">
            <div>
              <h3 className="font-semibold">
                Computer Science Instructor – University of Gujrat
              </h3>
              <p className="text-sm text-gray-600">Present</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Teaching Web Technologies, React, and Modern JavaScript</li>
                <li>Designing course outlines, CLOs, and assessment mappings</li>
                <li>Guiding students in academic and industry-oriented projects</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">
                Full Stack Web Developer
              </h3>
              <p className="text-sm text-gray-600">Industry Experience</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Built applications using React, Next.js, Vue.js</li>
                <li>Worked with MongoDB Atlas and REST APIs</li>
                <li>Deployed applications using Vercel and cloud platforms</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <ul className="list-disc ml-6 space-y-1">
              <li>HTML5, CSS3, Tailwind CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js, Next.js</li>
            </ul>
            <ul className="list-disc ml-6 space-y-1">
              <li>TypeScript</li>
              <li>MongoDB, REST APIs</li>
              <li>Machine Learning (Foundational)</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Selected Projects</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Educational platform built with Next.js and Tailwind CSS</li>
            <li>Full-stack applications using React and MongoDB Atlas</li>
            <li>Portfolio projects integrating ML concepts</li>
          </ul>
        </section>

      </div>
    </section>
  );
}
