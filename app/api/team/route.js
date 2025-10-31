import { NextResponse } from "next/server";
import { getTeam, createTeamMember } from "@/lib/cms";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const team = getTeam();
    return NextResponse.json(team);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch team" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await request.json();
    const newMember = createTeamMember(data);
    return NextResponse.json(newMember, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create team member" },
      { status: 500 }
    );
  }
}


