import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  HiOutlineSparkles,
  HiOutlineTicket,
  HiOutlineTag,
  HiOutlineArrowRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi2";

const happeningIcons = {
  HiOutlineTag,
  HiOutlineTicket,
  HiOutlineSparkles,
} as const;

type HappeningIcon = keyof typeof happeningIcons;

type Happening = {
  type: string;
  timing: string;
  title: string;
  description: string;
  icon: HappeningIcon;
  color: string;
  cta: string;
  href: string;
};

export default function WhatsHappening() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const happenings = t("whatsHappening.happenings", {
    returnObjects: true,
  }) as Happening[];

  const next = () => {
    setCurrentIndex((current) =>
      current === happenings.length - 1 ? 0 : current + 1,
    );
  };

  const previous = () => {
    setCurrentIndex((current) =>
      current === 0 ? happenings.length - 1 : current - 1,
    );
  };

  return (
    <section className="py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col">
          <div className="flex justify-between gap-4">
            <p className="content-center text-base uppercase tracking-[0.35em] text-base-100/70">
              {t("whatsHappening.latest.title")}
            </p>

            <Link
              to={t("whatsHappening.latest.href")}
              className="flex items-center gap-2 rounded-lg border border-primary px-5 py-2 text-sm font-medium text-base-100 bg-primary/30 transition-all hover:bg-primary hover:text-white"
            >
              {t("whatsHappening.latest.CTA")}
              <HiOutlineArrowRight size={18} />
            </Link>
          </div>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-base-100 lg:text-5xl">
            {t("whatsHappening.title")}
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="relative md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {happenings.map((item) => {
                const Icon = happeningIcons[item.icon];

                return (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="w-full shrink-0 pr-1"
                  >
                    <article
                      className="group min-h-[280px] rounded-lg border bg-base-100/90 backdrop-blur-sm p-7 transition-all duration-300 hover:border-primary/70"
                      style={{ borderColor: item.color }}
                    >
                      {/* Badge */}
                      <div className="flex items-center justify-between">
                        <span
                          className="flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wide"
                          style={{
                            backgroundColor: `${item.color}15`,
                            color: item.color,
                          }}
                        >
                          <Icon className="h-4 w-4" />
                          {item.type}
                        </span>

                        <span className="text-sm" style={{ color: item.color }}>
                          {item.timing}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="mt-8 text-2xl font-semibold text-base-content">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-base-content/60">
                        {item.description}
                      </p>

                      {/* CTA */}
                      <div
                        className="mt-8 flex items-center gap-2 font-semibold transition-all group-hover:gap-4"
                        style={{ color: item.color }}
                      >
                        {item.cta}
                        <HiOutlineArrowRight size={20} />
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="relative mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {happenings.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: currentIndex === index ? "40px" : "12px",
                    backgroundColor:
                      currentIndex === index
                        ? item.color
                        : "oklch(var(--bc) / 0.2)",
                  }}
                  aria-label={t("whatsHappening.controls.goTo", {
                    title: item.title,
                  })}
                />
              ))}
            </div>

            <div className="absolute right-0 flex gap-2">
              <button
                type="button"
                onClick={previous}
                className="btn btn-circle btn-sm border border-base-300 bg-base-100 hover:border-primary hover:text-primary"
                aria-label={t("whatsHappening.controls.previous")}
              >
                <HiOutlineChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={next}
                className="btn btn-circle btn-sm border border-base-300 bg-base-100 hover:border-primary hover:text-primary"
                aria-label={t("whatsHappening.controls.next")}
              >
                <HiOutlineChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Cards */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {happenings.slice(0, 3).map((item) => {
            const Icon = happeningIcons[item.icon];

            return (
              <Link
                key={item.title}
                to={item.href}
                className="group rounded-xl border-2 bg-base-100/70 backdrop-blur-sm p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: item.color }}
              >
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-xs  font-semibold uppercase tracking-wide"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                    }}
                  >
                    <Icon className="h-4 w-4" />
                    {item.type}
                  </span>

                  <span className="text-sm"
                    style={{ color: item.color }}
                  >
                    {item.timing}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-semibold text-base-content transition-colors group-hover:text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-base-content/60">{item.description}</p>

                {/* CTA */}
                <div
                  className="mt-8 flex items-center gap-1 font-semibold transition-all group-hover:gap-4"
                  style={{ color: item.color }}
                >
                  {item.cta}
                  <HiOutlineArrowRight size={20} className="-mb-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
