import React from 'react'
import s from './FriendsList.module.css'
import { NavLink } from 'react-router-dom'

function FriendsList(props) {

  let friendsItem = props.friends.map(f => <NavLink to={'/' + f.id}><div className={s.img}><img src={f.ava} alt="ava" /></div>{f.name}</NavLink>)

  return (
    <div className={s.friendsList}>
      <div className={s.item}>
        {friendsItem}
      </div>
    </div>
  )
}

export default FriendsList;