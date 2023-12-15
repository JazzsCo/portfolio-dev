import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, content } = body;

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }

    if (!content) {
      return new NextResponse("Content is required", { status: 400 });
    }

    const customer = await prisma.customer.create({
      data: {
        name,
        email,
        content,
      },
    });

    return NextResponse.json(customer);
  } catch (error) {
    console.log("[CUSTOMER_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
