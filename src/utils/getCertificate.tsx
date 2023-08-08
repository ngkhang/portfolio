// const codeVerify = [
// 	"7X7C8J2N9VLD",
// 	"Q5RN7GL8QL2W",
// 	"F2G9BE2THU4W",
// 	"PBESHJ4XJTT2",
// ];

const getCertificate = (code: string) => {
	return {
		Id: code,
		Data: `https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~${code}/CERTIFICATE_LANDING_PAGE~${code}.jpeg`,
	};
};

export default getCertificate;
