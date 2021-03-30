import { useState, useRef } from "react";
import { useAuth } from "../contexts/auth";
import { useLocation, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Alert, Card } from "react-bootstrap";

const ForgotPassword = () => {
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const { resetPassword } = useAuth();
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setMessage("");
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox")
    } catch {
      setError("Failed to signin");
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center h-100vh">
      <Card className="w-50">
        <Card.Header className="text-center">
          <h1>Forgot password</h1>
        </Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit}>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
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
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
            <div className="text-center">
              <Link to="/login">Login</Link>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgotPassword;
