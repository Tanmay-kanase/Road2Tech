import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); // reset any previous error

    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    } catch (err) {
      const msg = err?.response?.data?.message;
      if (msg === "Invalid email") {
        setErrorMessage("Email not found. Please register first.");
      } else if (msg === "Wrong password") {
        setErrorMessage("Password is incorrect.");
      } else {
        setErrorMessage("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const buttonClasses = `w-full text-white bg-[#03C9D7] hover:bg-[#039BAB] focus:ring-4 focus:outline-none 
    focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all 
    duration-200 transform hover:scale-[1.02] hover:shadow-md`;
  const buttonForGFT = `inline-flex w-full justify-center items-center rounded-lg border border-gray-300 bg-white 
    py-2.5 px-4 text-sm font-medium text-gray-500 hover:bg-gray-50 shadow-sm transition-all 
    duration-200 hover:shadow hover:border-gray-400`;
  return (
    <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 border border-gray-100">
      <div className="p-6 space-y-6 md:space-y-7 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-backgroundColor md:text-2xl text-center">
          Welcome Back
          <p className="text-sm font-normal text-gray-500 mt-1">
            Sign in to your account
          </p>
        </h1>

        <form className="space-y-5 md:space-y-6" onSubmit={handleLogin}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#d5f2ec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
              placeholder="Email address"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#d5f2ec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
              placeholder="Password"
              required
            />
          </div>
          {errorMessage && (
            <span className="block text-red-600 text-sm text-center mt-2 animate-pulse">
              {errorMessage}
            </span>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded bg-gray-50 "
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-gray-500  cursor-pointer"
                >
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-brightColor hover:underline transition-colors"
            >
              Forgot password?
            </a>
          </div>

          <button type="submit" className={buttonClasses} disabled={loading}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4 animate-spin text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Signing in...
              </span>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {/* Google */}
          <button type="button" className={buttonForGFT}>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
          </button>

          {/* Facebook */}
          <button type="button" className={buttonForGFT}>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Twitter/X */}
          <button type="button" className={buttonForGFT}>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
          </button>
        </div>

        <p className="text-sm text-center text-gray-600 mt-4 border-t border-gray-100 pt-4">
          If you don&apos;t have an account, Do Sign Up
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
