import { DataPage } from "~/constants";
import { Images } from "~/helpers";

const dbPage = DataPage.en.Home;

function Home() {
	return (
		<>
			<div
				id={dbPage.Id}
				className="bg-[#fff0f6] text-[#525252] pt-12 pb-8 md:min-h-screen flex justify-center"
			>
				<div className="flex flex-col items-center">
					<div className="w-3/5 md:w-1/2 px-8 box-border mb-10">
						<img
							src={Images[dbPage.Avatar]}
							alt="Avatar"
							className="w-full"
							style={{
								borderRadius:
									"67% 33% 61% 39% / 47% 30% 70% 53%",
							}}
						/>
					</div>
					<div className="md:w-1/2 text-center">
						<p className="text-xl mb-3">{dbPage.SubTitle}</p>
						<h1 className="text-6xl mb-6 uppercase">
							{dbPage.Name}
						</h1>
						<p className="text-3xl font-semibold magic-text uppercase mb-5">
							{dbPage.Title}
						</p>
						<p className="text-sm leading-6 tracking-wider mb-5 px-3">
							{dbPage.Description}
						</p>
						<a
							className="inline-block px-12 py-2 rounded-md bg-blue-500 text-white/90 hover:bg-blue-300 transition-all"
							href=""
							target="_blank"
							// download="nguyenkhang-cv"
						>
							Download CV
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
