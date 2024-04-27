import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="flex item-center justify-between p-3">
      <Link href={"/"}>
        <h1 className="font font-bold text-xl ml-4">
          <span className="text-[#3A80EA]">Up</span>
          <span className="text-black">Things</span>
        </h1>
      </Link>
      <div className="mr-4 flex items-center">
        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
