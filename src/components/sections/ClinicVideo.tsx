"use client";

import { useRef, useState } from "react";

import { ArcDecor } from "@/components/ui/ArcDecor";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { href } from "@/lib/routes";

type ClinicVideoProps = {
  locale: Locale;
  dict: Dictionary;
};

/**
 * Clinic walkthrough. The source is phone footage, so it is genuinely 9:16 —
 * framed in a portrait card rather than stretched into a landscape banner.
 *
 * Muted autoplay loop with no audio track at all, which is what lets it play
 * inline on iOS. A visible pause control is provided because an indefinitely
 * looping video needs a way to stop it.
 */
export function ClinicVideo({ locale, dict }: ClinicVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Starts false and is driven purely by the element's own play/pause events.
  // Assuming autoplay succeeds would show a Pause icon over a still poster on
  // any browser that blocks it (data saver, low media-engagement, iOS Low Power).
  const [playing, setPlaying] = useState(false);
  const copy = dict.home.clinic;

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <Section
      tone="deep"
      id="clinic"
      ariaLabelledBy="clinic-heading"
      className="overflow-hidden"
    >
      <ArcDecor
        className="text-light-300 -end-48 top-1/2 h-[40rem] w-[40rem] -translate-y-1/2"
        opacity={0.15}
      />

      <Container size="wide">
        <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto w-full max-w-[19rem] lg:mx-0">
            <div className="rounded-card shadow-deep bg-deep-900 relative aspect-9/16 overflow-hidden">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                poster="/video/clinic-tour-poster.jpg"
                preload="metadata"
                autoPlay
                muted
                loop
                playsInline
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              >
                <source src="/video/clinic-tour.mp4" type="video/mp4" />
              </video>

              <button
                type="button"
                onClick={toggle}
                aria-label={playing ? copy.pause : copy.play}
                className="bg-deep-950/60 hover:bg-deep-950/80 absolute right-3 bottom-3 inline-flex size-11 items-center justify-center rounded-full text-white backdrop-blur-sm transition-colors"
              >
                {playing ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                    aria-hidden
                  >
                    <rect x="7" y="5" width="3.6" height="14" rx="1" />
                    <rect x="13.4" y="5" width="3.6" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                    aria-hidden
                  >
                    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div>
            <Eyebrow tone="onDark">{copy.eyebrow}</Eyebrow>
            <h2 id="clinic-heading" className="text-h2 mt-5 text-white">
              {copy.title}
            </h2>
            <p className="text-lead mt-5 max-w-xl text-white/75">{copy.text}</p>

            <div className="mt-9">
              <Button href={href(locale, "contact")} variant="onDark" withArrow>
                {dict.common.consultation}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
