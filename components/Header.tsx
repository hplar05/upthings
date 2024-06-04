import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggler";

const Header = () => {
  return (
    <header className="flex item-center justify-between p-4 shadow-sm  dark:shadow-black sticky top-0 dark:bg-[#020817] bg-white">
      <Link className="space-x-2 md:ml-5 ml-0 flex items-center" href={"/"}>
        <h1 className="font font-bold text-xl">
          <span className="text-[#3A80EA]">UP</span>
          <span>THINGS</span>
        </h1>
      </Link>
      <div className="flex items-center space-x-2 md:mr-5 mr-0">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <Link href={"/dashboard"}>Sign In</Link>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
