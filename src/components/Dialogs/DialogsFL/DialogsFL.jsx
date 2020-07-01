import React from 'react'
import s from './DialogsFL.module.css'
import { NavLink } from 'react-router-dom'

function DialogsFL(props) {

  let friendsItem = props.friends.map(f => <NavLink to={'/dialogs/' + f.id}><div className={s.img}><img src={f.ava} alt="ava" /></div>{f.name}</NavLink>)

  return (
    <div className={s.friendsList}>
      <div className={s.item}>
        {friendsItem}
      </div>
    </div>
  )
}

export default DialogsFL;