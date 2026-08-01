import { useEffect, useState } from "react";
import { Menu, Search, MapPin, Sun, Moon, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useScrollDirection } from "../hooks/useScrollDirection";
import logo from "../assets/mall-of-sofia-logo-full.png";

const navItems = [
  { key: "shop", href: "/shops" },
  { key: "dining", href: "/dining" },
  { key: "events", href: "/events" },
  { key: "cinema", href: "/cinema" },
  { key: "loyalty", href: "/loyalty" },
];

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "mall-light";
  }

  return localStorage.getItem("mall-theme") || "mall-light";
};

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { scrollDirection, scrollY } = useScrollDirection();

  const [darkMode, setDarkMode] = useState(
    () => getInitialTheme() === "mall-dark",
  );

  const navbarHidden = scrollDirection === "down" && scrollY > 100;

  const scrolled = scrollY > 40;

  useEffect(() => {
    const savedTheme = getInitialTheme();

    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("mall-language");

    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const toggleTheme = () => {
    const nextTheme = darkMode ? "mall-light" : "mall-dark";

    setDarkMode((current) => !current);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("mall-theme", nextTheme);
  };

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === "bg" ? "en" : "bg";
    i18n.changeLanguage(nextLanguage);
    localStorage.setItem("mall-language", nextLanguage);
  };

  return (
    <header
      className={`
        fixed left-0 top-0 z-50 w-full border-b border-base-300/50 bg-base-100/60 backdrop-blur-lg transition-all duration-300
        ${scrolled ? "shadow-sm" : ""}
        ${navbarHidden ? "-translate-y-full lg:translate-y-0" : "translate-y-0"}
      `}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center"
          aria-label="Mall of Sofia home"
        >
          <img
            src={logo}
            alt="Mall of Sofia"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.href}
              className={({ isActive }) => `
                relative text-lg font-medium text-base-content/70 transition-colors duration-300
                after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300
                hover:text-base-content hover:after:w-full
                ${isActive ? "text-base-content after:w-full" : "after:w-0"}
              `}
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            aria-label={t("nav.search")}
            className="btn btn-ghost btn-circle text-primary transition-all hover:bg-primary/10"
          >
            <Search size={24} />
          </button>

          <button
            type="button"
            aria-label={t("nav.map")}
            className="btn btn-ghost btn-circle text-primary transition-all hover:bg-primary/10"
          >
            <MapPin size={24} />
          </button>

          {/* Language */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={`Switch language to ${i18n.language === "bg" ? "English" : "Bulgarian"}`}
            className="btn btn-ghost text-base-content transition-all hover:bg-primary/10"
          >
            {" "}
            <span className="text-sm font-semibold uppercase">
              {" "}
              {i18n.language === "bg" ? "EN" : "БГ"}{" "}
            </span>{" "}
          </button>

          {/* Theme */}
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle text-base-content transition-all hover:bg-primary/10"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="drawer drawer-end w-auto lg:hidden">
          <input id="mobile-menu" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content">
            <label
              htmlFor="mobile-menu"
              className="btn btn-ghost btn-square drawer-button text-base-content hover:bg-primary/80 hover:text-white"
              aria-label={t("nav.menu")}
            >
              <Menu size={24} />
            </label>
          </div>

          <div className="drawer-side">
            <label
              htmlFor="mobile-menu"
              aria-label="close sidebar"
              className="drawer-overlay "
            />

            <aside className="min-h-full w-80 bg-base-100 text-base-content">
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-base-300 p-6">
                <Link to="/">
                  <img src={logo} alt="Mall of Sofia" className="h-12 w-auto" />
                </Link>

                <label
                  htmlFor="mobile-menu"
                  className="btn btn-ghost btn-square text-base-content hover:bg-primary/80 hover:text-white"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </label>
              </div>

              {/* Navigation */}
              <nav className="p-6">
                <ul className="menu gap-2 p-0 text-lg">
                  {navItems.map((item) => (
                    <li key={item.key}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) => `
                          rounded-xl px-4 py-3 font-medium transition-colors
                          ${isActive ? "bg-primary/10 text-primary" : "hover:bg-base-200"}
                        `}
                      >
                        {t(`nav.${item.key}`)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="divider mx-6" />

              {/* Utility Actions */}
              <div className="px-6">
                <ul className="menu gap-2 p-0">
                  <li>
                    <button className="rounded-xl px-4 py-3">
                      <Search size={20} />
                      {t("nav.search")}
                    </button>
                  </li>

                  <li>
                    <button className="rounded-xl px-4 py-3">
                      <MapPin size={20} />
                      {t("nav.map")}
                    </button>
                  </li>
                </ul>
              </div>

              <div className="divider mx-6" />

              {/* Language */}
              <div className="px-6">
                {" "}
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="btn btn-outline w-full justify-between"
                >
                  {" "}
                  <span>
                    {" "}
                    {i18n.language === "bg"
                      ? "English"
                      : "Български"}{" "}
                  </span>{" "}
                  <span className="font-semibold">
                    {" "}
                    {i18n.language === "bg" ? "EN" : "БГ"}{" "}
                  </span>{" "}
                </button>{" "}
              </div>

              {/* Theme */}
              <div className="mt-6 px-6 pb-6">
                <button
                  onClick={toggleTheme}
                  className="btn btn-outline w-full justify-between"
                >
                  <span>{darkMode ? t("nav.light") : t("nav.dark")}</span>
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </header>
  );
}
