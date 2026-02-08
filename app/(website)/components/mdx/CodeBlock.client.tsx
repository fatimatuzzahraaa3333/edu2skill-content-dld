//File CodeBlock.client.tsx located in app\components\mdx\CodeBlock.client.tsx
"use client";

import { useState, useRef } from "react";
import { Check, Copy } from "lucide-react";
import type { ReactNode } from "react";

type CodeBlockProps = {
  children: ReactNode;
  "data-language"?: string;
  "data-filename"?: string;
};

export default function CodeBlock({
  children,
  "data-language": language,
  "data-filename": filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  const copyToClipboard = async () => {
    if (!codeRef.current) return;

    const code = codeRef.current.innerText.trim();
    if (!code) return;

    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 rounded-lg">
      {(language || filename) && (
        <div className="abCodeViewTop flex justify-between items-center px-4 py-2 text-xs">
          
          <button
            onClick={copyToClipboard}
            type="button"
            className="flex items-center gap-1"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}

      <pre className="abCodeView0 pt-2 pb-4 rounded-b-lg">
        <code ref={codeRef} className="abCodeView1 m-0 p-0">
          {children}
        </code>
      </pre>
    </div>
  );
}
