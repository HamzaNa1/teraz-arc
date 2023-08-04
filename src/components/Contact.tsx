import { PiHouseLine } from "react-icons/pi";

// PiHouseLine
export default function Contact() {
  return (
    <div className="container max-w-full h-[1024px] bg-contact">
      <div className="h-full flex flex-col justify-center items-center gap-10">
        <div className="w-[200px] h-[200px]">
          <img src="/images/icon.svg" alt="" className="w-full h-full" />
        </div>
        <div>
          <span className="text-2xl">
            بكل تأكيد هناك المزيد من الأعمال و التفاصيل لا تتردد بالتواصل معنا
          </span>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            <div>
              <PiHouseLine className="w-5 h-5" />
            </div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
          </div>
        </div>
      </div>
    </div>
  );
}
