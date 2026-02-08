// File: MDXComponents.tsx
// Location: app/components/mdx/

import type { ComponentPropsWithoutRef } from "react";
import CodeBlock from "./CodeBlock.client";

import Image from "next/image";

export const MDXComponents = {
  /* =======================
     Headings
  ======================== */
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-4xl font-bold mt-10 mb-6" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />
  ),
  h4: (props: ComponentPropsWithoutRef<"h4">) => (
    <h3 className="font-semibold mt-6 mb-1 underline" {...props} />
  ),

  /* =======================
     Text
  ======================== */
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="leading-relaxed mb-4 text-justify" {...props} />
  ),

  /* =======================
     Lists
  ======================== */
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 mb-4" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 mb-4" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="mb-2" {...props} />
  ),

  /* =======================
     Inline Elements
  ======================== */
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-blue-600 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),

  /* =======================
     Images (GLOBAL + Lazy Loading)
  ======================== */
  img: ({
    src,
    alt,
    loading,
    width,
    height,
    ...props
  }: ComponentPropsWithoutRef<"img">) => {
    const srcString = typeof src === "string" ? src : "";

    return (
      <figure className="my-10 flex justify-center">
        <Image
          src={srcString}
          alt={alt ?? ""}
          width={width ? Number(width) : 800}
          height={height ? Number(height) : 450}
          loading={loading ?? "lazy"}
          className="rounded-lg border shadow-md"
          {...props}
        />

        {alt && (
          <figcaption className="mt-3 text-sm text-gray-500 italic text-center">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  },




  /* =======================
     Code Blocks
  ======================== */
  pre: CodeBlock,

  code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => {
    if (className?.includes("language-")) {
      return <code className={className} {...props} />;
    }

    return (
      <code
      {...props}
        className=" abCodeView2
          px-1.5 py-0.5
          rounded
          text-sm
          font-mono
        "
        style={{}}
        
      />
    );
  },
};
