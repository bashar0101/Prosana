import type { RouteKey } from "@/lib/routes";

export type ServiceId = "hairTransplant" | "dentalTreatments" | "plasticSurgery";

export type Service = {
  id: ServiceId;
  route: RouteKey;
  image: string;
  /**
   * Photo for the card on the home grid. null renders the card without one —
   * used when the service already has its own artwork elsewhere on the page.
   */
  cardImage: string | null;
  /** Gallery category this service maps to. */
  gallery: "hair" | "dental" | "aesthetic";
  /** schema.org MedicalProcedure category. */
  procedureType: string;
};

export const services: Service[] = [
  {
    id: "hairTransplant",
    route: "hairTransplant",
    image: "/images/services/hair-transplant.jpg",
    cardImage: "/images/services/hair-transplant.jpg",
    gallery: "hair",
    procedureType: "SurgicalProcedure",
  },
  {
    id: "dentalTreatments",
    route: "dentalTreatments",
    image: "/images/services/dental-treatments.jpg",
    cardImage: "/images/services/dental-treatments.jpg",
    gallery: "dental",
    procedureType: "TherapeuticProcedure",
  },
  {
    id: "plasticSurgery",
    route: "plasticSurgery",
    image: "/images/services/plastic-surgery.jpg",
    // Real patient result rather than the line-art mark, to match the
    // photography on the other two cards.
    cardImage: "/images/services/plastic-surgery.jpg",// here i can change it 
    gallery: "aesthetic",
    procedureType: "SurgicalProcedure",
  },
];

export const serviceById = Object.fromEntries(services.map((s) => [s.id, s])) as Record<
  ServiceId,
  Service
>;
