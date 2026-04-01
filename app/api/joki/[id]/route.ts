import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await prisma.joki.findUnique({ where: { id: parseInt(id) } });
  return NextResponse.json(data);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { title, description, icon, features } = body;
    
    const featuresArray = typeof features === 'string' 
      ? features.split(',').map((f: string) => f.trim()) 
      : features;

    const res = await prisma.joki.update({
      where: { id: parseInt(id) },
      data: { title, description, icon, features: featuresArray }
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error: "Gagal update" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.joki.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({ message: "Terhapus" });
  } catch (error) {
    return NextResponse.json({ error: "Gagal hapus" }, { status: 500 });
  }
}