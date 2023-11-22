import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { format } from "date-fns";
import { HiOutlinePencilSquare } from "react-icons/hi2";

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
            <p className="text-sm">{format(new Date(), "dd-MM-yyyy")}</p>
            <p className="font-semibold text-xs">By @F.A</p>
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
          <p className="text-sm">{format(new Date(), "dd-MM-yyyy")}</p>
          <p className="font-semibold text-xs">
            By @<span className="uppercase">{postInfo.author.username}</span>
          </p>
          <Link to={`/edit/${postInfo._id}`} className="button w-[10%] mt-5 space-x-1 flex justify-center mx-auto items-center font-semibold">
            <HiOutlinePencilSquare />
            <button>Edit Post</button>
          </Link>
          <p className="w-[60%] my-8 mx-auto">
            <img
              src={"http://localhost:5000/" + postInfo.cover}
              alt="post-img"
              className="w-[100%] h-[60vh] object-cover object-center"
            />
          </p>
          <p dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
      </article>
      <Footer />
    </main>
  );
};
