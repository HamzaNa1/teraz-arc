import Image from "next/image";

export default function Vision() {
  return (
    <div className="container bg-white flex max-w-full h-[1024px] px-11 justify-center items-center gap-64 ">
      <div className="drop-shadow-2xl">
        <Image
          src="/images/bad9454e-a349-441c-848f-486d21eed8ca.jpg"
          alt=""
          width={900}
          height={900}
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col text-right">
        <span className="text-primary text-7xl">رؤية المؤسسة</span>
        <span className="text-black text-2xl">
          إننا في مؤسسة الطراز المعماري للمقاولات العامة نسعى دائماً لتلبية
          احتياج الزبون بدءاً من مرحلة التنفيذ بجودة عالية و حرفية متقنة وبإشراف
          هندسي متكامل و فنين ذوي خبرة
        </span>
      </div>
    </div>
  );
}
