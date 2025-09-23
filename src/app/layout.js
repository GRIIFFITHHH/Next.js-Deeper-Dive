import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import globalStyles from "@styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
