import { getSiteContent, type SiteContentModel } from "../../../shared/models/siteContent";

export interface ServicesViewModel {
  services: SiteContentModel["services"];
}

export function useServicesViewModel(): ServicesViewModel {
  const content = getSiteContent();

  return {
    services: content.services,
  };
}
