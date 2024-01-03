import React from "react";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <div className="w-full  sticky top-2  bg-transparent z-10">
      <nav className="w-[90vw] mx-auto md:w-[50vw]  ">
        <ul className="flex justify-center w-[100%]  rounded-3xl py-2  text-center text-white mx-auto text-[3vw] md:text-base px-4 backdrop-blur-md bg-[rgba(114,114,114,.2)]">
          <HashLink to={"#hero"}>
            <li className=" hover:bg-[rgba(114,114,114,.2)] rounded-3xl py-1 px-3 ">
              Home{" "}
            </li>
          </HashLink>
          <HashLink to={"#about"}>
            <li className=" hover:bg-[rgba(114,114,114,.2)] rounded-3xl py-1 px-3">
              About
            </li>
          </HashLink>
          <HashLink to={"#project"}>
            <li className=" hover:bg-[rgba(114,114,114,.2)] rounded-3xl py-1 px-3 ">
              Work
            </li>
          </HashLink>
          <HashLink to={"#hero "}>
            <li className=" hover:bg-[rgba(114,114,114,.2)] rounded-3xl py-1 px-3">
              Blogs
            </li>
          </HashLink>
          <HashLink>
            <li className=" hover:bg-[rgba(114,114,114,.2)] rounded-3xl py-1 px-3 ">
              Contact
            </li>
          </HashLink>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
