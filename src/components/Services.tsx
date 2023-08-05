import Image from "next/image";
import { MdVerified } from "react-icons/md";

export default function Services() {
  return (
    <div className="container max-w-full h-[1024px] bg-services flex flex-row justify-center items-center gap-x-20">
      <div className="drop-shadow-2xl">
        <Image
          src="/images/bad9454e-a349-441c-848f-486d21eed8ca.jpg"
          alt=" "
          width={900}
          height={900}
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-y-10  text-primary text-6xl">
        <div className="flex flex-row gap-x-10 justify-center items-center  ">
          <span>دراسة التصاميم و تقديم حلول</span>
          <MdVerified className=" fill-primary w-36 h-36 " />
        </div>

        <div className="flex flex-row gap-x-10   justify-center items-center  ">
          <span>دراسة التصاميم و تقديم حلول</span>
          <MdVerified className=" fill-primary w-36 h-36  " />
        </div>

        <div className="flex flex-row gap-x-10  justify-center items-center  ">
          <span>دراسة التصاميم و تقديم حلول</span>
          <MdVerified className=" fill-primary w-36 h-36 " />
        </div>

        <div className="flex flex-row gap-x-10  justify-center items-center ">
          <span>دراسة التصاميم و تقديم حلول</span>
          <MdVerified className=" fill-primary w-36 h-36  " />
        </div>
      </div>
    </div>
  );
}
