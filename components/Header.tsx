import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="flex item-center justify-between p-4">
      <Link className="space-x-2" href={"/"}>
        <h1 className="font font-bold text-xl">
          <span className="text-[#3A80EA]">Up</span>
          <span className="text-black">Things</span>
        </h1>
      </Link>
      <div className="px-5 flex items-center space-x-2">
        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
