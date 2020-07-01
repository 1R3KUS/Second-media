import React from 'react'
import s from './ProfileFoto.module.css'
import { NavLink } from 'react-router-dom'

function ProfileFoto() {
  return (
    <div className={s.profileFoto}>
      <div className={s.img}>
        <img src="https://sun9-68.userapi.com/c855532/v855532324/1b6c68/DMa2yKYMUfc.jpg" alt="ava" />
      </div>
      <div className={s.fotoSettings}>
        <button>Settings</button>
        <button><NavLink to="/dialogs">Message</NavLink></button>
      </div>
    </div>
  )
}

export default ProfileFoto;