"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav>
        <Link
        href="/"
        className="inline-flex items-center gap-2 text-2xl font-bold"
      >
        <Image
          src="/logo_edu2skill_green.png"
          alt="edu2skill logo"
          width={80}
          height={30}
          priority
        />
        <span></span>
      </Link>

        {/* Hamburger Button */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><Link href="/tutorials">Tutorials</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}
