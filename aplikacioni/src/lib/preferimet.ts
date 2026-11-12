import "server-only";

import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { getSql } from "./db";

async function githubId(): Promise<string | null> {
  const session = await getServerSession(authOptions);
  const id = session?.user?.id;
  return id && /^\d+$/.test(id) ? id : null;
}

export async function kaPreferim(udhetimId: string): Promise<boolean> {
  const id = await githubId();
  if (!id) return false;

  const sql = getSql();
  const rows = await sql`
    SELECT 1
    FROM preferimet
    WHERE github_id = ${id} AND udhetim_id = ${udhetimId}
    LIMIT 1
  `;
  return rows.length === 1;
}

export async function ruajPreferim(udhetimId: string): Promise<"ruajtur" | "hyr" | "gabim"> {
  const id = await githubId();
  if (!id) return "hyr";

  try {
    const sql = getSql();
    await sql`
      INSERT INTO preferimet (github_id, udhetim_id)
      VALUES (${id}, ${udhetimId})
      ON CONFLICT (github_id, udhetim_id) DO NOTHING
    `;
    return "ruajtur";
  } catch {
    return "gabim";
  }
}
