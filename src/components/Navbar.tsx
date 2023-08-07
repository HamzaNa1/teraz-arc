"use client";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <>
      <div className="container max-w-full h-[5rem] bg-white">
        <div className="w-full h-full flex justify-end">
          <div className="hidden md:flex w-full justify-center items-center text-primary text-3xl">
            <a
              href="#Contact"
              onClick={() => setActiveNav("#Contact")}
              className={activeNav === "#Contact" ? "active" : ""}
            >
              تواصل
            </a>
            <a
              href="#Work"
              onClick={() => setActiveNav("#Work")}
              className={activeNav === "#Work" ? "active" : ""}
            >
              أعمالنا
            </a>
            <a
              href="#Services"
              onClick={() => setActiveNav("#Services")}
              className={activeNav === "#Services" ? "active" : ""}
            >
              خدماتنا
            </a>
            <a
              href="#Goals"
              onClick={() => setActiveNav("#Goals")}
              className={activeNav === "#Goals" ? "active" : ""}
            >
              أهدافنا
            </a>
            <a
              href="#Vision"
              onClick={() => setActiveNav("#Vision")}
              className={activeNav === "#Vision" ? "active" : ""}
            >
              رؤيتنا
            </a>
          </div>
          <div className="md:hidden mr-auto">
            <GiHamburgerMenu className="fill-primary h-full w-full p-4" />
          </div>

          <div className="h-full p-2">
            <img
              src="/images/icon.svg"
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
