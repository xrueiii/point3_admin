import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { publicEnv } from "@/lib/env/public";

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import AuthForm from "./_components/AuthForm";

export default async function AuthPage() {
  const session = await auth();
  const admins = await db.select({}).from(usersTable).execute();
  if (session?.user?.id) {
    redirect(`${publicEnv.NEXT_PUBLIC_BASE_URL}`);
  }

  return (
    <>
      <div className="bg-[#FFE900] justify-center min-h-screen w-screen items-center">
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-md w-full max-w-3xl flex justify-center h-14 items-center fixed top-8 z-50 gap-x-10 rounded-full px-4 lg:px-8">
            <h1 className="text-lg lg:text-2xl font-semibold">
              0.3 練團室後台管理系統
            </h1>
          </div>
        </div>
        <div className="flex justify-center py-[12.5%] w-full">
          <AuthForm admin_num={admins.length} />
        </div>
      </div>
    </>
  );
}
