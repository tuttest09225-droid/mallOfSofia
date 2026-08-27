import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

import { HiOutlineFire, HiOutlineStar, HiOutlineTicket } from "react-icons/hi2";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import ZaraLogo from "../../assets/ZaraLogo.png";
import HMLogo from "../../assets/H&MLogo.png";
import NikeLogo from "../../assets/NikeLogo.webp";
import CinemaCityLogo from "../../assets/CinemaCityLogo.png";
import TechnopolisLogo from "../../assets/TechnopolisLogo.png";
import PandoraLogo from "../../assets/PandoraLogo.png";
import LCWaikikiLogo from "../../assets/LCWaikikiLogo.png";

type BadgeType = "offers" | "loyalty" | "events";

type Partner = {
  name: string;
  logo?: string;
  href: string;
  badges: BadgeType[];
};

const partners: Partner[] = [
  {
    name: "ZARA",
    href: "/shops/zara",
    badges: ["offers", "loyalty"],
    logo: ZaraLogo,
  },
  {
    name: "H&M",
    href: "/shops/h-m",
    badges: ["loyalty", "events"],
    logo: HMLogo,
  },
  {
    name: "Nike",
    href: "/shops/nike",
    badges: ["offers"],
    logo: NikeLogo,
  },
  {
    name: "Cinema City",
    href: "/cinema",
    badges: ["events", "loyalty"],
    logo: CinemaCityLogo,
  },
  {
    name: "Technopolis",
    href: "/shops/technopolis",
    badges: ["offers"],
    logo: TechnopolisLogo,
  },
  {
    name: "Pandora",
    href: "/shops/pandora",
    badges: ["loyalty", "events"],
    logo: PandoraLogo,
  },
  {
    name: "LC Waikiki",
    href: "/shops/lc-waikiki",
    badges: ["offers"],
    logo: LCWaikikiLogo,
  },
];

const marquee = [...partners, ...partners];

const badgeStyles: Record<
  BadgeType,
  {
    icon: typeof HiOutlineStar;
    color: string;
    bg: string;
  }
> = {
  loyalty: {
    icon: HiOutlineStar,
    color: "text-[#F8B615]",
    bg: "bg-[#F8B615]/30",
  },

  offers: {
    icon: HiOutlineFire,
    color: "text-[#EB2129]",
    bg: "bg-[#EB2129]/30",
  },

  events: {
    icon: HiOutlineTicket,
    color: "text-[#105BA9]",
    bg: "bg-[#105BA9]/30",
  },
};

export default function FeaturedPartners() {
  const { t } = useTranslation();

  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) {
      return;
    }

    const track = trackRef.current;

    const halfWidth = track.scrollWidth / 2;

    const controls = animate(x, -halfWidth, {
      duration: 32,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => {
      controls.stop();
    };
  }, [x]);

  return (
    <section className="relative block overflow-hidden border-y border-base-300/60 bg-base-200/75 backdrop-blur-[2px] lg:py-8">
      {/* Section Header */}
      <div className="mx-auto mb-4 mt-6 max-w-7xl px-6 lg:mb-10 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-semibold uppercase tracking-[0.35em] text-base-content/50">
            {t("featuredPartners.title")}
          </p>
        </div>
      </div>

      {/* Auto Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade Edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-base-200/90 via-base-200/40 to-transparent" />

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-base-200/90 via-base-200/40 to-transparent" />

        <motion.div
          ref={trackRef}
          className="flex w-max cursor-grab gap-5 py-3 active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{
            left: -10000,
            right: 0,
          }}
          dragElastic={0.05}
          onDragStart={() => {
            setIsDragging(true);
          }}
          onDragEnd={() => {
            setIsDragging(false);
          }}
        >
          {marquee.map((partner, index) => (
            <PartnerCard
              key={`${partner.name}-${index}`}
              partner={partner}
              onInteractionStart={() => {
                setIsPaused(true);
              }}
              onInteractionEnd={() => {
                setIsPaused(false);
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

type PartnerCardProps = {
  partner: Partner;
  onInteractionStart: () => void;
  onInteractionEnd: () => void;
};

function PartnerCard({
  partner,
  onInteractionStart,
  onInteractionEnd,
}: PartnerCardProps) {
  const { t } = useTranslation();

  return (
    <Link
      to={partner.href}
      aria-label={t("featuredPartners.visit", {
        name: partner.name,
      })}
      onMouseEnter={onInteractionStart}
      onMouseLeave={onInteractionEnd}
      onPointerDown={onInteractionStart}
      onPointerUp={onInteractionEnd}
      onPointerCancel={onInteractionEnd}
      className="group relative flex h-20 min-w-24 snap-start items-center justify-center overflow-hidden rounded-xl border border-base-300 bg-base-100/90 py-8 ps-12 pe-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg lg:h-32 lg:min-w-60 lg:p-10 sm:min-w-[260px]"
    >
      {/* Brand Logo */}
      <div className="flex h-full w-full items-center justify-center">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={partner.name}
            draggable={false}
            className="max-h-14 select-none object-contain transition-all duration-300 group-hover:scale-105 lg:max-h-32"
          />
        ) : (
          <span className="text-2xl font-semibold tracking-wide text-base-content/40 transition-colors duration-300 group-hover:text-base-content">
            {partner.name}
          </span>
        )}
      </div>

      {/* Badges */}
      <div className="absolute left-2 top-2 z-10 flex flex-col gap-1.5">
        {partner.badges.map((badge) => {
          const BadgeIcon = badgeStyles[badge].icon;
          const { color, bg } = badgeStyles[badge];

          return (
            <span
              key={badge}
              className={`flex w-fit items-center gap-1 overflow-hidden rounded-2xl px-2 py-1 text-[9px] font-semibold uppercase tracking-wide shadow-sm backdrop-blur-sm transition-all duration-300 ${color} ${bg}`}
            >
              <BadgeIcon className="h-5 w-5 shrink-0" />

              <span className="max-w-0 overflow-hidden whitespace-nowrap text-base-content opacity-0 transition-all duration-300 group-hover:max-w-24 group-hover:opacity-100">
                {t(`featuredPartners.badges.${badge}`)}
              </span>
            </span>
          );
        })}
      </div>
    </Link>
  );
}
