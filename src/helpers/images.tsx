import Avatar from "assets/images/Avatar.svg";
import Logo from "assets/images/Avatar.svg";

interface KeyofVal {
	[key: string]: string;
}
//Solution other
// Images[content.Avatar as keyof typeof Images]

const Images: KeyofVal = {
	Avatar: Avatar,
	Logo: Logo,
};

export default Images;
