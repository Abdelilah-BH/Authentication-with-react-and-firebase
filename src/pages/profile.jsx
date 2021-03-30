import { useAuth } from "../contexts/auth";

const Profile = () => {
  const { user } = useAuth();
  return(
    <h1>Email is {user.email}</h1>
  )
}

export default Profile;