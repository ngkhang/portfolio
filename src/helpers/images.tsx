import Avatar from "assets/images/Avatar.png";
import Avatar2 from "assets/images/Avatar(2).png";
import Logo from "assets/images/Logo.svg";
import ReactCertificate from "assets/images/ReactCertificate.png";

interface KeyofVal {
	[key: string]: string;
}
//Solution other
// Images[content.Avatar as keyof typeof Images]

const Images: KeyofVal = {
	Avatar: Avatar,
	Avatar2: Avatar2,
	Logo: Logo,
	ReactCertificate: ReactCertificate,
};
export default Images;
