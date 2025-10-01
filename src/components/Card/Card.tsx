import Profile from '../Profile/Profile';
import SocialLinks from '../SocialLinks/SocialLinks';
import type { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({ user, socialLinks, className = '' }) => {
  return (
    <div
      className={`flex items-center flex-col gap-y-8 max-w-sm p-8 bg-gray-800 rounded-lg shadow-lg ${className}`}
    >
      <Profile user={user} />
      <SocialLinks links={socialLinks} />
    </div>
  );
};

export default Card;
