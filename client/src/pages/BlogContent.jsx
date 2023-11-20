import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const BlogContent = ({ blogs }) => {
  const [createdPosts, setCreatedPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/post').then(response => {
      response.json().then(posts => {
        setCreatedPosts(posts)
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

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

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
          <p className="mt-3 text-sm">{`${day}-${month}-${year}`}</p>
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
          <div key={post.id} className="w-full">
          <p>
            <img
              src={post.image}
              alt="post-img"
              className="h-72 w-full object-cover object-center rounded-md"
            />
          </p>
          <p className="mt-3 text-sm">{post.createdAt}</p>
          <h2 className="font-semibold text-lg pt-2 tracking-wide">
            {post.title}
          </h2>
          <Link to={`/blogs/${post.id}`} className="pt-2">
            {post.content[0]}
            <small className="text-sm font-semibold hover:underline underline-offset-2">Read More....</small>
          </Link>
        </div>
        ))
      }
    </main>
  );
}

