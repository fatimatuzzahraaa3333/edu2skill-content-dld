"use client";

import Link from "next/link";
import Image from "next/image";
import { Tutorial } from "../../lib/tutorials/tutorials";

export default function CourseCard({
  tutorial,
}: {
  tutorial: Tutorial;
}) {
  return (
    <Link
      href={`/tutorials/${tutorial.slug}`}
      className="block border rounded-lg p-6 hover:shadow-md transition no-underline" style={{ textDecoration: "none" }}
    >
    
      <div className="mb-4 flex justify-center">
        <Image
          src={tutorial.turorialImage}
          alt={tutorial.title}
          width={tutorial.sizeIconX}
          height={tutorial.sizeIconY}
          className="object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 pointer-events-auto hover:underline cursor-pointer inline-block">
        {tutorial.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4 text-justify">
        {tutorial.description}
      </p>

      {tutorial.level && (
        <span className="inline-block text-xs px-3 py-1 border rounded-full">
          {tutorial.level}
        </span>
      )}
    </Link>
  );
}

