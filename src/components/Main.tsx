import Navbar from "./Navbar";
import Image from "next/image";

export default function Main() {
	return (
		<div className="container flex flex-col max-w-full h-screen min-h-[900px] bg-[#323232]">
			{/* <Navbar/> */}
			<div className="relative w-full h-full">
				{/* <div className="absolute w-full h-full">
					<div className="flex flex-wrap w-full h-full">
						<div className="w-[75%] h-[50%]">
							<img src="/images/v1.svg" className="drop-shadow-2xl"></img>
						</div>
						<div className="w-[25%] h-[50%] flex items-start justify-end">
							<img src="/images/v2.svg" className="drop-shadow-xl"></img>
						</div>
						<div className="h-[50%] w-[40%] flex items-end">
							<img src="/images/v4.svg"></img>
						</div>
					</div>
				</div> */}
				{/* <div className="absolute w-full h-full">
					<div className="h-full w-full flex items-end">
						<img src="/images/v3.svg" className="w-full h-fit"></img>
					</div>
				</div> */}

				<img
					src="/images/blackstar.svg"
					className="absolute hidden md:block w-16 h-16 rotate-45 top-[180px] left-[40px] drop-shadow-lg"
				></img>
				<img
					src="/images/blackstar.svg"
					className="absolute hidden md:block w-16 h-16 top-[140px] left-[120px] drop-shadow-lg"
				></img>
				<img
					src="/images/blackstar.svg"
					className="absolute hidden md:block w-16 h-16 rotate-45 top-[340px] left-[40px] drop-shadow-lg"
				></img>
				<img
					src="/images/blackstar.svg"
					className="absolute hidden md:block w-16 h-16 top-[280px] left-[100px] drop-shadow-lg"
				></img>

				<div className="w-full h-full flex flex-col justify-center items-center pb-16">
					<div className="drop-shadow-2xl ">
						<Image
							src="/images/newlogo.jpg"
							alt=""
							width={600}
							height={600}
							className="rounded-2xl"
						/>
					</div>

					<div className="flex flex-col gap-5 text-center mt-5 z-10">
						<span className="text-primary md:text-5xl text-3xl">
							الموقع قيد التطوير{" "}
						</span>
						<span className="text-white md:text-3xl text-xl">
							The site is under development{" "}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
