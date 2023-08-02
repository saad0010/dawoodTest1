import React from "react";
import Container from "./Container";
import { FaGithub, FaYoutube, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import Link from "next/link";

const Footer = () => {
  const footerlist = [
    { _id: 101, title: "Support", link: "#", icon: true },
    { _id: 102, title: "Contact Us", link: "#", icon: true },
    { _id: 103, title: "Disclaimer", link: "#", icon: true },
    { _id: 104, title: "Privacy Policy", link: "#" },
  ];
  return (
    <>
      <div className="w-full bg-green-100">
        <Container>
          <div className="text-sm flex flex-col md:flex-row md:items-center gap-2 justify-between">
            <p>Copyrights N W</p>
            <ul className="flex items-center gap-2">
              {footerlist.map((item) => (
                <Link key={item._id} href={item.link}>
                  <li className="flex items-center gap-2 text-gray-500 hover:text-primeColor duration-300 cursor-pointer">
                    {item.title}{" "}
                    {item.icon && <TbMinusVertical className="text-xl" />}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="flex items-center gap-4 text-gray-700">
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebookF className="text-xl hover:text-primeColor cursor-pointer duration-300" />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <FaYoutube className="text-xl hover:text-primeColor cursor-pointer duration-300" />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <FaLinkedinIn className="text-xl hover:text-primeColor cursor-pointer duration-300" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
