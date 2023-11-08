import React from "react";
import { Navbar } from "../components/Navbar";
import { useParams } from "react-router-dom";

export const BlogDetails = ({ blogPosts }) => {
  const { id } = useParams();

  const selectedPost = blogPosts.find((blog) => blog.id === parseInt(id));
  const splitContent = (content) => {
    // return content.split('. ').map(paragraph => paragraph + '.')
    return content.split("\n").map((paragraph) => paragraph.trim());
  };

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  return (
    <main className="h-full">
      <Navbar />
      {selectedPost && (
        <article>
          <h2>{selectedPost.title}</h2>
          <p>{`${day}-${month}-${year}`}</p>
          <p>
            <img src={selectedPost.image} alt="post-img" />
          </p>
          {splitContent(selectedPost.content).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      )}
    </main>
  );
};
