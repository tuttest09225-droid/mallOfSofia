import { Search, MapPin, ArrowUp } from "lucide-react";

export default function MobileFloatingActions() {

  const showBackToTop = scrollY > 500;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col overflow-hidden rounded-full border border-primary bg-base-100/40 shadow-xl backdrop-blur-sm">
      {/* Back To Top */}
      {showBackToTop && (
        <>
          <button
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            className="flex h-12 w-12 items-center justify-center text-primary transition-colors hover:bg-base-200"
          >
            <ArrowUp size={21} />
          </button>

            <div className="mx-2 border-t border-primary" />
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

        <div className="mx-2 border-t border-primary lg:hidden" />

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