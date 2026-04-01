import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const data = await prisma.network.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, icon, features } = body;
    
    const featuresArray = typeof features === 'string' 
      ? features.split(',').map((f: string) => f.trim()) 
      : features;

    const res = await prisma.network.create({
      data: { 
        title, 
        description, 
        icon: icon || 'FaNetworkWired', 
        features: featuresArray 
      }
    });
    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Gagal simpan data jaringan" }, { status: 500 });
  }
}