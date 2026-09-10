"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";

import { submitConsultation } from "@/actions/consultation";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { CheckIcon, WhatsAppIcon } from "@/components/ui/Icons";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import {
  HONEYPOT_FIELD,
  initialConsultationState,
  treatmentKeys,
} from "@/lib/form-state";
import { cn } from "@/lib/utils";

type ConsultationFormProps = {
  locale: Locale;
  dict: Dictionary;
  countries: { code: string; label: string }[];
  whatsappHref: string;
  /** Which page the lead came from — recorded on the notification email. */
  source: string;
  defaultTreatment?: (typeof treatmentKeys)[number];
  tone?: "surface" | "canvas";
};

function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending} withArrow={!pending}>
      {pending ? pendingLabel : label}
    </Button>
  );
}

export function ConsultationForm({
  locale,
  dict,
  countries,
  whatsappHref,
  source,
  defaultTreatment,
  tone = "surface",
}: ConsultationFormProps) {
  const [state, formAction] = useActionState(
    submitConsultation,
    initialConsultationState,
  );
  const uid = useId();
  const f = dict.form;
  const values = state.values;

  const id = (name: string) => `${uid}-${name}`;

  if (state.status === "success") {
    return (
      <div
        className={cn(
          "rounded-card border-light-200 flex flex-col items-start gap-5 border p-8 sm:p-10",
          tone === "surface" ? "bg-white" : "bg-canvas",
        )}
        role="status"
      >
        <span className="bg-light-100 text-light-700 grid size-12 place-items-center rounded-full">
          <CheckIcon className="size-6" />
        </span>
        <div className="space-y-2">
          <h3 className="text-h3">{f.success.title}</h3>
          <p className="text-ink-muted">{f.success.text}</p>
        </div>
        <Button href={whatsappHref} external variant="secondary" icon={<WhatsAppIcon />}>
          {dict.common.whatsappLong}
        </Button>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      className={cn(
        "rounded-card border-hairline shadow-soft border p-6 sm:p-8",
        tone === "surface" ? "bg-white" : "bg-canvas",
      )}
    >
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="source" value={source} />

      {/* Honeypot: visually hidden and skipped by keyboard + screen readers. */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor={id(HONEYPOT_FIELD)}>Company</label>
        <input
          id={id(HONEYPOT_FIELD)}
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Keyed on the attempt count: React resets an uncontrolled form once its
          action resolves, so the fields re-mount carrying the echoed values. */}
      <div key={state.attempt} className="grid gap-5 sm:grid-cols-2">
        <Field id={id("name")} label={f.fields.name} error={state.errors.name}>
          <Input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={values.name}
            placeholder={f.placeholders.name}
            error={!!state.errors.name}
          />
        </Field>

        <Field id={id("country")} label={f.fields.country} error={state.errors.country}>
          <Select
            id={id("country")}
            name="country"
            defaultValue={values.country ?? ""}
            required
            error={!!state.errors.country}
          >
            <option value="" disabled>
              {f.placeholders.country}
            </option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.label}
              </option>
            ))}
          </Select>
        </Field>

        <Field id={id("phone")} label={f.fields.phone} error={state.errors.phone}>
          <Input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            dir="ltr"
            defaultValue={values.phone}
            placeholder={f.placeholders.phone}
            error={!!state.errors.phone}
          />
        </Field>

        <Field
          id={id("whatsapp")}
          label={f.fields.whatsapp}
          optional
          optionalLabel={f.optional}
        >
          <Input
            id={id("whatsapp")}
            name="whatsapp"
            type="tel"
            inputMode="tel"
            dir="ltr"
            defaultValue={values.whatsapp}
            placeholder={f.placeholders.whatsapp}
          />
        </Field>

        <Field
          id={id("email")}
          label={f.fields.email}
          error={state.errors.email}
          className="sm:col-span-2"
        >
          <Input
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            required
            dir="ltr"
            defaultValue={values.email}
            placeholder={f.placeholders.email}
            error={!!state.errors.email}
          />
        </Field>

        <Field
          id={id("treatment")}
          label={f.fields.treatment}
          error={state.errors.treatment}
          className="sm:col-span-2"
        >
          <Select
            id={id("treatment")}
            name="treatment"
            defaultValue={values.treatment ?? defaultTreatment ?? ""}
            required
            error={!!state.errors.treatment}
          >
            <option value="" disabled>
              {f.placeholders.treatment}
            </option>
            {treatmentKeys.map((key) => (
              <option key={key} value={key}>
                {f.treatments[key]}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          id={id("message")}
          label={f.fields.message}
          error={state.errors.message}
          className="sm:col-span-2"
        >
          <Textarea
            id={id("message")}
            name="message"
            required
            rows={5}
            defaultValue={values.message}
            placeholder={f.placeholders.message}
            error={!!state.errors.message}
          />
        </Field>
      </div>

      <div key={`consent-${state.attempt}`} className="mt-6 flex items-start gap-3">
        <input
          id={id("consent")}
          name="consent"
          type="checkbox"
          required
          defaultChecked={values.consent === "on"}
          className="text-deep-600 accent-deep-600 mt-0.5 size-5 shrink-0 rounded border-slate-300"
          aria-describedby={state.errors.consent ? `${id("consent")}-error` : undefined}
        />
        <div>
          <label htmlFor={id("consent")} className="text-sm text-slate-600">
            {f.fields.consent}
          </label>
          {state.errors.consent ? (
            <p
              id={`${id("consent")}-error`}
              role="alert"
              className="text-sm text-red-600"
            >
              {state.errors.consent}
            </p>
          ) : null}
        </div>
      </div>

      {state.formError ? (
        <p role="alert" className="mt-4 text-sm text-red-600">
          {state.formError}
        </p>
      ) : null}

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <SubmitButton label={f.submit} pendingLabel={f.submitting} />
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-deep-600 inline-flex min-h-11 items-center gap-2 py-2 text-sm font-medium underline-offset-4 hover:underline"
        >
          <WhatsAppIcon className="size-4" />
          {f.orWhatsApp}
        </a>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-slate-500">{f.privacy}</p>
    </form>
  );
}
