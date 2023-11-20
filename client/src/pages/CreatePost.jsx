import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState('')
  const navigate = useNavigate()

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = ["header","bold","italic","underline","strike","blockquote","list","bullet", "indent", "link","image"];

  const handleCreatePost = async (e) => {
    e.preventDefault()

    const data = new FormData();

    data.set('title', title)
    data.set('content', content)
    data.set('file', files[0])
 
    const response = await fetch('http://localhost:5000/post', {
      method: 'POST',
      body: data,
    })
    if(response.ok) {
      navigate('/')
    }
  
  }

  return (
    <main className="h-screen">
      <Navbar />
      <form onSubmit={handleCreatePost} className="flex flex-col items-center mt-20 space-y-6">
        <input
          type="text"
          placeholder="Title"
          className='className="mt-3 w-[60%] p-2 border border-gray-300 rounded-md'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="file"
          className='className="mt-3 w-[60%] p-2 border border-gray-300 rounded-md'
          onChange={e => setFiles(e.target.files)}
        />
        <ReactQuill
          className="w-[60%]"
          value={content}
          onChange={(newValue) => setContent(newValue)}
          modules={modules}
          formats={formats}
        />
        <button className="button font-semibold border border-gray-400">
          Create Post
        </button>
      </form>
    </main>
  );
};
