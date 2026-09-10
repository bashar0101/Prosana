"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";

import { submitEmailEnquiry } from "@/actions/consultation";
import { CheckIcon, MailIcon } from "@/components/ui/Icons";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { HONEYPOT_FIELD, initialEmailState } from "@/lib/form-state";

type FooterContactFormProps = {
  locale: Locale;
  dict: Dictionary;
};

const control =
  "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white " +
  "placeholder:text-white/50 transition-colors focus:border-light-300 focus:bg-white/15 " +
  "focus:outline-none focus:ring-4 focus:ring-white/10";

function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-light-400 text-deep-800 hover:bg-light-300 inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-colors disabled:opacity-60"
    >
      <MailIcon className="size-4" />
      {pending ? pendingLabel : label}
    </button>
  );
}

/** Compact email form that closes every page, per the brief. */
export function FooterContactForm({ locale, dict }: FooterContactFormProps) {
  const [state, formAction] = useActionState(submitEmailEnquiry, initialEmailState);
  const uid = useId();
  const values = state.values;
  const id = (name: string) => `${uid}-${name}`;

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-card flex items-start gap-3 border border-white/20 bg-white/10 p-5"
      >
        <span className="bg-light-400/20 text-light-300 mt-0.5 grid size-8 shrink-0 place-items-center rounded-full">
          <CheckIcon className="size-4" />
        </span>
        <div>
          <p className="font-medium text-white">{dict.form.success.title}</p>
          <p className="mt-1 text-sm text-white/70">{dict.form.success.text}</p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-3">
      <input type="hidden" name="locale" value={locale} />

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

      <div key={state.attempt} className="flex flex-col gap-3">
        <div>
          <label htmlFor={id("name")} className="sr-only">
            {dict.form.fields.name}
          </label>
          <input
            id={id("name")}
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={values.name}
            placeholder={dict.form.placeholders.name}
            aria-invalid={!!state.errors.name || undefined}
            className={control}
          />
          {state.errors.name ? (
            <p role="alert" className="text-light-200 mt-1.5 text-sm">
              {state.errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={id("email")} className="sr-only">
            {dict.form.fields.email}
          </label>
          <input
            id={id("email")}
            name="email"
            type="email"
            required
            dir="ltr"
            autoComplete="email"
            defaultValue={values.email}
            placeholder={dict.footer.emailPlaceholder}
            aria-invalid={!!state.errors.email || undefined}
            className={control}
          />
          {state.errors.email ? (
            <p role="alert" className="text-light-200 mt-1.5 text-sm">
              {state.errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={id("message")} className="sr-only">
            {dict.form.fields.message}
          </label>
          <textarea
            id={id("message")}
            name="message"
            required
            rows={3}
            defaultValue={values.message}
            placeholder={dict.footer.emailMessagePlaceholder}
            aria-invalid={!!state.errors.message || undefined}
            className={`${control} resize-y`}
          />
          {state.errors.message ? (
            <p role="alert" className="text-light-200 mt-1.5 text-sm">
              {state.errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {state.formError ? (
        <p role="alert" className="text-light-200 text-sm">
          {state.formError}
        </p>
      ) : null}

      <div>
        <SubmitButton
          label={dict.footer.emailSubmit}
          pendingLabel={dict.form.submitting}
        />
      </div>
    </form>
  );
}
