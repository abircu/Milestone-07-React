import { useEffect, useState } from "react";

const Blogs = () => {
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
    </div>
  );
};

export default Blogs;