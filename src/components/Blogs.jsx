import axios from "axios";
import React, { useEffect, useState } from "react";

const BACKEND_URL = "https://blog-nextjs-backend.onrender.com/api/posts";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(BACKEND_URL);
      if (response) {
        console.log(response.data.results);
        setPosts(response.data.results);
      }
    } catch (error) {
      console.log("Error fetching blog posts", error.message);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div id="blogs" className="bg-gray-100 py-[5%] px-2">
      <div className="custom-project-container">
        <h1 className="mb-8 uppercase text-purple-600 font-bold text-xl text-center">
          Recent Blog Posts
        </h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <div className="bg-white p-4 rounded-xl shadow-md">
              <img className="rounded-xl" src={post?.image} alt="" />
              <a
                target="_blank"
                href={`https://vikas-saini-blog.vercel.app/posts/${post?._id}`}
              >
                <h1 className="text-lg font-semibold mt-4 hover:text-purple-700 cursor-pointer">
                  {post?.title}
                </h1>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
