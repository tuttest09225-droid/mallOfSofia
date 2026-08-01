import { Search, MapPin, ArrowUp } from "lucide-react";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function MobileFloatingActions() {
  const { scrollDirection, scrollY } = useScrollDirection();

  const navbarHidden = scrollDirection === "down" && scrollY > 100;
  const showFloatingActions = navbarHidden && scrollY > 100;
  const showBackToTop = scrollY > 500;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col overflow-hidden rounded-full border border-base-300 bg-base-100/95 shadow-xl backdrop-blur-xl">
      {/* Back To Top */}
      {showBackToTop && (
        <>
          <button
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            className="flex h-12 w-12 items-center justify-center text-base-content transition-colors hover:bg-base-200"
          >
            <ArrowUp size={21} />
          </button>

          {showFloatingActions && (
            <div className="mx-2 border-t border-base-300" />
          )}
        </>
      )}

      {/* Mobile Map */}
      <button
        type="button"
        aria-label="Map"
        className={`
          flex h-12 w-12 items-center justify-center text-primary transition-colors hover:bg-primary/10 lg:hidden
        `}
      >
        <MapPin size={21} />
      </button>

      {showFloatingActions && (
        <div className="mx-2 border-t border-base-300 lg:hidden" />
      )}

      {/* Mobile Search */}
      <button
        type="button"
        aria-label="Search"
        className={`
          flex h-12 w-12 items-center justify-center text-primary transition-colors hover:bg-primary/10 lg:hidden
        `}
      >
        <Search size={21} />
      </button>
    </div>
  );
}