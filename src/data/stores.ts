// src/data/stores.ts

import ZaraLogo from "../assets/ZaraLogo.png";
import HMLogo from "../assets/H&MLogo.png";
import NikeLogo from "../assets/NikeLogo.webp";
import CinemaCityLogo from "../assets/CinemaCityLogo.png";
import TechnopolisLogo from "../assets/TechnopolisLogo.png";
import PandoraLogo from "../assets/PandoraLogo.png";
import LCWaikikiLogo from "../assets/LCWaikikiLogo.png";

export type CampaignType = "offers" | "loyalty" | "events";

export type Store = {
  slug: string;
  name: string;
  category: string;
  logo: string;
  floor: string;

  description: string;

  campaign?: {
    type: CampaignType;
    title: string;
    description: string;
    discount?: string;
    validUntil?: string;
  };

  hours: {
    weekdays: string;
    weekend: string;
  };

  location: {
    floor: string;
    area?: string;
  };

  contact?: {
    phone?: string;
    website?: string;
  };

  social?: {
    instagram?: string;
    facebook?: string;
  };

  relatedStores?: string[];
};

export const stores: Record<string, Store> = {
  zara: {
    slug: "zara",
    name: "ZARA",
    category: "Fashion",
    logo: ZaraLogo,
    floor: "Level 1",

    description:
      "Discover the latest fashion collections for women, men and children, with seasonal styles designed for every occasion.",

    campaign: {
      type: "offers",
      title: "Summer styles up to 50% off",
      description:
        "Refresh your summer wardrobe with selected seasonal styles and enjoy special prices for a limited time.",
      discount: "Up to 50% OFF",
      validUntil: "While selected items last",
    },

    hours: {
      weekdays: "10:00 – 22:00",
      weekend: "10:00 – 22:00",
    },

    location: {
      floor: "Level 1",
      area: "Main shopping area",
    },

    contact: {
      website: "https://www.zara.com/",
    },

    social: {
      instagram: "https://www.instagram.com/zara/",
    },

    relatedStores: ["h-m", "lc-waikiki"],
  },

  "h-m": {
    slug: "h-m",
    name: "H&M",
    category: "Fashion",
    logo: HMLogo,
    floor: "Level 1",

    description:
      "Fashion for the whole family, from everyday essentials to seasonal collections, accessories and summer favourites.",

    campaign: {
      type: "offers",
      title: "Summer collection from €9.99",
      description:
        "Find your summer essentials at special prices, including selected clothing, accessories and seasonal styles.",
      discount: "FROM €9.99",
      validUntil: "Limited time",
    },

    hours: {
      weekdays: "10:00 – 22:00",
      weekend: "10:00 – 22:00",
    },

    location: {
      floor: "Level 1",
      area: "Main shopping area",
    },

    contact: {
      website: "https://www2.hm.com/",
    },

    social: {
      instagram: "https://www.instagram.com/hm/",
    },

    relatedStores: ["zara", "lc-waikiki"],
  },

  nike: {
    slug: "nike",
    name: "Nike",
    category: "Sportswear",
    logo: NikeLogo,
    floor: "Level 2",

    description:
      "Explore performance footwear, apparel and accessories from Nike, bringing innovation and iconic sports style together.",

    campaign: {
      type: "loyalty",
      title: "Selected footwear & apparel up to 30% off",
      description:
        "Step into summer with selected Nike footwear and apparel at special prices.",
      discount: "UP TO 30% OFF",
      validUntil: "Limited selected items",
    },

    hours: {
      weekdays: "10:00 – 22:00",
      weekend: "10:00 – 22:00",
    },

    location: {
      floor: "Level 2",
      area: "Upper shopping level",
    },

    contact: {
      website: "https://www.nike.com/",
    },

    social: {
      instagram: "https://www.instagram.com/nike/",
    },

    relatedStores: ["technopolis", "zara"],
  },

  "lc-waikiki": {
    slug: "lc-waikiki",
    name: "LC Waikiki",
    category: "Fashion",
    logo: LCWaikikiLogo,
    floor: "Level 1",

    description:
      "Affordable fashion for the entire family, with comfortable everyday styles and seasonal collections for every age.",

    campaign: {
      type: "offers",
      title: "Summer essentials from €7.99",
      description:
        "Stock up on summer essentials for the whole family with selected styles starting from €7.99.",
      discount: "FROM €7.99",
      validUntil: "Limited time",
    },

    hours: {
      weekdays: "10:00 – 22:00",
      weekend: "10:00 – 22:00",
    },

    location: {
      floor: "Level 1",
      area: "Main shopping area",
    },

    contact: {
      website: "https://www.lcwaikiki.bg/",
    },

    relatedStores: ["zara", "h-m"],
  },

  pandora: {
    slug: "pandora",
    name: "Pandora",
    category: "Jewellery",
    logo: PandoraLogo,
    floor: "Level 2",

    description:
      "Discover jewellery designed to celebrate your stories, memories and personal style, from timeless pieces to seasonal favourites.",

    campaign: {
      type: "offers",
      title: "Selected summer jewellery -20%",
      description:
        "Add a little sparkle to your summer with selected Pandora jewellery at a special seasonal price.",
      discount: "-20%",
      validUntil: "Selected items only",
    },

    hours: {
      weekdays: "10:00 – 22:00",
      weekend: "10:00 – 22:00",
    },

    location: {
      floor: "Level 2",
      area: "Upper shopping level",
    },

    contact: {
      website: "https://bg.pandora.net/",
    },

    social: {
      instagram: "https://www.instagram.com/theofficialpandora/",
    },

    relatedStores: ["zara", "nike"],
  },

  technopolis: {
    slug: "technopolis",
    name: "Technopolis",
    category: "Technology",
    logo: TechnopolisLogo,
    floor: "Level 2",

    description:
      "Everything you need for your home, work and entertainment, from smartphones and computers to appliances and accessories.",

    campaign: {
      type: "events",
      title: "Summer tech deals",
      description:
        "Discover selected technology products and seasonal deals throughout the summer campaign.",
      discount: "SPECIAL DEALS",
      validUntil: "Limited time",
    },

    hours: {
      weekdays: "10:00 – 22:00",
      weekend: "10:00 – 22:00",
    },

    location: {
      floor: "Level 2",
      area: "Upper shopping level",
    },

    contact: {
      website: "https://www.technopolis.bg/",
    },

    relatedStores: ["nike", "pandora"],
  },

  "cinema-city": {
    slug: "cinema-city",
    name: "Cinema City",
    category: "Entertainment",
    logo: CinemaCityLogo,
    floor: "Level 2",

    description:
      "Enjoy the latest movies, blockbuster releases and unforgettable cinema experiences with friends and family.",

    hours: {
      weekdays: "According to programme",
      weekend: "According to programme",
    },

    location: {
      floor: "Level 2",
      area: "Entertainment area",
    },

    contact: {
      website: "https://www.cinemacity.bg/",
    },

    social: {
      instagram: "https://www.instagram.com/cinemacitybg/",
    },

    relatedStores: ["technopolis", "nike"],
  },
};

export const getStoreBySlug = (slug: string) => stores[slug];