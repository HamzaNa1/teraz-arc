export default function Goals() {
  return (
    <div className="container max-w-full h-[1024px] bg-[#EEEEEE] flex flex-col justify-center items-center gap-y-11">
      <span className="text-[rgb(81,81,81)] text-4xl">أهداف المؤسسة</span>
      <div className=" flex gap-32">
        <div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center">
          <img
            src="/images/eqpm.svg"
            className="h-[90px] w-[90px] fill-[#BF971B]"
          />
          <span className="text-secondary">تنفيذ الأعمال</span>
          <span className="text-secondary">بأحدث التقنيات</span>
        </div>
        <div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center">
          <img
            src="/images/medal.svg"
            className="h-[90px] w-[90px] fill-primary"
          />
          <span className="text-secondary">ضمان جودة</span>
          <span className="text-secondary">الأعمال</span>
        </div>
        <div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center">
          <img
            src="/images/cart.svg"
            className="h-[90px] w-[90px] fill-[#BF971B]"
          />
          <span className="text-secondary">انتقاء أفضل</span>
          <span className="text-secondary">المواد</span>
        </div>
      </div>
      <div className="flex gap-32">
        <div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center">
          <img
            src="/images/handshake.svg"
            className="h-[90px] w-[90px] fill-[#BF971B]"
          />
          <span className="text-secondary">بناء الثقة</span>
          <span className="text-secondary">بين العملاء</span>
        </div>
        <div className="h-[250px] w-[185px] border-[#BF971B] border-[4px] rounded-[40px] flex flex-col justify-center items-center">
          <img
            src="/images/clock.svg"
            className="h-[90px] w-[90px] fill-[#BF971B]"
          />
          <span className="text-secondary">توفير الوقت</span>
          <span className="text-secondary">و الجهد</span>
        </div>
      </div>
      c
    </div>
  );
}
