import NextAuth from "next-auth";

import { eq } from "drizzle-orm";

import { db } from "@/db";
import { usersTable } from "@/db/schema";

import CredentialsProvider from "./CredentialsProvider";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [CredentialsProvider],
  callbacks: {
    async session({ session, token }) {
      const name = token.name || session?.user?.name;
      if (!name) return session;

      const [user] = await db
        .select({
          id: usersTable.displayId,
        })
        .from(usersTable)
        .where(eq(usersTable.name, name.toLowerCase()))
        .execute();

      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
    async jwt({ token, account }) {
      if (!account) return token;
      const { name } = token;
      if  (!name)  return token;


      const [existedUser] = await db
        .select({
          id: usersTable.displayId,
        })
        .from(usersTable)
        .where(eq(usersTable.name, name.toLowerCase()))
        .execute();

      if (existedUser) return token;

      await db.insert(usersTable).values({
        name: name,
      });

      return token;
    },
  },
  pages: {
    signIn: "/",
  },
});
