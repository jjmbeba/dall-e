import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link href="/">
        <img
          src="/assets/logo.svg"
          className="w-28 object-contain"
          alt="logo"
        />
      </Link>
      <Link
        href="/create-post"
        className="font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </header>
  );
};

export default Header;
