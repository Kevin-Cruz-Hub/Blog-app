import axios from 'axios'
import { format } from "date-fns"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SinglePost() {
  const location = useLocation()
  const path = console.log(location.pathname.split('/')[2])
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/post/${path}`)
      setPost(res.data)
    }
    getPost()
  }, [])
  return (
    <div classname='singlePost'>
      <h2>Single Post</h2>
      <div classname='singlepostWrapper'>
        {post.photo && (
          <div className='image'>
            <img src={post.photo} alt='pic' />
          </div>
        )}
        <div className="texts">
          <h2>{post.title}</h2>
          <p className='summary'>{post.description}</p>
          <p className='info'>
            <a href='/' className='author'>{post.username}</a>-<time>Created{format(new Date(post.createdAt), 'MMM-d-yyyy hh:mm a')}</time>
          </p>
          <button className='icon'>Update &#9998;</button>
          <button className='icon'>Delete &#128465;</button>
        </div>
      </div>
    </div>
  )
}
export default SinglePost;
