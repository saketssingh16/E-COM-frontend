import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../config/api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await apiFetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });

      const loginData = await apiFetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      localStorage.setItem("token", loginData.token);
      localStorage.setItem("role", loginData.user?.role || "user");
      localStorage.setItem("userName", loginData.user?.name || "");
      setMessageType("success");
      setMessage(`Welcome, ${name || "User"}!`);
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
          <h3 className="mb-4">Sign Up -</h3>
          {message ? (
            <div className={`alert alert-${messageType} text-start py-2`} role="alert">
              {message}
            </div>
          ) : null}

          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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

            <button type="submit" className="btn btn-dark w-100 mt-2">
              Create
            </button>
          </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
