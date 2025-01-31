import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have successfully signed up!");
    navigate("/logout");
  };
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row h-100">
        {/* Left side - Registration Form */}
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

            <h2 className="mb-1">Register</h2>
            <p className="text-muted mb-4">Create new CRMS account</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the{" "}
                  <Link to="/terms" className="text-danger">
                    Terms & Privacy
                  </Link>
                </label>
              </div>

              <button type="submit" className="btn btn-danger w-100 mb-4">
                Sign Up
              </button>

              <div className="text-center mb-3">
                <span className="text-muted">Already have an account? </span>
                <Link to="/login" className="text-primary text-decoration-none">
                  Sign In Instead
                </Link>
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

export default Register;
