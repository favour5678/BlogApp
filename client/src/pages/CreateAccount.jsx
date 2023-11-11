import React, { useState } from "react";
import { Navbar } from "../components/Navbar";

export const CreateAccount = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // const handleRegister = async(e) => {
  //   e.preventDefault()
  //   const values = {username, password}

  //   const response = await fetch('http://localhost:4000/register', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(values)
  //   });

  //   if(response.ok === 200) {
  //     console.log('Registration successful')
  //   } else {
  //     console.error('Registration failed')
  //   }
  
  // }

  const handleRegister = async(e) => {
    e.preventDefault()
    const values = {username, password}

    try {
      const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values)
    });

    if(response.ok === 200) {
      console.log('Registration successful')
    } else {
      const errorData = await response.json()
      console.error('Registration failed:', errorData.message)
    }
    } catch(error) {
      console.error('Error:', error.message)
    }
  }

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
              Create Account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
