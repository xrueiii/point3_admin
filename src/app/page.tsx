import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { publicEnv } from "@/lib/env/public";


export default async function Home() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect(`${publicEnv.NEXT_PUBLIC_BASE_URL}/auth`);
  } else {
    redirect(`${publicEnv.NEXT_PUBLIC_BASE_URL}/main`);
  }
}
