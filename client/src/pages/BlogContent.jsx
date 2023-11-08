import React from "react";

export const BlogContent = ({blogs}) => {
  const splitContent = (content) => {
    // return content.split('. ').map(paragraph => paragraph + '.')
    return content.split("\n").map((paragraph) => paragraph.trim());
  };

  const updatedBlogPosts = blogs.map((post) => ({
    ...post,
    content: splitContent(post.content),
  }));
  console.log(updatedBlogPosts);

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
          <p className="pt-2">
            {post.content[0]}{' '} 
            <small className="text-sm font-semibold">Read More....</small>
          </p>
        </div>
      ))}
    </main>
  );
}

  /* {blog.content.map((paragraph, index) => (
            <p key={index} className="mb-1">
              {paragraph}
            </p>
          ))} */

