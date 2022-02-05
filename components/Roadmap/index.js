import React from 'react'
import {useRouter} from 'next/router'

import {Button} from 'components'
import Point from './Point'

import style from './index.module.scss'

import {data} from './data'

export default function Roadmap() {
  const {locale} = useRouter()
  const {header, roadmap, button} = data

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h2>{header.title[locale]}</h2>
        <p>{header.text[locale]}</p>
      </div>
      <div className={style.roadmap}>
        {roadmap[locale].map((item, index) => <Point item={item} index={index} key={`jc37vcj1d0` + index} />)}
      </div>
      {/* <Button className={style.button} fill={true} type="link" to="/">{button[locale]}</Button> */}
    </div>
  )
}
