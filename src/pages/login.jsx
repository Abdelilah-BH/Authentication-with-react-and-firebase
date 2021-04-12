import { useState, useRef } from "react";
import { useAuth } from "../contexts/auth";
import { useLocation, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Alert, Card } from "react-bootstrap";

const Login = () => {
  const [error, setError] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      history.replace(from);
    } catch {
      setError("Failed to signin");
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center h-100vh">
      <Card className="w-50">
        <Card.Header className="text-center">
          <h1>Login</h1>
        </Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">error</Alert>}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={emailRef}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                ref={passwordRef}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
            <div>
              <span>if you're not loged in </span>
              <Link to="/register">CLICK HERE</Link>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
