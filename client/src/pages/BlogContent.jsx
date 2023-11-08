import React from "react";
import { Link } from "react-router-dom";

export const BlogContent = ({ blogs }) => {
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
            <small className="text-sm font-semibold">Read More....</small>
          </Link>
        </div>
      ))}
    </main>
  );
}

