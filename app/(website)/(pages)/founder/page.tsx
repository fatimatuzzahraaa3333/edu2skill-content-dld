import Link from "next/link";

export const metadata = {
  title: "Founder | edu2skill",
  description:
    "Meet Abo Bakar Aslam — founder of edu2skill, computer science educator, and full-stack developer.",
};

export default function FounderPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ───────── Header ───────── */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Founder
          </h1>
          <p className="text-gray-600">
            Academic leadership, technical expertise, and a vision for
            skill-oriented education
          </p>
        </div>

        {/* ───────── Profile Section ───────── */}
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full border flex items-center justify-center text-gray-400">
              Profile Photo
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-5">
            <h2 className="text-2xl font-semibold">
              Abo Bakar Aslam
            </h2>

            <p className="text-gray-600">
              Abo Bakar Aslam is a computer science instructor, researcher,
              and full-stack web developer with a strong academic background
              and practical industry experience.
            </p>

            <p className="text-gray-600">
              He teaches web technologies, software engineering, and
              computer science courses at university level, while also
              working with modern frameworks such as React, Next.js,
              and backend technologies.
            </p>

            <p className="text-gray-600">
              edu2skill reflects his commitment to structured learning,
              conceptual clarity, and career-oriented skill development.
            </p>

            {/* Expertise */}
            <div>
              <h3 className="font-semibold mb-3">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-3">
                <Tag text="Web Development" />
                <Tag text="Next.js & React" />
                <Tag text="Computer Science" />
                <Tag text="Machine Learning" />
                <Tag text="Digital Logic Design" />
                <Tag text="Academic Instruction" />
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/abobakaraslam"
                target="_blank"
                className="px-5 py-2 border rounded-md hover:bg-gray-100 transition"
              >
                GitHub
              </Link>

              <Link
                href="/contact"
                className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* ───────── Teaching Philosophy ───────── */}
        <Section title="Teaching Philosophy">
          <p className="text-gray-600">
            Effective learning is built on conceptual understanding,
            real-world application, and continuous practice. My teaching
            approach emphasizes clarity, problem-solving, and bridging
            theory with industry demands.
          </p>
        </Section>

        {/* ───────── Publications & Research ───────── */}
        <Section title="Publications & Research">
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Research in optimization, machine learning, and networking</li>
            <li>Peer-reviewed journal and conference contributions</li>
            <li>Ongoing research focused on performance-aware systems</li>
          </ul>
        </Section>

        {/* ───────── Certifications ───────── */}
        <Section title="Certifications">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <InfoCard text="Full-Stack Web Development" />
            <InfoCard text="Machine Learning Fundamentals" />
            <InfoCard text="Cloud & Deployment Practices" />
          </div>
        </Section>

        {/* ───────── Workshops & Speaking ───────── */}
        <Section title="Workshops & Speaking">
          <p className="text-gray-600">
            Conducted academic workshops, technical seminars, and training
            sessions on web development, research methodologies, and
            emerging technologies for students and professionals.
          </p>
        </Section>

        {/* ───────── CV Download ───────── */}
        <div className="text-center">
          <Link
            href="/cv.pdf"
            className="inline-block px-8 py-3 border border-black rounded-md hover:bg-gray-100 transition"
          >
            Download CV
          </Link>
        </div>

      </div>
    </section>
  );
}

/* ───────── Reusable Components ───────── */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="px-4 py-2 border rounded-full text-sm text-gray-600">
      {text}
    </span>
  );
}

function InfoCard({ text }: { text: string }) {
  return (
    <div className="p-4 border rounded-lg text-center text-gray-600 hover:shadow transition">
      {text}
    </div>
  );
}
