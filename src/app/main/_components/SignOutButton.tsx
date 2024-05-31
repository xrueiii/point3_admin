"use client";

import { publicEnv } from "@/lib/env/public";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();
  const { data: session } = useSession();
  const handleSignOut = async () => {
    if (session) {
      await signOut({ callbackUrl: publicEnv.NEXT_PUBLIC_BASE_URL });
    }
    router.push("/");
  };
  return (
    <button
      className="border-2 border-black text-black text-base font-medium px-4 py-1 rounded-md hover:bg-gray-200 hover:shadow-2xl"
      onClick={handleSignOut}
    >
      登出
    </button>
  );
}
