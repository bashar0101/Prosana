import type { ServiceId } from "@/content/services";

export type TestimonialId = "t1" | "t2" | "t3" | "t4" | "t5" | "t6";

export type Testimonial = {
  id: TestimonialId;
  avatar: string;
  rating: 4 | 5;
  service: ServiceId;
  /** ISO date of the review, used for schema.org Review markup. */
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    avatar: "/images/testimonials/avatar-1.jpg",
    rating: 5,
    service: "hairTransplant",
    date: "2026-04-12",
  },
  {
    id: "t2",
    avatar: "/images/testimonials/avatar-2.jpg",
    rating: 5,
    service: "dentalTreatments",
    date: "2026-03-02",
  },
  {
    id: "t3",
    avatar: "/images/testimonials/avatar-3.jpg",
    rating: 5,
    service: "plasticSurgery",
    date: "2026-02-18",
  },
  {
    id: "t4",
    avatar: "/images/testimonials/avatar-4.jpg",
    rating: 5,
    service: "hairTransplant",
    date: "2026-01-27",
  },
  {
    id: "t5",
    avatar: "/images/testimonials/avatar-5.jpg",
    rating: 4,
    service: "dentalTreatments",
    date: "2025-12-09",
  },
  {
    id: "t6",
    avatar: "/images/testimonials/avatar-6.jpg",
    rating: 5,
    service: "plasticSurgery",
    date: "2025-11-21",
  },
];

/** Shown in the home page preview. */
export const featuredTestimonials: TestimonialId[] = ["t1", "t2", "t3"];
