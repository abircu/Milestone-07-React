import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { Title } = bookmark;
  return (
    <div className="bg-gray-200">
      <div className="bg-base-100">
        <h3 className="tex-2xl  font-bold text-start p-2 mt-3">{Title}</h3>
      </div>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
