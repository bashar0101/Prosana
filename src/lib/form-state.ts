/**
 * Form state shapes shared between the server actions and the client forms.
 * Kept out of the "use server" module, which may only export async functions.
 */

export type FieldName =
  | "name"
  | "country"
  | "phone"
  | "whatsapp"
  | "email"
  | "treatment"
  | "message"
  | "consent";

/**
 * React 19 resets an uncontrolled form once its action resolves, so the action
 * echoes the submitted values back and the inputs re-mount with them as
 * defaults. Without this a validation error would wipe everything the patient
 * typed.
 */
export type ConsultationValues = Partial<Record<FieldName, string>>;

export type ConsultationState = {
  status: "idle" | "success" | "error";
  errors: Partial<Record<FieldName, string>>;
  values: ConsultationValues;
  formError?: string;
  /** Bumped on every submission so the fields re-mount with fresh defaults. */
  attempt: number;
};

export const initialConsultationState: ConsultationState = {
  status: "idle",
  errors: {},
  values: {},
  attempt: 0,
};

export type EmailField = "name" | "email" | "message";

export type EmailState = {
  status: "idle" | "success" | "error";
  errors: Partial<Record<EmailField, string>>;
  values: Partial<Record<EmailField, string>>;
  formError?: string;
  attempt: number;
};

export const initialEmailState: EmailState = {
  status: "idle",
  errors: {},
  values: {},
  attempt: 0,
};

export const treatmentKeys = [
  "hairTransplant",
  "dentalTreatments",
  "plasticSurgery",
  "other",
] as const;

export type TreatmentKey = (typeof treatmentKeys)[number];

/** Hidden field bots fill in and humans never see. */
export const HONEYPOT_FIELD = "company";
