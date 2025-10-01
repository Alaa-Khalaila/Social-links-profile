import Button from '../Button/Button';
import type { SocialLinksProps } from '../../types';

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className = '' }) => {
  return (
    <div className={`w-full flex flex-col gap-3 ${className}`}>
      {links.map((link) => (
        <Button 
          key={link.name} 
          url={link.url} 
          label={link.name}
          className="w-full"
        />
      ))}
    </div>
  );
};

export default SocialLinks;
