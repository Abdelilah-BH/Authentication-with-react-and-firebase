import { useState, useRef } from "react";
import { Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/auth";

const Register = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPasswordRef.current.value !== passwordRef.current.value) {
      return setError("Passwords do not match!");
    }
    try {
      setError("");
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center h-100vh ">
      <Card className="w-50">
        <Card.Header className="text-center">
          <h1>Register</h1>
        </Card.Header>
        <Card.Body>
          {error ? <Alert variant="danger">{error}</Alert>: null}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                ref={emailRef}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                ref={passwordRef}
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">
                Confirm password
              </label>
              <input
                type="password"
                className="form-control"
                ref={confirmPasswordRef}
                id="exampleInputPassword2"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
