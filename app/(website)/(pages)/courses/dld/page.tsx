import { getAllTopics4DLD } from "../../../lib/courses/dld";
import Link from "next/link";

export const metadata = {
  title: "Courses | edu2skill",
  description: "Courses on web development and modern technologies",
};

export default function CoursesPage() {
  const coursesTopic = getAllTopics4DLD();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold mb-4 text-center">Digital Logic Design (DLD)</h1>
          <div className="text-gray-600 max-w-2xl mx-auto text-justify mt-5">
            <p>Learn Digital Logic Design from basics to advanced, covering number systems, Boolean algebra, logic gates, Karnaugh maps, and combinational and sequential circuits to design efficient, reliable digital systems.</p>     
          </div>
          <div className="text-center mt-2">
            <a href="https://docs.google.com/document/d/19ngPq9cg7s3cteya1jt-Exs7Km7Is7MkVf75DX3N-3M/edit?usp=sharing" target="_blank"><button className="btn-primary">View Course Outline</button></a>
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
                    href={`/courses/dld/${t.slug}`}
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
                    href={`/courses/dld/${t.slug}`}>
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
