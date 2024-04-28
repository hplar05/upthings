import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggler";

const Header = () => {
  return (
    <header className="flex item-center justify-between p-4 shadow-md">
      <Link className="space-x-2 ml-5 flex items-center" href={"/"}>
        <h1 className="font font-bold text-xl">
          <span className="text-[#3A80EA]">UP</span>
          <span>THINGS</span>
        </h1>
      </Link>
      <div className="flex items-center space-x-2 mr-5">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
