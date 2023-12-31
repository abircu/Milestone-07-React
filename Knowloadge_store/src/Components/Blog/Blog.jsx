import { BsBookmarkFill } from "react-icons/bs";
const Blog = ({ blog, handleBookMarks, handleMarkAsRead }) => {
  const {
    Title,
    Cover_Image,
    Author_Image,
    Posted_Date,
    Author,
    Reading_Time,
    Hashtag,
  } = blog;
  return (
    <div className="m-6 p-4">
      <img src={Cover_Image} alt="" />
      <div className="flex justify-between items-center">
        <div className=" flex items-center  gap-2  p-2">
          <img className="w-14 h-14  rounded-full" src={Author_Image} alt="" />
          <div>
            <h1 className="text-2xl font-bold">{Author}</h1>
            <h2 className="text-xl font-semibold text-gray-500">
              {Posted_Date}
            </h2>
          </div>
        </div>
        <div>
          <span className="text-lg font-medium text-gray-400 ">
            {Reading_Time} min read
            <button
              onClick={() => handleBookMarks(blog)}
              className="text-black ml-2"
            >
              <BsBookmarkFill />
            </button>
          </span>
        </div>
      </div>
      <h2 className="text-4xl  font-bold ">{Title}</h2>
      <div className="flex flex-col">
        <span className="text-sm  text-blue-600">{Hashtag}</span>
        <button
          className="text-start text-blue-900 text-xl font-semibold"
          onClick={() => handleMarkAsRead(Reading_Time)}
        >
          Mark as Read
        </button>
      </div>
    </div>
  );
};
// Blog.propTypes={
//     blog.PropTypes.object.isRequired,
//     ha
// }

export default Blog;
