import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

import Group from './Group'

import style from './index.module.scss'

import {data as translation} from './data'

export default function Team() {
  const [data, setData] = useState([])
  const {locale} = useRouter()
  const {header} = translation

  useEffect(() => {
    import('./team.json')
    .then(res => setData(res.team))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className={style.wrapper}>
      <a id="team" className={style.anchor}></a>
      <div className={style.container}>
        <div className={style.header}>
          <h2>{header.title[locale]}</h2>
          <p>{header.text[locale]}</p>
        </div>
        {data.map((group, i) => <Group group={group} key={`fsdfsscdc2c1-${i}`}/>)}
      </div>
    </div>
  )
}
