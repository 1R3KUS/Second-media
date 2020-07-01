import React from 'react'
import s from './Dialogs.module.css'
import DialogsFL from './DialogsFL/DialogsFL'
import Dmessages from './Dmessages/Dmessages'

function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <DialogsFL friends={props.friends}/>
      <Dmessages message={props.message} friendsAva={props.friends.ava} friendsId={props.friends.id}/>
      </div>
  )
}

export default Dialogs;