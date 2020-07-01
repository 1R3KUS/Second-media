import React from 'react'
import s from './Post.module.css'

function Post(props) {
  let countImgs = props.postsImgs.map(i => <div className={s.item}><img src={i} alt="post" /></div>)
  return (
    <div className={s.post}>
      <div className={s.postHeader}>
        <div className={s.userImg}><img src="https://sun9-68.userapi.com/c855532/v855532324/1b6c68/DMa2yKYMUfc.jpg" alt="ava" /></div>
        <div className={s.headerInfo}>
          <div className={s.name}>Muhammad</div>
          <div className={s.time}>7 Июля в 12:34</div>
        </div>
      </div>
      <div className={s.postContent}>
        <div className={s.postText}>{props.text}</div>
        <div className={s.postPhots}>
          {countImgs}
        </div>
      </div>
      <div className={s.postFooter}>
        <div className={s.icons}>
          <img src="https://image.flaticon.com/icons/svg/1077/1077035.svg" alt="" />
          <img src="https://image.flaticon.com/icons/svg/876/876221.svg" alt="" />
          <img src="https://image.flaticon.com/icons/svg/1059/1059106.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Post;