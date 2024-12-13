"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-backgroundColor sticky top-0">
      <section className="py-5 px-4 flex items-center justify-between lg:px-12">
        <div>
          <Image
            src="/images/main-logo.svg"
            alt="Tanay Logo"
            width={120}
            height={120}
          />
        </div>
        <div className="font-arcade items-center text-xl text-linkText lg:flex lg:gap-4 hidden">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer tracking-wider hover:text-primaryText"
          >
            {"</HOME>"}
          </ScrollLink>
          <ScrollLink
            to="skill"
            smooth={true}
            duration={500}
            className="cursor-pointer tracking-wider hover:text-primaryText"
          >
            {"</PROJECTS>"}
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className="cursor-pointer tracking-wider hover:text-primaryText"
          >
            {"</EXPERIENCE>"}
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer tracking-wider hover:text-primaryText"
          >
            {"</CONTACT>"}
          </ScrollLink>
        </div>
        <div className="flex items-center hidden lg:flex lg:gap-6">
          <Link
            href="https://www.linkedin.com/in/tanay-panchal-247519272/"
            target="_blank"
          >
            <Image
              src="/images/linkdin-icon.svg"
              alt="Tanay LinkedIn"
              width={25}
              height={25}
            />
          </Link>
          <Link href="https://www.instagram.com/_tanay_007/" target="_blank">
            <Image
              src="/images/instagram-icon.svg"
              alt="Tanay Instagram"
              width={25}
              height={25}
            />
          </Link>
          <Link href="https://github.com/Tanaypanchal007" target="_blank">
            <Image
              src="/images/github-icon.svg"
              alt="Tanay GitHub"
              width={25}
              height={25}
            />
          </Link>
          <Link href="mailto:www.tanaypanchal7@gmail.com" target="_blank">
            <Image
              src="/images/mail-icon.svg"
              alt="Tanay Email"
              width={25}
              height={25}
            />
          </Link>
        </div>
        <div className="lg:hidden">
          {isOpen ? (
            <Image
              src="/images/close-humburger-icon.svg"
              alt="Menu Icon"
              width={25}
              height={25}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          ) : (
            <Image
              src="/images/humburger-icon.svg"
              alt="Menu Icon"
              width={25}
              height={25}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          )}
        </div>
      </section>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute bg-backgroundColor h-screen w-full transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="font-arcade items-center text-lg text-linkText flex flex-col gap-4 pt-10">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer tracking-wider hover:text-primaryText"
            onClick={toggleMenu}
          >
            {"</HOME>"}
          </ScrollLink>
          <ScrollLink
            to="skill"
            smooth={true}
            duration={500}
            className="cursor-pointer tracking-wider hover:text-primaryText"
            onClick={toggleMenu}
          >
            {"</PROJECTS>"}
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className="cursor-pointer tracking-wider hover:text-primaryText"
            onClick={toggleMenu}
          >
            {"</EXPERIENCE>"}
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer tracking-wider hover:text-primaryText"
            onClick={toggleMenu}
          >
            {"</CONTACT>"}
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
