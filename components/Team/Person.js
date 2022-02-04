import React from 'react'

import {Icon} from 'components'

import style from './Person.module.scss'

export default function Person({person}) {
  return (
    <div className={style.wrapper}>
      <figure>
        <img src={person.ava} alt={person.name}/>
      </figure>
      <p>{person.name}</p>
      {person.position && <span dangerouslySetInnerHTML={{ __html: person.position }}></span>}
      {person.socials && <ul>
        {person.socials.map((soc, i) => <li key={i}>
          <a href={soc.src} className={style[soc.icon]} target="_blank" rel="nofollow noopener noreferrer">
            <Icon icon={soc.icon} className={style.icon} />
          </a>
        </li>)}
      </ul>}
    </div>
  )
}
