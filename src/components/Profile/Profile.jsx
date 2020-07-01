import React from 'react'
import s from './Profile.module.css'
import ProfileFoto from './ProfileFoto/ProfileFoto'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import FriendsList from './FriendsList/FriendsList'

function Profile(props) {
  return (
    <div className={s.profile}>
      <ProfileFoto />
      <FriendsList friends={props.friends}/>
      <ProfileInfo />
      <MyPosts postsDB={props.profilePageDB.posts}/>
    </div>
  )
}

export default Profile;