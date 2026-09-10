import type { RouteKey } from "@/lib/routes";

export type ServiceId = "hairTransplant" | "dentalTreatments" | "plasticSurgery";

export type Service = {
  id: ServiceId;
  route: RouteKey;
  image: string;
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
    gallery: "hair",
    procedureType: "SurgicalProcedure",
  },
  {
    id: "dentalTreatments",
    route: "dentalTreatments",
    image: "/images/services/dental-treatments.jpg",
    gallery: "dental",
    procedureType: "TherapeuticProcedure",
  },
  {
    id: "plasticSurgery",
    route: "plasticSurgery",
    image: "/images/services/plastic-surgery.jpg",
    gallery: "aesthetic",
    procedureType: "SurgicalProcedure",
  },
];

export const serviceById = Object.fromEntries(services.map((s) => [s.id, s])) as Record<
  ServiceId,
  Service
>;
