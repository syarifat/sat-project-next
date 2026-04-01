import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        // Cari admin di database
        const admin = await prisma.admin.findUnique({
          where: { username: credentials.username }
        });

        if (!admin) return null;

        // Cek kecocokan password yang di-hash
        const isPasswordValid = await bcrypt.compare(credentials.password, admin.password);

        if (!isPasswordValid) return null;

        return {
          id: admin.id.toString(),
          name: admin.name,
          username: admin.username,
        };
      }
    })
  ],
  session: { strategy: "jwt" },
  pages: { signIn: '/login' },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };