import { getSiteContent, type SiteContentModel } from "../../../shared/models/siteContent";

export type HomeViewModel = SiteContentModel;

export function useHomeViewModel(): HomeViewModel {
  return getSiteContent();
}
