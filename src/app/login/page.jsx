"use client";

import { useState } from "react";
import Link from "next/link";
import "./login.css";

export default function LoginPage() {
  const [selected, setSelected] = useState("client");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", {
      role: selected,
      email: formData.email,
      password: formData.password,
    });
 
  };

  const handleGoogleLogin = () => {
    console.log("Google login:", selected); 
  };

  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="row g-0 min-vh-100">
 
        <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center leftSide">

          <div className="w-100 px-4 px-md-5 py-4 loginContent">
 
            <Link
              href="/"
              className="text-decoration-none"
            >
              <h4 className="fw-bold mb-lg-5 mb-4 logo">
                translate co
              </h4>
            </Link>

            {/* Heading */}
            <h1 className="fw-bold mb-2 heading">
              Welcome back
            </h1>

            <p className="text-secondary mb-4 small loginSubtitle">
              Log in to continue where you left off.
            </p> 
            <div className="accountTabs mb-4">

              <button
                type="button"
                className={`accountTab ${selected === "client"
                    ? "accountTabActive"
                    : ""
                  }`}
                onClick={() => setSelected("client")}
              >
                I'm a client
              </button>

              <button
                type="button"
                className={`accountTab ${selected === "translator"
                    ? "accountTabActive"
                    : ""
                  }`}
                onClick={() => setSelected("translator")}
              >
                I'm a translator
              </button>

            </div> 
            <form onSubmit={handleSubmit}>

              {/* Email */}
              <div className="mb-3">

                <label
                  htmlFor="email"
                  className="form-label fw-semibold"
                >
                  Email address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control loginInput"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />

              </div>

              {/* Password */}
              <div className="mb-2">

                <label
                  htmlFor="password"
                  className="form-label fw-semibold"
                >
                  Password
                </label>

                <div className="position-relative">

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    id="password"
                    name="password"
                    className="form-control loginInput passwordInput"
                    placeholder="••••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    className="passwordShow"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>

              {/* Forgot Password */}
              <div className="text-end mb-4">

                <Link
                  href="/forgot-password"
                  className="forgotLink text-decoration-none"
                >
                  Forgot password?
                </Link>

              </div>
 
              <button
                type="submit"
                className="btn btn-primary w-100 loginButton fw-semibold"
              >
                Log in
              </button>

            </form>

            <div className="d-flex align-items-center gap-3 my-3">
              <div className="flex-grow-1 divider"></div>
              <span className="orText">
                or
              </span>
              <div className="flex-grow-1 divider"></div>
            </div>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn w-100 googleButton fw-semibold"
            >
              <span className="googleIcon">
                G
              </span>

              Continue with Google
            </button>
            <p className="text-center text-secondary mt-4 mb-0 signupText">

              Don't have an account?{" "}
              <Link
                href={
                  selected === "client"
                    ? "/signup"
                    : "/translator-signup"
                }
                className="signupLink text-decoration-none fw-semibold"
              >
                Sign up free
              </Link>
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center position-relative rightSide">
          <div className="position-absolute glow"></div>
          <div className="rounded-4 p-4 position-relative testimonialCard">
            <div className="mb-3 stars">
              ★ ★ ★ ★ ★
            </div>
            <p className="text-white mb-4 quoteText">
              "We handed off a 40-page legal contract and had
              a certified translation back in under 30 hours —
              fully tracked the whole way."
            </p>
            <div className="d-flex align-items-center gap-2">
              <div className="rounded-circle text-white d-flex align-items-center justify-content-center fw-semibold avatar">
                MJ
              </div>
              <div>

                <div className="text-white fw-semibold avatarName">
                  Maya Jensen
                </div>
                <div className="text-white-50 avatarRole">
                  Ops Lead, Northwind Legal
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}