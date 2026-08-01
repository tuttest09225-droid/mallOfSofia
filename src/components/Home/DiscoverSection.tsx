import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  HiOutlineBuildingStorefront,
  HiOutlineCalendarDays,
  HiOutlineCake,
  HiOutlineGift,
  HiOutlineArrowRight,
  HiOutlineXMark,
} from "react-icons/hi2";

const cards = [
  {
    key: "stores",
    href: "/shops",
    icon: HiOutlineBuildingStorefront,
    color: "#EB2129",
  },
  {
    key: "events",
    href: "/events",
    icon: HiOutlineCalendarDays,
    color: "#14A753",
  },
  {
    key: "dining",
    href: "/dining",
    icon: HiOutlineCake,
    color: "#F8B615",
  },
  {
    key: "loyalty",
    href: "/loyalty",
    icon: HiOutlineGift,
    color: "#105BA9",
  },
];

export default function DiscoverSection() {
  const { t } = useTranslation();

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [showBookmarks, setShowBookmarks] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home-hero");
    const footer = document.getElementById("site-footer");

    if (!hero || !footer) {
      return;
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setShowBookmarks(!entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBookmarks(false);
          setActiveCard(null);
        }
      },
      {
        threshold: 0.05,
      },
    );

    heroObserver.observe(hero);
    footerObserver.observe(footer);

    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (activeCard === null) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement;

      if (!target.closest("[data-discovery-bookmark]")) {
        setActiveCard(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [activeCard]);

  return (
    <section className="relative bg-base-200 lg:py-20">
      {/* ====================================================== */}
      {/* MOBILE DISCOVERY BOOKMARKS */}
      {/* ====================================================== */}

      <AnimatePresence>
        {showBookmarks && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-0 top-1/2 z-40 -translate-y-1/2 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {cards.map((card, index) => {
                const Icon = card.icon;
                const isActive = activeCard === index;

                return (
                  <div
                    key={card.key}
                    data-discovery-bookmark
                    className="relative"
                  >
                    {/* Expanded Panel */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: -30,
                            scale: 0.98,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            x: -30,
                            scale: 0.98,
                          }}
                          transition={{
                            duration: 0.25,
                            ease: "easeOut",
                          }}
                          className="absolute left-0 top-1/2 z-10 w-[min(340px,calc(100vw-32px))] -translate-y-1/7 rounded-r-3xl border border-base-300 bg-base-100/90 p-7 pl-20 shadow-[0_12px_40px_rgb(0,0,0,0.12)] backdrop-blur-xl"
                        >
                          {/* Accent */}
                          <div
                            className="absolute bottom-0 left-0 top-0 w-1.5"
                            style={{
                              backgroundColor: card.color,
                            }}
                          />

                          {/* Close */}
                          <button
                            type="button"
                            onClick={() => setActiveCard(null)}
                            className="absolute right-4 top-4 rounded-full p-1.5 text-base-content/40 transition-colors hover:bg-base-200 hover:text-base-content"
                            aria-label={`${t("discovery.close")} ${t(
                              `discovery.${card.key}.title`,
                            )}`}
                          >
                            <HiOutlineXMark size={20} />
                          </button>

                          <h3 className="mt-2 text-3xl font-bold text-base-content">
                            {t(`discovery.${card.key}.title`)}
                          </h3>

                          <p className="mt-3 max-w-[240px] text-base leading-relaxed text-base-content/60">
                            {t(`discovery.${card.key}.subtitle`)}
                          </p>

                          <Link
                            to={card.href}
                            onClick={() => setActiveCard(null)}
                            className="mt-6 flex items-center gap-2 text-base font-semibold transition-all hover:gap-3"
                            style={{
                              color: card.color,
                            }}
                          >
                            {t(`discovery.${card.key}.CTA`)}

                            <HiOutlineArrowRight size={19} />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bookmark Icon */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveCard(isActive ? null : index)
                      }
                      className="relative z-20 flex h-14 w-12 items-center justify-center rounded-r-2xl text-white shadow-lg transition-transform duration-200 active:scale-95"
                      style={{
                        backgroundColor: card.color,
                      }}
                      aria-label={`${t(
                        `discovery.${card.key}.title`,
                      )}`}
                      aria-expanded={isActive}
                    >
                      <Icon size={24} />
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====================================================== */}
      {/* DESKTOP DISCOVERY GRID */}
      {/* ====================================================== */}

      <div className="mx-auto hidden max-w-7xl px-6 lg:block lg:px-8">
        <div className="mb-16 text-center text-base-content">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-base-content/50">
            {t("discovery.title")}
          </p>

          <h2 className="text-4xl font-bold tracking-tight xl:text-5xl">
            {t("discovery.subtitle")}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.key}
                to={card.href}
                className="group rounded-none border bg-base-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl xl:p-10"
                style={{
                  borderColor: card.color,
                  borderWidth: "2px",
                }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${card.color}12`,
                      color: card.color,
                    }}
                  >
                    <Icon size={50} />
                  </div>

                  <div className="flex flex-col self-start">
                    <p
                      className="text-lg font-semibold uppercase tracking-[0.2em]"
                      style={{
                        color: card.color,
                      }}
                    >
                      {t(`discovery.${card.key}.title`)}
                    </p>

                    {card.key !== "loyalty" && (
                      <h3 className="mt-1 text-3xl font-bold text-base-content">
                        {t(`discovery.${card.key}.value`)}
                      </h3>
                    )}
                  </div>
                </div>

                <p className="mt-6 text-lg text-base-content/60">
                  {t(`discovery.${card.key}.subtitle`)}
                </p>

                <div
                  className="mt-6 flex items-center gap-2 font-semibold transition-all group-hover:gap-4"
                  style={{
                    color: card.color,
                  }}
                >
                  {t(`discovery.${card.key}.CTA`)}

                  <HiOutlineArrowRight size={20} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
