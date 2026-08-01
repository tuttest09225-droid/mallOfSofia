import {
  HiOutlineClock,
  HiOutlineFilm,
  HiOutlineTicket,
  HiOutlineSparkles,
  HiOutlineBuildingStorefront,
  HiOutlineLightBulb,
} from "react-icons/hi2";
import { RiCarWashingLine } from "react-icons/ri";

import { useScrollDirection } from "../hooks/useScrollDirection";

type MobileStatusBarProps = {
  isOpen: boolean;
  movies: number;
  offers: number;
  events: number;
  premieres: number;
  newStores: number;
};

export default function MobileStatusBar({
  isOpen,
  movies,
  offers,
  events,
  premieres,
  newStores,
}: MobileStatusBarProps) {
  const { scrollDirection, scrollY } = useScrollDirection();

  const navbarHidden = scrollDirection === "down" && scrollY > 100;

  return (
    <div
      className={`fixed left-0 z-40 w-full border-b border-base-300 bg-base-100/60 backdrop-blur-xl transition-all duration-300 lg:hidden ${
        navbarHidden ? "top-0" : "top-20"
      }`}
    >
      <div className="mx-auto flex min-h-10 items-center justify-center px-3 py-1.5 sm:px-4">
        <div className="flex w-full max-w-md flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-medium sm:gap-x-5 sm:text-xs">
          <StatusItem
            icon={
              <HiOutlineLightBulb
                size={15}
                className={isOpen ? "text-success" : "text-error"}
              />
            }
            text={isOpen ? "Open" : "Closed"}
          />

          <StatusItem
            icon={
              <RiCarWashingLine
                size={15}
                className={isOpen ? "text-success" : "text-error"}
              />
            }
            text="Parking"
          />

          <StatusItem
            icon={<HiOutlineFilm size={15} />}
            text={`${movies} Movies`}
          />

          <StatusItem
            icon={<HiOutlineTicket size={15} />}
            text={`${offers} Offers`}
          />

          {events > 0 && (
            <StatusItem
              icon={<HiOutlineClock size={15} />}
              text={`${events} Events`}
            />
          )}

          {premieres > 0 && (
            <StatusItem
              icon={<HiOutlineSparkles size={15} />}
              text={`${premieres} Premieres`}
            />
          )}

          {newStores > 0 && (
            <StatusItem
              icon={<HiOutlineBuildingStorefront size={15} />}
              text={`${newStores} New`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

type StatusItemProps = {
  icon: React.ReactNode;
  text: string;
};

function StatusItem({ icon, text }: StatusItemProps) {
  return (
    <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-base-content/70">
      {icon}
      <span>{text}</span>
    </div>
  );
}