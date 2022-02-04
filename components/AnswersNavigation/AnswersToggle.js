import React, {useState} from 'react'

import {Icon} from 'components'

import style from './AnswersToggle.module.scss'

export default function AnswersToggle({children, button}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <div className={style.wrapper}>
      <button className={isOpen ? style.opened : ''} onClick={handleOpen}>{button}<Icon icon="chevron-right" className={style.icon} /></button>
      <ul className={`${style.toggle} ${isOpen ? style.opened : ''}`}>
        {children}
      </ul>
    </div>
  )
}
