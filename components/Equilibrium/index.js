import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {Icon} from 'components'

import style from './index.module.scss'

import {data} from './data'

export default function Equilibrium() {
  const {locale} = useRouter()
  const {header, table, tableMob} = data

  return <div className={style.wrapper}>
    <a id="equilibrium" className={style.anchor}></a>
    <div className={style.header}>
      <h2 className={style.title}>{header.title[locale]}</h2>
      <p className={style.text}>{header.text[locale]}</p>
      <div className={style.author}>
        <p>{header.author.name[locale]}</p>
        <span>{header.author.position[locale]}</span>
      </div>
      <Link href="/article/equilibrium-is-broken"><a>
        <span>
          {header.link[locale]}
        </span>
        <Icon icon="chevron-right"></Icon>
      </a></Link>
    </div>
    <div className={style.comparison}>
      <ul>
        {table[locale].map((row, y) => <li key={'row' + y + 'fsdf2352f23'}>
          <ul>
            {row.map((cell, i) => <li key={'cell' + i + 'fsdf2352f23'}>
              <p dangerouslySetInnerHTML={{ __html: cell }}></p>
              {i !== 0 && y !== 0 && <span>{tableMob[locale][i]}</span>}
            </li>)}
          </ul>
        </li>)}
      </ul>
    </div>
  </div>
}
