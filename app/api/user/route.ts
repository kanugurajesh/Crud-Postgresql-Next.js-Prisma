import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const { name, email, rollNo } = await req.json();
  const user = await prisma.student.create({
    data: {
      name,
      email,
      rollNo,
    },
  });
  return NextResponse.json(user);
}

export async function GET(req: NextRequest, res: NextResponse) {
  const users = await prisma.student.findMany();
  return NextResponse.json(users);
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const { id } = await req.json();
  const user = await prisma.student.delete({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json(user);
}

export async function PUT(req: NextRequest, res: NextResponse) {
  const { id, name, email, rollNo } = await req.json();
  const user = await prisma.student.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      email,
      rollNo,
    },
  });
  return NextResponse.json(user);
}
