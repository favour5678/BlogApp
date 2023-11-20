import React from "react";
import { Navbar } from "../components/Navbar";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export const CreatePost = () => {
  return (
    <main className="h-screen">
      <Navbar />
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Title"
          className='className="mt-3 w-[60%] p-2 border border-gray-300 rounded-md'
        />
        <input
          type="text"
          placeholder="Summary"
          className='className="mt-3 w-[60%] p-2 border border-gray-300 rounded-md'
        />
        <input type="file" className='className="mt-3 w-[60%] p-2 border border-gray-300 rounded-md'/>
        <ReactQuill />
      </form>
    </main>
  );
};
