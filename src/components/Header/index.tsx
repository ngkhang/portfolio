import { DataPage } from "~/constants";
import { Images } from "~/helpers";

const { Brand, Navs } = DataPage.en.Header;

function Header() {
	return (
		<>
			<div className="flex justify-center bg-white/95 font-medium shadow-md shadow-slate-200 fixed w-full z-10">
				<div className="w-full md:w-2/3 flex justify-between items-center">
					<a
						className="inline-block p-1 ml-2 opacity-80 hover:opacity-100"
						href={`#${Brand.Url}`}
					>
						<img
							src={Images[Brand.Name]}
							alt="Logo portfolio"
							className="w-full"
						/>
					</a>
					<div className="flex items-center mr-2">
						{Navs.map((ele) => {
							return (
								<>
									<a
										key={ele.Title}
										href={`#${ele.Url}`}
										className="inline-block py-1 px-2 mr-1 text-xs text-[#525252]/80 hover:text-[#171717]"
									>
										{ele.Title}
									</a>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
