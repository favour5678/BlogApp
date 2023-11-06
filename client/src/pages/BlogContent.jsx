import React from "react";
import { blogPosts } from "../data/blogData";

export const BlogContent = () => {
  const splitContent = (content) => {
    // return content.split('. ').map(paragraph => paragraph + '.')
    return content.split("\n").map((paragraph) => paragraph.trim());
  };

  const updatedBlogPosts = blogPosts.map((post) => ({
    ...post,
    content: splitContent(post.content),
  }));

  return (
    <main>
      {updatedBlogPosts.map((blog) => (
        <div key={blog.id}>
          <p>
            <img src={blog.image} alt="blog-image" />
          </p>
          <p>{blog.title}</p>
          {blog.content.map((paragraph, index) => (
            <p key={index} className="mb-1">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </main>
  );
};
