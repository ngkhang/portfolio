import { Icons } from "~/helpers";

interface ItemProps {
	Title: string;
	Color: string;
	Content: string;
	Width?: string;
	Bg?: string;
}

function ItemInfo({ Width = "w-full", Bg, Title, Color, Content }: ItemProps) {
	return (
		<div
			className={`${Width} mb-2 md:mb-4 lg:mb-3 md:pr-4 lg:pr-3 lg:w-full`}
		>
			<div
				className={`${Bg} flex items-center rounded-md pl-2 py-1 bg-slate-200/90  lg:shadow-insetBox`}
			>
				<span
					className="inline-block mr-2 p-2 rounded shadow-lg shadow-slate-300 bg-white text-lg lg:text-xl"
					style={{ color: Color }}
				>
					{Icons[Title]()}
				</span>
				<div className="flex-grow">
					<span className="text-xs tracking-wide uppercase lg:text-sm">
						{Title}
					</span>
					<p className="text-[12px] font-medium tracking-wide lg:text-base">
						{Content}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ItemInfo;
