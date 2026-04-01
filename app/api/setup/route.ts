import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function GET() {
  const hashedPassword = await bcrypt.hash('matahary02', 10);
  
  const admin = await prisma.admin.upsert({
    where: { username: 'syarifat' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
      name: 'Syarif Ahsani T'
    }
  });

  return NextResponse.json({ message: "Akun admin berhasil dibuat!", admin });
}