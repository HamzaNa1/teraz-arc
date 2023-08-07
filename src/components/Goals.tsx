import { RiMedalLine } from "react-icons/ri";
import { MdOutlineShoppingCart, MdOutlineHandshake } from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";
import { LiaWrenchSolid } from "react-icons/lia";

export default function Goals() {
  return (
    <section id="Goals">
      <div className="container max-w-full h-[1024px] bg-[#EEEEEE] flex flex-col justify-center items-center gap-y-11">
        <span className="text-[rgb(81,81,81)] text-4xl">أهداف المؤسسة</span>
        <div className=" flex gap-32">
          <div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
            <LiaWrenchSolid className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
            <span className="text-secondary group-hover:text-white">
              تنفيذ الأعمال
            </span>
            <span className="text-secondary group-hover:text-white">
              بأحدث التقنيات
            </span>
          </div>
          <div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
            <RiMedalLine className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
            <span className="text-secondary group-hover:text-white">
              ضمان جودة
            </span>
            <span className="text-secondary group-hover:text-white">
              الأعمال
            </span>
          </div>
          <div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
            <MdOutlineShoppingCart className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
            <span className="text-secondary group-hover:text-white">
              انتقاء أفضل
            </span>
            <span className="text-secondary group-hover:text-white">
              المواد
            </span>
          </div>
        </div>
        <div className="flex gap-32">
          <div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
            <MdOutlineHandshake className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
            <span className="text-secondary group-hover:text-white">
              بناء الثقة
            </span>
            <span className="text-secondary group-hover:text-white">
              بين العملاء
            </span>
          </div>
          <div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center group hover:bg-primary">
            <IoMdStopwatch className="fill-primary h-[40%] w-full p-5 group-hover:fill-white" />
            <span className="text-secondary group-hover:text-white">
              توفير الوقت
            </span>
            <span className="text-secondary group-hover:text-white">
              و الجهد
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
