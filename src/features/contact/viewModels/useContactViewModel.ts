import { getSiteContent, type SiteContentModel } from "../../../shared/models/siteContent";

export interface ContactViewModel {
  contact: SiteContentModel["contact"];
}

export function useContactViewModel(): ContactViewModel {
  const content = getSiteContent();

  return {
    contact: content.contact,
  };
}
