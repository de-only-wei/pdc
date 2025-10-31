import { NextResponse } from "next/server";
import { getTestimonials, createTestimonial } from "@/lib/cms";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const testimonials = getTestimonials();
    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
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
    const newTestimonial = createTestimonial(data);
    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create testimonial" },
      { status: 500 }
    );
  }
}


