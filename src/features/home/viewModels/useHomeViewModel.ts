export interface ClientTickerItem {
  id: string;
  label: string;
  logoSrc?: string;
  logoAlt?: string;
  websiteUrl?: string;
}

export interface HomeViewModel {
  clientTickerItems: ClientTickerItem[];
}

const CLIENT_TICKER_ITEMS: ClientTickerItem[] = [
  {
    id: "st-peter",
    label: "St. Peter",
    logoSrc: "",
    logoAlt: "St. Peter logo",
    websiteUrl: "",
  },
  {
    id: "espasyo-study-office-hub",
    label: "Espasyo Study & Office Hub",
    logoSrc: "",
    logoAlt: "Espasyo Study & Office Hub logo",
    websiteUrl: "https://espasyo.ph/",
  },
  {
    id: "globalbim-engineering-services",
    label: "GlobalBIM Engineering Services",
    logoSrc: "",
    logoAlt: "GlobalBIM Engineering Services logo",
    websiteUrl: "https://globalbim.ph/",
  },
  {
    id: "el-gibhor",
    label: "El Gibhor - The Mighty God of all Nations",
    logoSrc: "",
    logoAlt: "El Gibhor logo",
    websiteUrl: "https://tmgn.ph/",
  },
  {
    id: "azvercon",
    label: "Azvercon",
    logoSrc: "",
    logoAlt: "Azvercon logo",
    websiteUrl: "",
  },
  {
    id: "kaizen",
    label: "Kaizen",
    logoSrc: "",
    logoAlt: "Kaizen logo",
    websiteUrl: "",
  },
];

export function useHomeViewModel(): HomeViewModel {
  return {
    clientTickerItems: CLIENT_TICKER_ITEMS,
  };
}
