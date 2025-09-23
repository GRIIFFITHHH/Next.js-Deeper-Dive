"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/cart">Cart</Link>
      <Link href="/docs">Docs</Link>
      <Link href="/blog/sample-post">Blog</Link>
    </nav>
  );
}
