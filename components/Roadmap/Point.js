import React, {useState} from 'react'

import {Icon} from 'components'
import List from './List'

import style from './Point.module.scss'

export default function Point({item, index}) {
  const [isOpen, setIsOpen] = useState(false)

  const pointToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`${style.wrapper} ${isOpen ? style.opened : ''}`}>
      <img className={style.roadpointImage} src="/assets/images/roadpoint-side.png" />
      <div className={style.roadpointHeader} onClick={pointToggle}>
        <figure className={style.roadpointHeaderImage}>
          <img src={`/assets/images/roadpoint-${index + 1}.png`} alt=""/>
        </figure>
        <span dangerouslySetInnerHTML={{ __html: item.header}}></span>
        <Icon className={style.roadpointHeaderIcon} icon="schedule-arrow" />
      </div>
      {item.list && <List isOpen={isOpen} data={item.list} />}
    </div>
  )
}
