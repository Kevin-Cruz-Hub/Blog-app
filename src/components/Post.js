import { format } from "date-fns"
import { Link } from 'react-router-dom'

function Post({ post }) {
  return (
    <div className='singlePost'>
      const location = useLocation()
      <div className='image'>
        {post.photo && (
          <img src={post.photo} alt='pic' />

        )}
      </div>
      <div className="texts">
        <Link to={`/posts/${post._id}`}>
          <h2>{post.title}</h2>
        </Link>
        <p className='info'>{post.description}</p>
        <a className='author'>{post.username}</a>-<time>Created{format(new Date(post.createdAt), 'MMM-d-yyyy hh:mm a')}</time>
      </div>
    </div>
  )
}
export default Post;