import React from 'react'
import s from './MyPosts.module.css'
import Post from './Posts/Post'

function MyPosts(props) {
  let postEl = props.postsDB.map(p => <Post text={p.text} imgs={p.imgs} postsImgs={p.imgs} />)

  let areaTextRef = React.createRef()

  let addPostFoo = () => {
    props.newPostAdd()
  }


  let changeTextAreaFoo = () => {
    let text = areaTextRef.current.value;
    props.changeTextArea(text)
  }

  return (
    <div className={s.myPosts}>
      <textarea onChange={changeTextAreaFoo} cols="30" rows="10" ref={areaTextRef} value={props.textValue}/>
      <button onClick={addPostFoo}>press</button>
      {postEl}
    </div>
  )
}

export default MyPosts;