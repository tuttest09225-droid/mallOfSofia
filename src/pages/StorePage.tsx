// src/pages/StorePage.tsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineFire,
  HiOutlineStar,
  HiOutlineTag,
} from "react-icons/hi2";
import { stores } from "../data/stores";
import type { CampaignType, Store } from "../data/stores";

type StorePageProps = {
  store: Store;
};

const CAMPAIGN_COLORS = {
  red: "#EB2129",
  blue: "#105BA9",
  green: "#14A753",
  yellow: "#F8B615",
};

const campaignStyles: Record<
  CampaignType,
  {
    color: string;
    background: string;
    icon: typeof HiOutlineTag;
    label: string;
  }
> = {
  offers: {
    color: CAMPAIGN_COLORS.green,
    background: "rgba(20, 167, 83, 0.08)",
    icon: HiOutlineTag,
    label: "Special offer",
  },

  loyalty: {
    color: CAMPAIGN_COLORS.yellow,
    background: "rgba(248, 182, 21, 0.08)",
    icon: HiOutlineStar,
    label: "Loyalty benefit",
  },

  events: {
    color: CAMPAIGN_COLORS.red,
    background: "rgba(235, 33, 41, 0.08)",
    icon: HiOutlineFire,
    label: "Event",
  },
};

function CampaignCard({ campaign }: { campaign: NonNullable<Store["campaign"]> }) {
  const style = campaignStyles[campaign.type];
  const Icon = style.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden rounded-3xl"
      style={{
        border: `1px solid ${style.color}`,
        backgroundColor: style.background,
      }}
    >
      <div className="p-5 sm:p-6 md:p-7">
        <div className="flex items-start gap-4">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
            style={{
              backgroundColor: `${style.color}18`,
              color: style.color,
            }}
          >
            <Icon className="text-xl" />
          </div>

          <div className="min-w-0 flex-1">
            <div
              className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: style.color }}
            >
              {style.label}
            </div>

            <h2 className="text-xl font-bold leading-tight sm:text-2xl">
              {campaign.title}
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-base-content/60 sm:text-base">
              {campaign.description}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {campaign.discount && (
            <span
              className="rounded-full px-3 py-1.5 text-xs font-bold tracking-wide"
              style={{
                backgroundColor: `${style.color}18`,
                color: style.color,
              }}
            >
              {campaign.discount}
            </span>
          )}

          {campaign.validUntil && (
            <span className="text-xs font-medium text-base-content/50">
              {campaign.validUntil}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function StoreHero({ store }: { store: Store }) {
  return (
    <section>
      <Link
        to="/campaigns/summer"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-base-content/60 transition hover:text-base-content"
      >
        <HiOutlineArrowLeft />
        Back to summer campaign
      </Link>

      <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm">
        <div className="p-5 sm:p-7 md:p-9">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
            {/* Logo */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-base-300 bg-white p-4 sm:h-28 sm:w-28">
              <img
                src={store.logo}
                alt={`${store.name} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-base-200 px-3 py-1 text-xs font-semibold text-base-content/60">
                  {store.category}
                </span>

                <span className="rounded-full bg-[#105BA9]/10 px-3 py-1 text-xs font-semibold text-[#105BA9]">
                  {store.floor}
                </span>
              </div>

              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                {store.name}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-base-content/60 sm:text-base">
                {store.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-base-200 text-base-content/60">
          <Icon className="text-lg" />
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-bold">{title}</h3>

          <div className="mt-1 text-sm leading-relaxed text-base-content/60">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function StoreInformation({ store }: { store: Store }) {
  return (
    <section>
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-base-content/40">
          Store information
        </p>

        <h2 className="mt-1 text-2xl font-bold tracking-tight">
          Everything you need to know
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <InfoCard icon={HiOutlineClock} title="Opening hours">
          <div className="flex justify-between gap-4">
            <span>Monday – Friday</span>
            <span className="font-medium text-base-content/80">
              {store.hours.weekdays}
            </span>
          </div>

          <div className="mt-1 flex justify-between gap-4">
            <span>Saturday – Sunday</span>
            <span className="font-medium text-base-content/80">
              {store.hours.weekend}
            </span>
          </div>
        </InfoCard>

        <InfoCard icon={HiOutlineMapPin} title="Find us">
          <p className="font-medium text-base-content/80">
            {store.location.floor}
          </p>

          {store.location.area && (
            <p className="mt-0.5">{store.location.area}</p>
          )}
        </InfoCard>

        {store.contact?.website && (
          <InfoCard icon={HiOutlineGlobeAlt} title="Website">
            <a
              href={store.contact.website}
              target="_blank"
              rel="noreferrer"
              className="break-all font-medium text-base-content/80 underline-offset-4 hover:underline"
            >
              Visit official website
            </a>
          </InfoCard>
        )}

        {store.contact?.phone && (
          <InfoCard icon={HiOutlinePhone} title="Phone">
            <a
              href={`tel:${store.contact.phone}`}
              className="font-medium text-base-content/80"
            >
              {store.contact.phone}
            </a>
          </InfoCard>
        )}
      </div>
    </section>
  );
}

function StoreMap({ store }: { store: Store }) {
  return (
    <section>
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-base-content/40">
          Location
        </p>

        <h2 className="mt-1 text-2xl font-bold tracking-tight">
          Find {store.name}
        </h2>
      </div>

      <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm sm:min-h-[360px]">
        {/* Decorative floor-plan */}
        <div className="absolute inset-5 rounded-2xl border border-dashed border-base-300">
          <div className="absolute left-[18%] top-[20%] h-16 w-24 rounded-lg border border-base-300" />
          <div className="absolute right-[15%] top-[16%] h-20 w-28 rounded-lg border border-base-300" />
          <div className="absolute bottom-[18%] left-[15%] h-20 w-32 rounded-lg border border-base-300" />
          <div className="absolute bottom-[20%] right-[18%] h-14 w-24 rounded-lg border border-base-300" />

          <div className="absolute left-1/2 top-1/2 h-24 w-40 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-base-300" />

          {/* Store marker */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#105BA9] text-white shadow-lg">
              <HiOutlineMapPin className="text-xl" />
            </div>

            <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-base-100 px-3 py-1.5 text-xs font-bold shadow-md">
              {store.name}
            </div>
          </div>

          {/* Other decorative markers */}
          <span className="absolute left-[22%] top-[28%] h-3 w-3 rounded-full bg-[#14A753]" />
          <span className="absolute right-[23%] top-[31%] h-3 w-3 rounded-full bg-[#F8B615]" />
          <span className="absolute left-[28%] bottom-[26%] h-3 w-3 rounded-full bg-[#EB2129]" />
        </div>

        {/* Coming soon */}
        <div className="absolute left-4 top-4 z-10 rounded-xl bg-base-100/95 px-3 py-2.5 shadow-md backdrop-blur-sm sm:left-6 sm:top-6 sm:px-4 sm:py-3">
          <div className="flex items-center gap-2">
            <HiOutlineMapPin className="text-[#105BA9]" />

            <div>
              <p className="text-xs font-bold">Mall of Sofia map</p>
              <p className="text-[11px] text-base-content/50">
                Interactive map coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedStores({ store }: { store: Store }) {
  if (!store.relatedStores?.length) {
    return null;
  }

  const related = store.relatedStores
    .map((slug) => stores[slug])
    .filter(Boolean);

  if (!related.length) {
    return null;
  }

  return (
    <section>
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-base-content/40">
          You may also like
        </p>

        <h2 className="mt-1 text-2xl font-bold tracking-tight">
          Explore more stores
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((relatedStore) => (
          <Link
            key={relatedStore.slug}
            to={`/shops/${relatedStore.slug}`}
            className="group rounded-2xl border border-base-300 bg-base-100 p-4 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-base-300 bg-white p-2">
                <img
                  src={relatedStore.logo}
                  alt={`${relatedStore.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs text-base-content/40">
                  {relatedStore.category}
                </p>

                <h3 className="font-bold">
                  {relatedStore.name}
                </h3>

                <p className="mt-0.5 text-xs text-base-content/50">
                  {relatedStore.floor}
                </p>
              </div>

              <HiOutlineArrowRight className="shrink-0 text-base-content/30 transition group-hover:translate-x-1 group-hover:text-base-content" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function StorePage({ store }: StorePageProps) {
  return (
    <main className="min-h-screen bg-base-200">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="space-y-8 md:space-y-10">
          {/* Hero */}
          <StoreHero store={store} />

          {/* Campaign */}
          {store.campaign && (
            <section>
              <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-base-content/40">
                  Summer at Mall of Sofia
                </p>

                <h2 className="mt-1 text-2xl font-bold tracking-tight">
                  What’s happening now
                </h2>
              </div>

              <CampaignCard campaign={store.campaign} />
            </section>
          )}

          {/* Information */}
          <StoreInformation store={store} />

          {/* Map */}
          <StoreMap store={store} />

          {/* Related */}
          <RelatedStores store={store} />

          {/* Bottom CTA */}
          <section className="rounded-3xl bg-[#105BA9] p-6 text-white sm:p-8 md:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                  Mall of Sofia
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Discover more summer offers
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
                  Explore participating stores and find your next summer
                  favourite.
                </p>
              </div>

              <Link
                to="/summer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#105BA9] transition hover:bg-white/90"
              >
                View summer campaign
                <HiOutlineArrowRight />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}