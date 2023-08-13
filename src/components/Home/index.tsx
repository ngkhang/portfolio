import { DataPage } from "~/constants";
import { Images } from "~/helpers";

const dbPage = DataPage.en.Home;

function Home() {
	return (
		<>
			<div
				id={dbPage.Id}
				className="text-[#525252] pt-10 flex justify-center lg:p-0 lg:min-h-screen lg:w-full"
			>
				<div className="flex flex-col items-center lg:flex-row lg:w-full lg:px-20">
					<div className="w-4/5 lg:w-1/2 p-16 lg:p-36 box-border bg-no-repeat bg-cover bg-center bg-blob-animation">
						<img
							src={Images[dbPage.Avatar]}
							alt="Avatar"
							className="w-full rounded-full shadow-lg shadow-slate-100"
						/>
					</div>
					<div className="text-center lg:w-1/2">
						<p className="text-xl lg:text-2xl mb-3 lg:mb-6">
							{dbPage.SubTitle}
						</p>
						<h1 className="text-5xl lg:text-7xl font-medium uppercase mb-6 lg:mb-12">
							{dbPage.Name}
						</h1>
						<p className="text-2xl lg:text-4xl font-semibold magic-text uppercase mb-10 lg:mb-8">
							{dbPage.Title}
						</p>
						<p className="text-base lg:text-lg leading-6 lg:leading-7 tracking-wider whitespace-break-spaces mb-10 px-3 lg:p-0 ">
							{dbPage.Description}
						</p>
						<a
							className="py-2 lg:py-3 px-12 lg:px-20 text-bases lg:text-lg mb-2 lg:mb-0 inline-block btnAnimation border-0 before:bg-blue-500 before:transform-none before:rounded-md before:w-full before:h-full text-white/80 relative z-[1] bg-transparent"
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
