import { getSiteContent, type ClientPartner } from "../../../shared/models/siteContent";

export interface ClientsViewModel {
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  clients: ClientPartner[];
}

export function useClientsViewModel(): ClientsViewModel {
  const content = getSiteContent();

  return {
    intro: {
      eyebrow: "Our Clients",
      title: "A trusted ecosystem for serious digital execution.",
      description:
        "Trusted by organizations moving from operational complexity to secure, scalable, and measurable digital execution.",
    },
    clients: content.clients,
  };
}
