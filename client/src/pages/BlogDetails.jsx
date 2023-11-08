import React from "react";
import { Navbar } from "../components/Navbar";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";

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
        <article className="container mx-auto w-[90%] mt-10">
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-2xl tracking-wide">
              {selectedPost.title}
            </h2>
            <p>{`${day}-${month}-${year}`}</p>
            <p className="w-[60%] my-8">
              <img
                src={selectedPost.image}
                alt="post-img"
                className="w-[100%] h-[60vh] object-cover object-center"
              />
            </p>
            {splitContent(selectedPost.content).map((paragraph, index) => (
              <p key={index} className="tracking-wide mt-1">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      )}
      <Footer />
    </main>
  );
};
