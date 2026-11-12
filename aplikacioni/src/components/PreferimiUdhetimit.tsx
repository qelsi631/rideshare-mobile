"use client";

import { useState } from "react";

type PreferimiUdhetimitProps = {
  udhetimId: string;
  fillimishtIRuajtur: boolean;
};

export default function PreferimiUdhetimit({
  udhetimId,
  fillimishtIRuajtur,
}: PreferimiUdhetimitProps) {
  const [saved, setSaved] = useState(fillimishtIRuajtur);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function saveFavorite() {
    if (saved || pending) return;

    setSaved(true);
    setPending(true);
    setError("");

    try {
      const response = await fetch("/api/preferimet", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ udhetimId }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null) as { error?: string } | null;
        throw new Error(body?.error || "Nuk u ruajt.");
      }
      setPending(false);
    } catch (saveError) {
      setSaved(false);
      setPending(false);
      setError(saveError instanceof Error ? `${saveError.message} Provo përsëri.` : "Nuk u ruajt. Provo përsëri.");
    }
  }

  const label = pending
    ? "★ Po ruhet…"
    : saved
      ? "★ I ruajtur"
      : error
        ? "☆ Provo përsëri"
        : "☆ Ruaj udhëtimin";

  return (
    <div className="favorite-control">
      <button
        type="button"
        className="favorite-button"
        aria-pressed={saved}
        disabled={pending || saved}
        onClick={saveFavorite}
      >
        {label}
      </button>
      <p role={error ? "alert" : "status"} aria-live="polite">
        {pending ? "Po presim konfirmimin e serverit." : error || (saved ? "U ruajt te të preferuarat." : "Nuk është te të preferuarat.")}
      </p>
    </div>
  );
}
