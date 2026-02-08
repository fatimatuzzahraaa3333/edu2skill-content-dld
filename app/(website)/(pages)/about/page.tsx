import Link from "next/link";

export const metadata = {
  title: "About Us | edu2skill",
  description:
    "Learn more about edu2skill — our mission, vision, and roadmap for empowering learners with modern tech skills.",
};

export default function AboutPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ───────── Header ───────── */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About edu2skill
          </h1>
          <p className="text-gray-600 mt-10">
            edu2skill is a skill-focused learning platform built to help
            students and professionals master modern technologies through
            structured, practical, and beginner-friendly content.
          </p>
        </div>

        {/* ───────── Mission / Vision ───────── */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to bridge the gap between academic knowledge
              and industry requirements by providing hands-on tutorials,
              real-world projects, and clear conceptual explanations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="text-gray-600">
              We envision edu2skill as a trusted learning hub for web
              development, computer science, and emerging technologies,
              accessible to learners worldwide.
            </p>
          </div>
        </div>

        {/* ───────── Values ───────── */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-10">
            What Makes edu2skill Different
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <ValueCard title="Beginner Friendly" />
            <ValueCard title="Industry Focused" />
            <ValueCard title="Project Based" />
            <ValueCard title="Free Learning" />
          </div>
        </div>

        {/* ───────── Founder ───────── */}
        <div className="border rounded-xl p-8 md:p-12 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            About the Founder
          </h2>
          <p className="text-gray-600 mb-4">
            edu2skill is founded by <strong>Abo Bakar Aslam</strong>, a
            computer science educator and full-stack developer with
            experience in modern web technologies, machine learning,
            and academic teaching.
          </p>

          <p className="text-gray-600 mb-6">
            The platform reflects his passion for simplifying complex
            topics and guiding learners toward practical skill development
            and career growth.
          </p>

          <div className="flex gap-4">
            <button className="btn-primary">
                <Link href="/contact-us">Get in Touch</Link>
            </button>

            <button className="btn-primary btn-outline">
                <Link href="/tutorials">View Tutorials</Link>
            </button>
          </div>
        </div>

        {/* ───────── Roadmap ───────── */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-10">
            Platform Roadmap
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 border-l pl-6">
            <RoadmapItem
              title="Phase 1 – Tutorials"
              text="High-quality tutorials covering web development and core CS concepts."
            />
            <RoadmapItem
              title="Phase 2 – Courses"
              text="Structured learning paths with exercises and assessments."
            />
            <RoadmapItem
              title="Phase 3 – Projects & Community"
              text="Real-world projects, certifications, and learner collaboration."
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function ValueCard({ title }: { title: string }) {
  return (
    <div className="p-6 border rounded-lg text-center hover:shadow-md transition">
      <h3 className="font-medium">{title}</h3>
    </div>
  );
}

function RoadmapItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="relative">
      <span className="absolute -left-5 top-1.5 w-3 h-3 rounded-full bg-black"></span>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
