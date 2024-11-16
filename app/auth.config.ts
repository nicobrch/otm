import type { NextAuthConfig } from "next-auth"
import GitHub from "@auth/core/providers/github";
import Osu from "@auth/core/providers/osu";

const protectedRoutes = ['/', '/hola'];

export default {
    providers: [GitHub, Osu],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnProtectedRoute = protectedRoutes.some(route => nextUrl.pathname.startsWith(route));

            if (isOnProtectedRoute) {
                return isLoggedIn;
            } else if (isLoggedIn && nextUrl.pathname === '/login') {
                return Response.redirect(new URL('/', nextUrl));
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/', nextUrl));
            }

            return true;
        },
    },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
} satisfies NextAuthConfig;