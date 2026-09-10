export type JourneyStepId =
  | "consultation"
  | "evaluation"
  | "plan"
  | "travel"
  | "arrival"
  | "treatment"
  | "recovery"
  | "home";

export type JourneyStep = {
  id: JourneyStepId;
  /** Optional supporting image — only some steps carry one. */
  image?: string;
};

/** The full eight-step journey (Treatment Journey page). */
export const journeySteps: JourneyStep[] = [
  { id: "consultation", image: "/images/journey/consultation.jpg" },
  { id: "evaluation" },
  { id: "plan", image: "/images/journey/planning.jpg" },
  { id: "travel", image: "/images/journey/travel.jpg" },
  { id: "arrival" },
  { id: "treatment", image: "/images/journey/treatment.jpg" },
  { id: "recovery", image: "/images/journey/recovery.jpg" },
  { id: "home" },
];

/** Condensed seven-step timeline used in the home page preview. */
export const homeJourneySteps: JourneyStepId[] = [
  "consultation",
  "plan",
  "travel",
  "arrival",
  "treatment",
  "recovery",
  "home",
];
