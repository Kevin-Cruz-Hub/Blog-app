import Header from '../components/Header'
import Post from '../components/Post';

function HomePage() {
  return (
    <div classname='home'>
      <Header/>
      <h1>Home Page</h1>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
export default HomePage;