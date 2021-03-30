import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Register from "./pages/register";
import Header from "./components/layout/header";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import PrivateRoute from "./routes/private-route";
import AuthProvider from "./contexts/auth";
import { Container } from "react-bootstrap";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Container>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <PrivateRoute path="/profile" exact>
                <Profile />
              </PrivateRoute>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/register" exact>
                <Register />
              </Route>
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
