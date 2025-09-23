export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>🌐 My Next.js App</header>
        <main>{children}</main>
        <footer>© 2025 My App</footer>
      </body>
    </html>
  );
}
