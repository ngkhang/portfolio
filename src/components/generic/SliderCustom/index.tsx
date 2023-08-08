import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const settings = {
	dots: true,
	speed: 500,
	slidesToShow: 4,
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
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
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

function SliderCustom({ children }: { children: JSX.Element[] }) {
	return (
		<>
			<Slider {...settings}>{children}</Slider>
		</>
	);
}

export default SliderCustom;
