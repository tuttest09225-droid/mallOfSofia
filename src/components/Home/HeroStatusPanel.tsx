import {
  HiOutlineClock,
  HiOutlineFilm,
  HiOutlineTicket,
  HiOutlineSparkles,
  HiOutlineBuildingStorefront,
  HiOutlineLightBulb,
} from "react-icons/hi2";

import { RiCarWashingLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

type HeroStatusProps = {
  isOpen: boolean;
  movies: number;
  offers: number;
  events: number;
  premieres: number;
  newStores: number;
};

export default function HeroStatusPanel({
  isOpen,
  movies,
  offers,
  events,
  premieres,
  newStores,
}: HeroStatusProps) {
  const { t } = useTranslation();

  return (
    <div className="absolute bottom-10 right-10 z-20 hidden w-48 rounded-xl border border-white/10 bg-black/25 p-6 text-white shadow-2xl backdrop-blur-2xl lg:block">
      <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/70">
        {t("statusPanel.today")}
      </p>

      <div className="space-y-4">
        {/* Open Status */}
        <StatusRow
          icon={
            <HiOutlineLightBulb
              size={20}
              className={isOpen ? "text-green-400" : "text-red-400"}
            />
          }
          text={
            isOpen
              ? t("statusPanel.open")
              : t("statusPanel.closed")
          }
        />

        {/* Parking Status */}
        <StatusRow
          icon={
            <RiCarWashingLine
              size={20}
              className={isOpen ? "text-green-400" : "text-red-400"}
            />
          }
          text={
            isOpen
              ? t("statusPanel.parkingOpen")
              : t("statusPanel.parkingClosed")
          }
        />

        {/* Movies */}
        <StatusRow
          icon={<HiOutlineFilm size={20} />}
          text={t("statusPanel.movies", { count: movies })}
        />

        {/* Offers */}
        <StatusRow
          icon={<HiOutlineTicket size={20} />}
          text={t("statusPanel.offers", { count: offers })}
        />

        {/* Events */}
        {events > 0 && (
          <StatusRow
            icon={<HiOutlineClock size={20} />}
            text={t("statusPanel.events", { count: events })}
          />
        )}

        {/* Premieres */}
        {premieres > 0 && (
          <StatusRow
            icon={<HiOutlineSparkles size={20} />}
            text={t("statusPanel.premieres", {
              count: premieres,
            })}
          />
        )}

        {/* New Stores */}
        {newStores > 0 && (
          <StatusRow
            icon={<HiOutlineBuildingStorefront size={20} />}
            text={t("statusPanel.newStores", {
              count: newStores,
            })}
          />
        )}
      </div>
    </div>
  );
}

type StatusRowProps = {
  icon: React.ReactNode;
  text: string;
};

function StatusRow({ icon, text }: StatusRowProps) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="text-red-500">{icon}</div>
      <span>{text}</span>
    </div>
  );
}
