import React from 'react'

import {Icon} from 'components'

import style from './Socials.module.scss'

export default function Socials({socials = []}) {
  return (
    <div className={style.wrapper}>
      <ul>
        {socials.map((soc, i) => <li key={soc.icon + i}>
          <a href={soc.src} target="_blank" rel="nofollow noopener noreferrer">
            <Icon icon={soc.icon} className={style[soc.icon]} />
            {soc.language && <img className={style.language} src={`/assets/images/${soc.language}.png`} alt={soc.language}/>}
          </a>
        </li>)}
      </ul>
    </div>
  )
}
