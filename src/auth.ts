import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const email = credentials.email as string;
        const password = credentials.password as string;

        try {
          // Imports dinámicos para evitar cargar Node APIs en el Edge Runtime de Next.js Middleware
          const { default: pool } = await import("@/lib/db");
          const { default: bcrypt } = await import("bcryptjs");

          // Buscar en la base de datos por email y validar que sea un admin
          const [rows]: any = await pool.execute(
            "SELECT * FROM users WHERE email = ? AND role = 'admin'",
            [email]
          );

          if (rows.length === 0) {
            return null;
          }

          const user = rows[0];
          
          // Comparar contraseña hasheada
          const isPasswordCorrect = await bcrypt.compare(password, user.password_hash);
          if (!isPasswordCorrect) {
            return null;
          }

          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.error("Error en autorización de NextAuth:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && nextUrl.pathname === "/login") {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
});

