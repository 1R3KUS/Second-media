import React from 'react'
import s from './Header.module.css'

function Header() {
  return (
    <div className={s.header}>
      <div className={s.headerWrapper}>
        <div className={s.img}><img src="https://image.flaticon.com/icons/svg/889/889156.svg" alt="logo"/></div>
      </div>
    </div>

  )
}

export default Header;