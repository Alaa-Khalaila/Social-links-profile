import "./App.css";
import Card from "./components/Card/Card";
import { DEFAULT_SOCIAL_LINKS } from "./constants/socialLinks";
import type { User } from "./types";
import JessicaImg from "./assets/avatar-jessica.jpeg";

function App() {
  const userData: User = {
    name: "Jessica Randall",
    location: "London, United Kingdom",
    description: "Front-end developer and avid reader.",
    profileImage: JessicaImg,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <Card user={userData} socialLinks={DEFAULT_SOCIAL_LINKS} />
    </div>
  );
}

export default App;
