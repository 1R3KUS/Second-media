import React from 'react'
import s from './ProfileInfo.module.css'

function ProfileInfo() {
  return (
    <div className={s.profileInfo}>
      <div className={s.header}>
        <div className={s.name}>Muhammad</div>
        <div className={s.surname}>Sabirli</div>
      </div>
      <div className={s.content}>
        <div className={s.birth}>
          <div>Birth day</div>
          <div>01.25.2001</div>
        </div>
        <div className={s.job}>
          <div>Job</div>
          <div>Front-End Developer</div>
        </div>
      </div>
      <div className={s.line}></div>
      <div className={s.footer}>
        <div className={s.item}>
          <div className={s.count}>8</div>
          <div className={s.nameOfItem}>Friends</div>
        </div>
        <div className={s.item}>
          <div className={s.count}>4464</div>
          <div className={s.nameOfItem}>Followers</div>
        </div>
        <div className={s.item}>
          <div className={s.count}>11</div>
          <div className={s.nameOfItem}>Photos</div>
        </div>
        <div className={s.item}>
          <div className={s.count}>15</div>
          <div className={s.nameOfItem}>Groups</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;