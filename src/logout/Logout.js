// project/src/components/Logout.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row h-100">
        {/* Left side - Login Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="p-4" style={{ maxWidth: "400px", width: "100%" }}>
            {/* Logo */}
            <div className="text-center mb-4">
              <img
                src="https://crms.dreamstechnologies.com/html/template/assets/img/logo.svg"
                alt="CRMS"
                style={{ width: "120px" }}
              />
            </div>

            <h2 className="mb-1">Sign In</h2>
            <p className="text-muted mb-4">
              Access the CRMS panel using your email and passcode.
            </p>

            <form>
              {/* Form fields */}
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                  <span className="input-group-text">
                    <i className="bi bi-eye-slash"></i>
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-danger w-100 mb-4"
                onClick={() => navigate("/register")} // Navigate to register
              >
                Sign In
              </button>

              {/* Other content */}
              <div className="text-center mb-3">
                <span className="text-muted">New on our platform? </span>
                <button
                  type="button"
                  className="btn btn-link text-primary text-decoration-none"
                  onClick={() => navigate("/register")}
                >
                  Create an account
                </button>
              </div>

              <div className="text-center mb-3">
                <span className="text-muted">OR</span>
              </div>

              <div className="d-flex justify-content-center gap-2">
                <button
                  className="btn btn-outline-primary"
                  style={{ width: "100px" }}
                >
                  <FaFacebook />
                </button>
                <button
                  className="btn btn-outline-secondary"
                  style={{ width: "100px" }}
                >
                  <FcGoogle />
                </button>
                <button
                  className="btn btn-outline-dark"
                  style={{ width: "100px" }}
                >
                  <FaApple />
                </button>
              </div>
            </form>

            <div className="text-center mt-4 text-muted">
              <small>Copyright © 2024 - CRMS</small>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div
          className="col-md-6 d-none d-md-block"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Logout;
