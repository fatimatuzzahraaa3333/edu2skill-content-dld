"use client";

import Link from "next/link";
import Image from "next/image";
import { Course } from "../../lib/courses/courses";

// If using same image for all courses, import once
//import courseLogo from '../../../../public/images/courselogo.png';

//tutorial
export default function CourseCard({
  course,
}: {
  course: Course;
}) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="block border rounded-lg p-6 hover:shadow-md transition no-underline" style={{ textDecoration: "none" }}
    >
    
      <div className="mb-4 flex justify-center">
        <Image
          src={course.courseImage}
          alt={course.title}
          width={course.sizeIconX}
          height={course.sizeIconY}
          className="object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 pointer-events-auto hover:underline cursor-pointer inline-block">
        {course.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4 text-justify">
        {course.description}
      </p>

      {course.level && (
        <span className="inline-block text-xs px-3 py-1 border rounded-full">
          {course.level}
        </span>
      )}
    </Link>
  );
}

