import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Tambahkan field baru di sini
    const { name, category, description, tech_stack, image, demo_url, demo_user, demo_pass } = body;
    
    const techArray = tech_stack.split(',').map((tech: string) => tech.trim());

    const project = await prisma.project.create({
      data: {
        name,
        category,
        description,
        tech_stack: techArray,
        // Masukkan data opsional (jika kosong, kirim null)
        image: image || null,
        demo_url: demo_url || null,
        demo_user: demo_user || null,
        demo_pass: demo_pass || null,
      }
    });
    
    return NextResponse.json({ message: "Berhasil menambahkan produk", project }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Gagal menyimpan data" }, { status: 500 });
  }
}