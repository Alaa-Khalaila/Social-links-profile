import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ 
  label, 
  url, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  className = ''
}) => {
  const baseClasses = "inline-block text-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "text-white bg-gray-700 hover:bg-yellow-500 dark:bg-gray-800 dark:hover:bg-yellow-500",
    secondary: "text-gray-300 bg-gray-600 hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600"
  };
  
  const sizeClasses = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-6 py-3"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  if (url) {
    return (
      <a
        className={classes}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${label}`}
      >
        {label}
      </a>
    );
  }
  
  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default Button;
