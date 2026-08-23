import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import {
  HiOutlineBuildingStorefront,
  HiOutlineCalendarDays,
  HiOutlineCake,
  HiOutlineGift,
  HiOutlineChevronRight,
  HiOutlineXMark,
} from "react-icons/hi2";

type BookmarkVisibility =
  | "always"
  | "after-discovery";

type FloatingDiscoveryBookmarksProps = {
  visibility?: BookmarkVisibility;

  /**
   * ID of the section that must be passed before the
   * bookmarks appear when visibility="after-discovery".
   */
  discoverySectionId?: string;

  /**
   * ID of the footer. Bookmarks are hidden when the footer
   * enters the viewport.
   */
  footerId?: string;
};

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

const FLOATING_BOOKMARK_OFFSET = 50;

export default function FloatingDiscoveryBookmarks({
  visibility = "always",
  discoverySectionId = "discovery-section",
  footerId = "site-footer",
}: FloatingDiscoveryBookmarksProps) {
  const { t } = useTranslation();

  const [activeCard, setActiveCard] =
    useState<number | null>(null);

  const [showBookmarks, setShowBookmarks] =
    useState(visibility === "always");

  /**
   * Controls when the bookmark system is visible.
   *
   * "always":
   *   Always visible on mobile.
   *
   * "after-discovery":
   *   Only visible after the discovery section has been
   *   completely passed.
   */
  useEffect(() => {
    if (visibility === "always") {
      setShowBookmarks(true);
      return;
    }

    const discoverySection =
      document.getElementById(discoverySectionId);

    const footer = document.getElementById(footerId);

    if (!discoverySection) {
      setShowBookmarks(false);
      return;
    }

    const updateBookmarkState = () => {
      const sectionRect =
        discoverySection.getBoundingClientRect();

      const hasPassedDiscovery =
        sectionRect.bottom <
        -FLOATING_BOOKMARK_OFFSET;

      if (footer) {
        const footerRect =
          footer.getBoundingClientRect();

        const footerIsVisible =
          footerRect.top < window.innerHeight;

        setShowBookmarks(
          hasPassedDiscovery && !footerIsVisible,
        );

        if (footerIsVisible) {
          setActiveCard(null);
        }

        return;
      }

      setShowBookmarks(hasPassedDiscovery);
    };

    updateBookmarkState();

    window.addEventListener(
      "scroll",
      updateBookmarkState,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      updateBookmarkState,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateBookmarkState,
      );

      window.removeEventListener(
        "resize",
        updateBookmarkState,
      );
    };
  }, [
    visibility,
    discoverySectionId,
    footerId,
  ]);

  /**
   * Close an active bookmark when clicking outside
   * the bookmark system.
   */
  useEffect(() => {
    if (activeCard === null) {
      return;
    }

    const handlePointerDown = (
      event: PointerEvent,
    ) => {
      const target = event.target as HTMLElement;

      if (
        !target.closest(
          "[data-discovery-bookmark]",
        )
      ) {
        setActiveCard(null);
      }
    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );
    };
  }, [activeCard]);

  return (
    <div className="lg:hidden">
      <AnimatePresence>
        {showBookmarks && (
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -40,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed left-0 top-1/2 z-40 -translate-y-1/2"
          >
            <div className="flex flex-col gap-2">
              {cards.map((card, index) => {
                const Icon = card.icon;

                const isActive =
                  activeCard === index;

                return (
                  <div
                    key={card.key}
                    data-discovery-bookmark
                    className="relative h-14"
                  >
                    {/* ==========================================
                        EXPANDED BOOKMARK CARD
                    ========================================== */}

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{
                            width: 48,
                            opacity: 0.95,
                          }}
                          animate={{
                            width:
                              "min(760px, calc(100vw - 16px))",
                            opacity: 1,
                          }}
                          exit={{
                            width: 48,
                            opacity: 0.95,
                          }}
                          transition={{
                            duration: 0.4,
                            ease: [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                          }}
                          className="absolute left-0 top-0 z-10 overflow-visible"
                        >
                          {/* CARD */}

                          <div
                            className="relative overflow-hidden rounded-r-xl border-2 bg-base-100 shadow-[0_12px_40px_rgb(0,0,0,0.14)]"
                            style={{
                              borderColor:
                                card.color,
                              minHeight: 56,
                              maxHeight: 96,
                            }}
                          >
                            {/* Accent */}

                            <div
                              className="absolute bottom-0 left-0 top-0 z-30 w-1.5"
                              style={{
                                backgroundColor:
                                  card.color,
                              }}
                            />

                            {/* CLICKABLE CONTENT */}

                            <motion.div
                              initial={{
                                opacity: 0,
                                visibility:
                                  "hidden",
                              }}
                              animate={{
                                opacity: 1,
                                visibility:
                                  "visible",
                              }}
                              exit={{
                                opacity: 0,
                                visibility:
                                  "hidden",
                              }}
                              transition={{
                                opacity: {
                                  duration: 0.15,
                                  delay: 0.25,
                                  ease: "easeOut",
                                },
                                visibility: {
                                  duration: 0,
                                  delay: 0.15,
                                },
                              }}
                              className="block"
                            >
                              <Link
                                to={card.href}
                                onClick={() =>
                                  setActiveCard(null)
                                }
                                className="group block"
                              >
                                <div className="grid grid-cols-3 items-center gap-2 px-2 py-1 pl-7">
                                  {/* 1/3 — ICON + TITLE */}

                                  <div className="flex min-w-0 items-center gap-2">
                                    <div
                                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                                      style={{
                                        backgroundColor: `${card.color}12`,
                                        color:
                                          card.color,
                                      }}
                                    >
                                      <Icon size={30} />
                                    </div>

                                    <div className="min-w-0">
                                      <p
                                        className="text-xs font-semibold uppercase tracking-[0.18em]"
                                        style={{
                                          color:
                                            card.color,
                                        }}
                                      >
                                        {t(
                                          `discovery.${card.key}.title`,
                                        )}
                                      </p>

                                      {card.key !==
                                        "loyalty" && (
                                        <h3 className="mt-1 text-xl font-bold text-base-content">
                                          {t(
                                            `discovery.${card.key}.value`,
                                          )}
                                        </h3>
                                      )}
                                    </div>
                                  </div>

                                  {/* 1/3 — DESCRIPTION */}

                                  <p className="max-h-24 min-w-0 text-sm leading-relaxed text-base-content/60">
                                    {t(
                                      `discovery.${card.key}.subtitle`,
                                    )}
                                  </p>

                                  {/* 1/3 — CTA */}

                                  <div className="flex flex-col items-end justify-center gap-1 pr-3">
                                    <HiOutlineChevronRight
                                      size={24}
                                      style={{
                                        color:
                                          card.color,
                                      }}
                                    />

                                    <div
                                      className="flex items-center gap-2 text-right text-sm font-semibold transition-all group-hover:gap-3"
                                      style={{
                                        color:
                                          card.color,
                                      }}
                                    >
                                      {t(
                                        `discovery.${card.key}.CTA`,
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          </div>

                          {/* CLOSE BUTTON */}

                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();

                              setActiveCard(null);
                            }}
                            className="absolute -right-3 -top-3 z-50 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-base-100 shadow-md transition-all hover:scale-110 hover:bg-base-200 active:scale-95"
                            style={{
                              borderColor:
                                card.color,
                              color: card.color,
                            }}
                            aria-label={`${t(
                              "discovery.close",
                            )} ${t(
                              `discovery.${card.key}.title`,
                            )}`}
                          >
                            <HiOutlineXMark
                              size={20}
                              strokeWidth={2.5}
                            />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* ==========================================
                        COLLAPSED BOOKMARK
                    ========================================== */}

                    <button
                      type="button"
                      onClick={() =>
                        setActiveCard(
                          isActive
                            ? null
                            : index,
                        )
                      }
                      className="absolute left-0 top-0 z-30 flex h-14 w-12 items-center justify-center rounded-r-2xl border-2 bg-base-100/30 text-white shadow-lg backdrop-blur-sm transition-transform duration-200 active:scale-95"
                      style={{
                        borderColor: card.color,
                      }}
                      aria-label={t(
                        `discovery.${card.key}.title`,
                      )}
                      aria-expanded={isActive}
                    >
                      <Icon
                        size={24}
                        style={{
                          color: card.color,
                        }}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
