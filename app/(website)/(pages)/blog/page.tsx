import Link from "next/link";
import { readdirSync, readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";

//import { StaticImageData } from "next/image";
import Image from "next/image";

export const metadata = {
  title: "Blog | edu2skill",
  description:
    "Blog on web development and modern technologies presented by edu2skill",
};

type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  featureImage: string;
};

export default function BlogsPage() {
  const blogsDir = path.join(
    process.cwd(),
    "app/(website)/content/blogs/"
  );

  const blogs: BlogMeta[] = readdirSync(blogsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const fullPath = path.join(blogsDir, file);
      const fileContent = readFileSync(fullPath, "utf8");

      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? "",
        category: data.category ?? "",
        featureImage: data.featureimage ?? "",
      };
    });

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-10 text-center">Blog</h1>

      <ul className="grid md:grid-cols-3 gap-8">
        {blogs.map((t) => (
          <li
            key={t.slug}
            className="border p-6 rounded-lg hover:shadow-md transition"
          >
            <Link href={`/blog/${t.slug}`} className="hover:shadow-md transition no-underline" style={{ textDecoration: "none" }}>

            <div className="mb-4 flex justify-center">
              <Image
                src= {t.featureImage}
                alt={t.title}
                width="80"
                height="80"
                className="object-contain"
              />
              </div>
              <h2 className="text-xl font-semibold mb-2 pointer-events-auto hover:underline cursor-pointer">
                {t.title}
              </h2>
              

              <p className="text-sm text-gray-600 mb-3">
                {t.description}
              </p>

              <div className="text-xs text-gray-500 flex justify-between">
                <span>{t.category}</span>
                <span>{t.date}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
