import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookMarks, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className=" md:w-[75%]">
      <h2 className=" text-3xl text-center md:text-start">
        Blogs: {blogs.length}
      </h2>
      {blogs.map((blog) => (
        <Blog
          handleBookMarks={handleBookMarks}
          handleMarkAsRead={handleMarkAsRead}
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
};

export default Blogs;
