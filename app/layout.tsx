import type { Metadata } from "next";

import "./globals_1user.css";
import Navbar from "./(website)/components/layout/Navbar";
import Footer from "./(website)/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://edu2skill.vercel.app"),
  title: {
    default: "edu2skill – Learn Web Development",
    template: "%s | edu2skill",
  },
  description:
    "Tutorial-based learning platform for HTML, React, Next.js and modern web development.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
