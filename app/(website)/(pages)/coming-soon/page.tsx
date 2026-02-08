import Link from "next/link";

export const metadata = {
  title: "Coming Soon | edu2skill",
};

export default function ComingSoonPage() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">

        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-pulse">
          Coming Soon 🚀
        </h1>

        <p className="text-gray-600 mb-8">
          This section is under development. We are preparing structured
          content, projects, and learning paths to enhance your experience.
        </p>

        <div className="grid grid-cols-3 gap-4 text-sm mb-10">
          <Badge text="Tutorials" />
          <Badge text="Courses" />
          <Badge text="Projects" />
        </div>

        <div className="flex justify-center gap-4">
          <button className="btn-primary"><Link href="/">Home</Link></button>
          <button className="btn-primary btn-outline"><Link href="/">Notify Me</Link></button>
        </div>
      </div>
    </section>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="px-4 py-2 border rounded-full text-gray-600">
      {text}
    </span>
  );
}
