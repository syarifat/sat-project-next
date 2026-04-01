import { withAuth } from "next-auth/middleware";

// Export default berupa fungsi middleware dari NextAuth
export default withAuth({
  pages: {
    signIn: "/login",
  },
});

// Pastikan matcher-nya benar untuk memproteksi folder admin
export const config = { 
  matcher: ["/admin/:path*"] 
};