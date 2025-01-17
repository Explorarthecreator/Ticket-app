import Link from "next/link";
import React from "react";
import Togglemode from "./Togglemode";
import MainNavLinks from "./MainNavLinks";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";

const MainNav = async () => {
  const session = await getServerSession(options);
  console.log(session);
  return (
    <div className="flex  justify-between">
      <MainNavLinks />
      <div className="flex items-center gap-2">
        {session ? (
          <Link href={"/api/auth/signout?callbackUrl=/"}>Logout</Link>
        ) : (
          <Link href={"/api/auth/signin"}>Login</Link>
        )}
        <Togglemode />
        {session?.user.name}
      </div>
    </div>
  );
};

export default MainNav;
