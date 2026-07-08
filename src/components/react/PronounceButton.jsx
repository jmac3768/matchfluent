import { useState, useEffect, useRef } from "react";

/**
 * PronounceButton
 * ------------------------------------------------------------------
 * Drop-in pronunciation button using the browser's Web Speech API.
 * No API key, no audio files, no external dependencies.
 *
 * Usage:
 *   <PronounceButton text="Are you ready to order?" />
 *   <PronounceButton text="Bonjour" lang="fr-FR" />
 *
 * For MatchFluent lessons the learner is hearing ENGLISH, so the
 * default lang is "en-US". Pass a different BCP-47 tag if needed.
 *
 * Props:
 *   text   (string, required) — the phrase to speak
 *   lang   (string)           — BCP-47 language tag, default "en-US"
 *   rate   (number)           — speech rate, default 0.95 (slightly slow for learners)
 *   label  (string)           — optional aria-label override
 * ------------------------------------------------------------------
 */
export default function PronounceButton({
  text,
  lang = "en-US",
  rate = 0.95,
  label,
}) {
  const [playing, setPlaying] = useState(false);
  const [supported, setSupported] = useState(true);
  const utteranceRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
    }
    // Cancel any in-flight speech if this button unmounts
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = () => {
    if (!supported) return;

    const synth = window.speechSynthesis;

    // If this button is already speaking, stop it (toggle behavior)
    if (playing) {
      synth.cancel();
      setPlaying(false);
      return;
    }

    // Stop anything else currently speaking
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate;
    utterance.pitch = 1;

    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);

    utteranceRef.current = utterance;
    setPlaying(true);
    synth.speak(utterance);
  };

  if (!supported) {
    // Silently render nothing if the browser can't speak —
    // the lesson text remains fully readable without it.
    return null;
  }

  return (
    <button
      type="button"
      onClick={speak}
      aria-label={label || `Hear pronunciation: ${text}`}
      className={`inline-flex items-center justify-center shrink-0 rounded-full border transition-all
        w-8 h-8 align-middle
        ${
          playing
            ? "bg-teal-500 border-teal-500 text-white animate-pulse-slow"
            : "bg-white border-navy-100 text-navy-700 hover:border-teal-500 hover:text-teal-600 hover:scale-110"
        }`}
    >
      {playing ? (
        // stop icon
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <rect x="6" y="6" width="12" height="12" rx="1.5" />
        </svg>
      ) : (
        // speaker icon
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M3 10v4a1 1 0 0 0 1 1h3l4 4V5L7 9H4a1 1 0 0 0-1 1zm13.5 2a4.5 4.5 0 0 0-2.5-4.03v8.06A4.5 4.5 0 0 0 16.5 12z" />
        </svg>
      )}
    </button>
  );
}
