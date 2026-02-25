import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        const displayName = email.split("@")[0] || "User";
        setMessageType("success");
        setMessage(`Welcome, ${displayName}!`);
        setTimeout(() => navigate("/home"), 900);
      } else {
        setMessageType("danger");
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      setMessageType("danger");
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4 text-center">
          <h3 className="mb-4">Login -</h3>
          {message ? (
            <div className={`alert alert-${messageType} text-start py-2`} role="alert">
              {message}
            </div>
          ) : null}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-between small mb-3">
              <span className="text-muted" style={{ cursor: "pointer" }}>
                Forgot your password?
              </span>
              <Link to="/register" className="text-muted text-decoration-none">
                Create account
              </Link>
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
