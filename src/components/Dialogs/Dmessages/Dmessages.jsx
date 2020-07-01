import React from 'react'
import s from './Dmessages.module.css'
import Messages from './Message/Messages';

function Dmessages(props) {

let messageItem = props.message.map(m => <Messages message={m.message}/>)

  return (
    <div className={s.dMessages}>
      {messageItem}
    </div>
  )
}

export default Dmessages;