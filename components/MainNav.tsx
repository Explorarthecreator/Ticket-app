import Link from "next/link";
import React from "react";
import Togglemode from "./Togglemode";
import MainNavLinks from "./MainNavLinks";

const MainNav = () => {
  return (
    <div className="flex  justify-between">
      <MainNavLinks />
      <div className="flex items-center gap-2">
        <Link href={"/"}>Logout</Link>
        <Togglemode />
      </div>
    </div>
  );
};

export default MainNav;
