import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar';
import { Editor } from '../components/Editor';
import { useNavigate, useParams } from 'react-router-dom';

export const EditPost = () => {
    const {id} = useParams()
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState('');
    const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/post/' + id)
        .then(response => {
            response.json().then(postInfo => {
                setTitle(postInfo.title)
                setContent(postInfo.content)
            })
        })
  }, [])

  const handleUpdatePost = async (e) => {
    e.preventDefault()

    const data = new FormData();

    data.set("title", title);
    data.set("content", content);
    if(files?.[0]) {
        data.set("file", files?.[0]);
    }

    const response = await fetch('http://localhost:5000/post', {
        method: 'PUT',
        body: data
    })
    if(response.ok) {
        navigate('/blogs/' + id)
    }
}  

  return (
    <main className="h-screen">
      <Navbar />
      <form onSubmit={handleUpdatePost} className="flex flex-col items-center mt-20 space-y-6">
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
        <Editor value={content} onChange={setContent}/>
        <button className="button font-semibold border border-gray-400">
          Update Post
        </button>
      </form>
    </main>
  );
}
