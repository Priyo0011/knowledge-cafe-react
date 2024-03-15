import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 bg-gray-100 ml-4 mt-2 pt-4 rounded-2xl">
            <div className=' bg-gray-600 mx-4 mt-2 p-4 rounded-2xl text-white'>
                <h3 className="text-2xl font-semibold text-center">Reading Time: {readingTime} min</h3>
            </div>
            <h2 className="text-xl text-center font-semibold mt-4">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
            }
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;