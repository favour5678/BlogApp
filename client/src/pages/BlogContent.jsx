import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from 'date-fns'
// import { CreatedPost } from "./CreatedPost";

export const BlogContent = ({ blogs }) => {
  const [createdPosts, setCreatedPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/post').then(response => {
      response.json().then(posts => {
        setCreatedPosts(posts)
        console.log(posts)
      })
    })
  }, [])

  const splitContent = (content) => {
    return content.split("\n").map((paragraph) => paragraph.trim());
  };

  const updatedBlogPosts = blogs.map((post) => ({
    ...post,
    content: splitContent(post.content),
    
  }));


  return (
    <main className="grid grid-cols-3 gap-x-6 gap-y-12 px-10">
      {updatedBlogPosts.map((post) => (
        <div key={post.id} className="w-full">
          <p>
            <img
              src={post.image}
              alt="post-img"
              className="h-72 w-full object-cover object-center rounded-md"
            />
          </p>
          <p className="mt-3 text-sm">{format(new Date(), 'dd-MM-yyyy')}</p>
          <h2 className="font-semibold text-lg pt-2 tracking-wide">
            {post.title}
          </h2>
          <Link to={`/blogs/${post.id}`} className="pt-2">
            {post.content[0]}{' '} 
            <small className="text-sm font-semibold hover:underline underline-offset-2">Read More....</small>
          </Link>
        </div>
      ))}

      {
        createdPosts.length > 0 && createdPosts.map(post => (
          <div key={post._id} className="w-full">
          <p>
            <img
              src={'http://localhost:5000/' + post.cover}
              alt="post-img"
              className="h-72 w-full object-cover object-center rounded-md"
            />
          </p>
          <p className="mt-3 text-sm">{format(new Date(post.createdAt), 'dd-MM-yyyy')}</p>
          <h2 className="font-semibold text-lg pt-2 tracking-wide">
            {post.title}
          </h2>
          <Link to={`/blogs/${post._id}`} className="pt-2">
            {post.content[0]}
            <small className="text-sm font-semibold hover:underline underline-offset-2">Read More....</small>
          </Link>
        </div>
        ))
      }
    </main>
  );
}

