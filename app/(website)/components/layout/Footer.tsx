import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            <Link href="/">edu2skill</Link>
          </h3>
          <p className="text-sm leading-relaxed">
            Learn modern web development and essential computer skills with
            practical, step-by-step guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/tutorials">Tutorials</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Tech */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Technology
          </h3>
          <p className="text-sm leading-relaxed">
            Built with <span className="text-highlight">Next.js</span> and deployed on{" "}
            <span className="text-highlight">Vercel</span> for performance and
            scalability.
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-6 text-xs text-gray-500">
        © {new Date().getFullYear()} edu2skill. All rights reserved.
      </div>
    </footer>
  );
}
