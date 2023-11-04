import React from 'react';
import {
  MdOutlineEmail,
  MdOutlinePhoneIphone,
  MdLocationOn,
  MdCalendarMonth,
  MdOutlineDarkMode,
  MdOutlineVerified,
  MdOutlineSchedule,
} from 'react-icons/md';
import { FaLinkedinIn, FaDownload } from 'react-icons/fa';
import { PiGithubLogoFill } from 'react-icons/pi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { TbBrandLeetcode } from 'react-icons/tb';
import { SiCodewars } from 'react-icons/si';
import { BiLogoFacebook, BiCodeAlt } from 'react-icons/bi';

import { HiOutlineBuildingLibrary } from 'react-icons/hi2';

interface KeyofVal {
  [key: PropertyKey]: (className?: string) => React.ReactElement;
}

const Icons: KeyofVal = {
  Mail: (className) => <MdOutlineEmail className={className} />,
  Phone: (className) => <MdOutlinePhoneIphone className={className} />,
  Address: (className) => <MdLocationOn className={className} />,
  Birtday: (className) => <MdCalendarMonth className={className} />,
  LiveView: (className) => <HiOutlineExternalLink className={className} />,
  Download: (className) => <FaDownload className={className} />,
  Github: (className) => <PiGithubLogoFill className={className} />,
  Linkedin: (className) => <FaLinkedinIn className={className} />,
  Facebook: (className) => <BiLogoFacebook className={className} />,
  Leetcode: (className) => <TbBrandLeetcode className={className} />,
  Codewars: (className) => <SiCodewars className={className} />,
  DarkMode: (className) => <MdOutlineDarkMode className={className} />,
  Verified: (className) => <MdOutlineVerified className={className} />,
  Organization: (className) => (
    <HiOutlineBuildingLibrary className={className} />
  ),
  Schedule: (className) => <MdOutlineSchedule className={className} />,
  Code: (className) => <BiCodeAlt className={className} />,
};

export default Icons;
