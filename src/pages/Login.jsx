import React from "react";
import avatar from "../assets/login-avatar.png";
import { IoPeople } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
  const adminEmail = "admin@gmail.com";
  const adminPassword = "admin123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="h-14 w-14 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-2xl text-gray-500">
            <img src={avatar} alt="" className="h-10 w-10" />
          </div>

          <h2 className="text-3xl font-bold text-gray-700 mt-2">Admin Login</h2>

          <p className="text-sm text-gray-500 mt-2">
            Sign in to access the Event Management Dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-gray-50
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-gray-50
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          focus:border-transparent transition"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-indigo-600 hover:text-indigo-800"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl
        font-semibold hover:bg-indigo-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Demo Credentials */}
        {/* <div className="mt-6 bg-indigo-50 rounded-xl p-4">
          <p className="text-xs font-semibold text-indigo-700 mb-2">
            Demo Credentials
          </p>

          <p className="text-xs text-gray-600">Email: admin@gmail.com</p>

          <p className="text-xs text-gray-600">Password: admin123</p>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
