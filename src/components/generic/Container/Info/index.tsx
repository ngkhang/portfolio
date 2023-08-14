import { v4 as uuidv4 } from "uuid";
import { Icons } from "~/helpers";

interface ItemInfo {
	StyleChildren?: string;
	Title: string;
	Color: string;
	Content: string;
}

interface Props<T> {
	StyleParent?: string;
	StyleChildren?: string;
	data: T;
}

const ItemInfo = ({ StyleChildren, Color, Title, Content }: ItemInfo) => {
	return (
		<div
			className={`mb-2 md:mb-4 lg:mb-3 md:pr-4 lg:pr-3 ${StyleChildren}`}
		>
			<div
				className={`bg-[#e0e0e0] flex items-center rounded-md pl-2 py-1 lg:shadow-insetBox`}
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
					<p className="text-sm font-medium tracking-wide lg:text-xs xl:text-base">
						{Content}
					</p>
				</div>
			</div>
		</div>
	);
};

function ContainerInfo({
	StyleParent,
	StyleChildren,
	data,
}: Props<ItemInfo[]>) {
	return (
		<div className={`${StyleParent}`}>
			{data.map((e) => {
				return (
					<ItemInfo
						key={uuidv4()}
						StyleChildren={StyleChildren}
						{...e}
					/>
				);
			})}
		</div>
	);
}

export default ContainerInfo;
