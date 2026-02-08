import CourseCard from "../../components/ui/CourseCard";
import { getAllCourses } from "../../lib/courses/courses";

export const metadata = {
  title: "Courses | edu2skill",
  description: "Courses on web development and modern technologies",
};

export default function CoursesPage() {
  const courses = getAllCourses();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className=" mb-14">
          <h1 className="text-4xl font-bold mb-4 text-center">Courses</h1>
          <div className="text-gray-600 max-w-2xl mx-auto text-justify mt-5">
          <p>
            Unlock the world of knowledge with our comprehensive courses designed by edu2skill platform to enhance your computer science, IT, and software engineering skills. Whether you&apos;r a beginner or an advanced learner, our step-by-step guides will help you master key concepts with ease.
          </p>
          <p className="mt-3">Explore a wide range of courses, including:</p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((courses) => (
            <CourseCard key={courses.slug} course={courses} />
          ))}
        </div>

      </div>
    </section>
  );
}
