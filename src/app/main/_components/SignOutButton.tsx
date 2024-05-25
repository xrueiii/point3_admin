"use client";

import { signOut, useSession } from "next-auth/react";
import { publicEnv } from "@/lib/env/public";
import { useRouter } from "next/navigation";


export default function SignOutButton() {
  const router = useRouter();
  const { data: session } = useSession();
  const handleSignOut = async() => {
    if (session) {
      await signOut({ callbackUrl: publicEnv.NEXT_PUBLIC_BASE_URL });
    }
    router.push("/");
  }
  return <button className="border border-column2 text-column2 font-light px-8 py-2 rounded-md hover:bg-gray-200 hover:shadow-2xl" onClick={handleSignOut}>登出系統</button>;
}
