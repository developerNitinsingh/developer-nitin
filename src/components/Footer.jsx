import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full flex justify-center items-center text-white py-1 pb-4">
      <footer className="w-[95%] flex justify-between">
        <p className="text-[#bbbbbb] text-xs">&copy; 2023 Developer Nitin</p>
        <ul className="flex gap-2">
          <Link to={"https://www.linkedin.com/in/nitin-singh-218795240/"}>
            <li className="text-[#bbbbbb] hover:text-green-500 transition duration-1000">
              <FaLinkedin />
            </li>
          </Link>
          <Link>
            <li className="text-[#bbbbbb] hover:text-green-500 transition duration-1000">
              <FaEnvelope />
            </li>
          </Link>
          <Link>
            <li className="text-[#bbbbbb] hover:text-green-500 transition duration-1000">
              <FaGithub />
            </li>
          </Link>
          <Link to={"https://instagram.com/itzznitinn?igshid=OGQ5ZDc2ODk2ZA=="}>
            <li className="text-[#bbbbbb] hover:text-green-500 transition duration-1000">
              <FaInstagram />
            </li>
          </Link>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
