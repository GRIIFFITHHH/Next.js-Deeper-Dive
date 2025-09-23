"use client";
import { useState } from "react";

export default function Docs() {
  // Sidebar links
  const sidebarLinks = [
    { title: "Overview", content: "This is the Overview section content." },
    {
      title: "Getting Started",
      content: "Here is how to get started with our app.",
    },
    { title: "API Reference", content: "Detailed API Reference goes here." },
    { title: "Tutorials", content: "Tutorials and step-by-step guides." },
    { title: "FAQ", content: "Frequently Asked Questions are answered here." },
  ];

  // State for the active section
  const [activeSection, setActiveSection] = useState(sidebarLinks[0]);

  return (
    <div className="docs-page">
      {/* Sidebar */}
      <aside className="docs-sidebar">
        <h2>Docs Sections</h2>
        <ul>
          {sidebarLinks.map((link, i) => (
            <li
              key={i}
              className={link.title === activeSection.title ? "active" : ""}
              onClick={() => setActiveSection(link)}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="docs-content">
        <h1 className="docs-title">{activeSection.title}</h1>
        <p>{activeSection.content}</p>
      </main>
    </div>
  );
}
