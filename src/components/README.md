# Components

This directory contains the refactored components for the Social Links Profile application.

## Component Structure

### Button
- **Location**: `Button/Button.tsx`
- **Purpose**: Reusable button component with support for both links and buttons
- **Features**:
  - Multiple variants (primary, secondary)
  - Multiple sizes (sm, md, lg)
  - Accessibility support with ARIA labels
  - External link support with security attributes
  - Disabled state support

### Card
- **Location**: `Card/Card.tsx`
- **Purpose**: Main container component that combines Profile and SocialLinks
- **Features**:
  - Composable design using Profile and SocialLinks components
  - Customizable styling through className prop

### Profile
- **Location**: `Profile/Profile.tsx`
- **Purpose**: Displays user information (avatar, name, location, description)
- **Features**:
  - Accessible image with proper alt text
  - Responsive design
  - Clean typography hierarchy

### SocialLinks
- **Location**: `SocialLinks/SocialLinks.tsx`
- **Purpose**: Renders a list of social media links
- **Features**:
  - Uses Button component for consistent styling
  - Full-width buttons for better mobile experience
  - Proper spacing between links

## Type Definitions

All component props are defined in `src/types/index.ts` for better type safety and reusability.

## Constants

Social links data is stored in `src/constants/socialLinks.ts` for easy maintenance and updates.

## Usage

```tsx
import { Card, Button, Profile, SocialLinks } from './components';
import { DEFAULT_SOCIAL_LINKS } from './constants/socialLinks';
import type { User } from './types';

const user: User = {
  name: "John Doe",
  location: "New York, USA",
  description: "Software developer",
  profileImage: "/path/to/image.jpg"
};

// Use the main Card component
<Card user={user} socialLinks={DEFAULT_SOCIAL_LINKS} />

// Or use individual components
<Profile user={user} />
<SocialLinks links={DEFAULT_SOCIAL_LINKS} />
<Button label="Click me" onClick={() => console.log('clicked')} />
```
