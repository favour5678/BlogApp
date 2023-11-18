import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateAccount = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:5000/register").then((res) => {
      // console.log(res.data)
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", {
        username,
        password,
      })
      .then(() => {
        alert("Registration Successful");
        setUsername("");
        setPassword("");
        fetchUsers();
        navigate("/login");
      })
      .catch((error) => {
        console.log("Unable to register user");
      });
  };

  return (
    <main className="h-screen">
      <Navbar />
      <div className="mt-32">
        <div className="max-w-md w-full mx-auto bg-[#F9F9F9] p-8 rounded-md shadow-xl">
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label htmlFor="username" className="font-semibold text-lg">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="mt-3 w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Username"
                value={username}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="button w-full font-semibold text-lg"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
