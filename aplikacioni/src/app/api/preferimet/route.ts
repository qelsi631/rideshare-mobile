import { kaPreferim, ruajPreferim } from "@/lib/preferimet";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get("udhetimId");
  if (!id) return Response.json({ error: "Mungon udhëtimi." }, { status: 400 });

  try {
    return Response.json({ saved: await kaPreferim(id) });
  } catch {
    return Response.json({ error: "Preferimi nuk mund të lexohet." }, { status: 503 });
  }
}

export async function POST(request: Request) {
  let body: { udhetimId?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Kërkesa nuk është e vlefshme." }, { status: 400 });
  }

  const id = typeof body.udhetimId === "string" ? body.udhetimId : "";
  if (!id) return Response.json({ error: "Mungon udhëtimi." }, { status: 400 });

  const result = await ruajPreferim(id);
  if (result === "hyr") {
    return Response.json({ error: "Hyr para se të ruash preferimin." }, { status: 401 });
  }
  if (result === "gabim") {
    return Response.json({ error: "Preferimi nuk u ruajt." }, { status: 503 });
  }
  return Response.json({ saved: true });
}
