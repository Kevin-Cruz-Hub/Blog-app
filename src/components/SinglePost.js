function SinglePost() {
  return (
    <div classname = 'singlePost'>
      <h2>Single Post</h2>
      <div classname='singlepostWrapper'>
      <div className='image'>
                    <img src='https://media.zenfs.com/en/nerdist_761/b8be763e8478b9674293cdb86844a4f6' alt='pic' />
                </div>
                <div className="texts">
                    <h2>Avatar: The Last Airbender: Quest for Balance</h2>
                    <p className='summary'>Avatar: The Last Airbender – Quest for Balance is an upcoming video game based on Avatar: The Last Airbender, to be published by GameMill Entertainment and set to be released on September 22, 2023. Unlike the previous games which were set in the series, this one is an original game.</p>
                    <p className='info'>
                        <a href='/' className='author'>Kevin Cruz</a>-<time>09-19-2023</time>
                    </p>
                    <button className='icon'>Update &#9998;</button>
                    <button className='icon'>Delete &#128465;</button>
                </div>
      </div>
    </div>
  )
}
export default SinglePost;
