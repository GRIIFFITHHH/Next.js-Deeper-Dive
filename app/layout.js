export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          🌐 My Next.js App
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a> |
            <a href="/cart">Cart</a> | <a href="/docs">Docs</a> |
            <a href="/blog/sample-post">Blog</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2025 My App</footer>
      </body>
    </html>
  );
}
