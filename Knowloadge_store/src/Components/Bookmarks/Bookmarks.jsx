import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className=" md:w-[20%] text-center">
      <div>
        <h3 className="text-xl font-medium text-blue-600">
          Spent time on read : {readingTime}min
        </h3>
      </div>
      <h2 className="text-2xl">Bookmarks Blogs:{bookmarks.length}</h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
};
Bookmarks.prototype = {
  bookmarks: PropTypes.object,
};

export default Bookmarks;
