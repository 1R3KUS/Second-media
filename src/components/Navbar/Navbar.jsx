import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

function Navbar() {
  return (
    <div className={s.navbar}>
      <div className={s.navItems}>
        <div className={s.item}>
          <NavLink to='/profile' activeClassName={s.linkActive}><img src="https://image.flaticon.com/icons/svg/846/846449.svg" alt="home"/> Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' activeClassName={s.linkActive}><img src="https://image.flaticon.com/icons/svg/2462/2462719.svg" alt="home"/> Message</NavLink>
        </div>
      </div>
    </div>

  )
}

export default Navbar;