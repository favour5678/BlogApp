import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

export const Login = () => {
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const { logIn } = useAuth()

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = () => {
    axios.get('http://localhost:5000/register')
      .then(res => {
        console.log(res.data)
      })
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:5000/login', { username, password })
      const token = response.data.token;

      alert('Login successful')
      setUsername('')
      setPassword('')
      fetchUsers()
      navigate('/')
      window.location.reload()
      logIn(token)
    } catch(error) {
      console.log('Login error')
    }
  }


  return (
    <main className="h-screen">
      <Navbar />
      <div className="mt-28">
        <div className="max-w-md w-full mx-auto bg-[#F9F9F9] p-8 rounded-md shadow-xl">
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
                value={username}
                onChange={e => setUsername(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
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
              <Link to={"/createAccount"} className="font-semibold hover:underline underline-offset-1">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
