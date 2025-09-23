"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/docs">Docs</Link>
        <Link href="/blog/sample-post">Blog</Link>
      </div>
      <div>© 2025 My Next.js App. All rights reserved.</div>
      <div className="small-text">Built by Luis using Next.js</div>
    </footer>
  );
}
