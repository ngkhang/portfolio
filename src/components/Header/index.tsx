import { DataPage } from "~/constants";
import { Icons } from "~/helpers";
import { v4 as uuidv4 } from "uuid";

const { Brand, Navs } = DataPage.en.Header;

function Header() {
	return (
		<>
			<div className="flex justify-center bg-white/95 font-medium shadow-md shadow-slate-200 fixed w-full z-10">
				<div className="w-full mx-4 flex justify-between items-center lg:w-4/5 lg:px-0">
					<a
						className="inline-block py-1 text-pink-400 text-2xl opacity-80 hover:opacity-100 lg:py-2 lg:text-4xl"
						href={`#${Brand.Url}`}
					>
						{Icons["Code"]()}
					</a>
					<div className="flex items-center">
						{Navs.map((ele) => {
							return (
								<a
									key={uuidv4()}
									href={`#${ele.Url}`}
									className="inline-block py-1 px-2 ml-1 text-sm text-[#525252]/80 hover:text-[#171717] lg:text-base"
								>
									{ele.Title}
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
