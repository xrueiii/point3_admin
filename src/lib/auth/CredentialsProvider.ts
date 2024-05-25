import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/db";
import { usersTable } from "@/db/schema";

const authSchema = z.object({
  name: z.string().min(1).max(100),
  password: z.string().min(8),
});

export default CredentialsProvider({
  name: "credentials",
  credentials: {
    name: { label: "Name", type: "text" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    let validatedCredentials: {
      name: string;
      password: string;
    };

    try {
      validatedCredentials = authSchema.parse(credentials);
    } catch (error) {
      return null;
    }
    const { name, password } = validatedCredentials;

    const [existedUser] = await db
      .select({
        id: usersTable.displayId,
        name: usersTable.name,
        hashedPassword: usersTable.hashedPassword,
      })
      .from(usersTable)
      .where(eq(usersTable.name, validatedCredentials.name.toLowerCase()))
      .execute();

      if (!existedUser) {
        if (!name) {
          console.log("Name is required.");
          return null;
        }
        const hashedPassword = await bcrypt.hash(password, 10); 
  
        const [createdUser] = await db
          .insert(usersTable)
          .values({
            name: name.toLowerCase(),
            hashedPassword: hashedPassword,
          })
          .returning();
        return {
          name: createdUser.name,
          id: createdUser.displayId,
        };
      }

    const isValid = await bcrypt.compare(password, existedUser.hashedPassword ?? "");

    if (!isValid) {
      console.log("Wrong password. Try again.");
      return null;
    }
    return {
      account: existedUser.name,
      id: existedUser.id,
    };
  },
});
