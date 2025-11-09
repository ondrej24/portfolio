import { useState } from "react";
import styles from "./Navigation.module.css";

export const Navigation = (): React.JSX.Element => {
  const getInitialTheme = (): "light" | "dark" => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      return savedTheme;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const initialTheme = getInitialTheme();
    document.documentElement.setAttribute("data-theme", initialTheme);
    return initialTheme;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 60; // Approximate navigation height + padding
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Hamburger button - only visible on mobile */}
        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        {/* Desktop navigation - hidden on mobile */}
        <ul className={styles.navLinks}>
          <li>
            <button
              className={styles.navLink}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </button>
          </li>
          <li>
            <a
              href="#about"
              className={styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>

        {/* Mobile menu - only visible when open */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileNavLinks}>
              <li>
                <button
                  className={styles.mobileNavLink}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <a
                  href="#about"
                  className={styles.mobileNavLink}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={styles.mobileNavLink}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("skills");
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={styles.mobileNavLink}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("experience");
                  }}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={styles.mobileNavLink}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className={styles.mobileThemeToggle}
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? "🌙" : "☀️"}{" "}
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
