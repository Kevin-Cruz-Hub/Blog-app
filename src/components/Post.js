import { format } from "date-fns"

function Post({post}) {
  return (
     <div className='singlePost'>
                <div className='image'>
                    <img src='https://media.zenfs.com/en/nerdist_761/b8be763e8478b9674293cdb86844a4f6' alt='pic' />
                </div>
                <div className="texts">
                    <h2>Avatar: The Last Airbender: Quest for Balance</h2>
                    <p className='info'>
                    <a className='author'>{post.username}</a>-<time>Created{format(new Date(post.createdAt), 'MMM-d-yyyy hh:mm a')}</time>
                    </p>
                </div>
    </div>
  )
}
export default Post;