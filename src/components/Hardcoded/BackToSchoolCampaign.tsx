import {
  HiOutlineArrowRight,
  HiOutlineMapPin,
  HiOutlineTag,
  HiOutlineBuildingStorefront,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const campaign = {
  eyebrow: "Back to School",
  title: "Back to School at Mall of Sofia",
  description:
    "Get ready for the new school year with fresh styles, tech essentials and special offers from your favourite brands.",
  dates: "1–30 September",
  stores: [
    {
      name: "ZARA",
      category: "Fashion",
      offer: "Up to 30% off selected styles",
      href: "/shops/zara",
    },
    {
      name: "H&M",
      category: "Fashion",
      offer: "Kids & teens collection from €9.99",
      href: "/shops/h-m",
    },
    {
      name: "Nike",
      category: "Sportswear",
      offer: "20% off selected footwear",
      href: "/shops/nike",
    },
    {
      name: "Technopolis",
      category: "Technology",
      offer: "Special prices on laptops & accessories",
      href: "/shops/technopolis",
    },
  ],
};

export default function BackToSchoolCampaign() {
  return (
    <section className="bg-base-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <div className="overflow-hidden rounded-3xl bg-[#105BA9] text-white">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                {campaign.eyebrow}
              </p>

              <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {campaign.title}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                {campaign.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white/70">
                <HiOutlineMapPin size={18} />
                Mall of Sofia
                <span className="text-white/30">•</span>
                {campaign.dates}
              </div>
            </div>

            <div className="relative min-h-[300px] bg-gradient-to-br from-[#14A753] to-[#105BA9] lg:min-h-[450px]">
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="text-center">
                  <span className="text-7xl font-black sm:text-8xl">
                    BTS
                  </span>

                  <p className="mt-3 text-xl font-semibold">
                    Ready for a fresh start?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Participating stores */}
        <div className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-base-content/40">
                Participating stores
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Find what you need
              </h2>
            </div>

            <Link
              to="/shops"
              className="hidden items-center gap-2 text-sm font-semibold text-primary sm:flex"
            >
              View all stores
              <HiOutlineArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {campaign.stores.map((store) => (
              <Link
                key={store.name}
                to={store.href}
                className="group rounded-2xl border border-base-300 bg-base-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HiOutlineBuildingStorefront size={25} />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/40">
                  {store.category}
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {store.name}
                </h3>

                <div className="mt-5 flex items-start gap-2 text-sm text-base-content/60">
                  <HiOutlineTag
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span>{store.offer}</span>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                  Explore store
                  <HiOutlineArrowRight size={17} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Offers */}
        <div className="mt-16 rounded-3xl bg-base-200 p-8 sm:p-10 lg:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Campaign offers
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Special offers, all in one place
            </h2>

            <p className="mt-4 text-base-content/60">
              Browse the offers connected to the Back to School campaign
              before you visit.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {campaign.stores.map((store) => (
              <Link
                key={store.name}
                to={store.href}
                className="flex items-center justify-between rounded-xl border border-base-300 bg-base-100 p-5 transition hover:border-primary"
              >
                <div>
                  <p className="font-semibold">{store.name}</p>
                  <p className="mt-1 text-sm text-base-content/60">
                    {store.offer}
                  </p>
                </div>

                <HiOutlineArrowRight
                  size={20}
                  className="shrink-0 text-primary"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-base-content/40">
                Find it
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Where to find these stores
              </h2>
            </div>
          </div>

          <div className="relative mt-8 h-[400px] overflow-hidden rounded-3xl border border-base-300 bg-base-200">
            {/* Temporary map placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-xl">
                <HiOutlineMapPin size={30} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Mall of Sofia
              </h3>

              <p className="mt-2 text-center text-sm text-base-content/50">
                Aleksandar Stamboliyski Blvd 101–103
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Mall+of+Sofia,+Sofia,+Bulgaria"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Open in Google Maps
                <HiOutlineArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}