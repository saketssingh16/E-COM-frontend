import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Save token
        localStorage.setItem("token", data.token);

        // ✅ Redirect to home
        navigate("/home");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4 text-center">
          <h3 className="mb-4">Login —</h3>

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
