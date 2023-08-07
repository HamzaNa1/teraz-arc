export default function Contact() {
  return (
    <section id="Contact">
      <div className="container max-w-full h-[1024px] bg-contact">
        <div className="h-full flex flex-col justify-center items-center gap-20">
          <div className="w-[400px] h-[400px]">
            <img src="/images/icon.svg" alt="" className="w-full h-full" />
          </div>

          <div className="flex flex-col gap-5 text-center">
            <p className=" text-4xl text-black">
              بكل تأكيد هناك المزيد من الأعمال والتفاصيل
            </p>

            <p className="text-4xl text-black justify-center">
              لا تتردد بالتواصل معنا
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-x-64 gap-y-16">
              <div className="flex flex-row gap-3 justify-center items-center">
                <img src="/images/home.svg"></img>
                <span className="text-black text-4xl">Saudi Arabia</span>
              </div>

              <div className="flex flex-row gap-3 justify-center items-center	">
                <img src="/images/call.svg"></img>
                <span className="text-black text-4xl">0504518753</span>
              </div>

              <div className="flex flex-row gap-3 justify-center items-center">
                <img src="/images/mail.svg"></img>
                <span className="text-black text-3xl text-justify">
                  info@terazart.com
                </span>
              </div>

              <div className="flex flex-row gap-3 justify-center items-center">
                <img src="/images/call.svg"></img>
                <span className="text-black text-4xl">011-470098</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
