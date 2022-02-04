import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

import {Icon} from 'components'
import Form from './Form'

import style from './index.module.scss'

import {data, buttons} from './data'

export default function Forms() {
  const {locale} = useRouter()
  const {header} = data

  return (
    <div className={style.wrapper}>
      <a id="join-us" className={style.anchor}></a>
      <div className={style.container}>
        <div className={style.header}>
          <h2>{header.title[locale]}</h2>
        </div>
        <div className={style.forms}>
          <Form />
          <ul className={style.buttons}>
            {buttons.map((elem, index) => <li key={`c2c0932-c1cm2` + index}>
              <a href={elem.link} className={style.button} target="_blank" rel="nofollow noopener noreferrer">
                <Icon icon={elem.icon} className={`${style.icon} ${style[elem.icon]}`}></Icon>
                <span>{elem.text[locale]}</span>
              </a>
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
