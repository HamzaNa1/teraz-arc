"use client";

import { RefObject, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({
  elements,
}: {
  elements: RefObject<HTMLDivElement>[];
}) {
  const [menuShown, setMenuShown] = useState(false);

  return (
    <>
      <div className="container max-w-full h-[5rem] bg-white">
        <div className="w-full h-full flex justify-end">
          <div className="hidden md:flex w-full justify-center items-center text-3xl gap-20 text-primary">
            <button
              className="hover:text-darkPrimary transition duration-100"
              onClick={() =>
                elements[4].current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              تواصل
            </button>
            <button
              className="hover:text-darkPrimary transition duration-100"
              onClick={() =>
                elements[3].current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              أعمالنا
            </button>
            <button
              className="hover:text-darkPrimary transition duration-100"
              onClick={() =>
                elements[2].current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              خدماتنا
            </button>
            <button
              className="hover:text-darkPrimary transition duration-100"
              onClick={() =>
                elements[1].current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              أهدافنا
            </button>
            <button
              className="hover:text-darkPrimary transition duration-100"
              onClick={() =>
                elements[0].current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              رؤيتنا
            </button>
          </div>
          <div
            className="md:hidden mr-auto"
            onClick={() => setMenuShown(!menuShown)}
          >
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
      {menuShown ? (
        <div className="flex flex-col p-2 bg-white text-black">
          <button
            className="text-start active:bg-primary active:text-white p-2 transition duration-100 rounded-md"
            onClick={() =>
              elements[0].current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            رؤيتنا
          </button>
          <button
            className="text-start active:bg-primary active:text-white p-2 transition duration-100 rounded-md"
            onClick={() =>
              elements[1].current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            أهدافنا
          </button>
          <button
            className="text-start active:bg-primary active:text-white p-2 transition duration-100 rounded-md"
            onClick={() =>
              elements[2].current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            خدماتنا
          </button>
          <button
            className="text-start active:bg-primary active:text-white p-2 transition duration-100 rounded-md"
            onClick={() =>
              elements[3].current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            أعمالنا
          </button>
          <button
            className="text-start active:bg-primary active:text-white p-2 transition duration-100 rounded-md"
            onClick={() =>
              elements[4].current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            تواصل
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
