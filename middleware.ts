export { default } from "next-auth/middleware"

export const config = {
  // Semua halaman di dalam folder /admin akan dilindungi
  matcher: ["/admin/:path*"]
}