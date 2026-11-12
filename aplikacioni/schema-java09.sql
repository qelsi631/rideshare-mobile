-- Java 9: preferimet personale të udhëtarit.
-- Ekzekutoje në të njëjtën databazë Neon që përdor DATABASE_URL.
CREATE TABLE IF NOT EXISTS preferimet (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  github_id TEXT NOT NULL REFERENCES profilet(github_id) ON DELETE CASCADE,
  udhetim_id TEXT NOT NULL REFERENCES udhetimet(id) ON DELETE CASCADE,
  krijuar_me TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT preferimet_nje_perdorues_nje_udhetim
    UNIQUE (github_id, udhetim_id)
);

CREATE INDEX IF NOT EXISTS preferimet_github_id_idx
ON preferimet(github_id);
