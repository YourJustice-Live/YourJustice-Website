import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

import {Button} from 'components'

import {data} from './data'

import style from './index.module.scss'

export default function Welcome() {
  const {locale} = useRouter()
  const {title, subtitle, text, buttons} = data

  const handleScroll = e => {
    e.preventDefault()
    const id = e.target.getAttribute('data-id')
    const elem = document.getElementById(id)
    const coord = elem.getBoundingClientRect().top + window.pageYOffset
    history.replaceState(null, null, `#${id}`)
    window.scrollTo({
      top: coord,
      behavior: 'smooth'
    })
  }

  return <div className={style.welcome}>
    <a id="vision" className={style.anchor}></a>
    <div className={style.welcomeHeader}>
      <h2 dangerouslySetInnerHTML={{ __html: title[locale] }}></h2>
      <p dangerouslySetInnerHTML={{ __html: subtitle[locale] }}></p>
    </div>
    <p className={style.welcomeText} dangerouslySetInnerHTML={{ __html: text[locale] }}></p>
    <ul>
      {buttons.map((button, i) => <li key={`wjmc3021d345jc2` + i}>
        {button.anchor
          ? <a className={style.anchorButton} data-id={button.link} onClick={handleScroll}>{button[locale]}</a>
          : <Button className={style.button} type="link" fill={button.fill} to={button.link}>{button[locale]}</Button>
        }
      </li>)}
    </ul>
  </div>
}
