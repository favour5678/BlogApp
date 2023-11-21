import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { format } from "date-fns";

export const BlogDetails = ({ blogPosts }) => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  const selectedPost = blogPosts.find((blog) => blog.id === parseInt(id));
  const splitContent = (content) => {
    return content.split("\n").map((paragraph) => paragraph.trim());
  };

  if (!postInfo) return "";

  return (
    <main className="h-full">
      <Navbar />
      {selectedPost && (
        <article className="container mx-auto w-[90%] mt-10">
          <div className="text-center">
            <h2 className="font-bold text-2xl tracking-wide">
              {selectedPost.title}
            </h2>
            <p>{format(new Date(), "dd-MM-yyyy")}</p>
            <p className="font-semibold text-sm">By @F.A</p>
            <p className="w-[60%] my-8 mx-auto">
              <img
                src={selectedPost.image}
                alt="post-img"
                className="w-[100%] h-[60vh] object-cover object-center"
              />
            </p>
            {splitContent(selectedPost.content).map((paragraph, index) => (
              <p key={index} className="tracking-wide mt-2 text-left">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      )}

      <article className="container mx-auto w-[90%] mt-10">
        <div className="text-center">
          <h2 className="font-bold text-2xl tracking-wide">{postInfo.title}</h2>
          <p>{format(new Date(), "dd-MM-yyyy")}</p>
          <p className="font-semibold text-sm">
            By @<span className="uppercase">{postInfo.author.username}</span>
          </p>
          <p className="w-[60%] my-8 mx-auto">
            <img
              src={"http://localhost:5000/" + postInfo.cover}
              alt="post-img"
              className="w-[100%] h-[60vh] object-cover object-center"
            />
          </p>
          {splitContent(postInfo.content).map((paragraph, index) => (
            <p
              key={index}
              className="tracking-wide mt-2 text-left"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      </article>
      <Footer />
    </main>
  );
};
