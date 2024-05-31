import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { publicEnv } from "@/lib/env/public";

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import Image from "next/image";
import AuthForm from "./_components/AuthForm";

export default async function AuthPage() {
  const session = await auth();
  const admins = await db.select({}).from(usersTable).execute();
  if (session?.user?.id) {
    redirect(`${publicEnv.NEXT_PUBLIC_BASE_URL}`);
  }

  return (
    <>
      <div className="bg-black justify-center min-h-screen w-screen items-center">
        <div className="w-full py-4 bg-amber-100 items-center flex px-16 justify-between">
          <h1 className="font-serif text-2xl lg:text-5xl font-medium ">
            0.3 練團室後台管理系統
          </h1>
          <Image src="/Logo.png" alt="logo_pic" width={100} height={30} />
        </div>
        <div className="flex justify-center py-32 w-full">
          <AuthForm admin_num={admins.length} />
        </div>
      </div>
    </>
  );
}
