import { getAllTopics4HTML } from "../../../lib/courses/html";
import Link from "next/link";

export const metadata = {
  title: "Courses | edu2skill",
  description: "Courses on web development and modern technologies",
};

export default function CoursesPage() {
  const coursesTopic = getAllTopics4HTML();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className=" mb-14">
          <h1 className="text-4xl font-bold mb-4 text-center">HTML</h1>
          <div className="text-gray-600 max-w-2xl mx-auto text-justify mt-5">
            <p>Learn HTML from scratch and build the foundation of modern web development. This course covers HTML5 structure, semantic elements, forms, media, and best practices to create accessible, SEO-friendly, and responsive web pages. Ideal for beginners and aspiring web developers.</p>     
          </div>
        </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-3 border-b text-left">#</th>
              <th className="px-4 py-3 border-b text-left">Title</th>
              <th className="px-4 py-3 border-b text-left">Description</th>
              <th className="px-4 py-3 border-b text-left">Learning</th>
            </tr>
          </thead>

          <tbody>
            {coursesTopic.map((t, index) => (
              <tr
                key={t.slug}
                className="hover:bg-gray-50 cursor-pointer transition"
              >
                <td className="px-4 py-3 border-b">
                  {index + 1}
                </td>

                <td className="px-4 py-3 border-b font-medium">
                  <Link
                    href={`/courses/html/${t.slug}`}
                    className="hover:underline"
                  >
                    {t.title}
                  </Link>
                </td>

                <td className="px-4 py-3 border-b text-sm text-gray-600">
                  {t.description}
                </td>

                <td className="px-4 py-3 border-b">
                  <Link
                    href={`/courses/html/${t.slug}`}>
                    <button className="btn-primary btn-sm">Start Learning</button>
                    </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  

      </div>
    </section>
  );
}
