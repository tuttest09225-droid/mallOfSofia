import { Link } from "react-router-dom";
import {motion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineBuildingStorefront,
  HiOutlineFire,
  HiOutlineMapPin,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineTag,
} from "react-icons/hi2";

const CAMPAIGN_COLORS = {
  red: "#EB2129",
  blue: "#105BA9",
  green: "#14A753",
  yellow: "#F8B615",
};

const campaignStores = [
  {
    name: "ZARA",
    category: "Fashion",
    offer: "Up to 50% off selected summer styles",
    color: CAMPAIGN_COLORS.red,
    campaignType: "Featured offer",
    href: "/shops/zara",
    floor: "Level 1",
  },
  {
    name: "H&M",
    category: "Fashion",
    offer: "Summer collection from €9.99",
    color: CAMPAIGN_COLORS.blue,
    campaignType: "Limited time",
    href: "/shops/h-m",
    floor: "Level 1",
  },
  {
    name: "Nike",
    category: "Sportswear",
    offer: "Selected footwear & apparel up to 30% off",
    color: CAMPAIGN_COLORS.green,
    campaignType: "New collection",
    href: "/shops/nike",
    floor: "Level 2",
  },
  {
    name: "LC Waikiki",
    category: "Fashion",
    offer: "Summer essentials from €7.99",
    color: CAMPAIGN_COLORS.yellow,
    campaignType: "Summer special",
    href: "/shops/lc-waikiki",
    floor: "Level 1",
  },
  {
    name: "Pandora",
    category: "Jewellery",
    offer: "Selected summer jewellery -20%",
    color: CAMPAIGN_COLORS.red,
    campaignType: "Featured offer",
    href: "/shops/pandora",
    floor: "Level 2",
  },
  {
    name: "Technopolis",
    category: "Technology",
    offer: "Summer tech deals on selected products",
    color: CAMPAIGN_COLORS.blue,
    campaignType: "Limited time",
    href: "/shops/technopolis",
    floor: "Level 2",
  },
];

const campaignTags = [
  {
    label: "Up to 50% Off",
    color: CAMPAIGN_COLORS.red,
  },
  {
    label: "New Collections",
    color: CAMPAIGN_COLORS.green,
  },
  {
    label: "Limited Time",
    color: CAMPAIGN_COLORS.blue,
  },
];

const campaignStats = [
  {
    value: "30+",
    label: "Participating stores",
  },
  {
    value: "50%",
    label: "Up to discount",
  },
  {
    value: "2",
    label: "Mall levels",
  },
];

const campaignSteps = [
  {
    number: "01",
    title: "Discover offers",
    description:
      "Browse the latest summer promotions from participating stores.",
    icon: HiOutlineTag,
    color: "#14A753",
    bg: "rgba(20, 167, 83, 0.08)",
    type: "offers",
  },
  {
    number: "02",
    title: "Enjoy loyalty benefits",
    description:
      "Make the most of your favourite brands and available loyalty benefits.",
    icon: HiOutlineStar,
    color: "#F8B615",
    bg: "rgba(248, 182, 21, 0.08)",
    type: "loyalty",
  },
  {
    number: "03",
    title: "Don't miss events",
    description:
      "Keep an eye on what's happening at Mall of Sofia throughout the summer.",
    icon: HiOutlineFire,
    color: "#EB2129",
    bg: "rgba(235, 33, 41, 0.08)",
    type: "events",
  },
];

function CampaignStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-semibold tracking-tight md:text-3xl">
        {value}
      </div>

      <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-base-content/45">
        {label}
      </div>
    </div>
  );
}

