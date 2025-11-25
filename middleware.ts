import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname.startsWith("/auth/login");

    if (isAuthPage && isAuth) {
      return NextResponse.redirect(new URL("/dashboard/investments", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return true;
      }
    },
    pages: {
      signIn: "/auth/login",
    }
  }
)

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"]
}
