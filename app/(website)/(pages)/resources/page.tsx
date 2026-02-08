export const metadata = {
  title: "Resources | edu2skill",
  description: "Free learning resources, tools, and references for web development and programming",
};

export default function ResourcesPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Learning Resources</h1>

      <p className="text-gray-600 mb-10">
        A curated collection of tools, references, and platforms to support your
        learning journey in web development and programming.
      </p>

      <ul className="space-y-6">
        <li>
          <h2 className="text-xl font-semibold">MDN Web Docs</h2>
          <p className="text-gray-600">
            Authoritative documentation for HTML, CSS, JavaScript, and Web APIs.
          </p>
        </li>

        <li>
          <h2 className="text-xl font-semibold">React Documentation</h2>
          <p className="text-gray-600">
            Official React documentation for modern UI development.
          </p>
        </li>

        <li>
          <h2 className="text-xl font-semibold">Next.js Documentation</h2>
          <p className="text-gray-600">
            Learn server components, routing, and full-stack React.
          </p>
        </li>
      </ul>
    </section>
  );
}
