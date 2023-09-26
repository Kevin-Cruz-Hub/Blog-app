import { Link } from 'react-router-dom'
function Topbar() {
  const user = true;
  return (
    <div className="top">
      <ul className='list'>
        <Link to={'/'}>Home</Link>
        {user&&<Link to={'/create'}>Create</Link>}
        {user ? (<Link>Logout</Link>):(<Link to={'/auth'}>Login/Signup</Link>)}
      </ul>
    </div>
  )
}
export default Topbar;