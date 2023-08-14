import { Icons } from "~/helpers";

interface BtnSocial {
	ClassName?: string;
	Name: string;
	Short: string;
	Url: string;
	Color: string;
}

function BtnSocial({ ClassName, Name, Url, Color }: BtnSocial) {
	return (
		<a
			href={Url}
			target="_blank"
			className={`inline-block bg-white opacity-90 hover:opacity-100 text-base lg:text-2xl ${ClassName}`}
			style={{
				color: `#${Color}`,
			}}
		>
			{Icons[Name]()}
		</a>
	);
}

export default BtnSocial;
