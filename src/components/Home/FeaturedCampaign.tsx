import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

const tagColors = ["#EB2129", "#14A753", "#105BA9"];

export default function FeaturedCampaign() {
  const { t } = useTranslation();

  const tags = t("featuredCampaign.tags", {
    returnObjects: true,
  }) as Array<{
    label: string;
    color: string;
  }>;

  return (
    <section>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="overflow-hidden border-y border-base-300 bg-base-100 pb-8"
      >
        <div className="grid lg:min-h-[680px] lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-[680px]">
            <img
              src={t("featuredCampaign.image")}
              alt={t("featuredCampaign.imageAlt")}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

            {/* Featured Campaign Label */}
            <div className="absolute left-6 top-6 z-10 flex items-center gap-3 lg:left-10 lg:top-10">
              <span
                className="h-6 w-1"
                style={{ backgroundColor: t("featuredCampaign.theme") }}
              />

              <span
                className="text-2xl font-bold uppercase tracking-[0.25em]"
                style={{ color: t("featuredCampaign.theme") }}
              >
                {t("featuredCampaign.eyebrow")}
              </span>
            </div>

            {/* Image Metadata */}
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10">
              <div className="rounded-2xl border border-white/20 bg-black/20 px-5 py-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  {t("featuredCampaign.subtitle")}
                </p>

                <p className="mt-1 text-lg font-semibold text-white">
                  {t("featuredCampaign.stores")}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-6 py-4 sm:px-10 lg:py-12 lg:px-16 xl:px-24">
            {/* Heading */}
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-base-content sm:text-5xl lg:text-6xl xl:text-7xl">
              {t("featuredCampaign.title")}
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-base-content/65 sm:text-lg lg:text-xl">
              {t("featuredCampaign.description")}
            </p>

            {/* Tags */}
            <div className="mt-8 flex max-w-xl flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={tag.label}
                  className="rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: `${tagColors[index] ?? "#105BA9"}12`,
                    color: tagColors[index] ?? "#105BA9",
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              to={t("featuredCampaign.href")}
              className="group mt-10 flex w-fit items-center gap-2 font-semibold transition-all duration-300 hover:gap-4"
              style={{ color: t("featuredCampaign.theme") }}
            >
              {t("featuredCampaign.cta")}

              <HiOutlineArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </motion.article>
    </section>
  );
}
