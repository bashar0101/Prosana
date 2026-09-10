"use server";

import { z } from "zod";

import { countryCodes, countryName } from "@/content/countries";
import { isLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  HONEYPOT_FIELD,
  treatmentKeys,
  type ConsultationState,
  type ConsultationValues,
  type EmailField,
  type EmailState,
  type FieldName,
} from "@/lib/form-state";
import { sendLead } from "@/lib/mail";

const consultationSchema = z.object({
  name: z.string().trim().min(2).max(120),
  country: z
    .string()
    .trim()
    .refine((value) => (countryCodes as readonly string[]).includes(value)),
  phone: z
    .string()
    .trim()
    .min(6)
    .max(32)
    .regex(/^[+()\d\s-]+$/),
  whatsapp: z
    .string()
    .trim()
    .max(32)
    .regex(/^[+()\d\s-]*$/),
  email: z.string().trim().email().max(160),
  treatment: z.enum(treatmentKeys),
  message: z.string().trim().min(10).max(2000),
  consent: z.literal("on"),
});

const emailSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  message: z.string().trim().min(5).max(2000),
});

function readLocale(formData: FormData) {
  const raw = String(formData.get("locale") ?? "");
  return isLocale(raw) ? raw : defaultLocale;
}

function isHoneypotHit(formData: FormData) {
  return String(formData.get(HONEYPOT_FIELD) ?? "").length > 0;
}

function field(formData: FormData, name: string): string {
  return String(formData.get(name) ?? "");
}

export async function submitConsultation(
  prevState: ConsultationState,
  formData: FormData,
): Promise<ConsultationState> {
  const locale = readLocale(formData);
  const dict = await getDictionary(locale);
  const attempt = prevState.attempt + 1;

  // Accept honeypot submissions silently so bots get no signal.
  if (isHoneypotHit(formData)) {
    return { status: "success", errors: {}, values: {}, attempt };
  }

  const raw: ConsultationValues = {
    name: field(formData, "name"),
    country: field(formData, "country"),
    phone: field(formData, "phone"),
    whatsapp: field(formData, "whatsapp"),
    email: field(formData, "email"),
    treatment: field(formData, "treatment"),
    message: field(formData, "message"),
    consent: field(formData, "consent"),
  };

  const parsed = consultationSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: Partial<Record<FieldName, string>> = {};
    for (const issue of parsed.error.issues) {
      const name = issue.path[0] as FieldName | undefined;
      if (name && name !== "whatsapp" && !errors[name]) {
        errors[name] = dict.form.errors[name];
      }
    }
    return { status: "error", errors, values: raw, attempt };
  }

  const data = parsed.data;

  try {
    await sendLead({
      name: data.name,
      country: countryName(data.country, "en"),
      phone: data.phone,
      whatsapp: data.whatsapp || undefined,
      email: data.email,
      treatment: data.treatment,
      message: data.message,
      locale,
      source: field(formData, "source") || "website",
    });
  } catch (error) {
    console.error("[prosana] consultation delivery failed", error);
    return {
      status: "error",
      errors: {},
      values: raw,
      formError: dict.form.errors.generic,
      attempt,
    };
  }

  return { status: "success", errors: {}, values: {}, attempt };
}

export async function submitEmailEnquiry(
  prevState: EmailState,
  formData: FormData,
): Promise<EmailState> {
  const locale = readLocale(formData);
  const dict = await getDictionary(locale);
  const attempt = prevState.attempt + 1;

  if (isHoneypotHit(formData)) {
    return { status: "success", errors: {}, values: {}, attempt };
  }

  const raw = {
    name: field(formData, "name"),
    email: field(formData, "email"),
    message: field(formData, "message"),
  };

  const parsed = emailSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: Partial<Record<EmailField, string>> = {};
    for (const issue of parsed.error.issues) {
      const name = issue.path[0] as EmailField | undefined;
      if (name && !errors[name]) errors[name] = dict.form.errors[name];
    }
    return { status: "error", errors, values: raw, attempt };
  }

  try {
    await sendLead({
      name: parsed.data.name,
      country: "—",
      phone: "—",
      email: parsed.data.email,
      treatment: "email-enquiry",
      message: parsed.data.message,
      locale,
      source: "footer-email",
    });
  } catch (error) {
    console.error("[prosana] email enquiry delivery failed", error);
    return {
      status: "error",
      errors: {},
      values: raw,
      formError: dict.form.errors.generic,
      attempt,
    };
  }

  return { status: "success", errors: {}, values: {}, attempt };
}
