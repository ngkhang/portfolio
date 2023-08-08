interface TitleProp {
	Title: string;
	SubTitle: string;
}

function ContainerTitle({ Title, SubTitle }: TitleProp) {
	return (
		<>
			<div className="font-rubik p-10 uppercase relative w-full text-center">
				<h2 className="text-3xl font-bold tracking-wider">{Title}</h2>
				<span className="text-6xl font-bold absolute top-1/2 right-0 left-0 -translate-y-1/2 tracking-widest text-[var(--gray)]">
					{SubTitle}
				</span>
			</div>
		</>
	);
}

export default ContainerTitle;
