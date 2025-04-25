import { useState, useEffect } from "react";

function Navbar() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  // Theme setup
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveLink(link.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleLinkClick = (link) => {
    setActiveLink(link.toLowerCase());
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-xl md:text-2xl focus:outline-none"
        >
          {isDark ? "🔆" : "🌙"}
        </button>

        {/* Brand */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          🌐MyPortfolio
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-700 dark:text-gray-200">
          {links.map((link) => {
            const id = link.toLowerCase();
            return (
              <li key={link}>
                <a
                  href={`#${id}`}
                  onClick={() => handleLinkClick(link)}
                  className={`hover:text-blue-500 transition-colors ${
                    activeLink === id ? "text-blue-500 font-semibold" : ""
                  }`}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-900 active:bg-gray-50 px-4 rounded-md"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden absolute right-0 top-16 bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-md rounded-bl-lg px-10 py-4 flex flex-col gap-4 animate-slide-down z-40">
          {links.map((link) => {
            const id = link.toLowerCase();
            return (
              <li key={link}>
                <a
                  href={`#${id}`}
                  onClick={() => handleLinkClick(link)}
                  className={`hover:text-blue-500 ${
                    activeLink === id ? "text-blue-500 font-semibold" : ""
                  }`}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
