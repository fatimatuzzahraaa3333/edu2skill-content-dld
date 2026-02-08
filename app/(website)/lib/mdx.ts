//File: mdx.ts located in app/lib/

import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import type { Element } from "hast";
import { MDXComponents } from "../components/mdx/MDXComponents";

export async function renderMDX(source: string) {
  return compileMDX({
    source,
    components: MDXComponents,
    options: {
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark-dimmed",
              keepBackground: true,
              defaultLang: "text",

              onVisitLine(node: Element) {
                if (node.children.length === 0) {
                  node.children = [{ type: "text", value: " " }];
                }

              },

              onVisitHighlightedLine(node: Element) {
                const className = node.properties.className;

                if (Array.isArray(className)) {
                  className.push("line--highlighted");
                } else {
                  node.properties.className = ["line--highlighted"];
                }
              },

              onVisitHighlightedWord(node: Element) {
                node.properties.className = ["word--highlighted"];
              },

              getMetadata: (node: Element) => {
                // node.data?.meta is something like 'filename="app/page.html"'
                const meta: string = node?.data?.meta ?? "";
                const match = meta.match(/filename="(.+?)"/);
                return {
                  filename: match ? match[1] : undefined,
                };
              },
            },
          ],
        ],
      },
    },
  });
}
