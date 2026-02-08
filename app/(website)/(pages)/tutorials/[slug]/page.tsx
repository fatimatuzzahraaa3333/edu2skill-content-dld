//File: page.tsx located in app\tutorials\html\[slug]\
export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { renderMDX } from "../../../lib/mdx";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TutorialPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) notFound();

  const filePath = path.join(
    process.cwd(),
    "app/(website)/content/tutorials/",
    `${slug}.mdx`
  );

  let source: string;

  try {
    source = readFileSync(filePath, "utf8");
  } catch {
    notFound();
  }

  const { content: mdxContent, data: frontmatter } = matter(source);

  const { content } = await renderMDX(mdxContent);

  return (
    <article className="max-w-3xl mx-auto py-16">
      <p>
        <span className="font-bold">Author:</span>{" "}
        <Link href={`/author/${frontmatter.slugAuthorProfile}`}>
          {frontmatter.author}
        </Link>
      </p>

      <h1 className="text-4xl font-bold mt-10 mb-6 text-center">
        {frontmatter.title}
      </h1>

      {content}
    </article>
  );
}
