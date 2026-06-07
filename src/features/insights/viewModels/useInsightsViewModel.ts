import { getSiteContent, type SiteContentModel } from "../../../shared/models/siteContent";

export interface InsightsViewModel {
  insights: SiteContentModel["insights"];
}

export function useInsightsViewModel(): InsightsViewModel {
  const content = getSiteContent();

  return {
    insights: content.insights,
  };
}
