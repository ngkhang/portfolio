const shortLinkCertificate = (code: string) => {
	return `https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~${code}/CERTIFICATE_LANDING_PAGE~${code}.jpeg`;
};
export default shortLinkCertificate;
