import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

const withMDX = nextMDX({
  extension: /\.mdx$/,
  options: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: true,
          defaultLang: "text",
        },
      ],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX(nextConfig);
