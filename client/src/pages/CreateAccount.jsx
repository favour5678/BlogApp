import React from "react";
import { Navbar } from "../components/Navbar";

export const CreateAccount = () => {
  return (
    <main className="h-screen">
      <Navbar />
      <div className="mt-32">
        <div className="max-w-md w-full mx-auto bg-[#F9F9F9] p-8 rounded-md shadow-xl">
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="font-semibold text-lg">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="mt-3 w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Username"
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
