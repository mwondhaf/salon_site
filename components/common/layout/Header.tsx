"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";
import { DoorClosed, Menu, X } from "lucide-react";
import { MenuToggle } from "./MenuToggle";

const menu = [
  { name: "Home", target: "/" },
  { name: "Services", target: "#content" },
  { name: "About Us", target: "" },
  { name: "Testimonial", target: "" },
];

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [isOpen, toggleOpen] = useCycle(false, true);

  console.log({ isOpen });

  const handleClick = () => {
    toggleOpen();
    setOpen((prev) => !prev);
  };

  const handleMenuClick = (target: string) => {
    handleClick();
  };

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      className="sticky top-0 z-10 w-full overscroll-y-none bg-white px-4 py-8 drop-shadow-sm md:px-0 md:py-10"
    >
      <div className="absolute left-0 right-0 top-0 z-30 flex w-full items-center justify-between bg-white px-4 py-4 md:static md:mx-auto md:max-w-[1200px]  md:py-0 ">
        {/* logo  */}
        <div className="">Logo</div>
        {/* menu  */}
        <div className="hidden space-x-10 md:flex">
          <ul className="flex space-x-10  md:items-center">
            {menu.map((item, index) => (
              <Link key={index} href={item.target}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
          <Button>Book Now</Button>
        </div>
        <MenuToggle toggle={() => toggleOpen()} />
      </div>
      <motion.div
        transition={{ bounce: 0 }}
        initial={{ y: "-100%" }}
        variants={{ open: { y: 60 }, closed: { y: "-100%" } }}
        className={`z-1 absolute left-0 right-0 top-0 h-[100vh] w-full bg-white md:hidden`}
      >
        <ul className="mt-10 space-y-6 text-xl font-bold">
          {menu.map((item, index) => (
            <Link
              className="block p-4"
              onClick={() => handleMenuClick(item.target)}
              key={index}
              href={item.target}
            >
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}

export default Header;
