import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function GET() {
  const hashedPassword = await bcrypt.hash('password', 10);
  
  const admin = await prisma.admin.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
      name: 'Syarif Ahsani'
    }
  });

  return NextResponse.json({ message: "Akun admin berhasil dibuat!", admin });
}