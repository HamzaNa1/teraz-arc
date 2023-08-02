"use client";

export default function Navbar() {
	return (
		<>
			<div className="container max-w-full h-[5rem] bg-white">
				<div className="w-full h-full flex justify-end">
					<div className="flex w-full gap-[7rem] justify-center items-center text-primary text-3xl">
						<button>تواصل</button>
						<button>أعمالنا</button>
						<button>خدماتنا</button>
						<button>أهدافنا</button>
						<button>رؤيتنا</button>
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
