import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const values = { username, password };

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        credentials: "include",
      });

      if (response.ok) {
        setSuccessMessage("Login successful");
        setErrorMessage("");

        setTimeout(() => {
          setSuccessMessage("");
          return navigate("/");
        }, 3000);

      } else {
        const data = await response.json();

        setErrorMessage(`${data.message}`);
        setSuccessMessage("");

        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    } catch (error) {
      setErrorMessage(`Error: ${error.message}`);
      setSuccessMessage("");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <main className="h-screen">
      <Navbar />
      <div className="mt-28">
        <div className="max-w-md w-full mx-auto bg-[#F9F9F9] p-8 rounded-md shadow-xl">
          {successMessage !== "" && (
            <strong className="flex justify-center text-[#888888] mb-1">
              {successMessage}
            </strong>
          )}
          {errorMessage !== "" && (
            <strong className="flex justify-center text-[#888888] mb-1">
              {errorMessage}
            </strong>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="font-semibold text-lg">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="mt-3 w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-8">
              <label htmlFor="password" className="font-semibold text-lg">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="mt-3 w-full p-2 border border-gray-300 rounded-md"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="button w-full font-semibold text-lg"
            >
              Login
            </button>
          </form>

          <div className="mt-6">
            <p className="text-sm">
              Don't have an account?
              <Link to={"/createAccount"} className="font-semibold">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
