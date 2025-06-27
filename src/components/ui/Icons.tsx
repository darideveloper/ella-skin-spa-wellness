import React from 'react';
import { 
  HiPhone, 
  HiMail, 
  HiLocationMarker, 
  HiClock,
  HiHeart, 
  HiStar, 
  HiSparkles, 
  HiUserGroup,
  HiArrowRight,
  HiMenu,
  HiLightBulb,
  HiBadgeCheck
} from 'react-icons/hi';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube,
  FaTiktok
} from 'react-icons/fa';

interface IconProps {
  className?: string;
}

export const PhoneIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <HiPhone className={className} />
);

export const MailIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <HiMail className={className} />
);

export const LocationIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <HiLocationMarker className={className} />
);

export const ClockIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <HiClock className={className} />
);

export const HeartIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <HiHeart className={className} />
);

export const StarIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <HiStar className={className} />
);

export const SparklesIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <HiSparkles className={className} />
);

export const UserGroupIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <HiUserGroup className={className} />
);

export const FacebookIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <FaFacebook className={className} />
);

export const InstagramIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <FaInstagram className={className} />
);

export const TwitterIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <FaTwitter className={className} />
);

export const YoutubeIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <FaYoutube className={className} />
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <HiArrowRight className={className} />
);

export const TiktokIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <FaTiktok className={className} />
);

export const MenuIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <HiMenu className={className} />
);

export const LightBulbIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <HiLightBulb className={className} />
);

export const BadgeCheckIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <HiBadgeCheck className={className} />
); 