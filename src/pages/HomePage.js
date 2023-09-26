import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Post from '../components/Post';

function HomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async ()=>{
      const res = await axios.get('/post')
      setPosts(res.data)
    }
    fetchPosts()
  }, [])
  return (

    <div className='home'>
      <Header />
      <h1>Home Page</h1>
      {
        posts.map(post=>{
          <Post post={post}/>
        })
      }
    </div>
  )
}
export default HomePage;