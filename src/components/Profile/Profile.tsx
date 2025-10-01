import type { ProfileProps } from '../../types';

const Profile: React.FC<ProfileProps> = ({ user, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="mb-6">
        <img
          className="rounded-full h-[100px] w-[100px] mx-auto object-cover"
          src={user.profileImage}
          alt={`${user.name} profile picture`}
        />
      </div>
      
      <div>
        <h1 className="text-2xl font-semibold mb-2">{user.name}</h1>
        <p className="text-yellow-300 mb-4 font-medium">{user.location}</p>
        <p className="text-gray-300 italic">"{user.description}"</p>
      </div>
    </div>
  );
};

export default Profile;
