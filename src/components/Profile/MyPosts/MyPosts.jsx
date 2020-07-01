import React from 'react'
import s from './MyPosts.module.css'
import Post from './Posts/Post'

function MyPosts(props) {

  let postEl = props.postsDB.map(p => <Post text={p.text} imgs={p.imgs} postsImgs={p.imgs} />)

  return (
    <div className={s.myPosts}>
      {postEl}
    </div>
  )
}

export default MyPosts;