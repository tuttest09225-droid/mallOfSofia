import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import heroImage from "../../assets/mall-of-sofia.jpg";
import HeroStatusPanel from "./HeroStatusPanel";

export default function Hero() {
  const { t } = useTranslation();
  const scrollOneScreen = () => {
    const startPosition = window.scrollY;
    const targetPosition = startPosition + window.innerHeight;
    const duration = 1400;
    const startTime = performance.now();

    const easeInOutCubic = (progress: number) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(
        0,
        startPosition + (targetPosition - startPosition) * easedProgress - 150,
      );

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };
  return (
    <section
      id="home-hero"
      className="relative h-[75svh] min-h-[560px] w-full overflow-hidden 2xl:h-[90svh] lg:max-h-none"
    >
      {/* ====================================================== */}
      {/* MOBILE / TABLET BACKGROUND */}
      {/* ====================================================== */}

      <motion.div
        className="absolute inset-0 2xl:hidden"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
      >
        <motion.img
          src={heroImage}
          alt={t("hero.title")}
          className="h-full w-full object-cover"
          initial={{ scale: 1.08, x: "0%" }}
          animate={{
            scale: 1.02,
            x: ["0%", "-1.5%", "0%"],
          }}
          transition={{
            scale: {
              duration: 8,
              ease: "easeOut",
            },
            x: {
              duration: 14,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
      </motion.div>

      {/* ====================================================== */}
      {/* LARGE DESKTOP BACKGROUND */}
      {/* ====================================================== */}

      <motion.div
        className="absolute inset-0 hidden 2xl:block"
        animate={{
          x: ["-20%", "0%", "20%", "0%"],
          scale: [1.5, 1.5, 1.5, 1.3],
        }}
        transition={{
          duration: 14,
          ease: "easeInOut",
        }}
      >
        <img
          src={heroImage}
          alt={t("hero.title")}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* ====================================================== */}
      {/* OVERLAYS */}
      {/* ====================================================== */}

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      {/* ====================================================== */}
      {/* CONTENT */}
      {/* ====================================================== */}

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-24 text-center text-white lg:justify-evenly lg:pb-0">
        {/* Title + Tagline */}

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
            }}
            className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.9,
              duration: 1.2,
            }}
            className="mt-4 text-lg text-white/80 md:mt-6 md:text-4xl"
          >
            {t("hero.subtitle")}
          </motion.p>
        </div>

        {/* CTAs */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <Link
            to="/shops"
            className="btn btn-primary min-h-14 rounded-xl px-8 text-base sm:px-10 sm:text-lg hover:bg-white hover:text-black border-2"
          >
            {t("hero.CTAdiscover")}
          </Link>

          <Link
            to="/events"
            className="btn min-h-14 rounded-xl border border-white/40 bg-black/30 px-8 text-base text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-black sm:px-10 sm:text-lg"
          >
            {t("hero.CTAevents")}
          </Link>
        </motion.div>
      </div>

      {/* ====================================================== */}
      {/* DESKTOP STATUS PANEL */}
      {/* ====================================================== */}

      <div className="hidden lg:block">
        <HeroStatusPanel
          isOpen={true}
          movies={8}
          offers={14}
          events={1}
          premieres={1}
          newStores={2}
        />
      </div>

      {/* ====================================================== */}
      {/* SCROLL INDICATOR */}
      {/* ====================================================== */}

      <motion.button
        type="button"
        onClick={scrollOneScreen}
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "easeInOut",
        }}
        className="hidden absolute bottom-6 left-1/2 z-10 lg:flex -translate-x-1/2 cursor-pointer flex-col items-center gap-1 text-white transition-opacity hover:opacity-70 lg:bottom-10"
        aria-label={t("hero.scrollDown")}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          {t("hero.scrollDown")}
        </span>

        <span className="text-xl" aria-hidden="true">
          ↓
        </span>
      </motion.button>
    </section>
  );
}
