import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      nom,
      organisation,
      email,
      telephone,
      typeStructure,
      format,
      date,
      public: audience,
      message,
    } = body;

    const notesLines: string[] = [];
    if (format) notesLines.push(`Format : ${format}`);
    if (date) notesLines.push(`Date envisagée : ${date}`);
    if (audience) notesLines.push(`Public estimé : ${audience} personnes`);
    if (message) notesLines.push(`\nMessage :\n${message}`);
    const notes = notesLines.join("\n");

    const properties: Record<string, unknown> = {
      Nom: { title: [{ text: { content: nom } }] },
      Email: { email },
      Organisation: { rich_text: [{ text: { content: organisation || "" } }] },
      Poste: { rich_text: [{ text: { content: typeStructure || "" } }] },
      "Catégorie": { select: { name: "Prospect Conférence" } },
      Statut: { status: { name: "Pas commencé" } },
      "Dernier contact": {
        date: { start: new Date().toISOString().split("T")[0] },
      },
      Notes: { rich_text: [{ text: { content: notes.slice(0, 2000) } }] },
    };

    if (telephone) {
      properties["Téléphone"] = { phone_number: telephone };
    }

    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { database_id: process.env.NOTION_DATABASE_ID },
        properties,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Notion API error:", err);
      return NextResponse.json({ error: "Notion error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
