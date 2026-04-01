import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const project = await prisma.project.findUnique({ where: { id: parseInt(id) } });
    if (!project) return NextResponse.json({ error: "Tidak ditemukan" }, { status: 404 });
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Gagal" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    // Tambahkan field baru
    const { name, category, description, tech_stack, image, demo_url, demo_user, demo_pass } = body;
    
    const techArray = typeof tech_stack === 'string' 
      ? tech_stack.split(',').map((tech: string) => tech.trim()) 
      : tech_stack;

    const project = await prisma.project.update({
      where: { id: parseInt(id) },
      data: { 
        name, category, description, tech_stack: techArray,
        image: image || null,
        demo_url: demo_url || null,
        demo_user: demo_user || null,
        demo_pass: demo_pass || null,
      }
    });
    return NextResponse.json({ message: "Berhasil update", project }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Gagal update" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.project.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({ message: "Berhasil" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Gagal" }, { status: 500 });
  }
}