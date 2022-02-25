import React, {useState} from 'react'
import { useRouter } from 'next/router'

import Person from './Person'

import style from './Group.module.scss'

export default function Group({group}) {
  const [isOpen, setIsOpen] = useState(false)
  const {locale} = useRouter()

  const handleOpen = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className={style.wrapper}>
      <h5>{group.head[locale]}</h5>
      <a className={isOpen ? style.opened : ''} onClick={handleOpen}><span>{group.head[locale]}</span></a>
      <ul className={isOpen ? style.opened : ''}>
        {group.members.map((person, i) => <li className={person.imageName ? style.auto : ''} key={person.name + i + person.role}>
          <Person person={person} />
        </li>)}
      </ul>
    </div>
  )
}
