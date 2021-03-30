// import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth }from "../contexts/auth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  return(
    <Route {...rest} render={({ location }) => user?.email ? (
      children
    ) :
    (
    <Redirect to={{pathname: "/login", state: {from : location }}}/>
    )}>
    </Route>
  )
}

export default PrivateRoute;