export interface User {
  profileImage: string;
  name: string;
  location: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface ButtonProps {
  label: string;
  url?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  user: User;
  socialLinks: SocialLink[];
  className?: string;
}

export interface ProfileProps {
  user: User;
  className?: string;
}

export interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}
