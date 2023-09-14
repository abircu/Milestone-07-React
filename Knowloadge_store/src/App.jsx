import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setbookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookMarks = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setbookmarks(newBookMarks);
  };
  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };
  return (
    <>
      <Header />
      <div className="md:flex mt-3 max-w-7xl mx-auto">
        <Blogs
          handleBookMarks={handleBookMarks}
          handleMarkAsRead={handleMarkAsRead}
        />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App;
