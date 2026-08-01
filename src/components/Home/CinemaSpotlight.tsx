import { useState } from "react";
import {
  HiOutlinePlay,
  HiOutlineClock,
  HiOutlineTicket,
  HiOutlineArrowRight,
  HiOutlineChevronRight,
  HiOutlineXMark,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Movie = {
  title: string;
  genre: string;
  duration: string;
  description: string;
  poster: string;
  times: string[];
  trailer: string;
};

export default function CinemaSpotlight() {
  const { t } = useTranslation();

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const movies = t("cinema.movies", {
    returnObjects: true,
  }) as Movie[];

  return (
    <section className="bg-neutral-950 py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between lg:mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              {t("cinema.title")}
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              {t("cinema.subtitle")}
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
              {t("cinema.description")}
            </p>
          </div>

          <Link
            to="/cinema"
            className="group hidden items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition-all hover:border-primary hover:bg-primary md:flex"
          >
            {t("cinema.schedule")}

            <HiOutlineArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Movies */}
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0">
          {movies.map((movie, index) => (
            <article
              key={movie.title}
              className="group min-w-[82%] snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] sm:min-w-[55%] md:min-w-0"
            >
              {/* Poster */}
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                {/* Trailer */}
                <button
                  type="button"
                  onClick={() => setSelectedMovie(movie)}
                  aria-label={`Play trailer for ${movie.title}`}
                  className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-all hover:scale-105 hover:border-primary hover:text-primary"
                >
                  <HiOutlinePlay size={22} />
                </button>

                {/* Movie Number */}
                <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  0{index + 1}
                </span>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{movie.title}</h3>

                <p className="mt-2 text-sm text-white/50">
                  {movie.genre}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-white/50">
                  <HiOutlineClock size={18} />
                  {movie.duration}
                </div>

                {/* Showtimes */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    <HiOutlineTicket size={17} />
                    {t("cinema.showtimes")}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {movie.times.map((time) => (
                      <button
                        key={time}
                        type="button"
                        className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium transition-all hover:border-primary hover:bg-primary hover:text-white"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Schedule CTA */}
        <Link
          to="/cinema"
          className="group mt-8 flex w-fit items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-primary md:hidden"
        >
          {t("cinema.viewSchedule")}

          <HiOutlineChevronRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* Trailer Modal */}
      {selectedMovie && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedMovie(null)}
              aria-label={t("cinema.closeTrailer")}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
              <HiOutlineXMark size={22} />
            </button>

            <iframe
              className="aspect-video w-full"
              src={selectedMovie.trailer}
              title={`${selectedMovie.title} trailer`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
