import { useParams } from "react-router-dom";
import ProfileEdit from "./ProfileEdit"; // Adjust path as per your project structure

const UserProfilePage = () => {
  const { userId } = useParams(); // Make sure you have defined the route with userId parameter

  return (
    <div>
      <ProfileEdit userId={userId} />
    </div>
  );
};

export default UserProfilePage;
