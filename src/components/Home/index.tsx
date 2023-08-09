import { DataPage } from "~/constants";
import { Images } from "~/helpers";

const dbPage = DataPage.en.Home;

function Home() {
	return (
		<>
			<div
				id={dbPage.Id}
				className="bg-[#fff0f6] text-[#525252] pt-12 flex justify-center lg:p-0 lg:min-h-screen lg:w-full"
			>
				<div className="flex flex-col lg:flex-row items-center lg:w-full lg:px-10 ">
					<div className="w-3/5 px-8 box-border my-5 lg:m-0 lg:p-20 lg:w-1/2">
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
					<div className="lg:w-1/2 text-center box-border">
						<p className="text-xl mb-4 lg:text-2xl lg:mb-6">
							{dbPage.SubTitle}
						</p>
						<h1 className="text-5xl font-medium uppercase lg:text-6xl mb-6">
							{dbPage.Name}
						</h1>
						<p className="text-2xl font-semibold magic-text uppercase mb-5 lg:text-3xl lg:mb-8">
							{dbPage.Title}
						</p>
						<p className="text-base leading-6 tracking-wider mb-10 px-3 lg:text-lg lg:p-0 lg:leading-7">
							{dbPage.Description}
						</p>
						<a
							className="inline-block mb-8 px-12 py-2 rounded-md bg-blue-500 text-white/90 hover:bg-blue-300 transition-all lg:py-3 lg:px-16 lg:text-lg"
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
