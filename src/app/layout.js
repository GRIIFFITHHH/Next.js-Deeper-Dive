import "./styles/globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="root-container">
          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
