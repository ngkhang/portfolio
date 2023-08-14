import { Icons, Images } from "~/helpers";
import { v4 as uuidv4 } from "uuid";
import getCertificate from "~/utils/getCertificate";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const settings = {
	dots: true,
	speed: 500,
	slidesToShow: 3,
	// fade: true,
	slidesToScroll: 4,
	initialSlide: 0,
	centerMode: true,
	className: "center",
	infinite: true,
	centerPadding: "20px",
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

interface Props {
	data: {
		Name: string;
		Organization: string;
		Code: string;
		StartDate: string;
		EndDate: string;
		Url: string;
		Thumbnail: string;
	}[];
}

function SliderCustom({ data }: Props): React.ReactElement {
	return (
		<>
			<Slider {...settings}>
				{data.map((e) => {
					return (
						<div
							key={uuidv4()}
							className="itemCard rounded-xl shadow-lg bg-white shadow-gray-300 lg:p-4 h-full items-stretch flex-col"
						>
							<div className="mb-2 lg:mb-6">
								<a
									href={e.Url}
									target="_blank"
									className="block rounded aspect-[3/2] overflow-hidden lg:mb-3"
								>
									<img
										alt="certificate"
										className="w-full h-full object-cover bg-center hover:scale-110 transition-all"
										src={
											e.Thumbnail
												? Images[e.Thumbnail]
												: getCertificate(e.Code)
										}
									/>
								</a>
								<a
									href={e.Url}
									target="_blank"
									className="block text-center font-medium tracking-wider text-sm lg:text-base py-2 lg:py-0 lg:px-3 whitespace-break-spaces"
								>
									{e.Name}
								</a>
							</div>
							<div className="px-2 lg:px-3 mb-3 lg:mb-4">
								<p className="flex items-center text-base font-medium">
									{Icons["Organization"]("text-2xl mr-2")}
									<span>{e.Organization}</span>
								</p>
								<p className="flex items-center text-sm italic lg:my-1">
									{Icons["Schedule"]("text-2xl mr-2")}
									<span>
										{e.EndDate
											? `${e.StartDate} - ${e.EndDate}`
											: e.StartDate}
									</span>
								</p>
								<p className="flex items-center text-base">
									{Icons["Verified"]("text-2xl mr-2")}
									Code:
									<span className="ml-2 font-medium">
										{`${e.Code}`}
									</span>
								</p>
							</div>
						</div>
					);
				})}
			</Slider>
		</>
	);
}

export default SliderCustom;
