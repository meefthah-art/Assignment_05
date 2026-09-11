import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Logo({ size = "md" }) {
  const boxSize = size === "sm" ? "w-6 h-6" : "w-8 h-8";
  const textSize = size === "sm" ? "text-base" : "text-xl";
  return (
    <a href="#home" className="flex items-center gap-2.5 shrink-0">
      <span
        className={`${boxSize} rounded-lg flex items-center justify-center shrink-0`}
        style={{ backgroundImage: "linear-gradient(135deg, #ec4899, #7c3aed)" }}
      >
        <span className="text-white font-extrabold text-[11px] leading-none">
          DS
        </span>
      </span>
      <span className={`${textSize} font-bold text-slate-900 whitespace-nowrap`}>
        Dev Stack
      </span>
    </a>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Mobile: hamburger on the left */}
        <button
          className="md:hidden -ml-2 p-2 text-slate-700"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Logo: left on desktop, centered on mobile */}
        <div className="md:flex-none flex-1 flex justify-center md:justify-start">
          <Logo size="sm" />
        </div>

        {/* Center: nav links (desktop only) */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={
                  link.active
                    ? "text-[#db2777] font-semibold"
                    : "text-slate-600 hover:text-slate-900 transition-colors"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth controls */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <button className="hidden sm:inline-block text-sm font-medium text-slate-700 hover:text-slate-900">
            Sign In
          </button>
          <button
            className="text-white text-sm font-semibold px-5 py-2.5 rounded-full"
            style={{ backgroundColor: "#d91b7e" }}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3">
          <ul className="flex flex-col gap-1 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`block py-2 ${
                    link.active ? "text-[#db2777] font-semibold" : "text-slate-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="sm:hidden pt-1">
              <button className="py-2 text-slate-700">Sign In</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
