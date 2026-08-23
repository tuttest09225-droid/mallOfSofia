import { useEffect} from "react";


import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import {
  HiOutlineBuildingStorefront,
  HiOutlineCalendarDays,
  HiOutlineCake,
  HiOutlineGift,
  HiOutlineArrowRight,
  HiOutlineChevronRight,
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


  /**
   * Show the floating bookmarks only after the entire discovery
   * section has left the viewport, with a small additional buffer.
   */
  useEffect(() => {
    const discoverySection =
      document.getElementById("discovery-section");


    if (!discoverySection) {
      return;
    }
  }, []);


    

  return (
    <section
      id="discovery-section"
      className="relative bg-base-200/40 lg:py-20"
    >
      {/* ======================================================
          MOBILE DISCOVERY
      ====================================================== */}

      <div className="lg:hidden">

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-6">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.key}
                to={card.href}
                className="group block overflow-hidden rounded-xl border bg-base-100 p-4 shadow-sm transition-all duration-300 active:scale-[0.99]"
                style={{
                  borderColor: card.color,
                  borderWidth: "2px",
                }}
              >
                <div className="grid grid-cols-3 items-center gap-2">
                  {/* ==================================================
                      1/3 — ICON + TITLE + AMOUNT
                  ================================================== */}

                  <div className="flex min-w-0 items-center gap-2">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${card.color}12`,
                        color: card.color,
                      }}
                    >
                      <Icon size={30} />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="text-xs font-semibold uppercase tracking-[0.18em]"
                        style={{
                          color: card.color,
                        }}
                      >
                        {t(
                          `discovery.${card.key}.title`,
                        )}
                      </p>

                      {card.key !== "loyalty" && (
                        <h3 className="mt-1 text-xl font-bold text-base-content">
                          {t(
                            `discovery.${card.key}.value`,
                          )}
                        </h3>
                      )}
                    </div>
                  </div>

                  {/* ==================================================
                      1/3 — DESCRIPTION
                  ================================================== */}

                  <p className="min-w-0 text-sm leading-relaxed text-base-content/60">
                    {t(
                      `discovery.${card.key}.subtitle`,
                    )}
                  </p>

                  {/* ==================================================
                      1/3 — ARROW + CTA
                  ================================================== */}

                  <div className="flex flex-col items-end justify-center gap-1">
                    <HiOutlineChevronRight
                      size={24}
                      style={{
                        color: card.color,
                      }}
                    />

                    <div
                      className="flex items-center gap-2 text-right text-sm font-semibold transition-all group-hover:gap-3"
                      style={{
                        color: card.color,
                      }}
                    >
                      {t(
                        `discovery.${card.key}.CTA`,
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ====================================================
            FLOATING BOOKMARKS
        ==================================================== */}
      </div>

      {/* ======================================================
          DESKTOP DISCOVERY GRID
      ====================================================== */}

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
                className="group rounded-lg border bg-base-100/70 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl xl:p-10"
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
                      {t(
                        `discovery.${card.key}.title`,
                      )}
                    </p>

                    {card.key !== "loyalty" && (
                      <h3 className="mt-1 text-3xl font-bold text-base-content">
                        {t(
                          `discovery.${card.key}.value`,
                        )}
                      </h3>
                    )}
                  </div>
                </div>

                <p className="mt-6 text-lg text-base-content/60">
                  {t(
                    `discovery.${card.key}.subtitle`,
                  )}
                </p>

                <div
                  className="mt-6 flex items-center gap-2 font-semibold transition-all group-hover:gap-4"
                  style={{
                    color: card.color,
                  }}
                >
                  {t(
                    `discovery.${card.key}.CTA`,
                  )}

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
