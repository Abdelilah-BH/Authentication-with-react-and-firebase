
import { useAuth } from "../contexts/auth";

const Home = () => {
  const { user } = useAuth();
  return(
    <h1>Page home</h1>
  )
}

export default Home;