function CampaignStep({
  number,
  title,
  description,
  icon: Icon,
  color,
  bg,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bg: string;
}) {
  return (
    <div
      className="grid grid-cols-[44px_1fr_auto] gap-x-3 rounded-2xl p-4 md:p-6"
      style={{
        border: `1px solid ${color}`,
        backgroundColor: bg,
      }}
    >
      {/* Icon */}
      <div
        className="row-span-2 flex h-11 w-11 items-center justify-center rounded-xl"
        style={{
          backgroundColor: `${color}18`,
          color,
        }}
      >
        <Icon className="text-xl" />
      </div>

      {/* Title */}
      <h3 className="min-w-0 pt-0.5 text-lg font-semibold leading-tight md:text-xl">
        {title}
      </h3>

      {/* Number */}
      <span
        className="self-start text-[11px] font-bold tracking-[0.2em]"
        style={{ color: `${color}80` }}
      >
        {number}
      </span>

      {/* Description */}
      <p className="col-start-2 col-end-4 mt-1.5 text-sm leading-relaxed text-base-content/60">
        {description}
      </p>
    </div>
  );
}

/* function MapLegend({
  type,
  label,
}: {
  type: "offers" | "loyalty" | "events";
  label: string;
}) {
  const styles = {
    loyalty: {
      icon: HiOutlineStar,
      color: "#F8B615",
      bg: "rgba(248, 182, 21, 0.18)",
    },
    offers: {
      icon: HiOutlineTag,
      color: "#14A753",
      bg: "rgba(20, 167, 83, 0.18)",
    },
    events: {
      icon: HiOutlineFire,
      color: "#EB2129",
      bg: "rgba(235, 33, 41, 0.18)",
    },
  };

  const { icon: Icon, color, bg } = styles[type];

  return (
    <div className="flex items-center gap-2">
      <span
        className="flex h-7 w-7 items-center justify-center rounded-lg"
        style={{
          backgroundColor: bg,
          color,
        }}
      >
        <Icon className="text-sm" />
      </span>

      <span className="text-xs font-medium text-base-content/55">{label}</span>
    </div>
  );
} */

