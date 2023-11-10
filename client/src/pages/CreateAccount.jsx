import React, { useState } from "react";
import { Navbar } from "../components/Navbar";

export const CreateAccount = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = async(e) => {
    e.preventDefault()
    const values = {email, password}

    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values)
    });

    if(response.status === 200) {
      console.log('Registration successful')
    } else {
      console.error('Registration failed')
    }
  
  }

  return (
    <main className="h-screen">
      <Navbar />
      <div className="mt-32">
        <div className="max-w-md w-full mx-auto bg-[#F9F9F9] p-8 rounded-md shadow-xl">
          <form onSubmit={register}>
            <div className="mb-4">
              <label htmlFor="email" className="font-semibold text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-3 w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
