import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur border-b border-base-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: brand (desktop) */}
        <a href="#home" className="hidden md:flex items-center gap-2">
          <img src="/favicon.svg" alt="Dev Stack logo" className="w-8 h-8" />
          <span className="text-lg font-bold gradient-text">Dev Stack</span>
        </a>

        {/* Mobile: hamburger on the left */}
        <button
          className="md:hidden btn btn-ghost btn-square"
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

        {/* Mobile: brand centered */}
        <a href="#home" className="md:hidden flex items-center gap-2">
          <img src="/favicon.svg" alt="Dev Stack logo" className="w-7 h-7" />
          <span className="font-bold gradient-text">Dev Stack</span>
        </a>

        {/* Center: nav links (desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-secondary transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons (both breakpoints) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="btn btn-ghost btn-sm hidden sm:inline-flex">
            Sign In
          </button>
          <button className="btn-gradient btn-sm rounded-full px-5">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-base-300 bg-base-100 px-4 py-3">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block py-1 hover:text-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="sm:hidden pt-2">
              <button className="btn btn-ghost btn-sm w-full">Sign In</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
