import React from 'react'
import {useRouter} from 'next/router'

import {Button} from 'components'

import {data} from './data'

import style from './index.module.scss'

export default function Inners() {
  const {locale} = useRouter()
  const {header, sections} = data

  return <div className={style.wrapper}>
    <div className={style.header}>
      <h2>{header.title[locale]}</h2>
      <p>{header.text[locale]}</p>
    </div>
    <div className={style.sections}>
      {sections.map(section => <div key={section.className} className={`${style.section} ${style[section.className]}`}>
        <figure>
          <img src={section.image} alt={section.title[locale]}/>
        </figure>
        <h3>{section.title[locale]}</h3>
        {section.text && <p>{section.text[locale]}</p>}
        <ul>
          {section.list.map((li, i) => <li key={`s22nc234t-1` + i}>
            {li[locale]}
          </li>)}
        </ul>
        {/* <Button type='link' to={section.button.link} className={style.button}>{section.button.text[locale]}</Button> */}
      </div>)}
    </div>
  </div>
}
