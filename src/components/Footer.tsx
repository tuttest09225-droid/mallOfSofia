import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import {
  HiOutlineChevronDown,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { useTranslation } from "react-i18next";

import logo from "../assets/mall-of-sofia-logo-full.png";

type FooterAccordionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

function FooterAccordion({
  title,
  children,
  defaultOpen = false,
}: FooterAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-base-300 hover:text-primary lg:border-0">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between py-5 text-left font-semibold lg:mb-4 lg:cursor-default lg:py-0"
        aria-expanded={isOpen}
      >
        {title}

        <HiOutlineChevronDown
          size={20}
          className={`transition-transform duration-300 lg:hidden ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 lg:block ${
          isOpen
            ? "max-h-96 pb-5 opacity-100"
            : "max-h-0 opacity-0 lg:max-h-none lg:pb-0 lg:opacity-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="site-footer" className="border-t border-base-300 bg-base-100">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        {/* Main Footer */}
        <div className="grid gap-0 lg:grid-cols-5 lg:gap-12">
          {/* Brand */}
          <div className="pb-8 lg:col-span-2 lg:pb-0">
            <div className="flex items-center justify-between">
              <Link to="/" aria-label="Mall of Sofia home">
                <img src={logo} alt="Mall of Sofia" className="h-20 w-auto" />
              </Link>

              {/* Socials */}
              <div className="flex gap-2 lg:hidden">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="btn btn-circle btn-ghost text-base-content/70 transition hover:bg-primary hover:text-white"
                >
                  <FaFacebook size={24} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="btn btn-circle btn-ghost text-base-content/70 transition hover:bg-primary hover:text-white"
                >
                  <FaInstagram size={24} />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="btn btn-circle btn-ghost text-base-content/70 transition hover:bg-primary hover:text-white"
                >
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-base-content/60">
              {t("footer.title")}
            </p>

            {/* Desktop Socials */}
            <div className="mt-6 hidden gap-2 lg:flex">
              <a
                href="#"
                aria-label="Facebook"
                className="btn btn-circle btn-ghost text-base-content/70 transition hover:bg-primary hover:text-white"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="btn btn-circle btn-ghost text-base-content/70 transition hover:bg-primary hover:text-white"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="btn btn-circle btn-ghost text-base-content/70 transition hover:bg-primary hover:text-white"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <FooterAccordion title={t("footer.explore")}>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>
                <Link to="/shops" className="transition hover:text-primary">
                  {t("footer.stores")}
                </Link>
              </li>

              <li>
                <Link to="/loyalty" className="transition hover:text-primary">
                  {t("footer.loyalty")}
                </Link>
              </li>

              <li>
                <Link to="/dining" className="transition hover:text-primary">
                  {t("footer.dining")}
                </Link>
              </li>

              <li>
                <Link to="/cinema" className="transition hover:text-primary">
                  {t("footer.cinema")}
                </Link>
              </li>

              <li>
                <Link to="/events" className="transition hover:text-primary">
                  {t("footer.events")}
                </Link>
              </li>
            </ul>
          </FooterAccordion>

          {/* Visit */}
          <FooterAccordion title={t("footer.visit")}>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>
                <a href="#" className="transition hover:text-primary">
                  {t("footer.hours")}
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-primary">
                  {t("footer.parking")}
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-primary">
                  {t("footer.directions")}
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-primary">
                  {t("footer.map")}
                </a>
              </li>
            </ul>
          </FooterAccordion>

          {/* Contact */}
          <FooterAccordion title={t("footer.contacts.title")}>
            <ul className="space-y-4 text-sm text-base-content/70">
              <li className="flex items-start gap-3">
                <HiOutlineMapPin size={18} className="mt-0.5 shrink-0" />

                <span>{t("footer.contacts.address")}</span>
              </li>

              <li className="flex items-center gap-3">
                <HiOutlinePhone size={18} className="shrink-0" />

                <a
                  href="tel:+35922222222"
                  className="transition hover:text-primary"
                >
                  {t("footer.contacts.phone")}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <HiOutlineEnvelope size={18} className="shrink-0" />

                <a
                  href={`mailto:${t("footer.contacts.email")}`}
                  className="transition hover:text-primary"
                >
                  {t("footer.contacts.email")}
                </a>
              </li>
            </ul>
          </FooterAccordion>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col gap-5 border-base-300 pt-6 text-sm text-base-content/50 lg:border-t md:flex-row md:items-center md:justify-between">
          <p>{t("footer.bottom.copyright")}</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="transition hover:text-primary">
              {t("footer.bottom.privacy")}
            </a>

            <a href="#" className="transition hover:text-primary">
              {t("footer.bottom.terms")}
            </a>

            <a href="#" className="transition hover:text-primary">
              {t("footer.bottom.cookies")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
