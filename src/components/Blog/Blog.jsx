import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead}) => {
  const {
    title,
    cover,
    author,
    posted_date,
    author_img,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-16 mt-4">
      <img className="w-full rounded-2xl mb-8" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex mb-4">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl font-semibold">{author}</h3>
            <h5>{posted_date}</h5>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)} className="ml-2">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-medium mb-2">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>{" "}
          </span>
        ))}
      </p>
      <button onClick={()=>handleMarkAsRead(reading_time)} className="text-purple-700 font-bold underline mt-4">Mark as read</button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};
export default Blog;