export default function SummerCampaign() {
  return (
    <main className="overflow-hidden bg-base-100">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-12 md:px-8 md:pb-12 md:pt-40 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            {/* Hero copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              {/* Eyebrow */}
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {campaignTags.map((tag) => (
                  <span
                    key={tag.label}
                    className="rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em]"
                    style={{
                      backgroundColor: `${tag.color}12`,
                      color: tag.color,
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Summer starts at
                <span className="block text-[#EB2129]">Mall of Sofia.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-base-content/60 md:text-lg">
                Discover summer offers, fresh collections and special promotions
                from your favourite stores — all under one roof.
              </p>

              {/* CTA */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="#summer-offers"
                  className="min-h-16 inline-flex items-center justify-center gap-2 py-3.5 font-semibold text-white transition hover:opacity-90 btn btn-primary rounded-xl px-8 text-base sm:px-10 sm:text-lg hover:bg-white hover:text-black border-2"
                >
                  Explore summer offers
                  <HiOutlineArrowRight className="text-lg" />
                </Link>

                <Link
                  to="#how-it-works"
                  className="min-h-16 inline-flex items-center justify-center border-2 border-[#EB2129] py-3.5 font-semibold rounded-xl px-8 text-base backdrop-blur-sm transition-all hover:bg-[#EB2129]/30 hover:text-black sm:px-10 sm:text-lg"
                >
                  How it works
                </Link>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-base-200">
                {/* Replace with campaign image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <HiOutlineSparkles className="mx-auto text-5xl text-[#F8B615]" />

                    <p className="mt-3 text-sm font-medium text-base-content/40">
                      Summer campaign visual
                    </p>
                  </div>
                </div>

                {/* Floating offer card */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-base-100/95 p-4 shadow-lg backdrop-blur md:bottom-6 md:left-6 md:right-auto md:w-72">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${CAMPAIGN_COLORS.red}12`,
                        color: CAMPAIGN_COLORS.red,
                      }}
                    >
                      <HiOutlineTag className="text-xl" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-base-content/40">
                        Summer highlight
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        Up to 50% off selected styles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================== */}
      <section className="border-y border-base-300 bg-base-200/40">
        <div className="mx-auto grid max-w-5xl grid-cols-3 px-5 py-6 md:px-8 md:py-8">
          {campaignStats.map((stat) => (
            <CampaignStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12 lg:px-10">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EB2129]">
              Summer at Mall of Sofia
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Your summer shopping starts here.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-base-content/60 md:justify-self-end md:text-lg">
            From fashion and sportswear to jewellery and technology, discover
            seasonal offers designed to make your next visit to Mall of Sofia
            even better.
          </p>
        </div>
      </section>

      {/* =========================================================
          SUMMER OFFERS
      ========================================================== */}
      <section id="summer-offers" className="scroll-mt-20 bg-base-200/40">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12 lg:px-10">
          <div className="mb-7 flex items-end justify-between gap-4 md:mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EB2129]">
                Participating stores
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Summer offers
              </h2>
            </div>

            <Link
              to="/shops"
              className="hidden items-center gap-1.5 text-sm font-semibold md:flex"
            >
              View all stores
              <HiOutlineArrowRight />
            </Link>
          </div>

          {/* Store cards */}
          <div className="grid gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {campaignStores.map((store, index) => (
              <Link
                key={store.name}
                to={store.href}
                className={`group rounded-2xl border bg-base-100 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:p-5 ${
                  index >= 3 ? "hidden md:block" : ""
                }`}
                style={{ border: `1px solid ${store.color}` }}
              >
                <div className="grid grid-cols-[44px_1fr_auto] gap-x-3 gap-y-1">
                  {/* Store icon */}
                  <div
                    className="row-span-2 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${store.color}12`,
                      color: store.color,
                    }}
                  >
                    <HiOutlineBuildingStorefront className="text-xl" />
                  </div>

                  {/* Category + store name */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: store.color }}
                      />

                      <p className="truncate text-[10px] font-bold uppercase tracking-[0.16em] text-base-content/40">
                        {store.category}
                      </p>
                    </div>

                    <h3 className="mt-0.5 text-xl font-semibold leading-tight">
                      {store.name}
                    </h3>
                  </div>

                  {/* Level */}
                  <span className="self-start rounded-full bg-base-200 px-2.5 py-1 text-[10px] font-semibold text-base-content/45">
                    {store.floor}
                  </span>

                  {/* Offer + CTA */}
                  <div className="col-start-2 col-end-4 mt-2">
                    <p className="text-sm leading-relaxed text-base-content/60">
                      {store.offer}
                    </p>

                    <div
                      className="mt-3 flex items-center gap-1.5 text-sm font-semibold"
                      style={{ color: store.color }}
                    >
                      View store
                      <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile all stores button */}
          <div className="mt-5 md:hidden">
            <Link
              to="/shops"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-base-300 bg-base-100 px-5 py-3.5 text-sm font-semibold"
            >
              View all stores
              <HiOutlineArrowRight />
            </Link>
          </div>

          {/* Color legend */}
          {/* <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-base-300 pt-5">
            <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.16em] text-base-content/35">
              Campaign
            </span>

            <MapLegend type="offers" label="Offers" />

            <MapLegend type="loyalty" label="Loyalty" />

            <MapLegend type="events" label="Events" />
          </div> */}
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================== */}
      <section
        id="how-it-works"
        className="scroll-mt-20 mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12 lg:px-10"
      >
        <div className="mb-7 max-w-2xl md:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EB2129]">
            Simple & easy
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            How it works
          </h2>

          <p className="mt-3 text-base leading-relaxed text-base-content/60">
            Find an offer, visit the store and enjoy your summer shopping at
            Mall of Sofia.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3 md:gap-5">
          {campaignSteps.map((step) => (
            <CampaignStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              color={step.color}
              bg={step.bg}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          MAP
      ========================================================== */}
      <section className="bg-base-200/40">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12 lg:px-10">
          <div className="grid gap-7 md:grid-cols-[0.75fr_1.25fr] md:items-center md:gap-12">
            <div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Everything is closer than you think.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-base-content/60">
                Explore participating stores across Level 1 and Level 2 and plan
                your shopping trip with ease.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-base-300 bg-base-100 p-4">
                  <p className="text-2xl font-semibold">Level 1</p>
                  <p className="mt-1 text-xs text-base-content/45">
                    Fashion & more
                  </p>
                </div>

                <div className="rounded-xl border border-base-300 bg-base-100 p-4">
                  <p className="text-2xl font-semibold">Level 2</p>
                  <p className="mt-1 text-xs text-base-content/45">
                    Sports & lifestyle
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative flex aspect-[4/3] min-h-[280px] items-center justify-center overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm md:min-h-[360px]">
              <div className="absolute inset-5 rounded-2xl border border-dashed border-base-300">
                <div className="absolute left-[20%] top-[25%] h-16 w-16 rounded-xl border border-base-300 bg-base-200" />
                <div className="absolute right-[18%] top-[20%] h-20 w-24 rounded-xl border border-base-300 bg-base-200" />
                <div className="absolute bottom-[20%] left-[25%] h-20 w-24 rounded-xl border border-base-300 bg-base-200" />
                <div className="absolute bottom-[18%] right-[20%] h-16 w-16 rounded-xl border border-base-300 bg-base-200" />

                {/* Campaign store markers */}
                <span
                  className="absolute left-[27%] top-[31%] h-3 w-3 rounded-full ring-4 ring-white"
                  style={{ backgroundColor: CAMPAIGN_COLORS.red }}
                />

                <span
                  className="absolute right-[27%] top-[28%] h-3 w-3 rounded-full ring-4 ring-white"
                  style={{ backgroundColor: CAMPAIGN_COLORS.blue }}
                />

                <span
                  className="absolute bottom-[30%] left-[33%] h-3 w-3 rounded-full ring-4 ring-white"
                  style={{ backgroundColor: CAMPAIGN_COLORS.green }}
                />

                <span
                  className="absolute bottom-[27%] right-[29%] lg:right-[26%] h-3 w-3 rounded-full ring-4 ring-white"
                  style={{ backgroundColor: CAMPAIGN_COLORS.yellow }}
                />
              </div>

              <div className="hidden lg:block relative z-10 rounded-2xl bg-base-100 px-5 py-4 text-center shadow-lg">
                <HiOutlineMapPin className="mx-auto text-2xl text-[#EB2129]" />

                <p className="mt-1 text-sm font-semibold">Mall of Sofia map</p>

                <p className="mt-1 text-xs text-base-content/40">
                  Interactive map coming soon
                </p>
              </div>
              <div className="lg:hidden absolute left-4 top-4 z-20 rounded-xl bg-base-100/95 px-3 py-2.5 shadow-md backdrop-blur-sm md:left-6 md:top-6 md:px-4 md:py-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EB2129]/10 text-[#EB2129]">
                    <HiOutlineMapPin className="text-base" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold leading-tight md:text-sm">
                      Mall of Sofia map
                    </p>

                    <p className="mt-0.5 text-[10px] text-base-content/40 md:text-xs">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section>
        <div className="mx-auto max-w-5xl px-5 py-14 text-center md:px-8 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EB2129]/10 text-[#EB2129]">
              <HiOutlineSparkles className="text-2xl" />
            </div>

            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Make this summer a little more special.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-base-content/60 md:text-lg">
              Discover the latest offers and make your next shopping trip count.
            </p>

            <div className="mt-7">
              <Link
                to="#summer-offers"
                className="min-h-16 inline-flex items-center justify-center gap-2 py-3.5 font-semibold text-white transition hover:opacity-90 btn btn-primary rounded-xl px-8 text-base sm:px-10 sm:text-lg hover:bg-white hover:text-black border-2"
              >
                Explore summer offers
                <HiOutlineArrowRight className="text-lg" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
