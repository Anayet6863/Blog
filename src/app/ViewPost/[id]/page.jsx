import React from "react";

const page = async ({ params }) => {
  const id = (await params).id;
  console.log(id);
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  const post = posts.find((item) => item.id === parseInt(id));
  // console.log(post);
  // console.log("Id");
  return (
    <div className="min-h-screen bg-gray-400 flex justify-center items-center">
      <div className="max-w-sm w-full bg-white border border-gray-300 rounded-lg shadow-lg p-6 m-4">
      <h2 className="text-xl font-semibold text-gray-800">ID: {post.id}</h2>
      <hr></hr>
      <h1 className="text-lg font-medium text-gray-700 mt-2"><span className="font-bold">Title:</span><br></br> {post.title}</h1>
       
        <hr></hr>
        <p className="text-gray-600 mt-4"><span className="font-bold">Description:</span><br></br> {post.body}</p>
      </div>
    </div>
  );
};

export default page;
