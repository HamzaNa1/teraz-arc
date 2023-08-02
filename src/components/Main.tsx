export default function Main() {
	return (
		<div className="container max-w-full h-[1024px] bg-[#323232]">
			<div className="relative w-full h-full">
				<div className="absolute w-full h-full">
					<div className="w-full flex justify-start">
						<img src="/images/v1.svg"></img>
					</div>
				</div>
				<div className="absolute w-full h-full">
					<div className="w-full flex justify-end">
						<img src="/images/v2.svg"></img>
					</div>
				</div>
				<div className="absolute w-full h-full">
					<div className="w-full h-full flex">
						<img src="/images/v4.svg" className="self-end"></img>
					</div>
				</div>
				<div className="absolute w-full h-full">
					<div className="w-full h-full flex">
						<img src="/images/v3.svg" className="self-end w-full"></img>
					</div>
				</div>

				<div className="w-full h-full flex flex-col justify-center items-center">
					<img src="/images/icon.svg" alt="" className="w-[50vh]" />
					<div className="flex flex-col gap-5 text-center mt-5">
						<p className="text-primary text-5xl">
							مؤسسة الطراز المعماري للمقاولات
						</p>
						<p className="text-3xl">مستمرون معكم منذ 1993م</p>
					</div>
				</div>
			</div>
		</div>
	);
}
