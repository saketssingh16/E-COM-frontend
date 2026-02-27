import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../config/api";

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
      const data = await apiFetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user?.role || "user");
      localStorage.setItem("userName", data.user?.name || "");
      const displayName = data.user?.name || email.split("@")[0] || "User";
      setMessageType("success");
      setMessage(`Welcome, ${displayName}!`);
      setTimeout(() => navigate("/home"), 900);
    } catch (error) {
      setMessageType("danger");
      setMessage(error.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-shell">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="auth-card p-4 reveal-on-scroll text-center">
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
      </div>
    </div>
  );
}

export default Login;
