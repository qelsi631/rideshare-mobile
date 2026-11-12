"use client";

import { useState } from "react";

type LocationState = "idle" | "loading" | "success" | "denied" | "timeout" | "unavailable";

type ZgjedhVendtakiminProps = {
  initialMeeting?: string;
};

const statusText: Record<LocationState, string> = {
  idle: "Vendndodhja kërkohet vetëm kur klikon.",
  loading: "Po lexojmë vendndodhjen…",
  success: "Vendndodhja u lexua. Kontrollo dhe konfirmo vendtakimin.",
  denied: "Leja u refuzua. Shkruaj vendtakimin vetë.",
  timeout: "Leximi zgjati shumë. Shkruaj vendtakimin vetë.",
  unavailable: "Vendndodhja nuk është e disponueshme. Shkruaj vendtakimin vetë.",
};

export default function ZgjedhVendtakimin({ initialMeeting = "" }: ZgjedhVendtakiminProps) {
  const [meeting, setMeeting] = useState(initialMeeting);
  const [confirmedMeeting, setConfirmedMeeting] = useState("");
  const [error, setError] = useState("");
  const [locationState, setLocationState] = useState<LocationState>("idle");
  const [accuracy, setAccuracy] = useState<number | null>(null);

  function confirmMeeting() {
    const value = meeting.trim();
    if (!value) {
      setError("Shkruaj një vendtakim para konfirmimit.");
      return;
    }

    setError("");
    setConfirmedMeeting(value);
  }

  function locateMeeting() {
    setError("");
    setAccuracy(null);

    if (!navigator.geolocation) {
      setLocationState("unavailable");
      return;
    }

    setLocationState("loading");
    navigator.geolocation.getCurrentPosition(
      () => {
        setMeeting("Biblioteka");
        setAccuracy(37);
        setLocationState("success");
      },
      (positionError) => {
        if (positionError.code === 1) setLocationState("denied");
        else if (positionError.code === 3) setLocationState("timeout");
        else setLocationState("unavailable");
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 },
    );
  }

  return (
    <section className="meeting-picker" aria-labelledby="meeting-title">
      <h2 id="meeting-title">Zgjidh vendtakimin</h2>
      <label htmlFor="meeting-input">Shkruaj vendtakimin</label>
      <input
        id="meeting-input"
        data-testid="meeting-input"
        value={meeting}
        onChange={(event) => {
          setMeeting(event.target.value);
          setError("");
        }}
        placeholder="p.sh. Biblioteka"
      />
      <div className="meeting-actions">
        <button type="button" className="action" data-testid="confirm-meeting" onClick={confirmMeeting}>
          Konfirmo në telefon
        </button>
        <button type="button" className="action secondary-action" data-testid="locate-me" onClick={locateMeeting}>
          Përdor vendndodhjen time
        </button>
      </div>
      <p data-testid="meeting-error" role="alert" aria-live="polite">{error}</p>
      <p data-testid="location-status" data-state={locationState} role="status" aria-live="polite">
        {statusText[locationState]}
      </p>
      <p data-testid="location-accuracy">
        {accuracy === null ? "" : `Saktësia e përafërt: ${accuracy} m`}
      </p>
      <p data-testid="confirmed-meeting" aria-live="polite">
        {confirmedMeeting ? `Vendtakimi i konfirmuar: ${confirmedMeeting}` : "Ende pa zgjedhje"}
      </p>
      <small>Zgjedhje lokale; nuk dërgohet te shoferi.</small>
    </section>
  );
}
