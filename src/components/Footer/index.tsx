import { DataPage } from "~/constants";

const content = DataPage.en.Footer;
function Footer() {
	return (
		<div className="bg-white justify-self-end">
			<p className="py-3 text-center text-sm lg:py-4 lg:text-base shadow-">
				&copy; <em id="date">{new Date().getFullYear()} </em>
				{content.Title}
			</p>
		</div>
	);
}

export default Footer;
